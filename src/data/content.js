/* ─────────────────────────────────────────────────────────────
   content.js — single source of truth for all portfolio copy.
   Edit only this file to update text, links, or project data.
   ───────────────────────────────────────────────────────────── */

// ── Personal constants ────────────────────────────────────────
export const SITE = {
  name: 'Maniraja A',
  initials: 'MA',
  email: 'iammaniraj06@gmail.com',
  phone: '+91 8197620440',
  location: 'Udupi, Karnataka',
  role: 'Senior Consultant · UI Developer',
  company: 'Thoughtworks',
  tagline: 'Building precise, performant front-end experiences since 2019.',
  eyebrow: 'Senior Consultant · Thoughtworks · 6+ years',
  linkedin: 'https://www.linkedin.com/in/A-Maniraja',
  github: 'https://github.com/maniraj0601',
  resume: '/Maniraja_Resume.pdf',
}

// ── Hero typewriter roles ─────────────────────────────────────
export const ROLES = ['React Developer.', 'Frontend Engineer.', 'TypeScript Advocate.']

// ── Home page — intro section ─────────────────────────────────
export const HOME_INTRO = {
  heading: 'Crafting front-end experiences',
  headingAccent: 'people remember.',
  body: 'Currently a React Lead at Thoughtworks — driving advanced features, mentoring engineers, and leading the React upgrade across the account. My expertise lies in React architecture, state management, and front-end craftsmanship.',
  skills: ['React', 'Redux', 'TypeScript', 'Next JS', 'Node JS', 'Jest', 'Playwright', 'GraphQL'],
}

// ── Stats (Home — count-up pills) ─────────────────────────────
export const STATS = [
  { target: 6, suffix: '+', label: 'Years of experience' },
  { target: 8, suffix: '+', label: 'Projects shipped' },
]

// ── Companies worked at (most recent first) ───────────────────
export const COMPANIES = [
  { name: 'Thoughtworks', logo: '/logos/thoughtworks.png' },
  { name: 'Aziro (MSys Technologies)', logo: '/logos/aziro.png' },
  { name: 'Amdocs', logo: '/logos/amdocs.png' },
  { name: 'LTIMindtree (Mindtree)', logo: '/logos/ltm.png' },
]

// ── Social links (icon key maps to SVG in Footer) ─────────────
export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: SITE.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: SITE.github, icon: 'github' },
]

