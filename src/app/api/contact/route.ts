import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

// In-memory rate limiting map: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

interface EnquiryPayload {
  name: string;
  email?: string;
  phone?: string;
  organization?: string;
  role?: string;
  formType: "general" | "business-support" | "partnership" | "institutional";
  businessStage?: string;
  industry?: string;
  location?: string;
  supportNeeded?: string;
  message?: string;
  _gotcha?: string; // honeypot
}

function cleanString(str: unknown, maxLen = 1000): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const now = Date.now();
    const timestamps = (rateLimitMap.get(ip) || []).filter(
      (ts) => now - ts < RATE_LIMIT_WINDOW_MS
    );

    if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          error: "Too many requests. Please wait a moment or reach out directly on WhatsApp.",
        },
        { status: 429 }
      );
    }

    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    // 2. Parse & Validate Payload
    const body = (await req.json()) as EnquiryPayload;

    // Honeypot trap check
    if (body._gotcha && body._gotcha.trim().length > 0) {
      // Return fake success for bot
      return NextResponse.json({ success: true, fake: true });
    }

    const name = cleanString(body.name, 120);
    const email = cleanString(body.email, 120);
    const phone = cleanString(body.phone, 50);
    const organization = cleanString(body.organization, 150);
    const role = cleanString(body.role, 100);
    const formType = (["general", "business-support", "partnership", "institutional"].includes(body.formType)
      ? body.formType
      : "general") as EnquiryPayload["formType"];
    const businessStage = cleanString(body.businessStage, 100);
    const industry = cleanString(body.industry, 100);
    const location = cleanString(body.location, 100);
    const supportNeeded = cleanString(body.supportNeeded, 200);
    const message = cleanString(body.message, 2000);

    if (!name) {
      return NextResponse.json({ error: "Your name is required." }, { status: 400 });
    }

    if (!phone && !email) {
      return NextResponse.json(
        { error: "Please provide either a WhatsApp phone number or an email." },
        { status: 400 }
      );
    }

    // 3. Persist Enquiry to data/enquiries.json
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "enquiries.json");

    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch {
      // directory already exists
    }

    let existing: Record<string, unknown>[] = [];
    try {
      const fileData = await fs.readFile(filePath, "utf8");
      existing = JSON.parse(fileData);
    } catch {
      existing = [];
    }

    const newRecord = {
      id: `kia-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
      name,
      email,
      phone,
      organization,
      role,
      formType,
      businessStage,
      industry,
      location,
      supportNeeded,
      message,
      ip: ip.slice(0, 15), // partially redacted
    };

    existing.unshift(newRecord);
    await fs.writeFile(filePath, JSON.stringify(existing.slice(0, 500), null, 2), "utf8");

    // 4. Construct Contextual WhatsApp Message for Instant Client Transition
    let waSummary = `Hello KIA–Start Up Consult, my name is ${name}.`;
    if (organization) waSummary += ` Representing: ${organization}.`;
    if (supportNeeded) waSummary += ` Focus: ${supportNeeded}.`;
    if (message) waSummary += ` Details: ${message}`;

    const waLink = buildWhatsAppLink(waSummary, siteConfig.whatsappNumber);

    return NextResponse.json({
      success: true,
      id: newRecord.id,
      message: "Thank you. Your enquiry has been received by KIA–Start Up Consult.",
      whatsappUrl: waLink,
    });
  } catch (err) {
    console.error("Error handling contact submission:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please reach out to KIA on WhatsApp directly." },
      { status: 500 }
    );
  }
}
