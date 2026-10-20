export interface EventItem {
  id: string;
  title: string;
  slug: string;
  category: "Executive Masterclass" | "Continental Summit" | "Institutional Training" | "Founder Bootcamp" | "Policy Dialogue";
  status: "upcoming" | "past";
  date: string;
  time?: string;
  location: string;
  venueType: "In-Person" | "Virtual / Hybrid" | "Institutional In-House";
  image: string;
  badge: string;
  excerpt: string;
  description: string;
  audience: string;
  highlights: string[];
  leadSpeaker: {
    name: string;
    role: string;
    avatar?: string;
  };
  ctaType: "register" | "recap" | "request";
  whatsappPrompt: string;
  fee?: string;
  seats?: string;
  galleryLink?: string;
  insightSlug?: string;
}

export interface TrainingTrack {
  id: string;
  title: string;
  targetGroup: string;
  duration: string;
  deliveryMode: string;
  overview: string;
  modules: string[];
  outcomes: string[];
}

export const corporateTrainingTracks: TrainingTrack[] = [
  {
    id: "sme-formalization-governance",
    title: "SME Formalization, Compliance & Banking Readiness",
    targetGroup: "Growing Business Owners, SME Directors, Microfinance Clients",
    duration: "2-Day Executive Intensive or 4-Week Cohort",
    deliveryMode: "In-Person Executive Workshop or Hybrid",
    overview:
      "A rigorous transformation program designed to transition informal or semi-formal commercial enterprises into bankable, audit-ready, and legally protected corporate institutions.",
    modules: [
      "Registrar of Companies (ORC) Compliance & Corporate Secretarial Standards",
      "GRA Tax Architecture: VAT Act 870, Withholding Tax & E-VAT Ledgers",
      "Financial Hygiene: Management Accounts vs Statutory Financials",
      "Corporate Governance & Internal Controls for Founder-Led Firms",
      "Banking & Credit Underwriting: How Loan Officers Appraise SMEs",
    ],
    outcomes: [
      "Fully compliant ORC and GRA filing posture",
      "Audit-ready financial statements eligible for commercial credit",
      "Reduced regulatory penalties and protected owner equity",
    ],
  },
  {
    id: "afcfta-export-readiness",
    title: "AfCFTA Cross-Border Trade & Pan-African Corridor Scaling",
    targetGroup: "Manufacturers, Agribusiness Exporters, Logistics & Tech Operators",
    duration: "3-Day Strategic Masterclass",
    deliveryMode: "Executive Boardroom / Hybrid",
    overview:
      "Equipping African enterprises with practical legal, logistical, and financial toolkits to transact friction-free across AfCFTA trade corridors and regional economic communities (ECOWAS, EAC, SADC).",
    modules: [
      "AfCFTA Rules of Origin, Tariff Schedules & Certificate of Origin Issuance",
      "Cross-Border Settlement via PAPSS & Local Currency Trade Rails",
      "Packaging, Standardization & Regulatory Certifications (GSA, FDA, ISO)",
      "Hedging FX Risk & Supply Chain Trade Financing Facilities",
      "B2B Off-Taker Matching across Accra, Lagos, Abidjan & Nairobi",
    ],
    outcomes: [
      "Custom Export Readiness Roadmap compliant with AfCFTA regulations",
      "Capability to settle trades in Cedis, Naira, or CFA via PAPSS",
      "Direct linkages to verified cross-border distributor networks",
    ],
  },
  {
    id: "capital-raising-valuation",
    title: "Investment Readiness, Financial Modeling & Capital Syndication",
    targetGroup: "Scale-up Founders, Chief Financial Officers, Venture Builders",
    duration: "5-Day Immersion + 1-on-1 Pitch Clinic",
    deliveryMode: "Executive Suites / Accra Hub",
    overview:
      "Preparing high-growth enterprises to successfully engage angel syndicates, commercial banks, impact investors, and development finance facilities via HopeFusion Africa™.",
    modules: [
      "3-Statement Dynamic Financial Modeling & Scenario Forecasting",
      "Enterprise Valuation Methodologies for Emerging Market Firms",
      "Term Sheets, Shareholder Agreements & Dilution Governance",
      "Building the Institutional Data Room & Due Diligence Readiness",
      "Live Pitch Clinic with Senior Venture Architects & Mentors",
    ],
    outcomes: [
      "Institutional-grade 3-year dynamic financial model",
      "Investor-ready pitch deck and verified due diligence folder",
      "Direct evaluation for HopeFusion Africa™ Capital Syndication",
    ],
  },
  {
    id: "digital-ai-transformation",
    title: "Enterprise Digitalization, Applied AI & Workflow Automation",
    targetGroup: "Mid-Market Executives, Operations Directors, Business Heads",
    duration: "2-Day Hands-on Technology Bootcamp",
    deliveryMode: "Interactive Lab / Computer-Aided Execution",
    overview:
      "Deploying accessible cloud ERPs, automated CRM pipelines, GhIPSS-integrated payment APIs, and pragmatic AI to eliminate operational friction and boost enterprise margins.",
    modules: [
      "ERP & Cloud Accounting Integration (QuickBooks, Zoho, Odoo for Africa)",
      "Integrating Instant Mobile Money & GhIPSS Merchant Payment APIs",
      "Automating Customer Care, Lead Qualification & Invoicing with AI",
      "Data Protection Compliance, Cyber-Hygiene & Customer Privacy",
      "KPI Dashboards & Executive Real-Time Operations Monitoring",
    ],
    outcomes: [
      "Live automated workflow eliminating 40%+ of manual paperwork",
      "Real-time executive cash flow dashboard on mobile and web",
      "Accelerated invoice collection cycle through automated reminders",
    ],
  },
];

