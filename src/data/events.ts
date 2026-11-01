export interface EventItem {
  id: string;
  title: string;
  type: 'Leadership Workshop' | 'Training Programme' | 'Webinar' | 'Seminar' | 'Call for Collaboration';
  date: string;
  time: string;
  location: string;
  format: 'In-Person (Pakistan)' | 'Online / Virtual' | 'Hybrid';
  summary: string;
  audience: string;
  status: 'Registration Open' | 'Upcoming' | 'Call Open' | 'Scheduled';
  registrationDeadline: string;
}

export const eventsData: EventItem[] = [
  {
    id: 'crit-technical-symposium',
    title: 'Symposium on Climate-Resilient Educational Infrastructure in South Asia',
    type: 'Seminar',
    date: 'November 26, 2026',
    time: '10:00 AM - 01:30 PM PKT',
    location: 'Islamabad / Virtual Hybrid',
    format: 'Hybrid',
    summary: 'A multi-stakeholder technical dialogue presenting findings from the CRIT toolkit, bringing together school architects, disaster management officials, education leaders, and international development practitioners.',
    audience: 'Educational planners, disaster risk engineers, international development specialists, donor representatives',
    status: 'Registration Open',
    registrationDeadline: 'November 20, 2026'
  },
  {
    id: 'instructional-leadership-workshop-winter',
    title: 'Winter Masterclass: Instructional Leadership for School Principals',
    type: 'Leadership Workshop',
    date: 'December 12 - 14, 2026',
    time: '09:00 AM - 04:00 PM PKT',
    location: 'Lahore, Pakistan',
    format: 'In-Person (Pakistan)',
    summary: 'An intensive three-day executive development workshop for school heads and academic coordinators, focusing on teacher observation rubrics, formative feedback cycles, and creating positive school cultures.',
    audience: 'School principals, head teachers, academic deans, and education foundation leaders',
    status: 'Registration Open',
    registrationDeadline: 'December 05, 2026'
  },
  {
    id: 'ai-literacy-educators-webinar',
    title: 'Practical AI & Digital Tools for Modern Classrooms: An Ethical Primer',
    type: 'Webinar',
    date: 'January 15, 2027',
    time: '04:00 PM - 06:00 PM PKT',
    location: 'Virtual (Zoom / Google Meet)',
    format: 'Online / Virtual',
    summary: 'A hands-on, interactive online session exploring how teachers and educators can responsibly utilize generative AI for lesson design, bilingual worksheets, and administrative time savings.',
    audience: 'Primary and secondary teachers, pedagogical coaches, university lecturers, and curriculum specialists',
    status: 'Upcoming',
    registrationDeadline: 'January 10, 2027'
  },
  {
    id: 'call-for-pilot-schools-crit',
    title: 'Call for Expression of Interest: CRIT School Climate Vulnerability Pilot Assessments',
    type: 'Call for Collaboration',
    date: 'Ongoing Application Cycle (Q1 2027)',
    time: 'Rolling Review',
    location: 'Sindh, Punjab & Khyber Pakhtunkhwa Districts',
    format: 'In-Person (Pakistan)',
    summary: 'WUM Advisory Services invites schooling networks, community trusts, and local education foundations in climate-vulnerable areas to express interest in participating in pro-bono pilot baseline vulnerability audits.',
    audience: 'School networks, local education non-profits, community-based organizations operating rural primary schools',
    status: 'Call Open',
    registrationDeadline: 'February 15, 2027'
  },
  {
    id: 'governance-nonprofit-retreat',
    title: 'Executive Clinic: Fiduciary Governance & Board Stewardship for NGOs',
    type: 'Training Programme',
    date: 'February 24 - 25, 2027',
    time: '09:30 AM - 05:00 PM PKT',
    location: 'Islamabad, Pakistan',
    format: 'In-Person (Pakistan)',
    summary: 'Designed for executive directors and board members to master internal controls, conflict of interest safeguards, audit readiness, and strategic sustainability frameworks.',
    audience: 'Board chairs, executive directors, finance trustees, and senior NGO managers',
    status: 'Scheduled',
    registrationDeadline: 'February 18, 2027'
  }
];
