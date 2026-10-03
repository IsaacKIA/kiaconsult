// Centralized site configuration.
// Per directive §5 / §30: every WhatsApp CTA on the site should pull its
// number and message from here — nothing is hardcoded page-by-page.

export const siteConfig = {
  name: "KIA–Start Up Consult",
  legalName: "KIA–Start Up Consult Ltd",
  tagline: "The Future of African Business Starts Here",
  heroHeadline: "Building the Systems Behind Africa's Next Economy.",
  url: "https://www.kiastartupconsult.com",
  phone: "+233 24 133 2246",
  phoneIntl: "+44 7859 215186",
  whatsappNumber: "233241332246", // digits only, no + or spaces, for wa.me links
  email: "info@kiastartupconsult.com",
  address: "Ajumako, Opposite Hope For Future Generation, Ghana",
  logoImage: "/images/kia-logo.jpg",
  social: {
    instagram: "https://instagram.com/kiastartupconsult",
  },
};

/**
 * Every WhatsApp entry point on the site should be built from one of these
 * message templates rather than a hand-typed string, so copy stays
 * consistent and editable from one place.
 */
export const whatsappMessages = {
  general: "Hello KIA–Start Up Consult, I would like to learn more about your services.",
  sme: "Hello KIA–Start Up Consult, I would like support to grow and modernize my business.",
  funding: "Hello KIA–Start Up Consult, I would like to explore investment/funding readiness support.",
  startup: "Hello KIA–Start Up Consult, I would like support developing my business idea.",
  partnership: "Hello KIA–Start Up Consult, I would like to discuss a potential partnership.",
  institutional: "Hello KIA–Start Up Consult, I would like to discuss an institutional project.",
  digital: "Hello KIA–Start Up Consult, I would like to explore Digital & Technology Transformation support.",
  sector: "Hello KIA–Start Up Consult, I would like to discuss Sector-Specific Advisory support.",
  ecosystem: "Hello KIA–Start Up Consult, I would like to discuss Ecosystem Development & Institutional Support.",
  chatbotChoice: (category: string, name?: string, business?: string, details?: string) => {
    let msg = `Hello KIA–Start Up Consult, I am interested in ${category}.`;
    if (name) msg += ` My name is ${name}.`;
    if (business) msg += ` My business/organization is ${business}.`;
    if (details) msg += ` Need: ${details}`;
    return msg;
  },
  article: (title: string) =>
    `I just read "${title}" and would like to discuss this topic with KIA.`,
  platform: (platformName: string) =>
    `Hello KIA, I am interested in ${platformName}. I would like to learn how this could support my business or organization.`,
  contactForm: (name: string, topic: string) =>
    `Hello KIA, my name is ${name}. I submitted an enquiry about "${topic}" on your website and would like to continue the conversation here.`,
  businessRegistration: (profile: string, serviceType: string, name?: string, businessName?: string) =>
    `Hello KIA–Start Up Consult, I would like assistance with ${serviceType} in Ghana. Profile: ${profile}.${name ? ` My name is ${name}.` : ""}${businessName ? ` Business/Proposed Name: ${businessName}.` : ""} Please guide me on process, requirements, and fees.`,
} as const;

export type WhatsappMessageKey = keyof typeof whatsappMessages;