export const allEvents: EventItem[] = [
  // UPCOMING TRAININGS & MASTERCLASSES
  {
    id: "afcfta-masterclass-q4-2026",
    title: "AfCFTA Cross-Border Trade & SME Export Readiness Masterclass",
    slug: "afcfta-cross-border-trade-export-readiness-masterclass-2026",
    category: "Executive Masterclass",
    status: "upcoming",
    date: "November 19–21, 2026",
    time: "09:00 AM – 04:30 PM GMT",
    location: "Accra, Ghana (Labadi Beach Hotel & Hybrid Stream)",
    venueType: "Virtual / Hybrid",
    image: "/images/3i-africa-summit-executive-delegation.jpg",
    badge: "REGISTRATION OPEN · COHORT 4",
    excerpt:
      "A hands-on executive program covering AfCFTA documentation, Certificate of Origin acquisition, GhIPSS/PAPSS currency settlement, and export corridor logistics.",
    description:
      "Designed specifically for Ghanaian manufacturers, agro-processors, FMCG brands, and digital services firms seeking to expand into Nigeria, Côte d'Ivoire, Kenya, and Rwanda under preferential AfCFTA tariffs. Participants work through real transaction scenarios with trade finance specialists and customs brokerage experts.",
    audience: "CEOs, Export Managers, Supply Chain Directors & Scaling Manufacturers",
    highlights: [
      "Step-by-step guidance on obtaining Ghana Export Promotion Authority (GEPA) and AfCFTA Certificates of Origin",
      "Live walkthrough of PAPSS local currency settlement eliminating USD intermediary fees",
      "Packaging, labeling, and sanitary/phytosanitary compliance for West and East African markets",
      "1-on-1 export readiness audit for every participating business",
    ],
    leadSpeaker: {
      name: "Isaac Agya Koomson",
      role: "CEO & Principal Economic Architect, KIA–Start Up Consult Ltd",
      avatar: "/images/aetf-ai-panel-speaker.jpg",
    },
    ctaType: "register",
    whatsappPrompt:
      "Hello KIA Team, I would like to register for the AfCFTA Cross-Border Trade Masterclass (Nov 2026). Please send the full curriculum and enrollment requirements.",
    fee: "GHS 2,800 (In-Person) / GHS 1,500 (Virtual)",
    seats: "Limited to 35 Executive Participants",
  },
  {
    id: "sme-governance-bootcamp-2026",
    title: "Executive Corporate Governance & Financial Formalization Bootcamp",
    slug: "sme-corporate-governance-financial-formalization-bootcamp",
    category: "Founder Bootcamp",
    status: "upcoming",
    date: "December 03–04, 2026",
    time: "08:30 AM – 05:00 PM GMT",
    location: "KIA Executive Training Suite, Accra",
    venueType: "In-Person",
    image: "/images/workshop-speaker-audience.jpg",
    badge: "EXECUTIVE INTENSIVE · 20 SEATS ONLY",
    excerpt:
      "Transforming founder-dominated businesses into resilient corporate institutions capable of attracting commercial bank credit and institutional equity.",
    description:
      "Many African businesses hit a ceiling because the business is inseparable from the founder. This intensive bootcamp equips business owners to institute independent advisory boards, statutory accounting controls, employment contracts, and tax compliance frameworks that safeguard enterprise value.",
    audience: "Founder-CEOs, Managing Directors & Second-Generation Enterprise Stewards",
    highlights: [
      "Drafting enforceable board charters, shareholder agreements, and equity vesting schedules",
      "Separating personal finances from corporate treasury with automated reconciliations",
      "GRA E-VAT compliance, withholding tax mitigation, and annual ORC filing readiness",
      "Pitching commercial banks: How credit committees evaluate SME balance sheets",
    ],
    leadSpeaker: {
      name: "Isaac Agya Koomson",
      role: "CEO, KIA–Start Up Consult Ltd",
      avatar: "/images/aetf-ai-panel-speaker.jpg",
    },
    ctaType: "register",
    whatsappPrompt:
      "Hello KIA Team, I would like to register for the Executive Corporate Governance Bootcamp (Dec 2026). Please provide enrollment details.",
    fee: "GHS 3,500 per Company (admits 2 executives)",
    seats: "20 Seats Available",
  },
  {
    id: "adwuma-youth-pipeline-cohort-5",
    title: "Adwuma Enterprise Pipeline™: Graduate-to-Venture Cohort 5",
    slug: "adwuma-enterprise-pipeline-graduate-venture-cohort-5",
    category: "Institutional Training",
    status: "upcoming",
    date: "January 11 – February 26, 2027",
    time: "Full-Time 6-Week Accelerator",
    location: "Regional Incubation Centers (Accra, Kumasi & Cape Coast)",
    venueType: "In-Person",
    image: "/images/workshop-youth-engagement.jpg",
    badge: "APPLICATIONS OPEN · 100 SPONSORED SEATS",
    excerpt:
      "A 6-week intensive venture-building pipeline equipping university and TVET graduates to convert practical skills into bankable, revenue-generating commercial businesses.",
    description:
      "Delivered in partnership with academic institutions and ecosystem partners, this program shifts youth mindset from job-seeking to venture-building. Cohort participants receive structured venture development, digital toolkits, legal registration support, and seed capital pitch opportunities.",
    audience: "Tertiary Graduates, TVET Completers & Early-Stage Young Founders (Ages 20–32)",
    highlights: [
      "Rigorous problem validation, unit economics modeling, and customer acquisition testing",
      "Full company registration with the Office of the Registrar of Companies (ORC)",
      "Mentorship pairing with seasoned industry executives and founders",
      "Demo Day with seed grant and micro-equity funding from HopeFusion Africa™",
    ],
    leadSpeaker: {
      name: "Isaac Agya Koomson",
      role: "Lead Accelerator Director & Founder",
      avatar: "/images/aetf-ai-panel-speaker.jpg",
    },
    ctaType: "register",
    whatsappPrompt:
      "Hello KIA Team, I would like to apply for Cohort 5 of the Adwuma Enterprise Pipeline. Please share the application link and eligibility guidelines.",
    fee: "Free / Subsidized by Partner Facilities (Selective Admission)",
    seats: "100 Selected Fellows",
  },

  // PAST SUMMITS, RECAPS & STRATEGIC ENGAGEMENTS
  {
    id: "3i-africa-summit-2026-recap",
    title: "3i Africa Summit 2026: Innovation, Investment & Impact",
    slug: "3i-africa-summit-2026-recap",
    category: "Continental Summit",
    status: "past",
    date: "May 2026",
    location: "Accra International Conference Centre (AICC)",
    venueType: "In-Person",
    image: "/images/3i-africa-summit-executive-delegation.jpg",
    badge: "SUMMIT RECAP & PHOTOGRAPHIC ARCHIVE",
    excerpt:
      "Convened by the Bank of Ghana (BoG), GhIPSS, and GFTN. KIA delegation actively engaged central bank leaders and fintech architects on digital public infrastructure for SMEs.",
    description:
      "The premier pan-African summit dedicated to shaping the future of African digital finance, cross-border payment interoperability, and sovereign capital mobilization. The KIA delegation championed the imperative of connecting central bank payment switches to grassroots SME formalization.",
    audience: "Central Bank Governors, Monetary Authorities, Fintech Unicorns & DFIs",
    highlights: [
      "High-level bilateral dialogues on linking GhIPSS Instant Pay to PAPSS cross-border trade corridors",
      "Strategic engagements on regulatory sandboxes and SME digital footprint credit underwriting",
      "Showcase of KIA's Nkabom Business Advance™ and HopeFusion Africa™ capital models",
      "Full photographic archive accessible in the Executive Gallery",
    ],
    leadSpeaker: {
      name: "Isaac Agya Koomson",
      role: "Executive Delegate & Economic Architect",
      avatar: "/images/3i-africa-summit-executive-delegation.jpg",
    },
    ctaType: "recap",
    whatsappPrompt:
      "Hello KIA Team, I read about your delegation at the 3i Africa Summit 2026 and would like to explore fintech/enterprise advisory collaboration.",
    galleryLink: "/gallery",
    insightSlug: "3i-africa-summit-fintech-infrastructure-capital-scale-2026",
  },
  {
    id: "aetf-ai-conference-2025-recap",
    title: "AETF.Ai Continental Conference: AI for Africa & Sustainable Development",
    slug: "aetf-ai-conference-2025-keynote-recap",
    category: "Continental Summit",
    status: "past",
    date: "October 2025",
    location: "Accra International Conference Centre (AICC)",
    venueType: "In-Person",
    image: "/images/aetf-ai-conference-stage.jpg",
    badge: "KEYNOTE & MINISTERIAL PANEL",
    excerpt:
      "Isaac Agya Koomson delivered keynote address on leveraging artificial intelligence and digital systems architecture to accelerate African industrialization.",
    description:
      "Convened leaders across 14 African nations, multilateral institutions, and tech research centers. Discussed ethical AI deployment, sovereign data governance, and automated enterprise tools for MSMEs.",
    audience: "Ministers of Digital Economy, Tech Founders, Investors & Academic Researchers",
    highlights: [
      "Keynote presentation on sovereign economic architecture and applied AI for African ventures",
      "Ministerial panel discussion on overcoming digital infrastructure deficits across the continent",
      "Strategic bilateral meetings on technology curriculum commercialization in tertiary institutions",
    ],
    leadSpeaker: {
      name: "Isaac Agya Koomson",
      role: "Keynote Speaker & Panelist",
      avatar: "/images/aetf-ai-panel-speaker.jpg",
    },
    ctaType: "recap",
    whatsappPrompt:
      "Hello KIA Team, I would like to enquire about booking Isaac Agya Koomson as a keynote speaker for our upcoming technology/economic conference.",
    galleryLink: "/gallery",
  },
  {
    id: "gdiw-keynote-recap",
    title: "Ghana Digital Innovation Week (GDIW): Catalysing Change",
    slug: "ghana-digital-innovation-week-keynote-recap",
    category: "Policy Dialogue",
    status: "past",
    date: "November 2024",
    location: "Grand Arena, Accra",
    venueType: "In-Person",
    image: "/images/gdiw-keynote-podium.jpg",
    badge: "NATIONAL INNOVATION PODIUM",
    excerpt:
      "Presenting national enterprise innovation strategy and digital transformation at the center of Ghana's sovereign development agenda.",
    description:
      "A national gathering of tech ecosystem pioneers, international development missions (GIZ, UNDP), and public policymakers exploring how digital ecosystems unlock employment and export capability.",
    audience: "Ecosystem Builders, Public Sector Officials, Venture Capitalists & Innovators",
    highlights: [
      "Presentation on linking informal SME trade to digital enterprise registries and automated taxation",
      "Convening discussions on TVET innovation hubs and university-to-market pipelines",
      "Publication of policy brief on SME digital adoption barriers in Ghana",
    ],
    leadSpeaker: {
      name: "Isaac Agya Koomson",
      role: "Featured Keynote Presenter",
      avatar: "/images/gdiw-keynote-speaking.jpg",
    },
    ctaType: "recap",
    whatsappPrompt:
      "Hello KIA Team, I would like to discuss institutional ecosystem advisory based on your work at Ghana Digital Innovation Week.",
    galleryLink: "/gallery",
  },
  {
    id: "undp-financing-development-recap",
    title: "UNDP Financing for Development Dialogue & Multilateral Engagement",
    slug: "undp-financing-for-development-dialogue-recap",
    category: "Policy Dialogue",
    status: "past",
    date: "March 2024",
    location: "United Nations Development Programme Bureau, Accra",
    venueType: "In-Person",
    image: "/images/undp-partnership-meeting.jpg",
    badge: "MULTILATERAL ENGAGEMENT",
    excerpt:
      "Strategic bilateral institutional dialogue positioning KIA as an execution-grade partner for youth employment and blended finance facilities.",
    description:
      "Engaging multilateral directors on translating high-level Sustainable Development Goals (SDG 8, SDG 9, SDG 17) into practical, locally rooted commercial enterprise pipelines across Ghana.",
    audience: "UN Diplomats, Development Economists, Fund Managers & Policy Specialists",
    highlights: [
      "Dialogue on structuring catalytic grant-to-commercial funding pipelines for youth businesses",
      "Framework presentation on HopeFusion Africa™ blended finance facility",
      "Establishment of institutional working relationships on SME climate resilience",
    ],
    leadSpeaker: {
      name: "Isaac Agya Koomson",
      role: "Chief Executive Officer, KIA–Start Up Consult Ltd",
      avatar: "/images/undp-partnership-meeting.jpg",
    },
    ctaType: "recap",
    whatsappPrompt:
      "Hello KIA Team, I would like to discuss an institutional development cooperation project with your team.",
    galleryLink: "/gallery",
  },
];
