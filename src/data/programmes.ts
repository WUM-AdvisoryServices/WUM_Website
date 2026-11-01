export interface Programme {
  id: string;
  title: string;
  category: 'Leadership Development' | 'Education & Professional Learning' | 'Organizational Development' | 'Sustainability & Development';
  duration: string;
  format: 'Cohort Blended' | 'Executive Intensive' | 'Multi-Week Seminar' | 'Workshop Series' | 'Field Immersion';
  status: 'Upcoming Batch Intake' | 'Under Development / Proposed';
  shortDescription: string;
  description: string;
  learningObjectives: string[];
  intendedParticipants: string[];
  deliveryMethods: string[];
  learningOutcomes: string[];
}

export const programmesData: Programme[] = [
  // Leadership Development
  {
    id: 'emerging-leaders',
    title: 'Emerging Leaders Programme',
    category: 'Leadership Development',
    duration: '8 Weeks (Part-Time)',
    format: 'Cohort Blended',
    status: 'Upcoming Batch Intake',
    shortDescription: 'Accelerating early-to-mid career professionals with foundational skills in adaptive leadership, team facilitation, and ethical decision-making.',
    description: 'Designed to build the leadership bench for development, education, and social enterprise sectors. Participants examine personal leadership styles, develop interpersonal influence without authority, and practice practical problem framing for complex organizational environments.',
    learningObjectives: [
      'Deconstruct personal leadership assumptions and adopt an authentic, values-based leadership posture',
      'Master fundamental techniques of adaptive problem-solving and psychological safety in teams',
      'Learn stakeholder mapping, persuasive narrative structuring, and collaborative negotiation'
    ],
    intendedParticipants: [
      'Mid-level managers in education foundations, NGOs, and corporate CSR units',
      'Aspiring project coordinators and team leads',
      'Young civic professionals seeking structured leadership grounding'
    ],
    deliveryMethods: [
      'Weekly interactive virtual masterclasses',
      'Bi-weekly peer triad coaching sessions',
      'Action Learning Project tackling a real institutional challenge',
      'Written reflective leadership journal with mentor feedback'
    ],
    learningOutcomes: [
      'Confidence to lead diverse teams through ambiguity and transition',
      'A completed Individual Leadership Growth Roadmap',
      'Lifelong inclusion in the WUM Leadership Alumni Network'
    ]
  },
  {
    id: 'executive-leadership-development',
    title: 'Executive Leadership Development',
    category: 'Leadership Development',
    duration: '4 Days (Executive Retreat) + 3 Months Mentorship',
    format: 'Executive Intensive',
    status: 'Upcoming Batch Intake',
    shortDescription: 'Advanced institutional stewardship, strategic foresight, and organizational resilience for senior executives and directors.',
    description: 'A rigorous peer-learning experience for senior decision-makers navigating systemic shifts. Focuses on institutional stewardship, governance dynamics, managing strategic paradoxes, and fostering resilient cultures capable of withstanding external volatility.',
    learningObjectives: [
      'Hone strategic foresight to anticipate socio-political, economic, and climatic transitions',
      'Strengthen board governance alignment, risk mitigation, and fiduciary oversight',
      'Cultivate institutional endurance through high-trust executive leadership'
    ],
    intendedParticipants: [
      'Chief Executives, Managing Directors, and Board Trustees',
      'Country Directors and Senior Development Advisors',
      'Deans and Vice Chancellors of higher education institutions'
    ],
    deliveryMethods: [
      'Immersive residential executive retreat with Chatham House rule discussions',
      'Case clinic simulations of high-stakes institutional crises',
      'Confidential 1-on-1 executive coaching sessions with seasoned practitioners'
    ],
    learningOutcomes: [
      'A clear 3-year Institutional Vision & Risk Mitigation Architecture',
      'Mastery of crisis governance protocols and executive presence',
      'Peer advisory relationships with cross-sector senior executives'
    ]
  },
  {
    id: 'transformational-leadership',
    title: 'Transformational Leadership in Development',
    category: 'Leadership Development',
    duration: '6 Weeks',
    format: 'Multi-Week Seminar',
    status: 'Upcoming Batch Intake',
    shortDescription: 'Empowering change agents to mobilize collective action, shift mindsets, and drive systemic reform in public systems.',
    description: 'Transforms conventional managerial mindsets into systems-level catalyst leadership. Explores how to identify leverage points in bureaucratic and institutional systems to achieve scalable, lasting positive impact.',
    learningObjectives: [
      'Understand systemic inertia and how to catalyze collaborative coalitions',
      'Deploy behavioral insights and narrative strategy to inspire change across hierarchies',
      'Measure and sustain long-term transformational momentum'
    ],
    intendedParticipants: [
      'Senior civil servants and public sector reform officers',
      'International NGO country programme directors',
      'Social innovators driving systemic interventions'
    ],
    deliveryMethods: [
      'Interactive modular workshops combining theory and field practice',
      'Expert-led guest dialogues with veteran institutional reformers',
      'Field study analysis of successful transformational initiatives'
    ],
    learningOutcomes: [
      'Systems Transformation Framework for immediate workplace application',
      'Elevated capacity to inspire and align multi-stakeholder coalitions'
    ]
  },
  {
    id: 'women-in-leadership',
    title: 'Women in Leadership & Governance',
    category: 'Leadership Development',
    duration: '6 Weeks',
    format: 'Cohort Blended',
    status: 'Under Development / Proposed',
    shortDescription: 'Equipping female professionals to break institutional glass ceilings, navigate boardrooms, and champion gender-inclusive policies.',
    description: 'A dedicated initiative addressing systemic barriers faced by women in institutional leadership across Pakistan and South Asia. Focuses on executive presence, strategic negotiation, executive networking, and championing gender-responsive organizational governance.',
    learningObjectives: [
      'Develop authoritative executive communication and strategic negotiation techniques',
      'Analyze gender-specific organizational dynamics and build institutional allies',
      'Design inclusive workplace policies that foster equitable advancement pipelines'
    ],
    intendedParticipants: [
      'Mid-to-senior female professionals in development, corporate, and public sectors',
      'Female school leaders, principals, and academic administrators',
      'Aspiring women board members and committee chairs'
    ],
    deliveryMethods: [
      'Masterclasses with prominent female leaders and board members',
      'Small-group executive mentorship Circles',
      'Practical roleplay simulations of high-stakes boardroom scenarios'
    ],
    learningOutcomes: [
      'Strategic Boardroom Readiness Portfolio',
      'Expanded peer network of visionary female leaders across sectors'
    ]
  },
  {
    id: 'youth-leadership-empowerment',
    title: 'Youth Leadership & Social Empowerment',
    category: 'Leadership Development',
    duration: '4 Weeks',
    format: 'Workshop Series',
    status: 'Under Development / Proposed',
    shortDescription: 'Channeling youth civic energy into structured community projects, ethical advocacy, and grassroots social entrepreneurship.',
    description: 'Engaging the demographic dividend of Pakistan. Equips university students and young community advocates with practical skills in community needs assessment, volunteer mobilization, ethical digital advocacy, and sustainable project design.',
    learningObjectives: [
      'Build core civic leadership skills grounded in community empathy and ethics',
      'Learn grassroots project design, budgeting, and community consensus building',
      'Leverage digital platforms for constructive social discourse and evidence-based advocacy'
    ],
    intendedParticipants: [
      'University student leaders, youth activists, and community volunteers (ages 18-28)',
      'Young founders of grassroots community initiatives'
    ],
    deliveryMethods: [
      'Interactive weekend bootcamps and field visits',
      'Seed-initiative design pitch clinics',
      'Mentorship from experienced development practitioners'
    ],
    learningOutcomes: [
      'Actionable micro-grant ready community project proposal',
      'Fundamental civic literacy and grassroots organizing capability'
    ]
  },

  // Education and Professional Learning
  {
    id: 'education-leadership-development',
    title: 'Education Leadership Development',
    category: 'Education & Professional Learning',
    duration: '8 Weeks',
    format: 'Cohort Blended',
    status: 'Upcoming Batch Intake',
    shortDescription: 'Transforming school headmasters and administrators from custodial managers into instructional and pedagogical leaders.',
    description: 'Schools thrive when led by instructional leaders rather than mere building administrators. This programme equips school heads with actionable frameworks for teacher observation, learning culture transformation, child safeguarding, and parental community engagement.',
    learningObjectives: [
      'Transition from administrative compliance to visionary instructional leadership',
      'Master classroom observation and constructive teacher feedback protocols',
      'Establish parent-teacher-community partnerships that support student well-being'
    ],
    intendedParticipants: [
      'School principals, vice principals, and head teachers (public, private, trust schools)',
      'Academic coordinators and education foundation field officers'
    ],
    deliveryMethods: [
      'Bi-weekly instructional coaching workshops',
      'Classroom observation video analysis and rubric calibration',
      'School culture improvement project implemented in participant’s own institution'
    ],
    learningOutcomes: [
      'Institutional School Improvement Action Plan (SIAP)',
      'Documented increase in teacher motivation and instructional quality'
    ]
  },
  {
    id: 'teacher-professional-development',
    title: 'Teacher Professional Development & Active Pedagogy',
    category: 'Education & Professional Learning',
    duration: '4 Weeks (Modular)',
    format: 'Workshop Series',
    status: 'Upcoming Batch Intake',
    shortDescription: 'Practical, low-resource pedagogical strategies that promote critical thinking, student agency, and joyful learning.',
    description: 'Moving beyond rote memorization towards inquiry-based, active classroom learning. Tailored specifically for South Asian classroom realities where resources may be scarce, class sizes large, and student learning needs diverse.',
    learningObjectives: [
      'Implement active learning pedagogies with zero-to-low cost teaching aids',
      'Design formative assessments that identify and remediate learning gaps in real time',
      'Create an inclusive, psychologically safe, and supportive classroom environment'
    ],
    intendedParticipants: [
      'Primary, middle, and secondary school educators',
      'Teacher trainers and pedagogical mentors'
    ],
    deliveryMethods: [
      'Hands-on pedagogical simulation clinics',
      'Micro-teaching sessions with immediate peer and instructor feedback',
      'Practical lesson plan design workshops'
    ],
    learningOutcomes: [
      'Portfolio of 15+ student-centered, active lesson plans',
      'Demonstrated mastery of formative assessment and differentiated instruction'
    ]
  },
  {
    id: 'curriculum-learning-innovation',
    title: 'Curriculum & Learning Innovation',
    category: 'Education & Professional Learning',
    duration: '6 Weeks',
    format: 'Multi-Week Seminar',
    status: 'Under Development / Proposed',
    shortDescription: 'Modernizing curriculum frameworks to integrate 21st-century competencies, climate literacy, and inquiry-based STEM.',
    description: 'Supports curriculum designers and progressive school networks in aligning curricula with modern global benchmarks while honoring local cultural identity and contextual developmental challenges.',
    learningObjectives: [
      'Integrate critical thinking, media literacy, and climate awareness into standard curricula',
      'Design competency-based learning progressions and rubrics',
      'Incorporate experiential, place-based learning modules into syllabus units'
    ],
    intendedParticipants: [
      'Curriculum developers, subject specialists, and textbook writers',
      'School network academic directors'
    ],
    deliveryMethods: [
      'Case study seminars of global and regional curriculum reforms',
      'Collaborative curriculum mapping studios'
    ],
    learningOutcomes: [
      'Modular curriculum enhancement prototype ready for classroom piloting'
    ]
  },
  {
    id: 'digital-learning-ai-literacy',
    title: 'Digital Learning & AI Literacy for Educators',
    category: 'Education & Professional Learning',
    duration: '4 Weeks',
    format: 'Cohort Blended',
    status: 'Upcoming Batch Intake',
    shortDescription: 'Demystifying AI, digital tools, and ethical tech adoption to augment teacher productivity and student engagement.',
    description: 'A grounded, practical approach to educational technology. Helps educators understand generative AI, identify reliable open educational resources, automate time-consuming administrative tasks, and teach safe digital habits to students.',
    learningObjectives: [
      'Understand how AI tools can assist lesson planning, rubric generation, and differentiated materials',
      'Establish ethical classroom guidelines for AI use, academic integrity, and student data privacy',
      'Deploy free, low-bandwidth digital tools that function effectively in low-connectivity settings'
    ],
    intendedParticipants: [
      'School teachers, instructional coordinators, and education technology leads',
      'Non-profit training specialists'
    ],
    deliveryMethods: [
      'Live guided screen-share workshops and tool walkthroughs',
      'Hands-on prompting and digital asset creation labs',
      'Ethical debate seminars on digital equity'
    ],
    learningOutcomes: [
      'Personal AI-assisted instructional workflow saving 5+ hours weekly',
      'Ethical AI adoption policy guideline for their home institution'
    ]
  },

  // Organizational Development
  {
    id: 'strategic-management-od',
    title: 'Strategic Management for Social Purpose Organizations',
    category: 'Organizational Development',
    duration: '5 Weeks',
    format: 'Multi-Week Seminar',
    status: 'Upcoming Batch Intake',
    shortDescription: 'Aligning mission, resources, program delivery, and financial sustainability into a cohesive operational system.',
    description: 'Helps purpose-driven organizations build robust business models that avoid donor dependency. Covers theory of change, program portfolio optimization, and cross-functional performance management.',
    learningObjectives: [
      'Formulate clear theory-of-change and results frameworks aligned with core institutional strengths',
      'Evaluate program portfolios for strategic fit, operational viability, and sustainable funding potential',
      'Establish transparent performance metrics across program and operations teams'
    ],
    intendedParticipants: [
      'Operations directors, program managers, and social enterprise founders',
      'Development sector management professionals'
    ],
    deliveryMethods: [
      'Structured case clinics based on real organizational dilemmas',
      'Peer review studios of strategic roadmaps',
      'Expert advisory feedback on institutional business models'
    ],
    learningOutcomes: [
      'Validated 3-Year Strategic Framework and Program Matrix'
    ]
  },
  {
    id: 'change-management-institutions',
    title: 'Change Management & Institutional Adaptability',
    category: 'Organizational Development',
    duration: '4 Weeks',
    format: 'Workshop Series',
    status: 'Under Development / Proposed',
    shortDescription: 'Navigating organizational restructuring, culture shifts, and technology adoption with minimal friction.',
    description: 'Equips operational managers with the psychological and structural toolsets needed to guide staff through mergers, digitalization, leadership transitions, and strategic pivots without losing momentum.',
    learningObjectives: [
      'Diagnose change resistance and map organizational readiness factors',
      'Structure clear change communication architectures that address uncertainty',
      'Anchor new operational norms through recognition and continuous feedback loops'
    ],
    intendedParticipants: [
      'HR directors, transformation officers, and senior project directors'
    ],
    deliveryMethods: [
      'Interactive roleplay simulations and change stakeholder mapping',
      'Change readiness diagnostic workshops'
    ],
    learningOutcomes: [
      'Tailored Change Management Playbook for immediate rollout'
    ]
  },
  {
    id: 'governance-institutional-effectiveness',
    title: 'Governance & Institutional Effectiveness',
    category: 'Organizational Development',
    duration: '3 Days Intensive',
    format: 'Executive Intensive',
    status: 'Upcoming Batch Intake',
    shortDescription: 'Board stewardship, ethical compliance, conflict resolution, and fiduciary discipline for non-profit and corporate entities.',
    description: 'Designed specifically for board trustees, company secretaries, and executive directors to clarify roles, elevate board committee performance, and institute proactive risk mitigation practices.',
    learningObjectives: [
      'Clarify board vs. management boundaries to eliminate micromanagement and oversight vacuums',
      'Master fiduciary compliance, internal control auditing, and conflict-of-interest policies',
      'Structure high-value board meetings that focus on strategy rather than routine administration'
    ],
    intendedParticipants: [
      'Board trustees, non-executive directors, and executive leadership teams'
    ],
    deliveryMethods: [
      'Governance audit diagnostics and legal framework reviews',
      'Board meeting simulation clinics and charter co-drafting'
    ],
    learningOutcomes: [
      'Audited Board Governance Manual and Committee Term of Reference (ToR) sets'
    ]
  },

  // Sustainability and Development
  {
    id: 'climate-resilience-environmental-education',
    title: 'Climate Resilience & Environmental Education',
    category: 'Sustainability & Development',
    duration: '6 Weeks',
    format: 'Cohort Blended',
    status: 'Upcoming Batch Intake',
    shortDescription: 'Empowering educators and community workers to lead climate adaptation, heat-safe schooling, and environmental action.',
    description: 'Directly linked to WUM’s core research in climate resilience. Trains educators, NGO workers, and local officials in actionable climate adaptation measures: school heat protocols, water conservation, waste reduction, and disaster preparedness.',
    learningObjectives: [
      'Understand regional climate projections and their impact on vulnerable schooling communities',
      'Develop school and community heatwave action plans and flood preparedness protocols',
      'Integrate interactive environmental conservation projects into regular student learning'
    ],
    intendedParticipants: [
      'Environmental educators, school administrators, and community outreach coordinators',
      'Disaster risk reduction (DRR) practitioners and local NGO teams'
    ],
    deliveryMethods: [
      'Field vulnerability assessments using the CRIT framework',
      'Curriculum integration workshops and low-cost green school retrofitting guides',
      'Disaster drill planning and community outreach studios'
    ],
    learningOutcomes: [
      'Context-specific Climate Action & School Safety Plan',
      'Certification as a WUM Climate-Resilience Facilitator'
    ]
  },
  {
    id: 'sdg-capacity-building',
    title: 'Sustainable Development & SDG Capacity Building',
    category: 'Sustainability & Development',
    duration: '5 Weeks',
    format: 'Multi-Week Seminar',
    status: 'Upcoming Batch Intake',
    shortDescription: 'Translating global UN Sustainable Development Goals into local, measurable community projects and corporate CSR strategies.',
    description: 'Demystifies the 2030 Agenda for local implementation. Focuses on SDGs 4 (Quality Education), 6 (Clean Water), 11 (Sustainable Communities), and 13 (Climate Action), helping practitioners build cross-sector partnerships with clear indicators.',
    learningObjectives: [
      'Map organizational activities against localized SDG targets and indicators',
      'Formulate multi-stakeholder partnership proposals aligned with donor priority windows',
      'Measure and communicate social and environmental impact using verified international frameworks'
    ],
    intendedParticipants: [
      'CSR managers, sustainability coordinators, and NGO program officers',
      'Local government planning officers'
    ],
    deliveryMethods: [
      'SDG target localization workshops',
      'Measurement rubric design studios',
      'Pitch presentations to sustainability panel experts'
    ],
    learningOutcomes: [
      'SDG Alignment Matrix & Sustainability Impact Report Draft'
    ]
  },
  {
    id: 'community-empowerment-wash',
    title: 'Community Empowerment & WASH Awareness',
    category: 'Sustainability & Development',
    duration: '4 Weeks',
    format: 'Field Immersion',
    status: 'Under Development / Proposed',
    shortDescription: 'Participatory community organizing for clean water access, hygiene behavior change, and sustainable sanitation infrastructure.',
    description: 'Grounded in participatory community development principles. Prepares field mobilizers to facilitate community-led sanitation improvements, establish school WASH committees, and ensure ongoing maintenance of clean water facilities.',
    learningObjectives: [
      'Master participatory rural appraisal (PRA) tools for community water and sanitation diagnostics',
      'Design culturally respectful, lasting hygiene behavioral change campaigns',
      'Formulate community-managed operation and maintenance (O&M) funds for water infrastructure'
    ],
    intendedParticipants: [
      'WASH project officers, public health mobilizers, and community leaders'
    ],
    deliveryMethods: [
      'Field simulations and community dialogue roleplaying',
      'Water point maintenance protocol workshops'
    ],
    learningOutcomes: [
      'Community WASH Mobilization Toolkit ready for field deployment'
    ]
  }
];
