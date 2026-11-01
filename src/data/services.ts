export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  overview: string;
  strategicRelevance: string;
  targetBeneficiaries: string[];
  deliveryMethodology: string[];
  potentialOutputs: string[];
  expectedOutcomes: string[];
  category: 'Strategy & Governance' | 'Capacity & Leadership' | 'Education' | 'Sustainability';
}

export const servicesData: Service[] = [
  {
    id: 'strategic-management',
    number: '01',
    title: 'Strategic Management & Organizational Advisory',
    shortDescription: 'Guiding institutional leaders through strategic diagnostics, roadmap formulation, restructuring, and mission alignment.',
    overview: 'We support organizations, educational bodies, and development agencies to navigate institutional complexity, define strategic priorities, and formulate multi-year execution roadmaps rooted in sustainable organizational practices.',
    strategicRelevance: 'Institutions facing resource constraints, policy shifts, and evolving donor priorities require clear, evidence-based strategic frameworks that translate intent into high-integrity execution.',
    targetBeneficiaries: [
      'Public sector institutions and departments',
      'Universities and higher education bodies',
      'Non-profit and non-governmental organizations',
      'Development programmes and corporate foundations'
    ],
    deliveryMethodology: [
      'Comprehensive institutional diagnostic & stakeholder interviews',
      'Strategic visioning & theory-of-change workshops',
      'Execution roadmap & KPI framework co-design',
      'Implementation stewardship and governance checkpoints'
    ],
    potentialOutputs: [
      'Multi-year Strategic Plan & Results Framework',
      'Organizational Capability Diagnostic Report',
      'Resource Mobilization & Sustainability Blueprint',
      'Executive Leadership Briefing Deck'
    ],
    expectedOutcomes: [
      'Enhanced organizational clarity and resource allocation efficiency',
      'Stronger board and executive alignment on strategic goals',
      'Increased readiness for institutional partnerships and donor compliance'
    ],
    category: 'Strategy & Governance'
  },
  {
    id: 'leadership-executive-development',
    number: '02',
    title: 'Leadership & Executive Development',
    shortDescription: 'Immersive leadership learning journeys designed for senior decision-makers, emerging executives, and civic leaders.',
    overview: 'Our leadership frameworks synthesize contextual emotional intelligence, systems thinking, ethical stewardship, and adaptive problem-solving to cultivate leaders capable of navigating modern developmental and organizational pressures.',
    strategicRelevance: 'Effective development outcomes require leaders who understand complex socio-economic realities, practice servant leadership, and inspire high-performing teams.',
    targetBeneficiaries: [
      'Executive directors and senior programme managers',
      'Departmental heads and university deans',
      'Emerging public policy and civil society leaders',
      'Corporate sustainability and CSR directors'
    ],
    deliveryMethodology: [
      'Peer-learning cohorts and executive reflection retreats',
      '360-degree leadership diagnostics and individual coaching',
      'Action-learning projects focused on live institutional dilemmas',
      'Masterclasses led by seasoned practitioners and sector experts'
    ],
    potentialOutputs: [
      'Personal Leadership Development Action Plans',
      'Cohort Synthesis and Collective Challenge Roadmaps',
      'Institutional Leadership Competency Rubrics'
    ],
    expectedOutcomes: [
      'Elevated strategic thinking and cross-functional leadership agility',
      'Strengthened ethical governance and accountability cultures',
      'Establishment of an enduring community of practice among peers'
    ],
    category: 'Capacity & Leadership'
  },
  {
    id: 'professional-training-capacity-building',
    number: '03',
    title: 'Professional Training & Capacity Building',
    shortDescription: 'Modular, evidence-informed training curricula that strengthen functional competency across teams.',
    overview: 'We design and facilitate customized adult-learning programmes covering project cycle management, strategic communication, data-informed decision-making, and participatory development practices.',
    strategicRelevance: 'Sustainable institutional development is impossible without deep, ongoing investment in the technical and adaptive capabilities of operational staff and front-line practitioners.',
    targetBeneficiaries: [
      'Programme officers and technical field specialists',
      'Education practitioners and instructional coaches',
      'Community development facilitators',
      'Monitoring and compliance officers'
    ],
    deliveryMethodology: [
      'Blended learning modules with asynchronous preparation',
      'Hands-on simulations, case clinics, and group challenges',
      'Pre- and post-competency assessments for validated learning gains',
      'On-the-job application assignments with mentor feedback'
    ],
    potentialOutputs: [
      'Customized Training Manuals & Facilitator Toolkits',
      'Pre/Post Training Evaluation & Competency Reports',
      'Digital Knowledge Repositories and Reference Guides'
    ],
    expectedOutcomes: [
      'Measurable increases in functional job execution and project delivery',
      'Standardized operational protocols across regional offices',
      'Higher staff retention through continuous professional growth'
    ],
    category: 'Capacity & Leadership'
  },
  {
    id: 'education-sector-development',
    number: '04',
    title: 'Education Sector Development & Transformation',
    shortDescription: 'Comprehensive school improvement models, curriculum innovation, pedagogical reform, and education governance.',
    overview: 'WUM works with schooling systems, education foundations, and donor initiatives to modernize teaching practice, elevate head-teacher leadership, and create child-centered, inclusive learning environments.',
    strategicRelevance: 'Education systems across South Asia face acute learning poverty, climate disruptions, and governance bottlenecks that require holistic, scalable reform.',
    targetBeneficiaries: [
      'Primary, secondary, and higher secondary school networks',
      'Provincial education departments and teacher training institutes',
      'Private and public-private partnership education foundations',
      'Community-based education committees'
    ],
    deliveryMethodology: [
      'School culture and instructional quality audits',
      'Head-teacher instructional leadership coaching',
      'Teacher professional learning communities (PLCs)',
      'Community school management committee (SMC) activation'
    ],
    potentialOutputs: [
      'School Improvement Framework & Quality Standards Guide',
      'Instructional Leadership Mentoring Modules',
      'Teacher Pedagogical Toolkits for Active Learning'
    ],
    expectedOutcomes: [
      'Substantive improvement in classroom pedagogy and student engagement',
      'Empowered school principals who act as learning leaders',
      'Stronger community ownership and school safety governance'
    ],
    category: 'Education'
  },
  {
    id: 'institutional-strengthening-governance',
    number: '05',
    title: 'Institutional Strengthening & Governance',
    shortDescription: 'Establishing robust oversight, compliance structures, operating manuals, and accountable organizational systems.',
    overview: 'We support emerging and mature organizations in institutionalizing policies, establishing transparent internal controls, refining board governance, and meeting stringent international donor compliance requirements.',
    strategicRelevance: 'Sound governance is the prerequisite for organizational durability, preventing fiduciary failure and securing multi-year development donor investments.',
    targetBeneficiaries: [
      'Governing boards and executive committees',
      'Growing NGOs transitioning to institutional maturity',
      'Autonomous educational and research bodies',
      'Public-private partnership entities'
    ],
    deliveryMethodology: [
      'Governance gap analysis against international benchmarks',
      'Board retreat facilitation and charter development',
      'Standard Operating Procedure (SOP) codification workshops',
      'Internal audit preparedness simulations'
    ],
    potentialOutputs: [
      'Institutional Governance Charter & By-laws',
      'Standard Operating Procedures Manual (Finance, HR, Operations)',
      'Conflict of Interest & Whistleblower Policies',
      'Risk Register and Mitigation Matrix'
    ],
    expectedOutcomes: [
      'Reduced fiduciary and operational vulnerability',
      'Enhanced donor due-diligence audit scores',
      'Transparent decision-making structures across governance tiers'
    ],
    category: 'Strategy & Governance'
  },
  {
    id: 'meal-evaluation',
    number: '06',
    title: 'Monitoring, Evaluation, Accountability & Learning (MEAL)',
    shortDescription: 'Designing robust data systems, baseline studies, mid-term reviews, and participatory feedback mechanisms.',
    overview: 'Our MEAL practice delivers transparent, objective evidence on development initiatives, helping implementers understand true impact, correct courses early, and account faithfully to communities and donors.',
    strategicRelevance: 'Rigorous MEAL transforms compliance data into actionable organizational intelligence and guarantees that community voices actively shape programme decisions.',
    targetBeneficiaries: [
      'Donor agencies and multilateral grant programmes',
      'Executing non-governmental organizations',
      'Education and climate adaptation initiatives',
      'Social impact investors'
    ],
    deliveryMethodology: [
      'Theory of Change and logical framework formulation',
      'Mixed-methods field surveys and focus group discussions',
      'Digital data collection workflows with real-time dashboards',
      'Participatory learning workshops and feedback loops'
    ],
    potentialOutputs: [
      'Project MEAL Plan & Data Management Protocol',
      'Independent Baseline, Mid-Term, or End-Line Evaluation Reports',
      'Case Study Compendiums of Documented Learnings',
      'Interactive Indicator Tracking Dashboards'
    ],
    expectedOutcomes: [
      'Verifiable, audit-ready performance data for donor reporting',
      'Continuous programmatic adaptation based on real-time field realities',
      'Direct accountability mechanisms that empower marginalized beneficiaries'
    ],
    category: 'Strategy & Governance'
  },
  {
    id: 'research-policy-knowledge',
    number: '07',
    title: 'Research, Policy & Knowledge Development',
    shortDescription: 'Rigorous qualitative and quantitative policy research, working papers, sector studies, and actionable briefs.',
    overview: 'We conduct grounded developmental research that bridges academic rigor and practical policymaking, delivering contextual analysis on education access, climate vulnerability, and institutional performance.',
    strategicRelevance: 'Development interventions often falter when designed in isolation from local socio-cultural, political, and ecological realities.',
    targetBeneficiaries: [
      'Policy think tanks and government planning commissions',
      'International development partners and UN agencies',
      'Academic consortia and research institutions',
      'Advocacy coalitions and civil society alliances'
    ],
    deliveryMethodology: [
      'Desk reviews and comparative institutional benchmarking',
      'Key informant interviews with policymakers and community leaders',
      'Qualitative thematic synthesis and quantitative data modeling',
      'Policy roundtable facilitation for consensus building'
    ],
    potentialOutputs: [
      'Comprehensive Sector Research Monographs',
      'Actionable Policy Briefs for Decision-Makers',
      'Working Papers on Emerging Development Challenges',
      'Executive White Papers on Institutional Reform'
    ],
    expectedOutcomes: [
      'Evidence-grounded policy formulation by government partners',
      'Enriched public and academic debate on critical development priorities',
      'Credible knowledge assets that elevate organizational positioning'
    ],
    category: 'Strategy & Governance'
  },
  {
    id: 'sustainability-climate-resilience',
    number: '08',
    title: 'Sustainability & Climate Resilience',
    shortDescription: 'Mainstreaming climate adaptation into educational infrastructure, institutional planning, and community action.',
    overview: 'We assist institutions, school systems, and communities in assessing vulnerability to climate shocks, retrofitting critical physical assets, and embedding environmental stewardship into regular institutional routines.',
    strategicRelevance: 'With extreme weather events increasing in frequency and severity in Pakistan, building climate-resilient schools and communities is an existential development priority.',
    targetBeneficiaries: [
      'Vulnerable rural and peri-urban school communities',
      'Disaster management authorities and local governments',
      'Climate-focused non-profit organizations',
      'Corporate sustainability officers'
    ],
    deliveryMethodology: [
      'Climate vulnerability and structural resilience assessments',
      'Participatory community hazard mapping and disaster risk reduction',
      'Eco-friendly infrastructure adaptation planning (solar, water, shading)',
      'Climate education curricula for youth and teachers'
    ],
    potentialOutputs: [
      'School Climate Vulnerability Assessment Scorecards',
      'Resilient Retrofitting and Green Upgrading Guidelines',
      'Community Disaster Preparedness Standard Protocols',
      'Environmental Education Teacher Training Packages'
    ],
    expectedOutcomes: [
      'Protected educational continuity during recurring heat waves and seasonal floods',
      'Empowered local communities who maintain resilient public assets',
      'Institutional alignment with UN Sustainable Development Goals (SDGs 4, 11, 13)'
    ],
    category: 'Sustainability'
  },
  {
    id: 'digital-transformation-ai',
    number: '09',
    title: 'Digital Transformation & AI Integration',
    shortDescription: 'Ethical, accessible digital workflows, learning management systems, and practical AI literacy for institutions.',
    overview: 'We demystify digital transformation and emerging technologies for education and development bodies, focusing on low-bandwidth, accessible digital tools that enhance institutional productivity and learning outcomes.',
    strategicRelevance: 'Technological equity requires intentional capacity building so non-profit and public sector organizations can leverage modern data tools without falling victim to digital divides.',
    targetBeneficiaries: [
      'Educational institutions seeking hybrid learning models',
      'Non-profit operational teams needing streamlined workflows',
      'Teachers and educational administrators',
      'Youth entering the digital knowledge economy'
    ],
    deliveryMethodology: [
      'Digital readiness and technological gap diagnostics',
      'Human-centered digital workflow redesign',
      'Practical AI literacy workshops for educators and executives',
      'Low-code and open-source data tooling deployment'
    ],
    potentialOutputs: [
      'Digital Transformation Strategy & Architecture Roadmap',
      'Ethical AI Guidelines for Institutional Use',
      'Digital Educator Training Modules & Resource Kits'
    ],
    expectedOutcomes: [
      'Reduced administrative overhead through automated reporting',
      'Responsible, confident adoption of digital tools by educators',
      'Bridged technological divides in underserved educational contexts'
    ],
    category: 'Education'
  },
  {
    id: 'project-design-implementation',
    number: '10',
    title: 'Project Design & Implementation Support',
    shortDescription: 'End-to-end assistance from concept note formulation and proposal writing to field implementation stewardship.',
    overview: 'We provide specialized technical assistance to organizations preparing bids, designing multi-stakeholder interventions, and establishing field project governance for timely, high-fidelity delivery.',
    strategicRelevance: 'High-impact development initiatives often struggle at the transition point between donor proposals and practical field execution.',
    targetBeneficiaries: [
      'Consortium leads applying for major institutional grants',
      'Local NGOs seeking technical proposal partnership',
      'Social enterprises launching pilot interventions',
      'Philanthropic foundations executing direct initiatives'
    ],
    deliveryMethodology: [
      'Co-creation and joint proposal formulation workshops',
      'Work breakdown structures and procurement plan modeling',
      'Field team onboarding and operational manual rollout',
      'Mid-cycle implementation health checks'
    ],
    potentialOutputs: [
      'Comprehensive Project Proposals & Budget Narratives',
      'Detailed Implementation Plan (DIP) and Gantt Frameworks',
      'Stakeholder Engagement & Safeguarding Charters'
    ],
    expectedOutcomes: [
      'Competitive, technically sound submissions to institutional donors',
      'Seamless transition from project award to on-the-ground deployment',
      'Zero-surprise budget and timeline fidelity across the project lifecycle'
    ],
    category: 'Strategy & Governance'
  }
];