// ── Thoughtworks go-live projects ─────────────────────────────
export const TW_PROJECTS = [
  {
    id: 'tw-1',
    title: 'Josys — Multi-Tenant Portal',
    client: 'Josys · Raksul',
    goLive: 'May 2024',
    category: 'SaaS Platform · Multi-Tenant',
    description:
      'Built the React/Next.js frontend for a Multi-Tenant Support Portal enabling Managed Service Providers to manage all client accounts from a single interface. Delivered responsive layouts, a reusable Storybook component library, and Agile delivery practices adopted across all Josys projects.',
    highlights: [
      '4 production releases — core features, Japanese language support, MTS metrics dashboard, UAT feedback',
      'Sensible Defaults implemented; production deployment cut from ~10 days to same-day releases',
      'Agile coach role — streamlined delivery processes adopted across all ongoing Raksul projects',
      'Demo praised by Josys CEO, global marketing team, Japan and India leadership',
    ],
    quote:
      '"MTS portal was a pilot project in collaboration with Josys and Thoughtworks, and it was a great success. Also we were able to pick up 2 stretch goals."',
    quoteBy: 'Sanjay Rajasekh — CTO & Co-Founder, Josys / Raksul India',
    clientLogo: '/logos/josys.png',
    tech: [
      'Next.js',
      'TypeScript',
      'React Query',
      'Material UI',
      'Storybook',
      'Turborepo',
      'MySQL',
      'MongoDB',
      'AWS CodePipeline',
      'Redis',
    ],
  },
  {
    id: 'tw-2',
    title: 'Piramal Finance — Policy Engine',
    client: 'Piramal Capital & Housing Finance',
    goLive: 'Aug 2025',
    category: 'FinTech · Self-Serve Platform',
    description:
      'Built the React JS frontend for a self-serve policy engine replacing a slow, developer-dependent system. Business teams now directly configure loan rules — interest rates, LTV ratios, eligibility criteria — through an intuitive UI, eliminating developer bottlenecks entirely.',
    highlights: [
      '90% self-service capability — rule changes that took 2–3 weeks now take hours',
      'AI RAG chatbot: policies created from plain English in 3–4 hours',
      '40 existing loan products migrated via AI — project timeline cut by 50%',
      'COO cited ₹4–5 crore profit protection enabled by real-time policy changes',
    ],
    quote:
      '"In my 35 years of experience in Lending, I have never seen such a product... because of capabilities built by this team we were able to make this change within seconds."',
    quoteBy: 'Sunit Madan — Chief Operating Officer, Piramal Finance',
    clientLogo: '/logos/piramal.png',
    tech: [
      'React JS',
      'MongoDB',
      'Spring Boot',
      'Jenkins',
      'AWS',
      'OpenAI',
      'Vector Search',
      'RAG',
    ],
  },
  {
    id: 'tw-3',
    title: 'First Student — FirstAlt Platform',
    client: 'First Student (North America)',
    goLive: 'Sep 2025',
    active: true,
    category: 'Transportation · Enterprise Platform',
    description:
      "Building the React/TypeScript frontend for FirstAlt — First Student's alternative transportation division serving 716K+ trips across 21 US states. Contributing to the Blueprint domain, delivering complex UX flows for district onboarding, route planning, and student grouping.",
    highlights: [
      '24 features shipped in 6 months across Onboarding, Blueprint & Servicing domains',
      'Edit blueprint UX reduced to 5 steps — eliminated data loss, duplication, and manual effort',
      'Student grouping on mapview with district/trip-type filters and automated mileage calculation',
      'District pricing with auto-publishing — future pricing configured for 89 of 121 districts',
      '716,319 trips · 8.9M miles · 21 states · 10/10 NPS from all senior stakeholders',
    ],
    quote: '"Quality work, exceptional team."',
    quoteBy: 'Jessica Aquino — Senior Director, FirstAlt Services',
    clientLogo: '/logos/first-student.png',
    tech: [
      'React',
      'TypeScript',
      'Spring Boot',
      'AWS',
      'GitHub Actions',
      'PACT',
      'SonarQube',
      'BrowserStack',
      'Docker',
      'EKS',
    ],
  },
]

// ── Featured enterprise (previous roles) ─────────────────────
export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'Nutanix AOS',
    client: 'Nutanix · MSys Technologies',
    category: 'Cloud Infrastructure',
    description:
      'Led front-end development using Micro Frontend architecture. Achieved 85% test coverage, optimised CI/CD through Gerrit, GitHub, and Jenkins, and managed delivery via JIRA.',
    highlights: [
      '85% test coverage with Jest & Playwright',
      'Micro Frontend architecture at scale',
      'Streamlined CI/CD with Jenkins & Gerrit',
    ],
    tech: ['React', 'Redux', 'TypeScript', 'Axios', 'Jest', 'Playwright'],
    image: '/projects/nutanix-bg.jpeg',
    dot: 'bg-navy',
  },
  {
    id: 2,
    title: 'Business Continuity Cloud',
    client: 'Arcserve · MSys Technologies',
    category: 'Product Development',
    description:
      'Pioneered front-end development for a cloud-native backup product. Engineered reusable functional components with hooks, and implemented seamless API communication via Axios and Redux-Saga.',
    highlights: [
      'Cloud-native architecture with React & Redux-Saga',
      'Reusable component library with custom hooks',
      'Seamless async API integration via Axios',
    ],
    tech: ['React', 'Redux-Saga', 'TypeScript', 'Axios'],
    image: '/projects/arcserve-bg.jpeg',
    dot: 'bg-forest',
  },
]