/** Builds a wa.me deep link with a pre-filled, URL-encoded message. */
export function buildWhatsAppLink(message: string, number: string = siteConfig.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Business Registration & Filing (ORC)", href: "/services/business-registration-ghana" },
      { label: "Enterprise Creation & Venture Development", href: "/services/enterprise-creation" },
      { label: "SME Growth & Competitiveness Advisory", href: "/services/sme-growth" },
      { label: "Capital & Financial Advisory", href: "/services/capital-advisory" },
      { label: "Digital & Technology Transformation", href: "/services/digital-transformation" },
      { label: "Sector-Specific Advisory", href: "/services/sector-advisory" },
      { label: "Ecosystem Development & Institutional Support", href: "/services/ecosystem-development" },
    ],
  },
  {
    label: "Platforms",
    href: "/platforms",
    children: [
      { label: "HopeFusion Africa™ (Capital & Enterprise)", href: "/platforms/hopefusion-africa" },
      { label: "Adwuma Enterprise Pipeline™ (Youth-to-Business)", href: "/platforms/adwuma-enterprise-pipeline" },
      { label: "Nkabom Business Advance™ (SME Modernization)", href: "/platforms/nkabom-business-advance" },
      { label: "Nuru Women Enterprise™ (Female Founders)", href: "/platforms/nuru-women-enterprise" },
      { label: "Asase Green Enterprise™ (Climate & Agribusiness)", href: "/platforms/asase-green-enterprise" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export interface Service {
  id: string;
  number: string;
  title: string;
  problem: string;
  approach: string[];
  outcome: string;
  ctaMessage: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: "enterprise-creation",
    number: "01",
    title: "Enterprise Creation & Venture Development",
    problem: "Entrepreneurs have ideas but lack a structured path from concept to a launch-ready, investable business.",
    approach: [
      "Idea validation & feasibility analysis",
      "Business model design",
      "Market research & competitive analysis",
      "Business plan development",
      "Go-to-market & launch strategy",
      "Product-market fit testing",
      "Branding & positioning strategy",
      "Sales strategy development",
    ],
    outcome: "Launch-ready, investment-ready, and market-aligned enterprises.",
    ctaMessage: whatsappMessages.startup,
    image: "/images/gdiw-keynote-podium.jpg",
  },
  {
    id: "sme-growth",
    number: "02",
    title: "SME Growth & Competitiveness Advisory",
    problem: "Existing businesses plateau — operations are inefficient, markets are untapped, governance is informal.",
    approach: [
      "Strategic planning & business restructuring",
      "Operational efficiency improvement",
      "Market expansion & export readiness",
      "Financial performance optimization",
      "Informal-to-formal transition support",
      "Value chain integration",
      "Corporate governance advisory",
    ],
    outcome: "Higher productivity, stronger revenue growth, and improved sustainability.",
    ctaMessage: whatsappMessages.sme,
    image: "/images/mentorship-consulting.jpg",
  },
  {
    id: "capital-advisory",
    number: "03",
    title: "Capital & Financial Advisory",
    problem: "Enterprises are not financially structured enough to attract capital, or don't know where to find it.",
    approach: [
      "Accounting systems setup & advisory",
      "Financial modeling & forecasting",
      "Tax compliance & structuring support",
      "Investment readiness preparation",
      "Pitch deck development",
      "Capital raise strategy",
      "Investor matchmaking (via HopeFusion Africa™)",
      "Grant advisory & blended finance structuring",
    ],
    outcome: "Improved financial management and successful access to capital.",
    ctaMessage: whatsappMessages.funding,
    image: "/images/undp-partnership-meeting.jpg",
  },
  {
    id: "digital-transformation",
    number: "04",
    title: "Digital & Technology Transformation",
    problem: "Enterprises are held back by manual, disconnected systems and low technology adoption.",
    approach: [
      "Digital transformation strategy",
      "Business automation systems",
      "Software development advisory",
      "Cybersecurity advisory",
      "AI integration readiness",
      "Data analytics systems",
      "Enterprise technology implementation",
    ],
    outcome: "Increased efficiency, reduced operational costs, and improved competitiveness.",
    ctaMessage: whatsappMessages.digital,
    image: "/images/aetf-ai-panel-discussion.jpg",
  },
  {
    id: "sector-advisory",
    number: "05",
    title: "Sector-Specific Advisory & Economic Development",
    problem: "High-impact sectors — agriculture, real estate, tourism — need advisory tailored to their specific dynamics.",
    approach: [
      "Agritech & Agribusiness Advisory",
      "Real Estate & Infrastructure Advisory",
      "Travel & Tourism Advisory",
    ],
    outcome: "Structured sector growth aligned with national economic priorities.",
    ctaMessage: whatsappMessages.sector,
    image: "/images/executive-panel-discussion.jpg",
  },
  {
    id: "ecosystem-development",
    number: "06",
    title: "Ecosystem Development & Institutional Support",
    problem: "Individual businesses succeed in isolation while the surrounding ecosystem stays uncoordinated.",
    approach: [
      "Mentorship program design & pairing",
      "Training programs & executive workshops",
      "Incubation & acceleration program design",
      "Investor & stakeholder networking platforms",
      "Startup showcase events & ecosystem summits",
      "University & TVET enterprise transition systems",
    ],
    outcome: "Stronger entrepreneurship ecosystems and coordinated economic growth.",
    ctaMessage: whatsappMessages.ecosystem,
    image: "/images/aetf-ai-conference-stage.jpg",
  },
];

export interface Platform {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  targets: { value: string; label: string }[];
  impactFocus: string;
  image?: string;
}

export const platforms: Platform[] = [
  {
    id: "hopefusion-africa",
    name: "HopeFusion Africa™",
    tagline: "Capital & Enterprise Growth Platform",
    problem: "Startups and SMEs struggle to access structured capital and scale beyond the survival stage.",
    targets: [
      { value: "USD 150M", label: "capital mobilized" },
      { value: "1,200", label: "businesses funded" },
      { value: "45,000", label: "jobs supported" },
      { value: "70%", label: "3-year survival rate" },
    ],
    impactFocus: "Stronger private sector. More investment-ready businesses. Measurable job creation.",
    image: "/images/young-entrepreneur.jpg",
  },
  {
    id: "adwuma-enterprise-pipeline",
    name: "Adwuma Enterprise Pipeline™",
    tagline: "Youth-to-Business Pathway",
    problem: "Young people complete school or training but struggle to convert skills into income.",
    targets: [
      { value: "25,000", label: "youth trained" },
      { value: "8,000", label: "youth-led businesses launched" },
      { value: "18,000", label: "jobs created" },
      { value: "45%", label: "female participation" },
    ],
    impactFocus: "Reduced youth unemployment. Increased entrepreneurship. Stronger digital economy participation.",
    image: "/images/workshop-youth-engagement.jpg",
  },
  {
    id: "nkabom-business-advance",
    name: "Nkabom Business Advance™",
    tagline: "SME Productivity & Market Expansion Program",
    problem: "Many SMEs operate below capacity due to low productivity, weak systems, and limited market access.",
    targets: [
      { value: "6,000", label: "SMEs modernized" },
      { value: "30%", label: "avg. productivity increase" },
      { value: "25%", label: "avg. revenue growth" },
      { value: "12,000", label: "jobs strengthened or sustained" },
    ],
    impactFocus: "Stronger SMEs. Higher productivity. Increased competitiveness.",
    image: "/images/mentorship-consulting.jpg",
  },
  {
    id: "nuru-women-enterprise",
    name: "Nuru Women Enterprise™",
    tagline: "Women-Led Business Growth & Finance Program",
    problem: "Female entrepreneurs face limited access to capital, structured support, and scaling opportunities.",
    targets: [
      { value: "4,000", label: "women-led businesses supported" },
      { value: "USD 25M", label: "mobilized for women entrepreneurs" },
      { value: "9,000", label: "jobs created" },
      { value: "40%", label: "avg. revenue growth (growth-stage)" },
    ],
    impactFocus: "Increased female economic participation. Stronger women-owned businesses. Inclusive growth.",
    image: "/images/workshop-speaker-audience.jpg",
  },
  {
    id: "asase-green-enterprise",
    name: "Asase Green Enterprise™",
    tagline: "Climate & Sustainable Business Program",
    problem: "Businesses face rising climate risks and low adoption of sustainable practices.",
    targets: [
      { value: "2,500", label: "green businesses launched" },
      { value: "5,000", label: "SMEs transitioned to energy-efficient models" },
      { value: "28,000", label: "green jobs created" },
      { value: "220,000", label: "tCO₂e emissions reduced" },
    ],
    impactFocus: "Climate resilience. Green jobs. Measurable environmental impact.",
    image: "/images/undp-partnership-meeting.jpg",
  },
];

export const nationalImpactTargets = [
  { value: "50,000+", label: "Enterprises supported or launched" },
  { value: "112,000+", label: "Jobs created or strengthened" },
  { value: "$255M", label: "Capital mobilized" },
  { value: "45%", label: "Female participation" },
  { value: "30%", label: "Avg. SME productivity growth" },
  { value: "220,000 tCO₂e", label: "Emissions reduced" },
];

export const economicArchitectureLayers = [
  {
    key: "policy",
    label: "Policy",
    subtitle: "National Frameworks & Agenda 2063",
    description: "National development policies, African Union Agenda 2063 priorities, and international donor agendas translated into actionable, local enterprise programs.",
  },
  {
    key: "skills",
    label: "Skills",
    subtitle: "Vocational & Digital Competence",
    description: "Equipping young people, women, and technical graduates through practical vocational and digital capabilities that match current market demand.",
  },
  {
    key: "enterprise",
    label: "Enterprise",
    subtitle: "Structured Business Vehicles",
    description: "Transforming unformalized concepts and subsistence activities into structured, legal, governance-sound, and bankable enterprise entities.",
  },
  {
    key: "capital",
    label: "Capital",
    subtitle: "Blended Finance & HopeFusion",
    description: "Connecting verified investment-ready businesses with angel networks, commercial banks, impact investors, and blended finance facilities.",
  },
  {
    key: "technology",
    label: "Technology",
    subtitle: "Digitalization & Applied AI",
    description: "Deploying enterprise software, automated inventory/accounting tools, and pragmatic AI to eliminate operational friction and scale productivity.",
  },
  {
    key: "markets",
    label: "Markets",
    subtitle: "AfCFTA & Value Chains",
    description: "Integrating SMEs into domestic corporate value chains, regional export pathways, and continental AfCFTA market corridors.",
  },
  {
    key: "growth",
    label: "Jobs + Sustainable Growth",
    subtitle: "Measurable Economic Outcomes",
    description: "Delivering durable, dignified employment, increased household incomes, formal tax contributions, and measurable climate resilience.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Startups" | "SMEs" | "Capital" | "Partnership";
}

export const faqItems: FaqItem[] = [
  {
    question: "What exactly does KIA–Start Up Consult do?",
    answer:
      "KIA–Start Up Consult Ltd is an economic architecture platform. Rather than acting as traditional report-writing consultants, we build practical, interconnected systems that connect skills, enterprise development, capital, technology, and markets to drive sustainable growth and job creation across Africa.",
    category: "General",
  },
  {
    question: "Who does KIA work with?",
    answer:
      "We operate at three interconnected levels: Enterprise Level (supporting individual founders and SMEs), Institutional Level (partnering with universities, ministries, TVET institutions, and development agencies), and Ecosystem Level (building national and regional economic systems).",
    category: "General",
  },
  {
    question: "Does KIA support early-stage startups?",
    answer:
      "Yes. Through our Enterprise Creation & Venture Development practice and the Adwuma Enterprise Pipeline™, we guide aspiring entrepreneurs through idea validation, business model design, financial modeling, legal formalization, and go-to-market execution.",
    category: "Startups",
  },
  {
    question: "How does KIA work with established SMEs?",
    answer:
      "Through Nkabom Business Advance™, we assist existing small and medium businesses to transition from informal operations to bankable institutions. This includes restructuring operations, improving financial reporting, implementing digital software, and unlocking access to commercial debt and equity.",
    category: "SMEs",
  },
  {
    question: "Does KIA provide funding directly?",
    answer:
      "KIA–Start Up Consult is not a direct bank or lender. Through HopeFusion Africa™, we provide investment-readiness advisory, restructure financial statements, build pitch packages, and match qualified enterprises with vetted angel investors, impact funds, commercial banks, and blended finance facilities.",
    category: "Capital",
  },
  {
    question: "What is HopeFusion Africa™?",
    answer:
      "HopeFusion Africa™ is our flagship capital and enterprise growth platform. It bridges the critical funding gap for African SMEs by mobilizing patient capital, blended finance, and technical assistance to help businesses scale sustainably beyond the survival stage.",
    category: "Capital",
  },
  {
    question: "How can development agencies, ministries, or corporations partner with KIA?",
    answer:
      "We partner with development organizations (such as UNDP and bilateral agencies), government bodies (such as NEIP), and private foundations to co-design and execute youth employment pipelines, women enterprise programs, and regional SME competitiveness frameworks. Reach out through our Institutional Partnership channel on WhatsApp or our Contact form.",
    category: "Partnership",
  },
  {
    question: "How can I start a conversation with the KIA team?",
    answer:
      "The fastest and most direct channel is WhatsApp! You can click any 'Start a Conversation' button on our website, use our interactive onboarding chatbot in the bottom right corner, or submit an enquiry through our Contact page.",
    category: "General",
  },
];
