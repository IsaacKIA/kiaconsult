export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readingTime: string;
  heroImage: string;
  heroCaption?: string;
  tags: string[];
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      pullQuote?: string;
    }[];
    takeaways: string[];
  };
  relatedSlugs: string[];
}

export const insightCategories = [
  "All Insights",
  "Policy & Economic Development",
  "Entrepreneurship",
  "AI & Technology",
  "SME Growth",
  "Capital & Investment",
  "Youth Employment",
  "Women & Enterprise",
  "Climate & Green Economy",
  "Africa Business",
] as const;

export const insightArticles: InsightArticle[] = [
  {
    slug: "missing-architecture-african-enterprise-systems",
    title: "The Missing Architecture: Why African Enterprise Needs Systems, Not Just Training",
    excerpt:
      "Africa does not lack entrepreneurial talent or vibrant ideas. It lacks the integrated economic architecture that connects skills to enterprise, enterprise to capital, and capital to sustainable productivity.",
    category: "Policy & Economic Development",
    author: {
      name: "Isaac Agya Koomson",
      role: "Chief Executive Officer, KIA–Start Up Consult Ltd",
      avatar: "/images/aetf-ai-panel-speaker.jpg",
    },
    publishedAt: "February 2026",
    readingTime: "6 min read",
    heroImage: "/images/aetf-ai-conference-stage.jpg",
    heroCaption: "Presenting on economic systems and continental transformation at the AETF.Ai Conference.",
    featured: true,
    tags: ["Economic Architecture", "Systems Thinking", "Policy", "African Development"],
    content: {
      intro:
        "For decades, development interventions across sub-Saharan Africa have operated under an unspoken assumption: train enough individuals, distribute micro-grants, and sustainable economic transformation will follow naturally. The empirical reality tells a sobering story. While Africa boasts the highest rate of entrepreneurship per capita globally, it simultaneously suffers from the highest venture mortality rate and lowest average productivity per SME. The fundamental bottleneck is not lack of individual drive — it is the absence of coordinated economic architecture.",
      sections: [
        {
          heading: "The Disconnected Pipeline",
          paragraphs: [
            "In a functional economy, six core layers exist in continuous synchronization: Policy sets the regulatory and fiscal framework; Skills equip the workforce; Enterprises structure ideas into bankable legal vehicles; Capital provides patient growth fuel; Technology optimizes operations; and Markets absorb the resulting output.",
            "Across most African ecosystems today, these layers exist as isolated islands. Universities graduate thousands of ambitious young minds who enter a vacuum of uncoordinated enterprise infrastructure. Microfinance lenders offer high-interest capital to informal operators who lack standard accounting systems. Governments launch ambitious national transformation agendas that fail to reach the street-level SME.",
          ],
          pullQuote:
            "Africa is not a continent of problems to be solved. It is a continent of systems waiting to be built correctly.",
        },
        {
          heading: "Moving from Subsistence to Productivity",
          paragraphs: [
            "Real economic transformation occurs when micro-enterprises transition into productive, formalized, tax-paying, and employable institutions. This transition cannot happen through unassisted hustle. It requires structured enterprise development pipelines.",
            "Through platforms like the Adwuma Enterprise Pipeline™ and Nkabom Business Advance™, KIA–Start Up Consult bridges this chasm by designing the technical mechanisms that convert raw human potential into formal economic machinery.",
          ],
        },
        {
          heading: "The Role of Institutional Alignment",
          paragraphs: [
            "To achieve continental scale, interventions must align with macroeconomic targets — including the African Union Agenda 2063, AfCFTA trade corridors, and United Nations Sustainable Development Goals.",
            "When national ministries, bilateral development agencies, and private capital providers align behind a unified architecture, transactional friction drops, systemic risk is mitigated, and capital mobilizes at multiples previously deemed impossible.",
          ],
        },
      ],
      takeaways: [
        "Entrepreneurship training without an integrated capital and market architecture yields high venture mortality.",
        "Systemic formalization and digital operational infrastructure are prerequisite conditions for SME scalability.",
        "Institutional alignment between government frameworks and private capital is essential to achieve long-term economic sovereignty.",
      ],
    },
    relatedSlugs: [
      "from-ideation-to-investment-readiness",
      "ai-for-african-industry-sme-adoption",
      "financing-next-african-economy-blended-capital",
    ],
  },
  {
    slug: "from-ideation-to-investment-readiness",
    title: "From Ideation to Investment Readiness: A Blueprint for Ghanaian Startups",
    excerpt:
      "Why 90% of pitch decks fail to secure capital, and the foundational disciplines Ghanaian founders must master before approaching institutional investors.",
    category: "Entrepreneurship",
    author: {
      name: "Isaac Agya Koomson",
      role: "Chief Executive Officer, KIA–Start Up Consult Ltd",
      avatar: "/images/gdiw-keynote-speaking.jpg",
    },
    publishedAt: "January 2026",
    readingTime: "5 min read",
    heroImage: "/images/gdiw-keynote-podium.jpg",
    heroCaption: "Keynote address on enterprise incubation and capital readiness at Ghana Digital Innovation Week.",
    featured: false,
    tags: ["Startup", "Investment Readiness", "Ghana Business", "Venture Building"],
    content: {
      intro:
        "Every week, founders pitch ideas with tremendous societal value, yet walk away from institutional investors empty-handed. The common diagnosis is 'investors don't understand our market.' The truth is far simpler: investors do not underwrite good ideas; they underwrite structured risk, verifiable governance, and repeatable unit economics.",
      sections: [
        {
          heading: "The Three Pillars of Investment Readiness",
          paragraphs: [
            "Before seeking external funding, a venture must satisfy three non-negotiable criteria: Legal and Governance hygiene, Financial transparency and historical bookkeeping, and Unit economic viability.",
            "Founders frequently mistake pitch deck design for readiness. A pitch deck is merely an executive summary of an operational reality. If that reality lacks audited books, structured contracts, and intellectual property protection, no graphic design will save the deal.",
          ],
          pullQuote:
            "Investors do not underwrite passion. They underwrite structured risk and repeatable economic engines.",
        },
        {
          heading: "The Role of HopeFusion Africa™",
          paragraphs: [
            "At KIA–Start Up Consult, our HopeFusion Africa™ platform acts as a bridge between early-stage ventures and formal capital providers. We work hands-on with founders to restructure balance sheets, establish governance boards, and stress-test financial projections before investor meetings take place.",
          ],
        },
      ],
      takeaways: [
        "Separate founder personal finances from company accounts from day zero.",
        "Understand your Customer Acquisition Cost (CAC) and Lifetime Value (LTV) dynamics.",
        "Establish an advisory board early to demonstrate governance maturity.",
      ],
    },
    relatedSlugs: [
      "missing-architecture-african-enterprise-systems",
      "financing-next-african-economy-blended-capital",
    ],
  },
  {
    slug: "ai-for-african-industry-sme-adoption",
    title: "AI for African Industry: Practical Adoption Frameworks for SMEs",
    excerpt:
      "Cutting through the hype to deliver practical artificial intelligence and automation frameworks that reduce operating costs and boost productivity for African businesses.",
    category: "AI & Technology",
    author: {
      name: "Isaac Agya Koomson",
      role: "Chief Executive Officer, KIA–Start Up Consult Ltd",
      avatar: "/images/aetf-ai-panel-speaker.jpg",
    },
    publishedAt: "December 2025",
    readingTime: "5 min read",
    heroImage: "/images/aetf-ai-panel-discussion.jpg",
    heroCaption: "Panel discussion on AI for Africa: Unlocking opportunities for education, innovation, and sustainable development.",
    featured: false,
    tags: ["Artificial Intelligence", "Digital Transformation", "SME Modernization", "Tech Adoption"],
    content: {
      intro:
        "Artificial Intelligence discussions across Africa often vacillate between extreme hype and distant theoretical futures. Meanwhile, hundreds of thousands of established SMEs struggle with inventory leakages, manual customer response delays, and fragmented bookkeeping. AI's immediate value in Africa is not futuristic robotics — it is pragmatic operational optimization.",
      sections: [
        {
          heading: "Where African SMEs Can Win With AI Today",
          paragraphs: [
            "The most immediate ROI for African businesses lies in three pragmatic domains: conversational customer onboarding (especially via WhatsApp-first architectures), automated financial reconciliation, and demand forecasting in retail and agribusiness.",
            "By implementing automated workflow orchestration, businesses in Ghana and West Africa can eliminate up to 40% of repetitive administrative overhead without laying off talent — liberating staff to focus on high-touch client relationships and sales.",
          ],
          pullQuote:
            "AI's greatest promise for African SMEs is not replacing human labor — it is amplifying human productivity across broken administrative systems.",
        },
        {
          heading: "The Digital Readiness Audit",
          paragraphs: [
            "Before purchasing enterprise AI licenses, businesses must conduct a data audit. AI applied to corrupt or chaotic manual data simply produces faster chaos. KIA's Digital & Technology Transformation team assists firms in structuring their data foundations first.",
          ],
        },
      ],
      takeaways: [
        "Focus on low-hanging automation fruit: WhatsApp customer routing, invoicing, and inventory logs.",
        "Data hygiene is the prerequisite for any machine learning deployment.",
        "Train internal champions rather than relying on detached outsourced tech vendors.",
      ],
    },
    relatedSlugs: [
      "missing-architecture-african-enterprise-systems",
      "modernizing-sme-informal-to-bankable",
    ],
  },
  {
    slug: "modernizing-sme-informal-to-bankable",
    title: "Modernizing the SME: Transitioning from Informal Hustle to Bankable Enterprise",
    excerpt:
      "A systematic roadmap for small business owners in Ghana seeking to build institutional structure, access commercial credit, and scale operations.",
    category: "SME Growth",
    author: {
      name: "KIA Strategic Advisory Team",
      role: "Enterprise Advisory Practice, KIA–Start Up Consult Ltd",
      avatar: "/images/mentorship-consulting.jpg",
    },
    publishedAt: "November 2025",
    readingTime: "4 min read",
    heroImage: "/images/mentorship-consulting.jpg",
    heroCaption: "Hands-on enterprise strategy and business restructuring session with an emerging SME founder.",
    featured: false,
    tags: ["SME Growth", "Business Restructuring", "Productivity", "Formalization"],
    content: {
      intro:
        "In Ghana, small and medium enterprises constitute over 90% of operating businesses and provide roughly 70% of national employment. Yet the overwhelming majority remain informal, cash-based, and reliant entirely on the physical presence of the founder. Transitioning from a self-employed hustle to an enduring commercial enterprise requires a structured transformation.",
      sections: [
        {
          heading: "Breaking the Founder Bottleneck",
          paragraphs: [
            "When the business owner cannot take a 3-week vacation without sales stopping, they don't own an enterprise; they own an exhausting job. Building Standard Operating Procedures (SOPs), delegating operational authority, and implementing digital management tools are the first steps to enterprise value creation.",
            "Under the Nkabom Business Advance™ program, KIA guides established SMEs through operational diagnostic reviews, identifying bottlenecks in inventory, cash handling, and employee accountability.",
          ],
          pullQuote:
            "An enterprise only becomes bankable when its revenues do not depend on the physical presence of its founder.",
        },
      ],
      takeaways: [
        "Document your core processes into simple step-by-step operating guidelines.",
        "Implement basic digital POS and accounting software to generate verifiable financial statements.",
        "Register your business formally with the Registrar General's Department and GRA.",
      ],
    },
    relatedSlugs: [
      "from-ideation-to-investment-readiness",
      "financing-next-african-economy-blended-capital",
    ],
  },
  {
    slug: "financing-next-african-economy-blended-capital",
    title: "Financing the Next African Economy: Blended Capital & Green Growth",
    excerpt:
      "How blended finance, catalytic philanthropy, and impact investment can bridge the $330B SME financing gap across sub-Saharan Africa.",
    category: "Capital & Investment",
    author: {
      name: "Isaac Agya Koomson",
      role: "Chief Executive Officer, KIA–Start Up Consult Ltd",
      avatar: "/images/undp-partnership-meeting.jpg",
    },
    publishedAt: "October 2025",
    readingTime: "6 min read",
    heroImage: "/images/undp-partnership-meeting.jpg",
    heroCaption: "Strategic engagement on international blended finance and financing for development at the UNDP desk.",
    featured: false,
    tags: ["Blended Finance", "UNDP", "Climate Finance", "Sustainable Development"],
    content: {
      intro:
        "Commercial banks across Africa face stringent prudential requirements that make direct lending to early-stage SMEs virtually impossible at scale. Traditional venture capital, on the other hand, targets only the top 1% of software platforms. The vast missing middle — agribusinesses, light manufacturing, clean energy providers, and logistics operators — requires blended capital.",
      sections: [
        {
          heading: "The Mechanics of Blended Finance",
          paragraphs: [
            "Blended finance uses catalytic capital from public or philanthropic sources (such as UNDP, bilateral donors, and development finance institutions) to de-risk investments and crowd in private commercial capital. By taking first-loss positions or subsidizing technical assistance, blended structures unlock funding that would otherwise remain dormant.",
            "KIA–Start Up Consult collaborates with international development partners and private financiers to structure investable vehicles that direct funding to sustainable, job-creating enterprises.",
          ],
          pullQuote:
            "To fund Africa's real economy, we must construct the financial pipelines that allow development capital to de-risk private institutional investment.",
        },
      ],
      takeaways: [
        "SMEs with verified ESG (environmental and social governance) metrics access cheaper capital.",
        "Blended finance structures are the primary vehicle for unlocking mid-scale infrastructure and manufacturing in Africa.",
        "Institutional alignment with bodies like UNDP and UNEP creates immediate international co-financing pathways.",
      ],
    },
    relatedSlugs: [
      "missing-architecture-african-enterprise-systems",
      "from-ideation-to-investment-readiness",
    ],
  },
  {
    slug: "bridging-skills-to-enterprise-adwuma-pipeline",
    title: "Bridging Skills to Enterprise: Unlocking Youth Potential Through the Adwuma Pipeline",
    excerpt:
      "Turning university and TVET graduates from job seekers into enterprise builders through structured mentorship, market linkages, and digital tooling.",
    category: "Youth Employment",
    author: {
      name: "KIA Community & Programs",
      role: "Youth & Ecosystem Initiatives, KIA–Start Up Consult Ltd",
      avatar: "/images/workshop-youth-engagement.jpg",
    },
    publishedAt: "September 2025",
    readingTime: "4 min read",
    heroImage: "/images/workshop-youth-engagement.jpg",
    heroCaption: "Youth and emerging tech creators participating in active workshop Q&A and startup ideation.",
    featured: false,
    tags: ["Youth Employment", "TVET", "Entrepreneurship Programs", "Adwuma"],
    content: {
      intro:
        "Every year, hundreds of thousands of energetic young Africans graduate from tertiary institutions and technical training centers with dreams of productive careers. Yet the formal job market absorbs fewer than 15% of new entrants. The only viable path to large-scale youth prosperity is preparing young people to create viable enterprises.",
      sections: [
        {
          heading: "The Adwuma Enterprise Pipeline™ Methodology",
          paragraphs: [
            "The Adwuma Enterprise Pipeline™ is structured to move candidates systematically through four phases: Opportunity Identification, Business Model Prototyping, Legal & Digital Foundation, and Market Access.",
            "By embedding practical mentorship, peer learning, and immediate micro-market testing, participants graduate not with theoretical certificates, but with operating revenue-generating enterprises.",
          ],
          pullQuote:
            "Youth empowerment is meaningless without a structured economic pipeline that translates skills into revenue.",
        },
      ],
      takeaways: [
        "Entrepreneurship education must focus on real-world customer acquisition from day one.",
        "Digital tools enable micro-ventures to operate with the efficiency of larger firms.",
        "Community mentorship networks drastically reduce first-year startup failure rates.",
      ],
    },
    relatedSlugs: [
      "missing-architecture-african-enterprise-systems",
      "from-ideation-to-investment-readiness",
    ],
  },
];

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): InsightArticle {
  return insightArticles.find((a) => a.featured) || insightArticles[0];
}

export function getRelatedArticles(slug: string): InsightArticle[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  return current.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is InsightArticle => Boolean(a));
}