// ── Organisational projects ───────────────────────────────────
export const ORG_PROJECTS = [
  {
    id: 3,
    title: 'Engagement Center',
    client: 'Amdocs',
    category: 'Low Code Platform',
    description:
      "Led a telecom vendor's Self Service Portal using a low-code approach, increasing development agility by 25%. Integrated JSON data flows on OpenShift with Couchbase, Jenkins, and Bitbucket.",
    tech: ['Low Code', 'Couchbase', 'Jenkins', 'Bitbucket', 'OpenShift'],
    color: 'bg-amber/15',
  },
  {
    id: 4,
    title: 'P&G — SKII Brain',
    client: 'Mindtree',
    category: 'Data Visualisation',
    description:
      'Architected dashboards showing graphical and chart representations of SKII product sales and user counts across global markets. Applied DOMO SaaS for comprehensive analytics.',
    tech: ['DOMO', 'Data Analytics', 'Dashboards'],
    color: 'bg-aqua/25',
  },
  {
    id: 5,
    title: 'Whisper JP',
    client: 'P&G · Mindtree',
    category: 'Website Renewal',
    description:
      'Spearheaded the revamp of the Whisper Japan site with ReactJS SSR. Managed client interactions, Agile delivery, and achieved a 35% increase in user engagement and 20% boost in satisfaction.',
    tech: ['React', 'SSR', 'Next JS', 'Agile'],
    color: 'bg-mint',
  },
  {
    id: 6,
    title: 'Bedrock',
    client: 'P&G · Mindtree',
    category: 'DevOps',
    description:
      'Established centralised CI/CD pipelines in Azure DevOps (VSTS) for multiple websites. Upgraded Next JS versions for enhanced performance. Received an A-team award for excellence.',
    tech: ['Azure DevOps', 'Next JS', 'CI/CD', 'VSTS'],
    color: 'bg-navy/8',
  },
  {
    id: 7,
    title: 'Modern Web',
    client: 'P&G · Mindtree',
    category: 'DevOps & Integrations',
    description:
      'Played a pivotal role in ServiceNow development and operations. Contributed to Bazaarvoice, PriceSpider, and Google Analytics integrations. Accomplished zero-defect production deployment.',
    tech: ['ServiceNow', 'Bazaarvoice', 'Google Analytics', 'PriceSpider'],
    color: 'bg-forest/10',
  },
]

// ── Personal project ──────────────────────────────────────────
export const PERSONAL_PROJECT = {
  title: 'Kannada Devanagar Matrimony',
  category: 'Full Stack Web App',
  description:
    'A community matrimonial platform built entirely from scratch — designed, developed, and deployed solo. Serves the Kannada Devanagar community with a full authentication system, profile management, and a polished PWA experience that works offline.',
  highlights: [
    'Firebase Authentication with secure session management',
    'Formik + Yup powered multi-step profile forms',
    'Progressive Web App — installable, works offline',
    'Responsive design with Sass-powered component styles',
  ],
  tech: ['React', 'Sass', 'Firebase', 'Formik', 'PWA'],
  liveUrl: 'https://www.kannadadevangarkulamatrimony.com/',
}

// ── Achievements & recognitions ───────────────────────────────
export const ACHIEVEMENTS = [
  {
    id: 'firstalt-tw',
    award: 'Leadership & Technical Excellence',
    type: 'Internal Recognition · FirstAlt Project',
    issuer: 'Thoughtworks',
    client: 'First Student',
    date: '2025',
    note: 'Recognised for leading Azure SSO integration, driving React upgrade across the account, mentoring peers, and running React sessions for the entire front-end program.',
    image: '/certificates/firstalt-tw.png',
    featured: true,
  },
  {
    id: 'nutanix',
    award: 'Nutanix Customer Appreciation',
    type: 'Client Recognition · Nutanix AOS Platform',
    issuer: 'MSys Technologies',
    client: 'Nutanix',
    date: '2023',
    note: '"Appreciate the Nutanix AOS platform Security team for the exemplary work. We are glad that we had the opportunity to recognise them for their hard work." — Nutanix Customer',
    image: '/certificates/nutanix.png',
    featured: true,
  },
  {
    id: 'a-team',
    award: 'A-Team Award',
    type: 'Certificate of Appreciation',
    issuer: 'Mindtree',
    date: 'Jan 2021',
    note: 'Recognised for outstanding team contribution — kudos for a job well done.',
    image: '/certificates/a-team.png',
  },
  {
    id: 'partnership',
    award: 'Partnership',
    type: 'SpotOn · Collaborative Spirit',
    issuer: 'Mindtree',
    date: 'Dec 2019',
    note: 'Resolved the long-pending Braun IT GDPR fix — praised for collaborative impact.',
    image: '/certificates/partnership.png',
  },
  {
    id: 'perseverance',
    award: 'Perseverance',
    type: 'SpotOn · Unrelenting Dedication',
    issuer: 'Mindtree',
    date: 'Sep 2019',
    note: 'Exceptional UI work on the sell-mobile project — appreciated for making it stand out.',
    image: '/certificates/perseverance.png',
  },
]

