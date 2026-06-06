import { ShieldCheck, BarChart3, Users, Briefcase, Settings } from 'lucide-react';
import mspImg from '../../imports/msp.png';
import vmsImg from '../../imports/vms_dashboard.png';
import contingentImg from '../../imports/contingent_staffing_dashboard.png';
import directImg from '../../imports/direct.png';
import officeImg from '../../imports/office.png'; // Using officeImg as placeholder for workforce operations

export const servicesData = [
  {
    id: 'msp',
    title: 'Managed Service Provider',
    icon: ShieldCheck,
    image: mspImg,
    shortDesc: 'Full-cycle vendor management.',
    desc: 'Full-cycle contingent workforce management, vendor coordination, and compliance oversight to drive enterprise efficiency.',
    features: ['Vendor Neutrality', 'Cost Optimization', 'Compliance Risk Mitigation'],
    heroTitle: 'Managed Service Provider Programs',
    heroBenefit: 'Take control of your contingent workforce — with a single MSP partner managing vendors, costs, compliance, and delivery from one unified program.',
    problem: 'Enterprises struggle with decentralized hiring, runaway contractor costs, and inconsistent compliance across multiple staffing vendors.',
    solution: "VRN's MSP program serves as your single point of accountability — consolidating vendors, standardizing compliance, and managing every stage of the contingent workforce lifecycle from requisition through offboarding. Backed by AI-driven vendor tiering and predictive spend analytics, we don't just manage your program — we continuously optimize it.",
    aiEnhancement: 'Our AI engine analyzes historical fill rates, vendor performance scores, and market rate data to automatically tier your supplier base, forecast talent demand before requisitions are raised, and flag compliance risks before they become audit findings.',
    operationsLayer: 'Every vendor in your program is held to unified SLAs — tracked in real time. Compliance audits run on schedule, not on incident. And consolidated billing replaces invoice chaos with a single, transparent statement across all suppliers.',
    processSteps: [
      { name: 'Discover', desc: 'Baseline your entire contingent program — spend, vendor performance, compliance gaps, and time-to-fill benchmarks.' },
      { name: 'Source', desc: 'Route requisitions to the right vendor tier automatically — based on role type, location, rate card, and historical fill success.' },
      { name: 'Validate', desc: 'Standardize screening across all vendors — skills validation, background checks, and compliance verification before a single offer is made.' },
      { name: 'Onboard', desc: 'Every contractor arrives day-one ready — credentialed, badged, system-access confirmed, and fully compliant before they start.' }
    ],
    metrics: [
      { label: 'Time-to-Fill Reduction', value: '35%' },
      { label: 'Cost Savings', value: '12-18%' },
      { label: 'Compliance Rate', value: '100%' }
    ]
  },
  {
    id: 'vms',
    title: 'Vendor Management System',
    icon: BarChart3,
    image: vmsImg,
    shortDesc: 'Tech-enabled talent tracking.',
    desc: 'Tech-enabled talent tracking and reporting platforms that provide total visibility into your non-employee workforce.',
    features: ['Automated Requisitions', 'Consolidated Invoicing', 'Real-time Analytics'],
    heroTitle: 'VMS Enablement & Support',
    heroBenefit: 'Your VMS should work for you — not the other way around. VRN implements, configures, and manages your workforce technology platform so every requisition, contractor, and dollar is visible, trackable, and under control.',
    problem: 'Without a centralized system, tracking contractor headcount, spend, and project milestones becomes a manual, error-prone nightmare.',
    solution: 'VRN implements and manages leading VMS platforms — including Fieldglass, Beeline, and Coupa — configuring them to your specific program rules, vendor hierarchies, and compliance requirements. Our AI layer sits on top to surface real-time insights: flagging at-risk requisitions, scoring vendor performance automatically, and forecasting spend against budget before overruns happen. You get full program visibility without adding headcount to manage it.',
    aiEnhancement: 'Our AI-driven dashboards continuously benchmark your contractor rates against live market data — flagging overpayment before invoices are approved. Anomaly detection identifies billing irregularities, duplicate charges, and out-of-contract rate submissions automatically, turning what used to be a manual audit process into a real-time control layer.',
    operationsLayer: "VRN owns the full operational layer — initial system configuration, role-based user training, workflow customization, and ongoing platform optimization as your program evolves. We don't hand you a configured system and walk away. We stay in it, managing updates, troubleshooting exceptions, and tuning performance as your contingent workforce grows.",
    processSteps: [
      { name: 'Discover', desc: 'Audit your current tech stack, integration points, and program requirements — mapping gaps between where you are and where your VMS needs to take you.' },
      { name: 'Configure', desc: 'Configure the platform to your exact program rules — requisition workflows, multi-tier approval chains, rate cards, vendor hierarchies, and compliance checkpoints built in from day one.' },
      { name: 'Deploy', desc: 'Execute go-live with zero disruption — role-based user training, clean data migration from legacy systems, and parallel-run validation before full cutover.' },
      { name: 'Manage', desc: 'Continuous platform management post-launch — performance monitoring, exception handling, quarterly optimization reviews, and analytics reporting that keeps stakeholders informed and in control.' }
    ],
    metrics: [
      { label: 'Spend Visibility', value: '100%' },
      { label: 'Invoice Accuracy', value: '99.9%' },
      { label: 'Process Automation', value: '80%' }
    ]
  },
  {
    id: 'contingent-staffing',
    title: 'Contingent Staffing',
    icon: Users,
    image: contingentImg,
    shortDesc: 'Scalable on-demand talent.',
    desc: 'High-volume, high-quality talent delivery across IT, engineering, and digital transformation roles on demand.',
    features: ['Rapid Fulfillment', 'Vetted Talent Pool', 'Scalable Delivery'],
    heroTitle: 'Specialized Contingent Staffing',
    heroBenefit: 'When your program demands specialized talent fast — cloud architects, ML engineers, SAP consultants, cybersecurity analysts — VRN delivers pre-vetted professionals who are ready to contribute from day one, not week three.',
    problem: "Every day a critical role goes unfilled is a day your project falls behind schedule. Traditional hiring cycles — averaging 6 to 8 weeks for specialized technical roles — simply can't keep pace with enterprise program demands. And when you're managing multiple vendors with no centralized visibility, the problem compounds: you don't know what's in the pipeline until it's already too late.",
    solution: "VRN's contingent staffing practice combines a pre-qualified network of 3,500+ specialized contractors with AI-powered matching that reduces time-to-submit to under 48 hours. Every candidate in our network has been skills-validated, compliance-screened, and benchmarked against current market rates before a single profile reaches your desk. We don't search when you submit a req — we're already ready. Whether you need one niche engineer or a 50-person project team across multiple locations, VRN scales to match your program velocity without sacrificing quality or compliance.",
    aiEnhancement: 'Our AI matching engine scores every candidate in the network against your specific req — technical skills, domain experience, location, rate, availability, and cultural indicators — before a human recruiter ever picks up the phone. The result: shortlists that are pre-ranked by fit probability, not just keyword matches. Screening time drops from days to hours, and the profiles that reach your hiring team are already qualified, not just available.',
    operationsLayer: "Once placed, every VRN contractor is supported by a dedicated operations layer — structured onboarding, weekly timesheet management, mid-assignment check-ins, and performance tracking against agreed delivery milestones. Contractor care isn't an afterthought at VRN — it's what drives our 94% retention rate and keeps your projects running without mid-engagement disruptions.",
    processSteps: [
      { name: 'Source', desc: 'Tap active and passive talent networks simultaneously — our AI surfaces pre-qualified candidates already benchmarked against your role requirements before the req is even distributed.' },
      { name: 'Validate', desc: 'Every candidate undergoes structured technical validation and cultural fit assessment — skills testing, reference verification, and compliance screening completed before submission, not after.' },
      { name: 'Submit', desc: 'Present curated shortlists within 48 hours.' },
      { name: 'Onboard', desc: 'Contractor arrives day-one ready — credentialed, system access confirmed, team introductions complete, and first-week milestones already defined.' }
    ],
    metrics: [
      { label: 'Submittal-to-Hire Ratio', value: '3:1' },
      { label: 'Retention Rate', value: '94%' },
      { label: 'Average Time-to-Submit', value: '48hrs' }
    ]
  },
  {
    id: 'direct-placement',
    title: 'Direct Placement',
    icon: Briefcase,
    image: directImg,
    shortDesc: 'Permanent hiring solutions.',
    desc: 'Strategic permanent hiring solutions to secure long-term leadership and technical excellence for your organization.',
    features: ['Executive Search', 'Specialized Recruiting', 'Retention Focus'],
    heroTitle: 'Executive & Direct Hiring',
    heroBenefit: 'Secure the visionary leaders and technical experts your future depends on.',
    problem: "The leaders and senior technical experts who will transform your organization aren't browsing job boards. They're currently employed, highly recruited, and extremely selective about their next move. Reaching them requires more than a LinkedIn search — it requires a trusted network, a compelling narrative, and the kind of discreet, relationship-driven outreach that generic recruiting firms simply don't do. One wrong executive hire costs organizations an average of 213% of that leader's annual salary. Precision isn't optional at this level — it's everything.",
    solution: "VRN's executive search practice operates as a seamless extension of your employer brand — representing your organization with the discretion, credibility, and market intelligence that senior candidates expect. Our AI-powered talent intelligence layer maps the full addressable market for your target role before outreach begins — identifying not just who is qualified, but who is likely to move, what motivates them, and what compensation package will close them. We combine that intelligence with relationship-driven engagement that no algorithm can replicate — building genuine connections with passive candidates who would never respond to a cold recruiter. The result is a shortlist of three to five pre-qualified, highly engaged candidates — not a stack of resumes.",
    aiEnhancement: "Our AI talent intelligence engine maps the full competitive landscape before a single outreach is made — analyzing career trajectory patterns, tenure signals, compensation progression, and organizational context to predict which candidates are most likely to be open to a move and most likely to thrive in your specific environment. We don't just find people who look right on paper. We identify the candidates with the highest probability of long-term success in your culture, your team structure, and your growth stage — before the first conversation happens.",
    operationsLayer: "Closing a senior hire is where most searches fall apart. VRN manages the entire offer stage — providing real-time compensation benchmarking, structuring offers that are competitive without overpaying, and navigating counteroffers with the candidate directly. We stay engaged through resignation, notice period, and first 90 days — because a signed offer letter is not a successful placement. A retained, productive leader 12 months in is.",
    processSteps: [
      { name: 'Discover', desc: 'Immerse in your organization — leadership dynamics, culture, growth strategy, and the specific impact this role must deliver — before defining the ideal candidate profile.' },
      { name: 'Target', desc: 'Map the full addressable market — passive candidates inside competitor organizations, adjacent industries, and emerging leadership pools — ranked by fit probability and move likelihood.' },
      { name: 'Assess', desc: 'Structured behavioral interviews, technical assessments, and leadership scenario evaluations — validated against the success profile defined in Step 01, not generic competency frameworks.' },
      { name: 'Secure', desc: 'Navigate offer structuring, compensation negotiation, counteroffer management, and resignation support — keeping the candidate engaged and committed through every stage until day one.' }
    ],
    metrics: [
      { label: '12-Month Retention', value: '96%' },
      { label: 'Offer Acceptance', value: '88%' },
      { label: 'Diversity Slates', value: '100%' }
    ]
  },
  {
    id: 'workforce-operations',
    title: 'Workforce Operations',
    icon: Settings,
    image: officeImg,
    shortDesc: 'Enterprise governance & reporting.',
    desc: 'Comprehensive contractor lifecycle management, compliance tracking, and supplier governance.',
    features: ['Lifecycle Management', 'Supplier Governance', 'Compliance Tracking'],
    heroTitle: 'Enterprise Workforce Operations',
    heroBenefit: 'Elevate your talent program from transactional staffing to strategic workforce management.',
    problem: 'Most enterprises don\'t have a workforce operations problem — they have three separate problems that compound each other. Compliance gaps that only surface during audits. Onboarding processes that vary by department, leaving contractors unbadged and unproductive on day one. And supplier performance data that lives in spreadsheets, not dashboards — making it impossible to know which vendors are delivering and which are quietly underperforming. The result is a contingent workforce program that costs more than it should, delivers less than it could, and creates legal exposure nobody budgeted for.',
    solution: 'VRN installs a full workforce operations infrastructure around your contingent program — not just managing it, but systematically improving it. Contractor lifecycles are tracked from requisition through offboarding with zero manual follow-up required from your team. Compliance enforcement runs continuously — not just at onboarding, but throughout every assignment, with automated alerts before visa expirations, classification changes, or SLA breaches occur. Supplier governance is backed by AI-generated performance scorecards that rank vendors by fill rate, quality, time-to-submit, and compliance accuracy — giving your procurement team the data to make vendor decisions based on evidence, not relationships. The outcome is a workforce program that runs with the precision of an internal operation, without the overhead of building one.',
    aiEnhancement: "VRN's AI compliance engine runs continuous monitoring across every active contractor in your program — automatically tracking certification expiration dates, visa status changes, right-to-work documentation, and classification thresholds. Real-time alerts fire before issues become violations, not after. For organizations managing H-1B workers, multi-state contractors, or IC classification risk, this isn't a nice-to-have — it's the difference between a clean audit and a six-figure compliance exposure.",
    operationsLayer: 'Every stakeholder in your program gets the visibility they need — procurement sees spend and vendor performance, HR sees headcount and compliance status, and finance sees consolidated billing and budget-versus-actual in real time. Quarterly business reviews translate that data into action — identifying process gaps, rebalancing vendor tiers, and setting improvement targets for the next cycle. This is workforce operations as a managed discipline, not a reactive support function.',
    processSteps: [
      { name: 'Audit', desc: 'Conduct a full program audit — compliance posture, vendor performance history, onboarding timelines, spend leakage, and classification risk — establishing the baseline every improvement is measured against.' },
      { name: 'Standardize', desc: 'Replace fragmented department-level processes with unified enterprise workflows — standardized requisition templates, approval chains, onboarding checklists, and offboarding protocols applied consistently across every business unit and vendor.' },
      { name: 'Govern', desc: 'Hold every supplier accountable to defined KPIs — fill rate, time-to-submit, quality ratio, and compliance accuracy — tracked in real time and enforced through structured performance reviews, not annual conversations.' },
      { name: 'Optimize', desc: 'Turn program data into decisions — identifying which vendors to tier up, where onboarding friction is slowing productivity, and where spend can be consolidated without sacrificing delivery quality.' }
    ],
    metrics: [
      { label: 'Compliance Audit Pass', value: '100%' },
      { label: 'Faster Contractor Onboarding', value: '40%' },
      { label: 'Supplier Base Consolidation Savings', value: 'Up to 30%' }
    ]
  }
];
