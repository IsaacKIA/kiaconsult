"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type FormType = "general" | "business-support" | "partnership" | "institutional";

const formTabs: { id: FormType; label: string; description: string }[] = [
  {
    id: "general",
    label: "General Enquiry",
    description: "Connect with our advisory desk for general information or initial guidance.",
  },
  {
    id: "business-support",
    label: "Business Support",
    description: "For startups and SMEs seeking incubation, restructuring, or capital readiness.",
  },
  {
    id: "partnership",
    label: "Partnership",
    description: "For mentors, co-working hubs, investors, and corporate partners.",
  },
  {
    id: "institutional",
    label: "Institutional Project",
    description: "For ministries, universities, development agencies, and multilateral bodies.",
  },
];

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<FormType>("general");
  const [loading, setLoading] = useState(false);
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const payload = {
      formType: activeTab,
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      organization: String(formData.get("organization") || "").trim(),
      role: String(formData.get("role") || "").trim(),
      location: String(formData.get("location") || "").trim(),
      businessStage: String(formData.get("businessStage") || "").trim(),
      industry: String(formData.get("industry") || "").trim(),
      supportNeeded: String(formData.get("supportNeeded") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      _gotcha: String(formData.get("_gotcha") || "").trim(), // honeypot
    };

    const errors: Record<string, string> = {};
    if (!payload.name) errors.name = "Please enter your full name.";
    if (!payload.phone && !payload.email) {
      errors.phone = "Please provide either your WhatsApp phone number or email.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSubmittedLink(data.whatsappUrl);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  }

  if (submittedLink) {
    return (
      <div className="rounded-2xl border border-gold-deep/30 bg-gold/10 p-8 text-center sm:text-left space-y-4 animate-in fade-in duration-300">
        <div className="flex items-center gap-3 text-gold-deep">
          <CheckCircle2 className="h-6 w-6 shrink-0" />
          <h3 className="font-display text-xl font-semibold text-ink">
            Thank you. Your enquiry has been received.
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-ink/75">
          Your details have been securely recorded by our team. For immediate follow-up and priority scheduling, click below to continue directly on WhatsApp:
        </p>
        <div className="pt-2">
          <a
            href={submittedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-gold hover:text-ink shadow-md"
          >
            <span>Continue on WhatsApp</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <button
          onClick={() => {
            setSubmittedLink(null);
          }}
          className="text-xs text-ink/50 underline block mt-4 hover:text-ink"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-mist rounded-xl border border-line">
        {formTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id);
              setFieldErrors({});
              setErrorMessage(null);
            }}
            className={`flex-1 min-w-[130px] py-2 px-3 rounded-lg text-xs font-medium transition-all ${
              activeTab === tab.id
                ? "bg-paper text-ink shadow-xs border border-line"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="text-xs text-ink/60">
        {formTabs.find((t) => t.id === activeTab)?.description}
      </p>

      {errorMessage && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700 border border-red-200">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Actual Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Honeypot field for bot trap */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* Common: Name */}
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
            Full Name <span className="text-gold-deep">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Ama Serwaa"
            required
            className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
          />
          {fieldErrors.name && (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
          )}
        </div>

        {/* Common: Contact Details */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
              WhatsApp Phone <span className="text-gold-deep">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="e.g. +233 24 000 0000"
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
            />
            {fieldErrors.phone && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. name@domain.com"
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
            />
          </div>
        </div>

        {/* Specific Fields by Tab */}
        {activeTab === "general" && (
          <>
            <div>
              <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                Organization / Company <span className="text-ink/40 font-normal">(optional)</span>
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
              />
            </div>
            <div>
              <label htmlFor="supportNeeded" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                Area of Interest
              </label>
              <select
                id="supportNeeded"
                name="supportNeeded"
                defaultValue="Start a Venture"
                className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
              >
                <option value="Start a Venture">Start a Venture / Business Model</option>
                <option value="Grow & Modernize SME">Grow & Modernize SME</option>
                <option value="Explore Capital & Funding">Explore Capital & Funding Readiness</option>
                <option value="Digital & Technology Transformation">Digital & Technology Transformation</option>
                <option value="Institutional Project">Institutional Project</option>
                <option value="Other Advisory">Other Strategic Advisory</option>
              </select>
            </div>
          </>
        )}

        {activeTab === "business-support" && (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                  Business Name
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="e.g. BlueStar Logistics"
                  className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
                />
              </div>
              <div>
                <label htmlFor="location" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                  Business Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="e.g. Accra, Kumasi, Takoradi"
                  className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="businessStage" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                  Business Stage
                </label>
                <select
                  id="businessStage"
                  name="businessStage"
                  defaultValue="Operating SME (1-5 yrs)"
                  className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
                >
                  <option value="Ideation / Concept">Ideation / Concept</option>
                  <option value="Early-Stage Startup (<1 yr)">Early-Stage Startup (&lt;1 yr)</option>
                  <option value="Operating SME (1-5 yrs)">Operating SME (1-5 yrs)</option>
                  <option value="Established Enterprise (5+ yrs)">Established Enterprise (5+ yrs)</option>
                </select>
              </div>
              <div>
                <label htmlFor="industry" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                  Industry / Sector
                </label>
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  placeholder="e.g. Agribusiness, Retail, Tech"
                  className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
                />
              </div>
            </div>
          </>
        )}

        {activeTab === "partnership" && (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                  Organization / Entity
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="e.g. Venture Fund, Innovation Hub"
                  className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
                />
              </div>
              <div>
                <label htmlFor="role" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                  Your Role / Title
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="e.g. Managing Partner, Director"
                  className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
                />
              </div>
            </div>
            <div>
              <label htmlFor="supportNeeded" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                Partnership Focus
              </label>
              <select
                id="supportNeeded"
                name="supportNeeded"
                defaultValue="Capital / HopeFusion Co-investment"
                className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
              >
                <option value="Capital / HopeFusion Co-investment">Capital / HopeFusion Co-investment</option>
                <option value="Incubation & Acceleration Delivery">Incubation & Acceleration Delivery</option>
                <option value="Mentorship Network Participation">Mentorship Network Participation</option>
                <option value="Corporate Value Chain Integration">Corporate Value Chain Integration</option>
                <option value="Other Strategic Alliance">Other Strategic Alliance</option>
              </select>
            </div>
          </>
        )}

        {activeTab === "institutional" && (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                  Institution Name
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="e.g. Ministry, University, Agency"
                  className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
                />
              </div>
              <div>
                <label htmlFor="location" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                  Country / Region
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="e.g. Ghana, West Africa, Global"
                  className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
                />
              </div>
            </div>
            <div>
              <label htmlFor="supportNeeded" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                Project Area
              </label>
              <select
                id="supportNeeded"
                name="supportNeeded"
                defaultValue="Youth Employment & Enterprise Pipeline"
                className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
              >
                <option value="Youth Employment & Enterprise Pipeline">Youth Employment & Enterprise Pipeline (Adwuma)</option>
                <option value="SME Productivity & Competitiveness">SME Productivity & Competitiveness (Nkabom)</option>
                <option value="Women Economic Empowerment">Women Economic Empowerment (Nuru)</option>
                <option value="Green Economy & Climate Transition">Green Economy & Climate Transition (Asase)</option>
                <option value="University/TVET Enterprise Commercialization">University/TVET Enterprise Commercialization</option>
              </select>
            </div>
          </>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
            Brief Overview of Need or Objective
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Tell us what you are looking to build or solve..."
            className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none focus:border-gold-deep bg-paper"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition-all hover:bg-gold-deep hover:text-ink disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>Submit & Open WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