// ── Skills (About page) ───────────────────────────────────────
export const SKILLS = [
  {
    category: 'Frontend',
    color: 'bg-navy/8 border-navy/10 text-navy',
    items: ['React', 'Redux', 'Next JS', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Styling',
    color: 'bg-forest/8 border-forest/10 text-forest',
    items: ['HTML', 'CSS', 'SASS', 'Tailwind', 'MaterialUI', 'Bootstrap'],
  },
  {
    category: 'Backend & DB',
    color: 'bg-amber/10 border-amber/20 text-navy',
    items: ['Node JS', 'Express JS', 'MongoDB'],
  },
  {
    category: 'Testing',
    color: 'bg-aqua/20 border-aqua/30 text-forest',
    items: ['Jest', 'Playwright'],
  },
  {
    category: 'APIs & Tools',
    color: 'bg-blush border-border text-navy',
    items: ['REST', 'GraphQL', 'Git', 'Jenkins', 'JIRA', 'Azure DevOps'],
  },
]

// ── Career timeline (About page) ─────────────────────────────
export const CAREER = [
  {
    period: 'Mar 2024 – Present',
    company: 'Thoughtworks',
    role: 'Senior Consultant · UI Developer',
    location: 'India',
    current: true,
    highlights: [
      'Built UI for Josys Multi-Tenant Portal (Raksul) — 4 production releases including Japanese language support and metrics dashboard; sensible defaults adopted company-wide after success',
      'Built React frontend for Piramal Finance Policy Engine — 90% self-service capability, time-to-market cut from weeks to days, 40 loan products migrated',
      'Led Azure SSO integration across complex, multi-layer infrastructure — managed infra team coordination, client approvals, and ad hoc blockers end to end',
      'Initiated React upgrade across the account; mentors peers and runs React sessions for the entire front-end program',
    ],
  },
  {
    period: 'Mar 2022 – Mar 2024',
    company: 'MSys Technologies',
    role: 'Senior Software Engineer',
    location: 'Bangalore',
    current: false,
    highlights: [
      'Led front-end development for Nutanix AOS using Micro Frontend architecture',
      'Achieved 85% test coverage with Jest and Playwright',
      'Optimised CI/CD workflows via Gerrit, GitHub, and Jenkins',
    ],
  },
  {
    period: 'Sep 2021 – Mar 2022',
    company: 'Amdocs',
    role: 'Software Developer',
    location: 'Pune',
    current: false,
    highlights: [
      'Pioneered front-end for Arcserve cloud-native backup with React & Redux-Saga',
      'Led telecom Self Service Portal using Engagement Center (Low Code)',
      'Increased development agility by 25% with a low-code approach',
    ],
  },
  {
    period: 'Jun 2019 – Sep 2021',
    company: 'Mindtree',
    role: 'Engineer',
    location: 'Chennai',
    current: false,
    highlights: [
      'Built SKII Brain data visualisation dashboards for P&G with DOMO',
      'Revamped Whisper Japan site with ReactJS SSR — 35% increase in user engagement',
      'Established centralised Azure DevOps pipelines; received A-team award',
    ],
  },
]

// ── Education (About page) ────────────────────────────────────
export const EDUCATION = [
  {
    degree: 'B.E. in Computer Science',
    institute: 'RNS Institute of Technology',
    location: 'Bangalore',
    year: '2015 – 2019',
    primary: true,
  },
  {
    degree: '10th & 12th',
    institute: 'Jawahar Navodaya Vidyalaya',
    location: 'Udupi',
    year: '2013 & 2015',
    primary: false,
  },
]
