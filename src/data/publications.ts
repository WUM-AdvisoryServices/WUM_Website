export interface Publication {
  id: string;
  title: string;
  category: 'Policy Briefs' | 'Working Papers' | 'Education & Leadership' | 'Sustainability & Climate' | 'Toolkits & Frameworks';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  keyInsights: string[];
  fullContent?: string;
  downloadLabel: string;
  downloadFilename: string;
}

export const publicationsData: Publication[] = [
  {
    id: 'crit-technical-brief-2026',
    title: 'Climate Resilience in Primary Educational Infrastructure: Architectural and Community Paradigms for South Asia',
    category: 'Sustainability & Climate',
    date: 'October 2026',
    author: 'WUM Research & Advisory Team',
    readTime: '8 min read',
    summary: 'An analytical review of climate hazards affecting school continuity across Pakistan, highlighting passive thermal cooling, elevated foundation engineering, and community-led maintenance as critical pillars of climate adaptation.',
    keyInsights: [
      'Over 27,000 schools in Pakistan suffered structural damage during historical extreme climate events, illustrating an urgent need for preventive retrofitting.',
      'Passive architectural techniques (e.g. high-thermal-mass earthen construction, cross-ventilation, and roof overhangs) can reduce indoor classroom temperatures by 4°C to 7°C during extreme heat periods without electric air conditioning.',
      'Infrastructure projects that establish formal School Management Committee (SMC) maintenance funds exhibit a 3.4x higher survival rate of critical water and electrical assets.'
    ],
    fullContent: `Educational infrastructure in Pakistan operates at the sharp frontier of global climate change. Between rising summer temperature anomalies exceeding 45°C in southern plains and seasonal monsoon flash floods in mountainous river valleys, schools frequently experience forced closures, physical destruction, and prolonged educational disruption.\n\nThis working brief argues that capital-intensive, standardized concrete construction models imported without contextual adaptation frequently exacerbate thermal discomfort and structural vulnerability. Concrete slab roofs without shade or insulation turn rural classrooms into thermal traps during summer months.\n\nThe CRIT (Climate-Resilient School Infrastructure Toolkit) framework advocates for three complementary technical interventions:\n1. Elevated Plinths & Controlled Drainage: Positioning school foundations at least 0.75m above historical high-flood marks with permeable perimeter gravel beds.\n2. Passive Thermal Regulation: Utilizing double-layered ventilated roofs, indigenous lime-clay plaster mixes, and deep verandas to shield learning spaces from solar radiation.\n3. Decentralized Micro-Utilities: Integrating solar PV generation with rainwater harvesting cisterns to guarantee uninterrupted water, sanitation, and lighting regardless of grid breakdown.\n\nCrucially, technology and architecture alone cannot sustain resilience. The foundational pillar of CRIT is participatory community governance, wherein local artisans and parent committees receive formalized training in preventative maintenance and post-disaster rapid assessment.`,
    downloadLabel: 'Download Technical Brief (PDF Summary)',
    downloadFilename: 'CRIT_Technical_Brief_WUM_Advisory_2026.pdf'
  },
  {
    id: 'instructional-leadership-rethinking',
    title: 'Rethinking School Leadership: From Administrative Custodians to Instructional Catalysts',
    category: 'Education & Leadership',
    date: 'September 2026',
    author: 'Waqas Umer Malik & Advisory Faculty',
    readTime: '6 min read',
    summary: 'Why traditional headmaster roles in developing education ecosystems must shift from bureaucratic gatekeeping to pedagogical leadership to overcome entrenched learning poverty.',
    keyInsights: [
      'Head teachers currently spend up to 78% of their working hours on administrative reporting and non-academic paperwork, leaving less than 15% for instructional coaching.',
      'Classroom observation coupled with supportive, non-punitive teacher feedback produces measurable improvements in student literacy within a single academic term.',
      'Professional Learning Communities (PLCs) within schools build peer accountability and reduce teacher absenteeism significantly.'
    ],
    fullContent: `For decades, school leadership in developing educational systems has been defined primarily by administrative compliance: maintaining student attendance registers, overseeing fee collections or government textbook distribution, and responding to clerical inquiries from regional education offices.\n\nHowever, global educational research consistently confirms that after classroom teaching quality, the principal's leadership is the single most influential institutional determinant of student learning outcomes.\n\nIn this policy brief, WUM Advisory presents an actionable framework for reallocating leadership bandwidth toward instructional coaching:\n- Structured Lesson Observation Protocols: Equipping heads with concise, diagnostic rubrics focused on student active participation rather than teacher compliance.\n- Bi-Weekly Reflective Teacher Clinics: Replacing punitive administrative inspections with collaborative pedagogical discussions where teachers analyze student work samples together.\n- Distributed Leadership: Delegating routine logistical responsibilities to senior staff committees to free dedicated daily hours for classroom walkthroughs and instructional mentoring.`,
    downloadLabel: 'Download Policy Paper (PDF)',
    downloadFilename: 'Instructional_Leadership_WUM_Advisory_2026.pdf'
  },
  {
    id: 'institutional-durability-governance',
    title: 'Institutional Durability in Civil Society: Overcoming the Founder Trap and Grant Dependency',
    category: 'Policy Briefs',
    date: 'August 2026',
    author: 'WUM Governance Advisory Practice',
    readTime: '7 min read',
    summary: 'A strategic advisory paper detailing structural pathways for grassroots organizations to transition from informal founder-centric management to durable, board-governed institutions.',
    keyInsights: [
      'Organizations lacking codified Standard Operating Procedures (SOPs) face severe operational paralysis during key leadership transitions.',
      'Diversifying funding across earned-income models, local philanthropic trusts, and multi-year donor partnerships reduces existential vulnerability.',
      'An independent, skill-diverse governing board is essential for long-term strategic credibility and donor compliance.'
    ],
    fullContent: `Non-profit organizations and social enterprises in emerging economies are commonly initiated by passionate individual founders. While founder charisma is indispensable in the initial mobilization phase, it often becomes a bottleneck as the organization scales.\n\nWithout codified delegation, independent board governance, and transparent financial controls, organizations risk financial vulnerability, staff burnout, and an inability to absorb large institutional grants.\n\nThis paper outlines WUM Advisory's Six-Pillar Institutional Strengthening Model:\n1. Board Independence & Charter Clarity\n2. Financial Controls & Dual Authorization Protocols\n3. Objective HR & Merit-Based Talent Retention\n4. Transparent Program Cycle Management & MEAL Integration\n5. Risk Registry & Whistleblower Protections\n6. Sustainable Institutional Reserve Management.`,
    downloadLabel: 'Download Governance Guide (PDF)',
    downloadFilename: 'Institutional_Durability_WUM_Advisory_2026.pdf'
  },
  {
    id: 'sdg-localization-framework-2026',
    title: 'Localizing Sustainable Development Goals in District-Level Education Planning',
    category: 'Toolkits & Frameworks',
    date: 'July 2026',
    author: 'WUM Sustainability Practice',
    readTime: '10 min read',
    summary: 'A practical framework translating global SDG 4 (Quality Education) and SDG 13 (Climate Action) targets into tangible district-level action indicators.',
    keyInsights: [
      'Broad national SDG reporting frequently masks wide disparities between metropolitan centers and rural district educational outcomes.',
      'Localizing indicators enables district education officers and community committees to track climate-induced school dropouts in real time.',
      'Public-private-civil society triads represent the most viable operational mechanism for financing resilient school infrastructure.'
    ],
    fullContent: `While the United Nations 2030 Agenda provides a comprehensive global blueprint for sustainable development, its impact is often diluted at the grassroots level due to high-level abstractions and lack of localized indicator ownership.\n\nThis toolkit provides educational planners and NGO coordinators with a step-by-step methodology to map district-level educational interventions directly against targets 4.1 (free, equitable primary education), 4.a (safe, inclusive learning environments), and 13.1 (climate resilience).`,
    downloadLabel: 'Download Toolkit & Indicators Matrix (PDF)',
    downloadFilename: 'SDG_Localization_Framework_WUM_2026.pdf'
  },
  {
    id: 'ai-ethics-education-south-asia',
    title: 'Ethical Artificial Intelligence in Education: Navigating the Digital Divide in Emerging Economies',
    category: 'Working Papers',
    date: 'June 2026',
    author: 'WUM Digital Transformation Unit',
    readTime: '9 min read',
    summary: 'Examining both the transformative potential and ethical hazards of deploying generative AI tools in resource-constrained schooling environments.',
    keyInsights: [
      'AI tools offer unprecedented opportunities to augment teacher lesson design and create differentiated bilingual materials rapidly.',
      'Without intentional digital equity safeguards, AI adoption risks exacerbating learning gaps between elite private institutions and under-resourced public schools.',
      'Educator digital literacy must prioritize critical evaluation of AI outputs rather than passive consumption.'
    ],
    fullContent: `As generative AI models rapidly proliferate, educational institutions across South Asia face a dual challenge: the imperative to equip learners for an AI-augmented knowledge economy, balanced against the severe risk of exacerbating existing educational inequalities.\n\nThis working paper explores pragmatic, low-bandwidth AI applications that empower teachers rather than replacing them. We examine how teacher training can incorporate prompt literacy, hallucination detection, contextual adaptation in regional languages (such as Urdu), and strict student privacy safeguards.`,
    downloadLabel: 'Download Working Paper (PDF)',
    downloadFilename: 'AI_Ethics_Education_WUM_2026.pdf'
  }
];
