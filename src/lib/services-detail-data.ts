import { whatsappMessages } from "@/lib/site-config";

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  diagnostic: {
    headline: string;
    description: string;
    bottlenecks: string[];
  };
  pillars: {
    title: string;
    description: string;
    items: string[];
  }[];
  methodology: {
    phase: string;
    title: string;
    duration: string;
    focus: string;
    deliverables: string[];
  }[];
  deliverablesChecklist: string[];
  targetAudience: {
    title: string;
    profile: string;
    benefit: string;
  }[];
  impactStats: {
    value: string;
    label: string;
    subtext: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  ctaMessage: string;
  relatedPlatform: {
    id: string;
    name: string;
    tagline: string;
    href: string;
  };
}

export const servicesDetailData: Record<string, ServiceDetail> = {
  "enterprise-creation": {
    slug: "enterprise-creation",
    number: "01",
    title: "Enterprise Creation & Venture Development",
    shortTitle: "Enterprise Creation",
    tagline: "Translating Breakthrough African Ideas into Investment-Ready, Bankable Enterprises",
    metaTitle: "Enterprise Creation & Venture Development in Africa | KIA Consult",
    metaDescription:
      "Turn your vision into a structured, bankable, and scalable enterprise. Feasibility modeling, legal structuring, go-to-market execution, and investor-grade documentation.",
    heroImage: "/images/gdiw-keynote-podium.jpg",
    diagnostic: {
      headline: "Africa Does Not Lack Ideas. It Lacks Venture Architecture.",
      description:
        "Over 80% of African startups face early mortality not from lack of market demand, but due to unviable business model design, weak legal foundations, lack of regulatory alignment, and absence of structured financial architecture. KIA bridges this gap through end-to-end venture building.",
      bottlenecks: [
        "Informal operational foundations preventing bankability and institutional engagement",
        "Misaligned unit economics and premature scaling before securing product-market fit",
        "Disconnection between local African reality and international venture capital criteria",
        "Complex statutory compliance and cross-border trade friction under AfCFTA",
      ],
    },
    pillars: [
      {
        title: "Venture Ideation & Diagnostic Feasibility",
        description: "Deep quantitative market testing, demand validation, and regulatory stress-testing before capital deployment.",
        items: [
          "Addressable Market (TAM/SAM/SOM) economic modeling",
          "Competitive matrix & African value-chain gap mapping",
          "Regulatory pathway analysis (ORC, GIPC, FDA, EPA)",
          "Customer discovery sprints and willingness-to-pay validation",
        ],
      },
      {
        title: "Corporate Structuring & Governance Architecture",
        description: "Building legally sound corporate vehicles capable of syndicating equity, debt, and grant capital.",
        items: [
          "Articles of incorporation & shareholder agreements",
          "Board composition & advisory council establishment",
          "IP protection & cross-border trademark registration",
          "Non-resident director & diaspora equity allocation structuring",
        ],
      },
      {
        title: "Commercialization & Go-To-Market Execution",
        description: "Pragmatic customer acquisition, strategic channel distribution, and revenue generation architectures.",
        items: [
          "B2B enterprise pipeline structuring & off-taker contracting",
          "Omnichannel customer acquisition & unit economic optimization",
          "Strategic corporate pilot design & municipal partnership agreements",
          "AfCFTA corridor expansion roadmap for West & East Africa",
        ],
      },
    ],
    methodology: [
      {
        phase: "Phase 01",
        title: "Venture Diagnostic & Blueprinting",
        duration: "Weeks 1 – 3",
        focus: "Economic stress-testing, customer validation, and statutory architecture roadmap.",
        deliverables: ["Diagnostic Feasibility Report", "Statutory Compliance Matrix", "Unit Economic Blueprint"],
      },
      {
        phase: "Phase 02",
        title: "Foundation Build & Structuring",
        duration: "Weeks 4 – 8",
        focus: "Incorporation, corporate governance, operational manuals, and financial systems design.",
        deliverables: ["Official Corporate Dossier", "5-Year Dynamic Financial Model", "Standard Operating Procedures (SOPs)"],
      },
      {
        phase: "Phase 03",
        title: "Market Launch & Capital Ingestion",
        duration: "Weeks 9 – 16",
        focus: "Commercial pilot activation, revenue verification, and introduction to HopeFusion Africa™ capital syndicates.",
        deliverables: ["Commercial Launch Campaign", "Institutional Pitch Deck", "Investor Data Room"],
      },
    ],
    deliverablesChecklist: [
      "Official Registrar of Companies (ORC) Incorporation & Good Standing",
      "5-Year Dynamic Pro-Forma Financial Model (Three-Statement Architecture)",
      "Institutional Investor Pitch Deck & 2-Page Executive Teaser",
      "Comprehensive Business Plan compliant with DFI and commercial bank standards",
      "Corporate Governance Charter & Shareholder Vesting Agreement",
      "Digital Presence & Brand Identity Architecture",
      "GIPC Foreign Investor Registration Dossier (if applicable)",
      "Direct Bridge into the HopeFusion Africa™ Capital Syndicate",
    ],
    targetAudience: [
      {
        title: "African Diaspora Founders",
        profile: "Entrepreneurs in the US, UK, EU, and Canada launching ventures back home in Ghana, Nigeria, Kenya, or Rwanda.",
        benefit: "100% remote venture setup with institutional-grade governance, avoiding fraud and mismanaged capital.",
      },
      {
        title: "Domestic High-Growth Innovators",
        profile: "Local tech, agribusiness, logistics, and retail pioneers seeking to scale across regional corridors.",
        benefit: "Transition from subsistence hustle into an institutional corporation capable of raising institutional capital.",
      },
      {
        title: "Corporate Spin-Offs & Venture Studios",
        profile: "Established conglomerates seeking to pilot disruptive innovations in autonomous vehicle hubs.",
        benefit: "De-risked venture incubation with lean architectures and accelerated time-to-market.",
      },
    ],
    impactStats: [
      { value: "4,500+", label: "Enterprises Structured", subtext: "Across 24 African nations" },
      { value: "88%", label: "3-Year Survival Rate", subtext: "Vs 20% continental industry average" },
      { value: "$2.5M+", label: "Seed Capital Unlocked", subtext: "Directly connected to commercial capital" },
    ],
    faqs: [
      {
        q: "Can KIA help me build my enterprise if I live outside Africa?",
        a: "Yes. Over 45% of our venture development clients are African Diaspora founders based in London, New York, Toronto, Berlin, and Atlanta. We serve as your local institutional architects, managing statutory incorporation, banking setups, local hiring, and operational launch without requiring you to relocate immediately.",
      },
      {
        q: "What sectors does KIA Venture Development specialize in?",
        a: "We focus on high-impact scalable African industries: Agribusiness & Cold-Chain Processing, Climate Tech & Renewable Energy, Digital Services & Youth Tech, Healthcare & Pharmaceuticals, Cross-Border Logistics, and Light Manufacturing.",
      },
      {
        q: "How does this connect to investment funding?",
        a: "Every enterprise built under this practice is structured to meet the strict due-diligence criteria of our proprietary HopeFusion Africa™ Capital Syndicate, private angel networks, and multilateral development banks.",
      },
    ],
    ctaMessage: whatsappMessages.startup,
    relatedPlatform: {
      id: "adwuma-enterprise-pipeline",
      name: "Adwuma Enterprise Pipeline™",
      tagline: "Connecting high-potential founders with institutional technical support.",
      href: "/platforms/adwuma-enterprise-pipeline",
    },
  },

  "sme-growth": {
    slug: "sme-growth",
    number: "02",
    title: "SME Growth & Competitiveness Advisory",
    shortTitle: "SME Growth",
    tagline: "Unlocking Productivity, Operational Excellence, and Cross-Border Market Expansion",
    metaTitle: "SME Growth & Operational Advisory in Africa | KIA Consult",
    metaDescription:
      "Transforming established African SMEs into resilient market leaders. Business restructuring, supply chain optimization, export readiness, and corporate governance.",
    heroImage: "/images/mentorship-consulting.jpg",
    diagnostic: {
      headline: "The 'Missing Middle' Phenomenon in African Business",
      description:
        "Africa is filled with micro-enterprises and a handful of large conglomerates, but has an acute shortage of mid-sized commercial champions. SMEs reach $100K–$1M in revenue and stall due to founder dependency, informal accounting, fragmented supply chains, and lack of corporate governance.",
      bottlenecks: [
        "Founder bottleneck syndrome where daily operations grind to a halt without the owner",
        "Unreliable bookkeeping and mixed personal/business finances barring bank debt facilities",
        "Low operational productivity and inefficient supply chain purchasing power",
        "Limited export knowledge preventing SMEs from capitalizing on AfCFTA trade zones",
      ],
    },
    pillars: [
      {
        title: "Operational Restructuring & Process Engineering",
        description: "Transforming chaotic workflows into systematized, measurable operating machines.",
        items: [
          "Standard Operating Procedures (SOPs) development and team training",
          "ERP & cloud management tool implementation (inventory, CRM, payroll)",
          "Supply chain consolidation and bulk procurement optimization",
          "Key Performance Indicator (KPI) dashboards for executive tracking",
        ],
      },
      {
        title: "Commercial Scaling & Market Expansion",
        description: "Diversifying revenue streams and penetrating high-margin continental and export markets.",
        items: [
          "Institutional and B2B off-taker contract acquisition",
          "AfCFTA Rules of Origin compliance and export documentation",
          "Pricing strategy review to safeguard margins against inflation and currency depreciation",
          "Franchising and geographic agency network structuring",
        ],
      },
      {
        title: "Governance Modernization & Succession Architecture",
        description: "Establishing advisory boards, financial internal controls, and enterprise resilience.",
        items: [
          "Family-business and multi-shareholder governance charters",
          "Advisory Board recruitment and quarterly governance cadence",
          "Internal audit checklists and anti-fraud financial controls",
          "Executive compensation and management succession roadmaps",
        ],
      },
    ],
    methodology: [
      {
        phase: "Phase 01",
        title: "360° SME Diagnostic Audit",
        duration: "Weeks 1 – 2",
        focus: "Deep operational, financial, and market assessment identifying leakages and bottleneck areas.",
        deliverables: ["SME Diagnostic Scorecard", "Leakage Remediation Plan", "Efficiency Roadmap"],
      },
      {
        phase: "Phase 02",
        title: "Core Process Modernization",
        duration: "Weeks 3 – 8",
        focus: "Implementation of operational systems, ERP workflows, and organizational chart restructuring.",
        deliverables: ["Institutional SOP Manual", "Digitized Operations System", "Management Incentive Plan"],
      },
      {
        phase: "Phase 03",
        title: "Market Expansion & Corridor Scaling",
        duration: "Weeks 9 – 16",
        focus: "B2B client acquisition, AfCFTA trade readiness, and preparing for growth-stage equity/debt.",
        deliverables: ["B2B Off-Taker Contracts", "AfCFTA Export Dossier", "Bank Facility Readiness Pack"],
      },
    ],
    deliverablesChecklist: [
      "Comprehensive 360° SME Operational & Financial Health Audit",
      "Turnkey Standard Operating Procedures (SOPs) across all departments",
      "Executive Financial Control & Cash Flow Forecasting Architecture",
      "AfCFTA Export Readiness & Cross-Border Logistics Strategy",
      "Independent Advisory Board Charter & Corporate Governance Framework",
      "ERP / Inventory / CRM Automation Setup & Staff Training",
      "Commercial Bank & Working Capital Facility Optimization Dossier",
    ],
    targetAudience: [
      {
        title: "Mid-Market Enterprise Owners",
        profile: "Companies generating $200k to $5M in annual turnover looking to cross the next growth ceiling.",
        benefit: "Eliminate founder dependency and increase business valuation by 2.5x to 4x.",
      },
      {
        title: "Second-Generation Family Businesses",
        profile: "Legacy businesses undergoing modernization and institutionalization for the next era.",
        benefit: "Smooth generational transition backed by objective corporate governance.",
      },
      {
        title: "Manufacturers & Value-Chain Processors",
        profile: "Firms looking to upgrade equipment, secure supply chains, and export under AfCFTA.",
        benefit: "Certified operational processes and commercial readiness for regional supermarket chains.",
      },
    ],
    impactStats: [
      { value: "30%", label: "Average Productivity Surge", subtext: "Within 6 months of process overhaul" },
      { value: "25%", label: "Average Revenue Growth", subtext: "Through disciplined B2B channel strategy" },
      { value: "12,000+", label: "Jobs Sustained & Scaled", subtext: "Across partner SME facilities" },
    ],
    faqs: [
      {
        q: "How does KIA work with our existing leadership team?",
        a: "We work as embedded strategic co-pilots. We do not just hand over a theoretical slide deck and walk away; our senior partners spend time inside your operations, aligning your department heads, coaching managers, and supervising software and workflow transitions.",
      },
      {
        q: "What size SME qualifies for this advisory practice?",
        a: "Typically businesses with at least 5 to 50 employees and established annual commercial traction. For earlier-stage companies, our Enterprise Creation practice is the recommended vehicle.",
      },
      {
        q: "Can you help us access working capital or trade finance?",
        a: "Yes. Once operational and accounting hygiene is restored, we introduce your SME to our partner commercial banks, debt funds, and blended capital vehicles.",
      },
    ],
    ctaMessage: whatsappMessages.sme,
    relatedPlatform: {
      id: "nkabom-business-advance",
      name: "Nkabom Business Advance™",
      tagline: "Flagship SME modernization and productivity scaling vehicle.",
      href: "/platforms/nkabom-business-advance",
    },
  },

  "capital-advisory": {
    slug: "capital-advisory",
    number: "03",
    title: "Capital & Financial Advisory",
    shortTitle: "Capital Advisory",
    tagline: "Structuring Bankable Deals, Valuations, and Syndicating African Growth Capital",
    metaTitle: "Capital & Financial Advisory in Africa | KIA Consult",
    metaDescription:
      "Bridge the African capital divide. Investment readiness, 3-statement financial modeling, debt/equity syndication, grant advisory, and institutional deal structuring.",
    heroImage: "/images/undp-partnership-meeting.jpg",
    diagnostic: {
      headline: "Billions in Global Capital Are Idle While African Enterprise Starves",
      description:
        "International DFIs, private equity funds, family offices, and diaspora syndicates have substantial dry powder allocated for Africa. However, over 95% of African business proposals are rejected immediately due to sloppy financial modeling, lack of audited records, unrealistic valuations, and absent legal protections.",
      bottlenecks: [
        "Unverified financial statements that fail institutional due-diligence standards",
        "Unrealistic valuation expectations disconnected from emerging market macro risks",
        "Poor capital stack structuring leading to crippling commercial interest rates",
        "Inability to blend concessional DFI grants with commercial debt and equity",
      ],
    },
    pillars: [
      {
        title: "Investment Readiness & Due Diligence Clean-Up",
        description: "Transforming internal financials into a clean, audited, institutional investment package.",
        items: [
          "Dynamic three-statement historical and pro-forma financial models",
          "Tax compliance audit and historical liability regularization",
          "Institutional virtual data room (VDR) curation and document auditing",
          "Working capital and cash burn optimization analysis",
        ],
      },
      {
        title: "Valuation & Deal Structuring",
        description: "Defensible valuation methodologies that protect founder equity while enticing institutional investors.",
        items: [
          "DCF, Precedent Transactions, and Emerging-Market Scorecard valuations",
          "Capital stack design: Equity, Convertible Notes, SAFE, Mezzanine, and Senior Debt",
          "Term sheet negotiation advisory and investor protection clause analysis",
          "Currency risk mitigation and cross-border repatriation structuring",
        ],
      },
      {
        title: "Capital Syndication & Matchmaking",
        description: "Active introduction and placement with verified institutional allocators across Africa and globally.",
        items: [
          "Direct bridge to HopeFusion Africa™ Capital Syndicate ($150M vehicle)",
          "DFI concessional grant and blended finance application structuring (AfDB, UNDP, IFC)",
          "African commercial banking consortium syndication",
          "High-net-worth diaspora investor syndicate matchmaking",
        ],
      },
    ],
    methodology: [
      {
        phase: "Phase 01",
        title: "Financial Audit & Modeling",
        duration: "Weeks 1 – 3",
        focus: "Reconstructing financial history, auditing records, and building the master dynamic financial model.",
        deliverables: ["Master Financial Model (Excel/Sheets)", "Financial Audit Report", "Valuation Memorandum"],
      },
      {
        phase: "Phase 02",
        title: "Data Room & Pitch Collateral",
        duration: "Weeks 4 – 6",
        focus: "Drafting the institutional Investment Memorandum, Teaser, and populating the Virtual Data Room.",
        deliverables: ["Institutional Investment Memo", "Executive Pitch Deck", "Secured Virtual Data Room"],
      },
      {
        phase: "Phase 03",
        title: "Investor Roadshow & Closing",
        duration: "Weeks 7 – 16",
        focus: "Targeted investor outreach, roadshow pitching, term sheet negotiation, and transaction close.",
        deliverables: ["Signed Term Sheet", "Investor Q&A Log", "Disbursement Protocol"],
      },
    ],
    deliverablesChecklist: [
      "Dynamic 5-Year Financial Model (Income Statement, Balance Sheet, Cash Flow)",
      "Institutional Investment Memorandum (CIM) & 2-Page Executive Teaser",
      "Defensible Emerging-Market Valuation Dossier",
      "Turnkey Virtual Data Room (VDR) structured for institutional due diligence",
      "Pitch Deck coached by seasoned investment bankers",
      "Term Sheet & Shareholder Agreement Review & Negotiation Advisory",
      "Direct Bridge into the HopeFusion Africa™ Investor Network",
    ],
    targetAudience: [
      {
        title: "Scale-Ups Raising $250k – $10M",
        profile: "Proven businesses with paying customers ready to pour fuel on the fire through institutional equity or debt.",
        benefit: "Avoid predatory term sheets and close rounds faster with institutional documentation.",
      },
      {
        title: "Infrastructure & Real Estate Developers",
        profile: "Commercial, industrial, and agricultural developers needing project finance and blended debt.",
        benefit: "Structure syndicated credit facilities with local banks and international development institutions.",
      },
      {
        title: "Diaspora Co-Investment Syndicates",
        profile: "Diaspora groups seeking verified, high-yield African opportunities with independent auditing.",
        benefit: "Independent third-party financial due diligence ensuring safety of syndicated capital.",
      },
    ],
    impactStats: [
      { value: "$255M+", label: "Capital Target", subtext: "Under active platform syndication" },
      { value: "45+", label: "Institutional Lenders & Funds", subtext: "In active co-investment dialogue" },
      { value: "3.2x", label: "Average Multiple Unlocked", subtext: "For enterprises post-KIA restructuring" },
    ],
    faqs: [
      {
        q: "Does KIA guarantee that our company will receive funding?",
        a: "No ethical consulting firm can guarantee investor checks, as the ultimate decision rests with the capital provider. However, KIA guarantees that your enterprise will be structured to the exact standards institutional allocators demand, dramatically raising your conversion rate.",
      },
      {
        q: "What types of capital do you structure?",
        a: "We structure equity rounds (Seed to Series B), revenue-share facilities, senior collateralized bank debt, mezzanine finance, and non-dilutive DFI development grants.",
      },
      {
        q: "How does HopeFusion Africa™ relate to this service?",
        a: "HopeFusion Africa™ is our proprietary continental capital mobilization vehicle. Clients of this practice gain direct preferred routing into HopeFusion's investment committee.",
      },
    ],
    ctaMessage: whatsappMessages.funding,
    relatedPlatform: {
      id: "hopefusion-africa",
      name: "HopeFusion Africa™",
      tagline: "$150M Flagship Capital & Enterprise Growth Syndicate.",
      href: "/platforms/hopefusion-africa",
    },
  },

  "digital-transformation": {
    slug: "digital-transformation",
    number: "04",
    title: "Digital & Technology Transformation",
    shortTitle: "Digital & AI",
    tagline: "Pragmatic Business Automation, AI Integration, and Modern Software Architecture",
    metaTitle: "Digital Transformation & AI Advisory in Africa | KIA Consult",
    metaDescription:
      "Modernize African enterprise systems. Business process automation, AI adoption, cloud ERP implementation, cybersecurity, and scalable digital architectures.",
    heroImage: "/images/aetf-ai-panel-discussion.jpg",
    diagnostic: {
      headline: "African Business Cannot Leapfrog with Manual Paper Systems",
      description:
        "While Africa leads the world in mobile money adoption, 85% of commercial enterprises still manage mission-critical accounting, inventory, and client communications on paper ledgers or fragmented WhatsApp chats. This manual drag throttles margin growth, causes internal fraud, and makes scaling impossible.",
      bottlenecks: [
        "Inventory leakages and unaccounted cash transactions due to paper-based systems",
        "Unintegrated software silos where customer and financial data never talk to each other",
        "Hype-driven technology investments that fail to generate actual commercial ROI",
        "Vulnerability to cyber extortion and lack of basic customer data protection",
      ],
    },
    pillars: [
      {
        title: "Enterprise Architecture & Workflow Automation",
        description: "Replacing manual friction with automated digital pipelines that cut operational overhead.",
        items: [
          "Cloud ERP & inventory management deployment (Odoo, Zoho, SAP Business One)",
          "Automated financial reconciliation and mobile money API integrations (Paystack, Hubtel)",
          "Customer Relationship Management (CRM) automation for sales teams",
          "Automated procurement and supplier management portals",
        ],
      },
      {
        title: "Pragmatic AI & Data Analytics for African Industry",
        description: "Applying AI not as a buzzword, but as an operational tool to forecast demand and automate support.",
        items: [
          "Customer service automation via WhatsApp multilingual AI agents",
          "Predictive inventory forecasting to prevent stock-outs and capital lockup",
          "Credit scoring and micro-underwriting algorithms for trade financiers",
          "Automated document processing and OCR for invoice handling",
        ],
      },
      {
        title: "Cybersecurity & Sovereign Data Governance",
        description: "Shielding African enterprises from cyber threats and ensuring strict compliance with Data Protection Acts.",
        items: [
          "Vulnerability assessments and penetration testing audits",
          "Compliance with Ghana Data Protection Commission (DPC) and continental data acts",
          "Cloud security architecture (AWS, Google Cloud, Azure Africa regions)",
          "Employee cybersecurity training and incident response protocols",
        ],
      },
    ],
    methodology: [
      {
        phase: "Phase 01",
        title: "Digital Systems Audit",
        duration: "Weeks 1 – 2",
        focus: "Analyzing legacy tools, data flows, operational friction, and cyber vulnerabilities.",
        deliverables: ["Digital Maturity Scorecard", "System Architecture Blueprint", "Tool ROI Analysis"],
      },
      {
        phase: "Phase 02",
        title: "Core Platform Engineering & Integration",
        duration: "Weeks 3 – 8",
        focus: "Deploying cloud ERP, integrating payment gateways, and training staff on automated workflows.",
        deliverables: ["Live Integrated ERP System", "Payment API Integration", "Admin Training Dossier"],
      },
      {
        phase: "Phase 03",
        title: "AI Optimization & Continuous Scaling",
        duration: "Weeks 9 – 14",
        focus: "Implementing predictive data dashboards, automated customer engagement, and security monitoring.",
        deliverables: ["Real-Time Executive Dashboard", "WhatsApp AI Agent", "Cybersecurity Shield Protocol"],
      },
    ],
    deliverablesChecklist: [
      "Enterprise Digital Maturity Audit & Modernization Roadmap",
      "Turnkey Cloud ERP System configured to your specific business logic",
      "Seamless Mobile Money & Commercial Bank Payment Gateway Integration",
      "Custom WhatsApp-integrated customer service and ordering agent",
      "Executive Analytics Dashboard tracking live revenue, inventory, and gross margins",
      "Ghana Data Protection Act (Act 843) Compliance Certificate & Security Audit",
      "Full Team Training & Standardized Digital Operating Manuals",
    ],
    targetAudience: [
      {
        title: "Traditional Commercial Enterprises",
        profile: "Retailers, distributors, hospitality hubs, and logistics firms operating manual ledgers.",
        benefit: "Cut administrative overhead by 40% and eliminate inventory leakage immediately.",
      },
      {
        title: "Fintech & High-Growth Startups",
        profile: "Tech founders needing institutional enterprise architecture, security reviews, and API bridges.",
        benefit: "Bank-grade security posture and regulatory-compliant data governance.",
      },
      {
        title: "Financial Institutions & S&Ls",
        profile: "Microfinance institutions and credit unions automating loan processing and customer verification.",
        benefit: "Accelerated loan turnaround times and lower default rates through predictive scoring.",
      },
    ],
    impactStats: [
      { value: "40%", label: "Average Cost Reduction", subtext: "In back-office administrative workflows" },
      { value: "99.9%", label: "System Uptime", subtext: "Across deployed enterprise cloud setups" },
      { value: "100%", label: "Statutory Compliance", subtext: "With national data protection standards" },
    ],
    faqs: [
      {
        q: "Do we need an internal IT team to maintain these systems?",
        a: "No. We design solutions for ease-of-use with intuitive administrative interfaces, train your operational team thoroughly, and provide ongoing managed SLA support to keep your systems running smoothly.",
      },
      {
        q: "How does AI actually apply to a non-tech African business?",
        a: "We deploy practical AI tools: for example, a WhatsApp AI agent that automatically answers client inquiries in English or local dialects, takes orders 24/7, updates your inventory, and logs customer payments directly into your bank.",
      },
      {
        q: "What software platforms do you recommend?",
        a: "We are technology-agnostic. We evaluate your budget and scale to recommend the right fit — ranging from open-source ERPs like Odoo and Nextcloud to enterprise ecosystems like Google Workspace, Zoho, and AWS.",
      },
    ],
    ctaMessage: whatsappMessages.digital,
    relatedPlatform: {
      id: "adwuma-enterprise-pipeline",
      name: "Adwuma Enterprise Pipeline™",
      tagline: "Equipping young African engineers with practical enterprise tech skills.",
      href: "/platforms/adwuma-enterprise-pipeline",
    },
  },

  "sector-advisory": {
    slug: "sector-advisory",
    number: "05",
    title: "Sector-Specific Advisory & Economic Development",
    shortTitle: "Sector Advisory",
    tagline: "Deep Domain Mastery in Agribusiness, Real Estate, Tourism, and Industrial Corridors",
    metaTitle: "Sector Advisory: Agribusiness, Real Estate & Tourism | KIA Consult",
    metaDescription:
      "Specialized domain advisory for high-impact African sectors. Agribusiness value chains, real estate syndication, tourism master planning, and AfCFTA cross-border corridors.",
    heroImage: "/images/executive-panel-discussion.jpg",
    diagnostic: {
      headline: "Generic Consulting Fails in Africa's Specialized Industries",
      description:
        "Every African industry has its own land tenure intricacies, seasonal climatic realities, regulatory bottlenecks, and unique supply chain corridors. High-level advice that works in software will ruin an agribusiness cold-chain or a real estate commercial development. KIA provides deep, grounded domain expertise.",
      bottlenecks: [
        "Land title insecurity and customary land chieftaincy disputes in agribusiness and real estate",
        "High post-harvest losses (over 40%) in agricultural value chains due to absent cold storage",
        "Under-capitalized tourism and hospitality assets failing to capture international visitor spend",
        "Tariff and non-tariff border barriers stalling cross-border agricultural logistics under AfCFTA",
      ],
    },
    pillars: [
      {
        title: "Agribusiness & Processing Value Chains",
        description: "Transforming raw agricultural output into high-value processed exports.",
        items: [
          "Outgrower scheme design and smallholder farmer cooperative contracting",
          "Cold-chain infrastructure, aggregation centers, and grain silo commercialization",
          "Export compliance (GlobalGAP, FDA, EU phytosanitary standards)",
          "Carbon credit verification and climate-smart regenerative agriculture models",
        ],
      },
      {
        title: "Real Estate & Industrial Infrastructure",
        description: "De-risking property development, land acquisition, and commercial facility syndication.",
        items: [
          "Land title due diligence, Lands Commission verification, and customary tenure resolution",
          "Feasibility modeling for commercial warehousing, logistics hubs, and residential developments",
          "Real estate joint venture structuring with diaspora capital syndicates",
          "Environmental & Social Impact Assessments (ESIA) and EPA compliance",
        ],
      },
      {
        title: "Travel, Hospitality & Tourism Master Planning",
        description: "Positioning African destinations to capture the multi-billion dollar diaspora and global leisure market.",
        items: [
          "Boutique eco-resort and heritage hospitality business model structuring",
          "Diaspora repatriation tourism packaging ('Year of Return' / 'Beyond the Return')",
          "Concession agreement negotiations with national tourism authorities",
          "Operational standard operating procedures and international hospitality staff training",
        ],
      },
    ],
    methodology: [
      {
        phase: "Phase 01",
        title: "Sector Diagnostic & Land/Site Audit",
        duration: "Weeks 1 – 3",
        focus: "Physical site inspection, land title verification, environmental review, and value-chain gap mapping.",
        deliverables: ["Site Due Diligence Report", "Land Title Verification Dossier", "Sector Feasibility Study"],
      },
      {
        phase: "Phase 02",
        title: "Financial & Architecture Structuring",
        duration: "Weeks 4 – 8",
        focus: "Financial modeling, off-taker agreements, environmental permits, and JV contracts.",
        deliverables: ["Project Financial Model", "Statutory Environmental Clearance", "Commercial Off-Taker Contract"],
      },
      {
        phase: "Phase 03",
        title: "Capital Syndication & Ground Execution",
        duration: "Weeks 9 – 16",
        focus: "Investor roadshow, engineering procurement, cooperative setup, and commercial launch.",
        deliverables: ["Syndicated Debt/Equity Closing", "Operational Launch Protocol", "Off-Take Ingestion"],
      },
    ],
    deliverablesChecklist: [
      "Rigorous Sector Feasibility Study & Economic Yield Analysis",
      "Statutory Land Title Due Diligence & Chieftaincy Alignment Report",
      "EPA Environmental & Social Impact Assessment (ESIA) Pack",
      "Outgrower Scheme Agreement & Smallholder Fair-Trade Contract",
      "Export Standards Compliance Blueprint (FDA, GlobalGAP, AfCFTA)",
      "Real Estate / Agribusiness Financial Model with Sensitivity Scenarios",
      "Direct Bridge into the Asase Green Enterprise™ Agricultural Facility",
    ],
    targetAudience: [
      {
        title: "Agro-Processors & Farm Operators",
        profile: "Commercial farmers and food processors expanding into regional and export supermarkets.",
        benefit: "Secure certified export off-takers and cut post-harvest waste by up to 60%.",
      },
      {
        title: "Real Estate Developers & Landowners",
        profile: "Individuals and consortia holding land parcels seeking bankable joint venture development.",
        benefit: "Clean title validation and structured joint venture agreements with diaspora capital.",
      },
      {
        title: "Hospitality & Tourism Operators",
        profile: "Hoteliers and cultural center operators aiming to capture international diaspora tourism.",
        benefit: "World-class hospitality standards and structured operational management.",
      },
    ],
    impactStats: [
      { value: "15,000+", label: "Farmers Integrated", subtext: "Into formal commercial supply chains" },
      { value: "60%", label: "Post-Harvest Waste Reduction", subtext: "Through modernized aggregation hubs" },
      { value: "100%", label: "Clean Land Title Record", subtext: "Across all KIA-advised properties" },
    ],
    faqs: [
      {
        q: "How does KIA protect investors from land disputes in Ghana?",
        a: "Land litigation is the #1 risk in West African real estate. We conduct exhaustive due diligence through the Lands Commission, traditional stool councils, family head verifications, and spatial cadastral surveys before any dollar is committed.",
      },
      {
        q: "Can you help our agribusiness export under AfCFTA?",
        a: "Yes. We assist with Certificate of Origin registration, phytosanitary packaging, cross-border freight forwarding coordination, and currency settlement protocols.",
      },
      {
        q: "What agricultural commodities do you specialize in?",
        a: "Grains (maize, rice, soybean), tree crops (cashew, cocoa, oil palm, mango), vegetables (chili, tomato, onions), poultry & livestock, and high-value export spices.",
      },
    ],
    ctaMessage: whatsappMessages.sector,
    relatedPlatform: {
      id: "asase-green-enterprise",
      name: "Asase Green Enterprise™",
      tagline: "Climate-smart agribusiness and sustainable land productivity facility.",
      href: "/platforms/asase-green-enterprise",
    },
  },

  "ecosystem-development": {
    slug: "ecosystem-development",
    number: "06",
    title: "Ecosystem Development & Institutional Support",
    shortTitle: "Ecosystem Advisory",
    tagline: "Designing National Incubation Hubs, Policy Frameworks, and Multilateral Programs",
    metaTitle: "Ecosystem Development & Multilateral Advisory in Africa | KIA Consult",
    metaDescription:
      "Partnering with governments, development agencies (UNDP, AfDB), and foundations to build durable African entrepreneurship ecosystems, innovation hubs, and TVET transitions.",
    heroImage: "/images/aetf-ai-conference-stage.jpg",
    diagnostic: {
      headline: "Isolated Donor Projects Evaporate When Funding Ends",
      description:
        "Hundreds of millions of dollars are spent annually across Africa on short-term entrepreneurship hackathons and donor-funded training workshops. When the grant cycle concludes, 90% of the beneficiary businesses collapse because no ongoing private capital, commercial market access, or institutional ecosystem was built around them.",
      bottlenecks: [
        "Uncoordinated programs operating in regional silos without institutional continuity",
        "Curricula disconnected from commercial market demand and bankability criteria",
        "Lack of standardized Monitoring, Evaluation & Learning (MEL) metrics",
        "Absence of sustainable revenue models for university and municipal innovation hubs",
      ],
    },
    pillars: [
      {
        title: "National & Regional Program Architecture",
        description: "Co-designing multi-year entrepreneurship and job-creation programs with multilaterals and governments.",
        items: [
          "Technical assistance facility design for DFIs, UNDP, AfDB, and NEIP",
          "Public-Private Partnership (PPP) governance models for regional innovation centers",
          "Curriculum design for enterprise incubation, accelerator sprints, and mentorship",
          "Monitoring, Evaluation & Impact Learning (MEL) frameworks tracking verified job creation",
        ],
      },
      {
        title: "Innovation Hub & Incubation Architecture",
        description: "Building self-sustaining enterprise acceleration hubs for universities, polytechnics, and municipalities.",
        items: [
          "University-to-enterprise commercialization pathways for engineering and agriculture graduates",
          "Hub sustainability models (co-working, seed funds, corporate sponsorship, equity retention)",
          "Mentor recruitment, training, and standardized accountability scorecards",
          "Venture showcase summits, demo days, and deal-flow syndication events",
        ],
      },
      {
        title: "Policy Translation & AfCFTA Corridor Alignment",
        description: "Translating continental trade treaties and national economic visions into ground-level enterprise activities.",
        items: [
          "African Union Agenda 2063 enterprise implementation frameworks",
          "AfCFTA Cross-Border Trade Corridor technical assistance facilities",
          "National youth entrepreneurship policy advisory and white paper drafting",
          "Diaspora capital engagement frameworks for sovereign investment authorities",
        ],
      },
    ],
    methodology: [
      {
        phase: "Phase 01",
        title: "Ecosystem Assessment & Stakeholder Mapping",
        duration: "Weeks 1 – 4",
        focus: "Mapping existing ecosystem gaps, conducting stakeholder interviews, and drafting the program charter.",
        deliverables: ["Ecosystem Diagnostic Whitepaper", "Stakeholder Engagement Matrix", "Program Logical Framework (Logframe)"],
      },
      {
        phase: "Phase 02",
        title: "Program Blueprint & Facility Architecture",
        duration: "Weeks 5 – 10",
        focus: "Drafting curricula, establishing selection rubrics, structuring funding mechanisms, and recruiting mentors.",
        deliverables: ["Operational Manual & Curriculum", "Mentor & Trainer Playbook", "MEL Impact Tracking Dashboard"],
      },
      {
        phase: "Phase 03",
        title: "Execution, Ingestion & National Scale",
        duration: "Months 3 – 24",
        focus: "Cohort selection, venture acceleration, enterprise funding syndication, and national reporting.",
        deliverables: ["Cohort Graduation Showcase", "Annual Impact Evaluation Report", "Institutional Policy Brief"],
      },
    ],
    deliverablesChecklist: [
      "Multilateral Program Logical Framework (Logframe) & Monitoring Plan",
      "Full Incubation / Acceleration Curriculum & Facilitator Playbook",
      "Digital Cohort Application, Screening & Due-Diligence Portal",
      "Standardized Impact Dashboard tracking verified livelihoods and capital deployed",
      "Independent Third-Party Mid-Term and Final Evaluation Reports",
      "Policy Whitepaper with actionable recommendations for government stakeholders",
      "Institutional Showcase & Demo Day Production for international investors",
    ],
    targetAudience: [
      {
        title: "Development Finance Institutions (DFIs) & Multilaterals",
        profile: "Agencies like UNDP, AfDB, World Bank, GIZ, and USAID deploying economic development grants.",
        benefit: "Flawless local execution, strict governance compliance, and audited impact metrics.",
      },
      {
        title: "Government Ministries & Agencies",
        profile: "Ministries of Trade, Youth & Sports, NEIP, and municipal assemblies building enterprise hubs.",
        benefit: "Durable institutional systems that outlive political election cycles.",
      },
      {
        title: "Philanthropic Foundations & Corporate CSR",
        profile: "Corporate foundations investing in youth skilling, women empowerment, and green livelihoods.",
        benefit: "Direct transition from skilling into profitable, self-sustaining businesses.",
      },
    ],
    impactStats: [
      { value: "50,000+", label: "Target Beneficiaries", subtext: "Across continental program designs" },
      { value: "24", label: "Countries Impacted", subtext: "Through coordinated regional dialogues" },
      { value: "100%", label: "Audit Pass Rate", subtext: "Under strict international donor standards" },
    ],
    faqs: [
      {
        q: "Has KIA managed programs with international development agencies before?",
        a: "Yes. Our executive leadership has engaged directly on podiums, keynotes, and dialogues with the UNDP, African Union, NEIP Ghana, AETF.Ai, and Ghana Digital Innovation Week, bringing verified credentials to multilateral engagements.",
      },
      {
        q: "How do you ensure program beneficiaries actually stay in business?",
        a: "We do not run 'classroom-only' training. Every ecosystem program we design integrates technical skills with corporate formalization, market off-takers, and direct access to blended capital via HopeFusion Africa™.",
      },
      {
        q: "Can you assist with drafting government policy whitepapers?",
        a: "Yes. We frequently advise national and regional bodies on youth entrepreneurship policy, digital economy readiness, and AfCFTA cross-border SME participation.",
      },
    ],
    ctaMessage: whatsappMessages.ecosystem,
    relatedPlatform: {
      id: "adwuma-enterprise-pipeline",
      name: "Adwuma Enterprise Pipeline™",
      tagline: "Nationwide youth-to-business pipeline architecture.",
      href: "/platforms/adwuma-enterprise-pipeline",
    },
  },
};
