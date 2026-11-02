import critSchoolResilienceImg from '../assets/images/crit_school_resilience_1793517579943.jpg';
import sustainabilityFieldResearchImg from '../assets/images/sustainability_field_research_1793517579246.jpg';
import capacityBuildingWorkshopImg from '../assets/images/capacity_building_workshop_1793517580194.jpg';
import wumGeographicSurveyFieldImg from '../assets/images/wum_geographic_survey_field_1793519786263.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Climate Resilience & Infrastructure' | 'Education & Pedagogy' | 'Institutional Governance' | 'Community Development';
  geographicFocus: string;
  status: 'Ongoing' | 'Planned' | 'In Formulation' | 'Completed';
  featured: boolean;
  image?: string;
  overview: string;
  objectives: string[];
  keyActivities: string[];
  intendedBeneficiaries: string[];
  outcomes: string[];
  githubUrl?: string;
  toolkitUrl?: string;
  relatedResources: { title: string; link: string; type: string }[];
}

export const projectsData: Project[] = [
  {
    id: 'crit-toolkit',
    title: 'Climate-Resilient School Infrastructure Toolkit (CRIT)',
    subtitle: 'Empowering Communities to Build Safer, Sustainable Schools for Children',
    category: 'Climate Resilience & Infrastructure',
    geographicFocus: 'Pakistan (Vulnerable Rural & Peri-Urban Districts)',
    status: 'Ongoing',
    featured: true,
    image: critSchoolResilienceImg,
    overview: 'The Climate-Resilient School Infrastructure Toolkit (CRIT) is an open, community-centered technical framework designed to assess, retrofit, and build climate-resilient schools across Pakistan. With recurring floods, extreme summer heatwaves, and seasonal seismic risks threatening educational continuity, CRIT provides practical guidelines for engineering adaptation, passive thermal cooling, decentralized solar power, rainwater harvesting, and participatory community maintenance.',
    objectives: [
      'Provide open-access technical guidelines for climate-proofing public and community school infrastructure',
      'Integrate passive cooling, elevated flood-safe foundations, and renewable water/energy systems into school design',
      'Empower local School Management Committees (SMCs), teachers, and community artisans with inspection and maintenance toolkits',
      'Bridge digital and field monitoring through open-source inspection rubrics and geospatial risk assessments'
    ],
    keyActivities: [
      'Development of open technical blueprints and structural resilience assessment protocols',
      'Codification of passive ventilation, mud-stone thermal mass, and solar shading retrofits',
      'Formulation of the CRIT Open-Source Toolkit hosted on GitHub for public access and collaborative enhancement',
      'Engagement with education foundations and disaster management stakeholders for field piloting'
    ],
    intendedBeneficiaries: [
      'Children and students in climate-vulnerable schooling districts',
      'Teachers and headmasters needing safe, habitable instructional spaces',
      'School Management Committees (SMCs) and local parent-teacher groups',
      'Provincial education departments and non-profit school infrastructure builders'
    ],
    outcomes: [
      'Published open-source repository containing comprehensive technical guides and assessment matrices',
      'Standardized scoring framework for baseline climate vulnerability across 5 key hazards (Flood, Heat, Seismic, Wind, Drought)',
      'Actionable blueprint for low-carbon, community-maintained educational infrastructure'
    ],
    githubUrl: 'https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit',
    toolkitUrl: '#/crit',
    relatedResources: [
      {
        title: 'CRIT GitHub Official Repository',
        link: 'https://github.com/WUM-AdvisoryServices/CRIT-Climate-Resilient-School-Infrastructure-Toolkit',
        type: 'Open Code & Docs'
      },
      {
        title: 'School Climate Vulnerability Assessment Rubric (v1.0 Draft)',
        link: '#/crit',
        type: 'Technical Specification'
      },
      {
        title: 'Community Eco-School Retrofitting Guide',
        link: '#/crit',
        type: 'Field Manual'
      }
    ]
  },
  {
    id: 'green-learning-spaces',
    title: 'Green Learning Spaces & Eco-Classroom Initiative',
    subtitle: 'Integrating Eco-Literacy, Waste Management, and Nature-Based Playgrounds into Community Schools',
    category: 'Education & Pedagogy',
    geographicFocus: 'Pakistan (Selected Pilot Districts)',
    status: 'In Formulation',
    featured: false,
    image: sustainabilityFieldResearchImg,
    overview: 'A proposed holistic initiative combining physical environmental enhancements in school grounds with active outdoor environmental curricula. Targets turning barren school compounds into micro-botanical spaces, organic kitchen gardens, and rainwater demonstration zones where children learn practical ecology.',
    objectives: [
      'Transform degraded school grounds into green, biodiverse outdoor learning environments',
      'Develop child-friendly environmental learning modules tied directly to primary science curricula',
      'Train teachers to conduct nature-based experiential inquiry in school compounds'
    ],
    keyActivities: [
      'Drafting low-cost landscape transformation blueprints for government and community schools',
      'Curriculum mapping connecting primary science standards with practical gardening and water-saving activities',
      'Formulating stakeholder consultation workshops with community elders and local environmental educators'
    ],
    intendedBeneficiaries: [
      'Primary school students and science teachers',
      'Surrounding rural community households participating in school greening'
    ],
    outcomes: [
      'Pilot curricular guide for "Outdoor Living Classrooms" formulated and peer-reviewed',
      'Detailed site planning template for low-cost native tree plantation and water catchment'
    ],
    relatedResources: [
      {
        title: 'Eco-Classroom Concept Note & Pedagogical Rationale',
        link: '#/knowledge',
        type: 'Concept Document'
      }
    ]
  },
  {
    id: 'institutional-governance-diagnostic',
    title: 'Institutional Governance & Capacity Diagnostic Framework',
    subtitle: 'Standardized Capability Mapping for Emerging Civil Society & Education Bodies',
    category: 'Institutional Governance',
    geographicFocus: 'National (Pakistan)',
    status: 'Ongoing',
    featured: false,
    image: capacityBuildingWorkshopImg,
    overview: 'An institutional diagnostic framework developed by WUM Advisory to assist growing non-profit organizations, educational networks, and social development enterprises to rigorously self-evaluate their internal governance, compliance, HR, and project delivery systems.',
    objectives: [
      'Provide an objective, structured benchmarking tool for organizational maturity',
      'Identify internal fiduciary and operational bottlenecks prior to international donor audits',
      'Co-create time-bound institutional capacity strengthening roadmaps'
    ],
    keyActivities: [
      'Codification of 6 organizational pillars: Strategy, Governance, Financial Integrity, Human Resources, Program Delivery, and MEAL',
      'Deployment of guided self-assessment questionnaires with leadership teams',
      'Validation clinics with board trustees and executive management'
    ],
    intendedBeneficiaries: [
      'Non-profit and NGO leadership teams seeking institutional accreditation',
      'Donors seeking independent pre-grant capacity diagnostics for prospective local partners'
    ],
    outcomes: [
      'Completed diagnostic toolkit with automated scoring rubrics',
      'Standardized institutional strengthening template tailored for Pakistan’s regulatory framework'
    ],
    relatedResources: [
      {
        title: 'Organizational Maturity Benchmark Framework',
        link: '#/knowledge',
        type: 'Methodology Brief'
      }
    ]
  },
  {
    id: 'community-eco-literacy-wash',
    title: 'Community-Led Eco-Literacy & WASH Awareness Pilot',
    subtitle: 'Grassroots Water Conservation and Clean Sanitation Mobilization',
    category: 'Community Development',
    geographicFocus: 'Punjab & Sindh Semi-Arid Zones',
    status: 'Planned',
    featured: false,
    image: wumGeographicSurveyFieldImg,
    overview: 'A proposed grassroots engagement model centered on community water security and sanitation education. Engages local youth mobilizers to conduct door-to-door water testing awareness, school hygiene campaigns, and water source protection workshops.',
    objectives: [
      'Increase community awareness of groundwater contamination and safe drinking water practices',
      'Establish functioning student-led WASH clubs in partner primary schools',
      'Introduce community-managed maintenance protocols for public filtration points'
    ],
    keyActivities: [
      'Development of illustrated pictorial hygiene guides in regional languages',
      'Community facilitator training of trainers (ToT) curriculum formulation',
      'Stakeholder alignment with local municipal water and health authorities'
    ],
    intendedBeneficiaries: [
      'Rural households in semi-arid and flood-affected districts',
      'School-aged children vulnerable to water-borne diseases'
    ],
    outcomes: [
      'Field-ready Community WASH Mobilization Protocol and pictorial guide',
      'Draft partnership agreement framework for local government alignment'
    ],
    relatedResources: [
      {
        title: 'WASH Community Mobilization Strategy',
        link: '#/knowledge',
        type: 'Strategy Paper'
      }
    ]
  }
];
