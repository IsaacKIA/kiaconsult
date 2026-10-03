import { whatsappMessages } from "@/lib/site-config";

export interface PlatformDetail {
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  mandate: string;
  executiveSummary: string;
  diagnostic: {
    headline: string;
    description: string;
    systemicFailurePoints: string[];
  };
  targets: {
    value: string;
    label: string;
    description: string;
  }[];
  threePhaseArchitecture: {
    phase: string;
    name: string;
    focus: string;
    activities: string[];
    milestone: string;
  }[];
  pillars: {
    title: string;
    subtitle: string;
    features: string[];
  }[];
  governanceAndEsg: {
    esgPillar: string;
    commitment: string;
    framework: string;
  }[];
  partnerCoInvestment: {
    partnerType: string;
    role: string;
    valueProposition: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  ctaMessage: string;
}

export const platformsDetailData: Record<string, PlatformDetail> = {
  "hopefusion-africa": {
    slug: "hopefusion-africa",
    name: "HopeFusion Africa™",
    tagline: "Continental Capital Mobilization & Enterprise Syndication Facility",
    badge: "FLAGSHIP CAPITAL PLATFORM · $150M TARGET",
    metaTitle: "HopeFusion Africa™ | $150M Capital & Enterprise Growth Syndicate",
    metaDescription:
      "Mobilizing $150M in blended finance, commercial debt, and equity syndication to fund 1,200 high-growth African enterprises and support 45,000 verified jobs.",
    heroImage: "/images/young-entrepreneur.jpg",
    mandate: "Directly aligned with African Union Agenda 2063 Goal 1 & AfCFTA Private Sector Investment Protocol.",
    executiveSummary:
      "HopeFusion Africa™ is KIA–Start Up Consult's flagship capital orchestration platform. It is engineered to dismantle Africa's acute commercial financing bottleneck by syndicating concessional DFI capital, international private equity, commercial bank facilities, and diaspora wealth into pre-vetted, investment-ready African enterprises.",
    diagnostic: {
      headline: "The $330 Billion African SME Financing Deficit",
      description:
        "The International Finance Corporation (IFC) estimates Africa's formal SME finance gap at over $330 billion. While international capital allocators possess trillions in ESG and emerging-market mandates, capital remains stranded offshore because local enterprises lack investment-grade governance, audited financials, and structured transaction corridors.",
      systemicFailurePoints: [
        "Unrealistic bank collateral requirements (upwards of 150% in landed property) excluding 90% of innovative African founders",
        "Predatory double-digit interest rates (25%–35% across Sub-Saharan Africa) that suffocate operating cash flows",
        "Absence of institutional pre-investment structuring that leaves promising companies unbankable",
        "Lack of liquidity exit mechanisms and high currency volatility deterring foreign equity investors",
      ],
    },
    targets: [
      { value: "USD 150M", label: "Capital Mobilized", description: "Blended capital pool across equity, debt, and grant instruments" },
      { value: "1,200", label: "Enterprises Funded", description: "High-growth formal enterprises across 24 African nations" },
      { value: "45,000", label: "Verified Livelihoods", description: "Direct and indirect formal jobs created or sustained" },
      { value: "70%", label: "3-Year Survival Rate", description: "Over 3.5x higher than the conventional African SME benchmark" },
    ],
    threePhaseArchitecture: [
      {
        phase: "Phase 01",
        name: "Enterprise Screening & Governance Ingestion",
        focus: "Auditing, corporate clean-up, and institutional structuring.",
        activities: [
          "Rigorous 40-point due-diligence scorecard covering legal, tax, and governance integrity",
          "Forensic accounting clean-up and dynamic 3-statement financial model generation",
          "Virtual Data Room (VDR) curation compliant with international PE and DFI standards",
        ],
        milestone: "Certified HopeFusion Investment Readiness Seal",
      },
      {
        phase: "Phase 02",
        name: "Catalytic Capital Deployment & Syndication",
        focus: "Matching enterprises with the optimal capital stack.",
        activities: [
          "Concessional first-loss grant integration to de-risk commercial debt participation",
          "Syndicated co-investment rounds with African commercial banking consortia",
          "Direct equity allocation to diaspora syndicates and verified angel networks",
        ],
        milestone: "Transaction Close & Capital Disbursement",
      },
      {
        phase: "Phase 03",
        name: "Post-Investment Value Creation & AfCFTA Scaling",
        focus: "Ongoing operational supervision, corporate governance, and regional scaling.",
        activities: [
          "Mandatory quarterly financial monitoring and board advisory representation",
          "Commercial introduction to regional corporate off-takers across AfCFTA corridors",
          "Secondary market exit readiness and institutional refinancing facilitation",
        ],
        milestone: "Measurable Revenue Expansion & Job Yield",
      },
    ],
    pillars: [
      {
        title: "Blended Capital Stack Structuring",
        subtitle: "De-risking Private Investment through Strategic Blended Finance",
        features: [
          "First-loss concessional grant capital from multilateral agencies (UNDP, AfDB)",
          "Senior and subordinated commercial bank debt facilities at negotiated terms",
          "Growth-stage equity and mezzanine financing for high-margin scale-ups",
          "Revenue-share and royalty financing models tailored to seasonal African cash flows",
        ],
      },
      {
        title: "The Diaspora Capital Corridor",
        subtitle: "Channeling Remittances into Productive, Audited African Assets",
        features: [
          "Structured diaspora investment syndicates across the US, UK, Canada, and Europe",
          "Independent escrow accounts and audited quarterly governance reporting",
          "Legal recourse and asset-backed protection under international commercial arbitration",
          "Eliminating the risk of family-managed remittance diversion and fraud",
        ],
      },
      {
        title: "Institutional Deal-Room Technology",
        subtitle: "Accelerating Due Diligence with Real-Time Transparency",
        features: [
          "Proprietary cloud pipeline tracking vetted African enterprise deal flow",
          "Standardized financial metrics and carbon-impact telemetry",
          "Instant due-diligence document access for global investment committees",
          "Automated covenant compliance monitoring post-disbursement",
        ],
      },
    ],
    governanceAndEsg: [
      {
        esgPillar: "Environmental (E)",
        commitment: "Mandatory climate-resilience audit for every portfolio enterprise. Zero funding for high-emission assets.",
        framework: "IFC Performance Standards & AU Climate Strategy",
      },
      {
        esgPillar: "Social (S)",
        commitment: "Minimum 40% capital directed to female-led and youth-led businesses; verified fair wages and worker safety.",
        framework: "UN Sustainable Development Goals (SDG 5, 8)",
      },
      {
        esgPillar: "Governance (G)",
        commitment: "Anti-money laundering (AML), Know-Your-Customer (KYC), independent audit, and anti-corruption covenants.",
        framework: "OECD Principles of Corporate Governance",
      },
    ],
    partnerCoInvestment: [
      {
        partnerType: "Development Finance Institutions (DFIs)",
        role: "Concessional First-Loss Capital & Technical Assistance Grants",
        valueProposition: "Deploy capital with verified on-the-ground execution, robust MEL reporting, and guaranteed job creation metrics.",
      },
      {
        partnerType: "Commercial Banks & Credit Funds",
        role: "Senior Debt Facilities & Trade Finance Lines",
        valueProposition: "Access pre-structured, de-risked SME borrowers with clean books, high equity cushions, and board oversight.",
      },
      {
        partnerType: "Diaspora High-Net-Worth Syndicates",
        role: "Co-Investment Equity & Growth Capital",
        valueProposition: "Participate in vetted, high-yield African corporate assets with audited financials and professional management.",
      },
    ],
    faqs: [
      {
        q: "Who manages HopeFusion Africa™?",
        a: "HopeFusion Africa™ is operated under the institutional governance of KIA–Start Up Consult Ltd, led by CEO Isaac Agya Koomson alongside an executive investment committee of seasoned bankers, corporate lawyers, and economic development economists.",
      },
      {
        q: "How can my company apply for funding under HopeFusion Africa™?",
        a: "Enterprises enter the pipeline through our Capital Advisory Practice or the African Enterprise & Capital Simulator on our website. After preliminary screening, eligible ventures undergo our 40-point due-diligence process.",
      },
      {
        q: "How do institutional co-investors partner with HopeFusion?",
        a: "We welcome DFIs, family offices, commercial banks, and impact funds to join our capital syndication consortium. You can schedule an Executive Briefing directly with CEO Isaac Agya Koomson to review the portfolio pipeline.",
      },
    ],
    ctaMessage: whatsappMessages.funding,
  },

  "adwuma-enterprise-pipeline": {
    slug: "adwuma-enterprise-pipeline",
    name: "Adwuma Enterprise Pipeline™",
    tagline: "The Continental Youth-to-Business Infrastructure",
    badge: "YOUTH ENTERPRISE & TECH ENGINE · 25,000 COHORT",
    metaTitle: "Adwuma Enterprise Pipeline™ | Youth-to-Business Infrastructure",
    metaDescription:
      "Transforming 25,000 technical graduates and ambitious African youth into 8,000 bankable enterprises, generating 18,000 dignified jobs across digital and trade economies.",
    heroImage: "/images/workshop-youth-engagement.jpg",
    mandate: "Aligned with African Union Youth Charter and Agenda 2063: The Africa We Want.",
    executiveSummary:
      "With 60% of Africa's population under the age of 25, youth unemployment is the continent's most critical socioeconomic challenge. Adwuma Enterprise Pipeline™ is our institutional pathway that converts technical skills, engineering competence, and youth innovation into structured, revenue-generating, and formal businesses.",
    diagnostic: {
      headline: "The Great African Education-to-Enterprise Disconnect",
      description:
        "Every year, millions of bright African youth graduate from polytechnics, universities, and coding bootcamps with technical skills, only to spend years unemployed or trapped in subsistence informal trading. They are trained for corporate jobs that do not exist, rather than equipped to architect scalable enterprises that create jobs.",
      systemicFailurePoints: [
        "Classroom-heavy academic training disconnected from commercial market demand and sales reality",
        "Lack of initial seed micro-grants to finance basic equipment, prototypes, and legal incorporation",
        "Total isolation from commercial corporate off-takers and business supply chains",
        "Absence of executive mentorship leading to critical operational mistakes within the first 90 days",
      ],
    },
    targets: [
      { value: "25,000", label: "Youth Trained & Mentored", description: "Equipped in practical enterprise management, AI, and trade" },
      { value: "8,000", label: "Youth Enterprises Formed", description: "Formally registered legal businesses operating in growth sectors" },
      { value: "18,000", label: "Dignified Jobs Created", description: "Direct employment opportunities created for peers and youth" },
      { value: "45%", label: "Female Youth Inclusion", description: "Mandatory quota ensuring inclusive, gender-balanced participation" },
    ],
    threePhaseArchitecture: [
      {
        phase: "Phase 01",
        name: "Skills-to-Enterprise Incubation",
        focus: "Intensive 8-week enterprise creation bootcamps.",
        activities: [
          "Hands-on venture design sprints matching technical youth with commercial co-founders",
          "Financial literacy, unit economics, and customer discovery fieldwork",
          "Product prototype development and minimum viable product (MVP) testing",
        ],
        milestone: "Validated Commercial Enterprise Concept",
      },
      {
        phase: "Phase 02",
        name: "Formalization & Seed Micro-Capital",
        focus: "Statutory registration and catalytic micro-grants.",
        activities: [
          "Official ORC business name registration, TIN generation, and bank account setup",
          "Disbursement of performance-linked catalytic equipment grants ($1k–$5k)",
          "Deployment of standard operating procedures, mobile bookkeeping, and CRM tools",
        ],
        milestone: "Legally Registered, Operating Enterprise",
      },
      {
        phase: "Phase 03",
        name: "Corporate Supply Chain Integration",
        focus: "Connecting youth businesses to paying corporate clients.",
        activities: [
          "Securing sub-contracts with regional construction, agribusiness, and tech conglomerates",
          "Mentorship pairings with seasoned corporate CEOs and industry executives",
          "Routing top-performing enterprises into HopeFusion Africa™ for scaling capital",
        ],
        milestone: "Sustained Revenue & Verified Livelihoods",
      },
    ],
    pillars: [
      {
        title: "Digital & AI Engineering Acceleration",
        subtitle: "Positioning African Youth at the Global Technology Frontier",
        features: [
          "Enterprise software development, AI model integration, and cloud architecture",
          "Remote talent pipelines connecting African engineers with global contracts",
          "Digital agency acceleration: UI/UX, cybersecurity, and digital marketing",
          "No-code and low-code rapid prototyping for rapid commercial deployment",
        ],
      },
      {
        title: "Agri-Enterprise & Light Manufacturing",
        subtitle: "Modernizing Traditional Trades into High-Margin Enterprises",
        features: [
          "Hydroponic farming, greenhouse management, and organic food processing",
          "Apparel, packaging, and standardized light manufacturing for local retail",
          "Solar equipment installation, maintenance, and mini-grid servicing",
          "Cross-border packaging standards under AfCFTA guidelines",
        ],
      },
      {
        title: "Executive Mentorship & Resilience Coaching",
        subtitle: "Direct Guidance from Seasoned African Corporate Leaders",
        features: [
          "1-on-1 mentorship pairings with active C-suite executives and entrepreneurs",
          "Weekly accountability check-ins tracking revenue, customer acquisition, and cash flow",
          "Mental resilience, ethical leadership, and conflict resolution training",
          "Alumni peer-to-peer enterprise exchange networks across West and East Africa",
        ],
      },
    ],
    governanceAndEsg: [
      {
        esgPillar: "Social (S)",
        commitment: "Directly tackling the continental youth unemployment crisis (SDG 8: Decent Work & Economic Growth).",
        framework: "AU Youth Development Framework & ILO Standards",
      },
      {
        esgPillar: "Gender Inclusion (G)",
        commitment: "45% guaranteed placement for young women with dedicated childcare and flexible scheduling.",
        framework: "UN Women Empowerment Principles",
      },
      {
        esgPillar: "Transparency (T)",
        commitment: "100% digital grant disbursement via mobile money with biometric verification to eliminate ghost beneficiaries.",
        framework: "Real-time Audited Cloud Dashboard",
      },
    ],
    partnerCoInvestment: [
      {
        partnerType: "Multilateral Youth & Labor Agencies (UNDP, NEIP, GIZ)",
        role: "Cohort Sponsorship & Concessional Seed Grants",
        valueProposition: "Transform training budgets into permanent formal businesses with auditable employment outcomes.",
      },
      {
        partnerType: "Corporate Tech & Telecom Titans (MTN, Telecel, Google Africa)",
        role: "Digital Infrastructure & Enterprise Procurement Off-Take",
        valueProposition: "Fulfil corporate procurement and ESG mandates by sourcing from vetted youth-led suppliers.",
      },
      {
        partnerType: "University & TVET Leadership",
        role: "Campus Incubation Hub Co-Management",
        valueProposition: "Equip graduating students with bankable ventures rather than unemployable diplomas.",
      },
    ],
    faqs: [
      {
        q: "Who is eligible to participate in the Adwuma Enterprise Pipeline™?",
        a: "Ambitious African youth aged 18 to 35 with a technical skill, product concept, or early-stage enterprise in technology, agribusiness, manufacturing, services, or creative industries.",
      },
      {
        q: "Is there a fee to join an Adwuma cohort?",
        a: "Cohort participation is fully or partially subsidized through our partnership with development finance institutions, national innovation funds (e.g., NEIP Ghana), and philanthropic foundations.",
      },
      {
        q: "How can my institution sponsor or partner with an Adwuma cohort?",
        a: "Corporate and multilateral sponsors can co-design tailored cohorts (e.g., Women in Tech, Agri-Youth Ghana, Clean Energy Pioneers) by booking an executive briefing with our team.",
      },
    ],
    ctaMessage: whatsappMessages.startup,
  },

  "nkabom-business-advance": {
    slug: "nkabom-business-advance",
    name: "Nkabom Business Advance™",
    tagline: "SME Productivity Modernization & Regional Market Expansion",
    badge: "SME INDUSTRIAL ENGINE · 6,000 ENTERPRISES",
    metaTitle: "Nkabom Business Advance™ | SME Modernization & AfCFTA Expansion",
    metaDescription:
      "Modernizing 6,000 mid-sized African SMEs through operational systems, digital workflows, and AfCFTA cross-border market penetration, strengthening 12,000 jobs.",
    heroImage: "/images/mentorship-consulting.jpg",
    mandate: "Accelerating AfCFTA intra-African trade and continental industrialization (AU Agenda 2063).",
    executiveSummary:
      "Small and Medium Enterprises (SMEs) generate over 80% of employment across Africa, yet the vast majority operate at a fraction of their potential productivity due to fragmented supply chains, legacy operational practices, and border friction. Nkabom Business Advance™ is the industrial engine that modernizes 6,000 SMEs into regional commercial powerhouses.",
    diagnostic: {
      headline: "The Severe Competitiveness Ceiling on African Mid-Market Firms",
      description:
        "When foreign imports flood African markets under AfCFTA, unprepared domestic SMEs risk obsolescence. Low labor productivity, outdated packaging, lack of international quality certifications, and prohibitive cross-border shipping logistics prevent established businesses from capturing regional supermarket shelves and corporate procurement contracts.",
      systemicFailurePoints: [
        "Manual, paper-heavy production lines with high scrap rates and wasted working capital",
        "Inability to meet strict ISO, FDA, and AfCFTA Rules of Origin compliance standards",
        "Disadvantaged purchasing power compared to multinational conglomerates",
        "Severe working capital lockups caused by 60–90 day corporate invoice payment cycles",
      ],
    },
    targets: [
      { value: "6,000", label: "SMEs Modernized", description: "Upgraded operations, software, and governance systems" },
      { value: "30%", label: "Avg. Productivity Increase", description: "Verified reduction in cycle times, waste, and overhead" },
      { value: "25%", label: "Avg. Revenue Growth", description: "Through expanded institutional B2B contracts and exports" },
      { value: "12,000", label: "Jobs Sustained & Scaled", description: "Formal, sustainable manufacturing and commercial livelihoods" },
    ],
    threePhaseArchitecture: [
      {
        phase: "Phase 01",
        name: "Industrial Efficiency & Quality Audit",
        focus: "Operational stress-testing and production bottleneck eradication.",
        activities: [
          "Factory and office workflow audits evaluating labor productivity and machinery efficiency",
          "Quality control overhaul to achieve FDA, GSA, and AfCFTA export certifications",
          "Waste reduction and lean inventory management implementation",
        ],
        milestone: "Certified Operational Efficiency Plan",
      },
      {
        phase: "Phase 02",
        name: "Enterprise Digitalization & Cash Flow Relief",
        focus: "Automating management and securing working capital.",
        activities: [
          "Deployment of cloud inventory, procurement, and accounting ERP tools",
          "Invoice factoring and trade finance line structuring with commercial banking partners",
          "Management training on gross margin defense and currency hedging strategies",
        ],
        milestone: "Digitized Operations & Active Credit Facility",
      },
      {
        phase: "Phase 03",
        name: "AfCFTA Corridor Off-Take & Regional Scaling",
        focus: "Penetrating regional supermarket chains and cross-border trade.",
        activities: [
          "Listing products with regional retail consortiums (Shoprite, Melcom, Carrefour Africa)",
          "AfCFTA Certificate of Origin processing and cross-border logistics consolidation",
          "B2B buyer-seller matching summits across West, Central, and East Africa",
        ],
        milestone: "Export Ingestion & Sustainable Multi-Market Traction",
      },
    ],
    pillars: [
      {
        title: "AfCFTA Cross-Border Trade Facilitation",
        subtitle: "Unlocking Tariff-Free Commercial Corridors for African Goods",
        features: [
          "AfCFTA Rules of Origin qualification audits and documentation support",
          "Shared freight forwarding and bonded warehouse aggregation in strategic trade hubs",
          "Bilingual French-English commercial contract design for ECOWAS and CEMAC trade",
          "Regulatory compliance support across Ghana, Nigeria, Côte d'Ivoire, Kenya, and Rwanda",
        ],
      },
      {
        title: "Industrial Modernization & Lean Manufacturing",
        subtitle: "Cutting Unit Costs to Outcompete International Imports",
        features: [
          "Equipment leasing and machinery upgrade advisory with low-cost development banks",
          "Standardized packaging, barcoding, and retail shelf-life optimization",
          "Energy efficiency audits reducing grid power and diesel generator expenditures",
          "Workforce technical upskilling in machinery operation and quality assurance",
        ],
      },
      {
        title: "Corporate Supply Chain Supplier Development",
        subtitle: "Plugging SMEs into Multi-Million Dollar Corporate Procurement",
        features: [
          "Tier-2 and Tier-3 supplier qualification for mining, telco, and FMCG giants",
          "Supplier diversity compliance matching corporate ESG mandates",
          "Direct invoice financing unlocking immediate cash upon PO delivery",
          "Standardized contractual terms preventing predatory payment terms from large buyers",
        ],
      },
    ],
    governanceAndEsg: [
      {
        esgPillar: "Continental Integration",
        commitment: "Directly driving intra-African trade expansion under the AfCFTA framework.",
        framework: "AfCFTA Secretariat Commercial Directives",
      },
      {
        esgPillar: "Fair Labor Standards",
        commitment: "Ensuring all modernized SME facilities comply with national labor laws, fair wages, and occupational safety.",
        framework: "ILO Decent Work Agenda",
      },
      {
        esgPillar: "Environmental Efficiency",
        commitment: "Optimizing energy use, reducing industrial scrap, and eliminating toxic packaging materials.",
        framework: "ISO 14001 Environmental Management Standards",
      },
    ],
    partnerCoInvestment: [
      {
        partnerType: "AfCFTA Secretariat & National Trade Ministries",
        role: "Trade Policy Partnership & Custom Fast-Tracking",
        valueProposition: "Deliver tangible, measurable intra-African trade volumes under the continental treaty.",
      },
      {
        partnerType: "Commercial Banks (Ecobank, Stanbic, Zenith)",
        role: "SME Working Capital & Trade Finance Syndication",
        valueProposition: "Gain access to vetted, operationally disciplined SME borrowers with guaranteed off-take contracts.",
      },
      {
        partnerType: "Multinational Corporations (Mining, Telco, FMCG)",
        role: "Corporate Local Content Procurement Partnerships",
        valueProposition: "De-risk local content compliance with reliable, quality-certified indigenous African suppliers.",
      },
    ],
    faqs: [
      {
        q: "What types of businesses fit the Nkabom Business Advance™ model?",
        a: "Operating SMEs with at least 10 employees and $100k+ in annual turnover across manufacturing, agro-processing, wholesale distribution, pharmaceuticals, logistics, and engineering services.",
      },
      {
        q: "How does Nkabom help with cross-border AfCFTA trade?",
        a: "We assist with everything from securing your AfCFTA Certificate of Origin to customs clearance, regional packaging standards, and setting up commercial distribution channels in neighboring countries.",
      },
      {
        q: "Can our SME access equipment financing through Nkabom?",
        a: "Yes. We package equipment leasing applications and present them to our partner development banks and commercial leasing institutions.",
      },
    ],
    ctaMessage: whatsappMessages.sme,
  },

  "nuru-women-enterprise": {
    slug: "nuru-women-enterprise",
    name: "Nuru Women Enterprise™",
    tagline: "The Sovereign Capital & Growth Facility for African Women Founders",
    badge: "FEMALE ECONOMIC EMPOWERMENT · 4,000 ENTERPRISES",
    metaTitle: "Nuru Women Enterprise™ | Capital & Growth for African Women Founders",
    metaDescription:
      "Mobilizing $25M in dedicated capital and structured enterprise scaling for 4,000 women-owned African businesses, driving 9,000 new jobs and inclusive economic growth.",
    heroImage: "/images/workshop-speaker-audience.jpg",
    mandate: "Advancing African Union Gender Equality Protocol & UN Sustainable Development Goal 5.",
    executiveSummary:
      "African women boast the highest rate of female entrepreneurship in the world (over 26%), yet they face a staggering financing gap of over $42 billion. Nuru Women Enterprise™ ('Nuru' meaning 'Light' in Swahili) is an institutional platform dedicated to eliminating the structural barriers that hold female founders back from building multi-million dollar African corporations.",
    diagnostic: {
      headline: "The $42 Billion Gender Financing Cliff Facing African Women",
      description:
        "While microfinance has funded millions of African women at subsistence levels ($100–$500 micro-loans), female founders seeking growth capital ($20k–$500k) to purchase industrial machinery, acquire commercial property, or fulfill corporate supply contracts are routinely rejected by male-dominated commercial loan committees.",
      systemicFailurePoints: [
        "Discriminatory customary land ownership norms that prevent women from holding formal title deeds for bank collateral",
        "Microfinance 'poverty-traps' charging extortionate interest rates (40%–60%) that prevent capital accumulation",
        "Severe exclusion of women entrepreneurs from institutional corporate supply chains and government procurement",
        "Unbalanced domestic care burdens that limit networking and international export market engagement",
      ],
    },
    targets: [
      { value: "4,000", label: "Women-Owned Businesses", description: "Structured into scalable, bankable commercial corporations" },
      { value: "USD 25M", label: "Capital Mobilized", description: "Dedicated gender-lens capital facility (debt, equity, and grants)" },
      { value: "9,000", label: "New Jobs Generated", description: "High-quality livelihoods primarily benefiting African women and youth" },
      { value: "40%", label: "Avg. Revenue Surge", description: "Verified growth among participating growth-stage female enterprises" },
    ],
    threePhaseArchitecture: [
      {
        phase: "Phase 01",
        name: "Asset-Light Collateralization & Governance",
        focus: "Overcoming collateral barriers and building corporate governance.",
        activities: [
          "Implementation of alternative credit scoring models based on cash flow rather than land titles",
          "Corporate formalization, shareholding structuring, and board establishment",
          "Financial accounting clean-up and dynamic pro-forma model generation",
        ],
        milestone: "Certified Nuru Investment-Ready Portfolio Company",
      },
      {
        phase: "Phase 02",
        name: "Gender-Lens Capital Allocation",
        focus: "Direct injection of growth capital from the $25M Nuru facility.",
        activities: [
          "Disbursement of concessional growth loans at single-digit interest rates",
          "Syndication of equity co-investments with international gender-lens investment funds (GLI)",
          "Non-dilutive equipment grants for technology and automation adoption",
        ],
        milestone: "Capital Ingestion & Asset Expansion",
      },
      {
        phase: "Phase 03",
        name: "Institutional Market Access & Export Corridors",
        focus: "Winning government and corporate procurement contracts.",
        activities: [
          "Enrolling female-owned enterprises into corporate supplier diversity programs",
          "AfCFTA cross-border trade training and export documentation",
          "Executive peer-to-peer CEO masterminds and international trade delegation showcases",
        ],
        milestone: "Corporate Procurement Integration & Regional Expansion",
      },
    ],
    pillars: [
      {
        title: "Alternative Collateral & Gender-Lens Debt",
        subtitle: "Bypassing Discriminatory Banking Norms with Modern Credit Science",
        features: [
          "Cash-flow based lending and purchase-order financing without landed property demands",
          "Concessional first-loss guarantee funds provided by multilateral development partners",
          "Flexible repayment structures accommodating maternity and family responsibilities",
          "Low-interest commercial credit syndication with partner African financial institutions",
        ],
      },
      {
        title: "Corporate Procurement & Supplier Diversity",
        subtitle: "Opening Multi-Million Dollar Corporate Contracts to Women Suppliers",
        features: [
          "Direct linkage to multinational corporations committing to 15%+ female supplier spend",
          "Quality assurance certifications enabling women-owned food, beauty, and textile brands to scale",
          "B2B bidding advisory and commercial contract negotiation support",
          "Trade finance lines to fund upfront inventory for large institutional orders",
        ],
      },
      {
        title: "Executive Leadership & Board Architecture",
        subtitle: "Transitioning Founders from Solopreneurs to Enterprise CEOs",
        features: [
          "Executive coaching focused on negotiation, public speaking, and capital defense",
          "Recruitment of independent, seasoned board members to institutionalize the enterprise",
          "Mentorship pairings with Africa's leading female corporate captains and ministers",
          "Mental health, burnout prevention, and peer-support networks for female leaders",
        ],
      },
    ],
    governanceAndEsg: [
      {
        esgPillar: "Gender Equality (SDG 5)",
        commitment: "100% of portfolio companies are at least 51% women-owned or women-led.",
        framework: "2X Challenge Gender-Lens Investment Criteria",
      },
      {
        esgPillar: "Poverty Eradication (SDG 1)",
        commitment: "Women reinvest up to 90% of their income in their families and communities, multiplying community impact.",
        framework: "World Bank Gender Impact Metrics",
      },
      {
        esgPillar: "Ethical Governance",
        commitment: "Strict anti-harassment, fair pay, and safe workplace policies enforced across all portfolio facilities.",
        framework: "UN Women Workplace Gender Standards",
      },
    ],
    partnerCoInvestment: [
      {
        partnerType: "Global Gender-Lens Funds & Family Offices",
        role: "Equity & Subordinated Debt Co-Investment",
        valueProposition: "Gain access to vetted, high-performing African female-led deals with verified social impact data.",
      },
      {
        partnerType: "Bilateral Donors (USAID, Global Affairs Canada, FCDO)",
        role: "First-Loss Guarantee & Technical Assistance Funding",
        valueProposition: "Deliver measurable, auditable economic empowerment outcomes for thousands of African women.",
      },
      {
        partnerType: "Multinational Corporations (Telecom, FMCG, Banking)",
        role: "Procurement Off-Take & Supplier Diversity Partnerships",
        valueProposition: "Achieve corporate sustainability targets while sourcing from high-quality local female suppliers.",
      },
    ],
    faqs: [
      {
        q: "What defines an eligible business for Nuru Women Enterprise™?",
        a: "Any formally registered African enterprise that is at least 51% owned or led by a woman, with proven market traction and an ambition to scale across regional markets.",
      },
      {
        q: "What is the capital range available under the Nuru facility?",
        a: "Capital interventions range from $10,000 for early growth equipment financing up to $500,000+ for mid-market corporate expansion, structured as concessional debt, revenue share, or equity.",
      },
      {
        q: "Can international investors co-invest specifically in Nuru deals?",
        a: "Yes. We welcome international gender-lens investment funds, foundations, and family offices to participate in our co-investment syndicate.",
      },
    ],
    ctaMessage: whatsappMessages.sme,
  },

  "asase-green-enterprise": {
    slug: "asase-green-enterprise",
    name: "Asase Green Enterprise™",
    tagline: "Climate-Smart Agribusiness & Sovereign Natural Capital Facility",
    badge: "CLIMATE & FOOD SECURITY · 28,000 GREEN JOBS",
    metaTitle: "Asase Green Enterprise™ | Climate Tech & Agribusiness Facility",
    metaDescription:
      "Empowering 2,500 green businesses and transitioning 5,000 SMEs into climate-smart champions. Generating 28,000 green jobs and abating 220,000 tCO₂e emissions.",
    heroImage: "/images/undp-partnership-meeting.jpg",
    mandate: "Aligned with Paris Climate Agreement (COP), AU Green Recovery Action Plan & SDG 13 (Climate Action).",
    executiveSummary:
      "Africa contributes less than 4% of global greenhouse emissions yet suffers the most catastrophic brunt of climate breakdown — from severe droughts to soil degradation and food insecurity. Asase Green Enterprise™ ('Asase' meaning 'Earth / Land' in Akan) is our institutional platform engineered to commercialize climate-smart agriculture, renewable energy mini-grids, and circular economy assets.",
    diagnostic: {
      headline: "The Tragic Paradox of African Agriculture and Climate Risk",
      description:
        "Africa possesses over 60% of the world's uncultivated arable land, yet imports over $50 billion in staple foods annually. Extreme weather, post-harvest cold-chain deficits (upwards of 40% loss), and reliance on rainfed farming cripple smallholder food security, while sustainable green innovations struggle to secure patient commercial capital.",
      systemicFailurePoints: [
        "Absence of solar cold-chain storage at rural farm gates, forcing distress selling to exploitative middlemen",
        "High cost of diesel-powered irrigation equipment pricing smallholder farmers out of all-season farming",
        "Disconnection between African carbon-sink projects and global voluntary carbon credit markets",
        "Lack of standardized green debt and sustainability-linked loan frameworks in local African banking",
      ],
    },
    targets: [
      { value: "2,500", label: "Green Businesses Launched", description: "Enterprises structured in clean energy, agro-processing, and circular waste" },
      { value: "5,000", label: "SMEs Transitioned to Green", description: "Adopting solar power, energy-efficient workflows, and sustainable packaging" },
      { value: "28,000", label: "Green Jobs Created", description: "Dignified, climate-resilient livelihoods across rural and peri-urban Africa" },
      { value: "220,000 tCO₂e", label: "Emissions Abated", description: "Verified greenhouse gas reduction through solar and regenerative agriculture" },
    ],
    threePhaseArchitecture: [
      {
        phase: "Phase 01",
        name: "Climate Vulnerability & Carbon Baseline Audit",
        focus: "Assessing climate exposure, soil health, and clean energy potential.",
        activities: [
          "Farm and facility carbon footprint audits calculating baseline emissions and energy costs",
          "Soil regeneration and water table sustainability assessments",
          "Techno-economic feasibility modeling for solar mini-grids and clean cold-chain assets",
        ],
        milestone: "Certified Asase Climate & Energy Transition Blueprint",
      },
      {
        phase: "Phase 02",
        name: "Green Capital Ingestion & Asset Deployment",
        focus: "Funding clean energy machinery and regenerative farm inputs.",
        activities: [
          "Deploying pay-as-you-go solar irrigation systems and walk-in cold rooms at rural aggregation hubs",
          "Accessing international green climate funds, concessional climate debt, and ESG grants",
          "Establishing smallholder farmer cooperative supply contracts with guaranteed fair prices",
        ],
        milestone: "Operational Green Assets & Energy Cost Reduction",
      },
      {
        phase: "Phase 03",
        name: "Carbon Monetization & AfCFTA Export Corridors",
        focus: "Monetizing verified emissions abated and exporting certified organic produce.",
        activities: [
          "Verifying carbon sequestration for international voluntary carbon market credits (Verra/Gold Standard)",
          "Packaging organic, fair-trade produce for export to European and Middle Eastern off-takers",
          "Cross-border agricultural trade coordination under AfCFTA green logistics corridors",
        ],
        milestone: "Dual-Revenue Stream: Commercial Food Sales + Carbon Credits",
      },
    ],
    pillars: [
      {
        title: "Solar Cold-Chain & Post-Harvest Infrastructure",
        subtitle: "Eliminating Food Waste and Stabilizing Rural Farmer Incomes",
        features: [
          "Solar-powered micro cold-storage hubs installed directly at rural farm gates",
          "Pay-as-you-chill mobile subscription models accessible to smallholder farmers",
          "Refrigerated electric transport tricycles connecting farms to urban supermarkets",
          "Extending perishable shelf-life from 2 days to over 21 days, slashing losses by 75%",
        ],
      },
      {
        title: "Regenerative Agribusiness & Bio-Circular Economy",
        subtitle: "Restoring African Soils while Producing High-Yield Export Crops",
        features: [
          "Biochar, organic fertilizer, and compost conversion from agricultural waste biomass",
          "Drip irrigation technology utilizing 60% less water than flood irrigation",
          "Drought-resistant seed variety distribution and climate-smart agronomy coaching",
          "Agroforestry integration planting indigenous economic trees alongside cash crops",
        ],
      },
      {
        title: "Sovereign Carbon & Natural Capital Monetization",
        subtitle: "Turning African Ecology into Bankable, Verified Financial Assets",
        features: [
          "High-integrity carbon credit origination compliant with Article 6 of the Paris Agreement",
          "Satellite and IoT soil-carbon telemetry monitoring real-time carbon sequestration",
          "Direct revenue-sharing returning 70%+ of carbon credit proceeds to rural farming communities",
          "Sustainability-linked bond and green loan structuring with African commercial banks",
        ],
      },
    ],
    governanceAndEsg: [
      {
        esgPillar: "Climate Action (SDG 13)",
        commitment: "Directly abating 220,000 tCO₂e emissions through clean energy and regenerative soil management.",
        framework: "UNFCCC Paris Agreement & IPCC Standards",
      },
      {
        esgPillar: "Zero Hunger (SDG 2)",
        commitment: "Tripling smallholder farm yields and preventing post-harvest food waste across 15+ agricultural corridors.",
        framework: "FAO Sustainable Agriculture Guidelines",
      },
      {
        esgPillar: "Natural Capital Integrity",
        commitment: "Zero land clearing of primary forests; mandatory biodiversity buffers on all advised commercial lands.",
        framework: "IUCN Global Conservation Standards",
      },
    ],
    partnerCoInvestment: [
      {
        partnerType: "Climate Finance Funds & Carbon Credit Buyers",
        role: "Concessional Green Debt & Forward Carbon Off-Take",
        valueProposition: "Source verified, high-integrity African carbon removals with undeniable community co-benefits.",
      },
      {
        partnerType: "Development Banks & Multilaterals (AfDB, Green Climate Fund)",
        role: "First-Loss Concessional Capital & Agricultural Blended Facilities",
        valueProposition: "Scale de-risked climate-smart infrastructure with proven local execution and verifiable KPI tracking.",
      },
      {
        partnerType: "Commercial Agro-Processors & Food Exporters",
        role: "Long-Term Off-Take Agreements",
        valueProposition: "Secure clean, traceable, certified organic supply chains insulated from seasonal climate shocks.",
      },
    ],
    faqs: [
      {
        q: "What types of green businesses qualify for the Asase platform?",
        a: "Commercial agribusinesses, renewable energy developers, solar mini-grid operators, waste-to-energy and recycling plants, sustainable forestry, and eco-tourism operators across Africa.",
      },
      {
        q: "How does the carbon credit monetization work for local farmers?",
        a: "We deploy satellite imagery and ground soil testing to measure carbon absorbed by adopting regenerative farming techniques. These credits are aggregated, certified internationally, and sold to global buyers, with the majority of proceeds paid directly to the farmers.",
      },
      {
        q: "Can our agricultural enterprise install solar cold-storage through Asase?",
        a: "Yes. We structure equipment financing and technical installations for solar cold rooms, solar water pumps, and grain drying infrastructure.",
      },
    ],
    ctaMessage: whatsappMessages.sector,
  },
};
