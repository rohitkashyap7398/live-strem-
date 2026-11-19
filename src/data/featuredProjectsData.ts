import aiSaasVisual from '../assets/images/project_ai_saas_studio_1795099557469.jpg';
import fintechVisual from '../assets/images/project_fintech_terminal_1795099557521.jpg';
import ecommerceVisual from '../assets/images/project_ecommerce_cloud_1795099557578.jpg';
import devopsVisual from '../assets/images/project_devops_observability_1795099557934.jpg';
import fashionLuxuryVisual from '../assets/images/showcase_fashion_luxury_1795101083199.jpg';
import architectureEstateVisual from '../assets/images/showcase_architecture_estate_1795101082346.jpg';
import editorialHospitalityVisual from '../assets/images/showcase_editorial_hospitality_1795101082433.jpg';
import travelGlobeVisual from '../assets/images/showcase_travel_globe_ui_1795101088098.jpg';
import mobileAppSaasVisual from '../assets/images/showcase_mobile_app_saas_1795101082583.jpg';

export type ProjectCategory =
  | 'Live Web Showcase'
  | 'Full-Stack SaaS'
  | 'Generative AI & Agents'
  | 'FinTech & Trading'
  | 'E-Commerce & Marketplaces'
  | 'Data Analytics & BI'
  | 'DevOps & Cloud Systems'
  | 'EdTech & Healthcare'
  | 'Real-Time & Mobile Apps';

export interface FeaturedProject {
  id: string;
  index: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  techStack: string[];
  leadEngineer: string;
  cohort: 'IGNITE 1.0' | 'IGNITE 2.0' | 'IGNITE 3.0' | 'Summer Training' | 'Apprenticeship';
  liveDomain: string;
  thumbnail: string;
  isExternalLive?: boolean;
  responseLatency: string;
  uptime: string;
  features: string[];
  apiRoutes: string[];
  featured?: boolean;
}

interface RawProjectSeed {
  title: string;
  summary: string;
  techStack: string[];
  features: string[];
  apiRoutes: string[];
  liveDomain?: string;
  thumbnail?: string;
}

const ENGINEERS = [
  'Aarav Mishra',
  'Sneha Verma',
  'Rohan Tiwari',
  'Ananya Singh',
  'Kushagra Pandey',
  'Priya Chauhan',
  'Harshvardhan Dubey',
  'Shruti Saxena',
  'Akshat Srivastava',
  'Nidhi Gupta',
  'Prakhar Shukla',
  'Ishita Agarwal',
  'Vivek Yadav',
  'Tanya Tripathi',
  'Siddharth Joshi',
  'Meera Nair',
  'Devansh Kapoor',
  'Riya Kulkarni',
  'Aditya Pratap',
  'Kritika Bansal',
  'Utkarsh Bajpai',
  'Muskan Awasthi',
  'Nikhil Chaturvedi',
  'Shreya Maurya'
];

const COHORTS: FeaturedProject['cohort'][] = [
  'IGNITE 1.0',
  'IGNITE 2.0',
  'IGNITE 3.0',
  'Summer Training',
  'Apprenticeship'
];

const LIVE_WEB_SHOWCASE_SEEDS: RawProjectSeed[] = [
  {
    title: 'Famms Fashion & Apparel Storefront',
    summary: 'Modern fashion e-commerce storefront featuring seasonal collection banners, quick-add product grids, and responsive checkout flows.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    liveDomain: 'https://preview.themewagon.com/famms/',
    thumbnail: fashionLuxuryVisual,
    features: ['Seasonal lookbook hero slider', 'Product category filter grid', 'Newsletter subscription capture', 'Responsive mobile drawer'],
    apiRoutes: ['GET /api/catalog/apparel', 'POST /api/cart/items', 'POST /api/newsletter/subscribe']
  },
  {
    title: 'MobApp Mobile App Showcase',
    summary: 'Conversion-focused mobile application landing page showcasing interactive feature tabs, app screenshots carousel, and pricing tiers.',
    techStack: ['React', 'Tailwind CSS', 'Motion', 'TypeScript'],
    liveDomain: 'https://preview.themewagon.com/mobapp/',
    thumbnail: mobileAppSaasVisual,
    features: ['Interactive app tab switcher', 'App Store & Play Store badges', 'Testimonial spotlight strip', 'Transparent pricing cards'],
    apiRoutes: ['GET /api/releases/latest', 'POST /api/waitlist/signup', 'GET /api/metrics/downloads']
  },
  {
    title: 'Aurora Enterprise SaaS Suite',
    summary: 'Enterprise multi-module web admin & SaaS platform delivering clean CRM, project analytics, and modular component views.',
    techStack: ['React 19', 'TypeScript', 'MUI / Tailwind', 'Recharts'],
    liveDomain: 'https://aurora.themewagon.com/',
    thumbnail: devopsVisual,
    features: ['Modular enterprise workspace', 'Multi-chart KPI telemetry', 'Light/dark theme architecture', 'Customizable data tables'],
    apiRoutes: ['GET /api/workspace/overview', 'GET /api/analytics/revenue', 'GET /api/users/directory']
  },
  {
    title: 'Armando Digital Portfolio & Agency',
    summary: 'Bold creative agency and portfolio web experience highlighting typographic hierarchy, case study grids, and inquiry forms.',
    techStack: ['HTML5', 'GSAP', 'JavaScript', 'CSS Grid'],
    liveDomain: 'https://preview.themewagon.com/armando/',
    thumbnail: editorialHospitalityVisual,
    features: ['Split-screen creative hero', 'Interactive project case studies', 'Smooth scroll transitions', 'Direct project inquiry modal'],
    apiRoutes: ['GET /api/case-studies', 'POST /api/inquiries/send', 'GET /api/agency/services']
  },
  {
    title: 'PhoenixLive Admin & CRM Dashboard',
    summary: 'Production-scale e-commerce, CRM, and project operations dashboard template featuring rich charts, Kanban boards, and live feeds.',
    techStack: ['React', 'Bootstrap 5', 'Chart.js', 'TypeScript'],
    liveDomain: 'https://prium.github.io/phoenixlive/v1.24.0/showcase.html',
    thumbnail: aiSaasVisual,
    features: ['E-commerce & CRM dashboards', 'Kanban workflow management', 'Real-time notification center', 'Responsive RTL/LTR layouts'],
    apiRoutes: ['GET /api/crm/deals', 'GET /api/orders/summary', 'GET /api/notifications/stream']
  },
  {
    title: 'Ghughu Creative Brand Studio',
    summary: 'Minimalist studio and product showcase website blending crisp whitespace, editorial photography, and streamlined navigation.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    liveDomain: 'https://preview.themewagon.com/ghughu/',
    thumbnail: ecommerceVisual,
    features: ['Clean minimalist visual grid', 'Interactive service showcase', 'Testimonial slider cards', 'Fast static asset delivery'],
    apiRoutes: ['GET /api/studio/works', 'POST /api/contact/submit', 'GET /api/services/list']
  },
  {
    title: 'Zorge 9 Luxury Real Estate',
    summary: 'High-end residential real estate showcase presenting architectural floorplans, residence specifications, and private viewing booking.',
    techStack: ['Next.js', 'WebGL', 'GSAP', 'Tailwind CSS'],
    liveDomain: 'https://zorge9.estate/',
    thumbnail: architectureEstateVisual,
    features: ['Architectural residence gallery', 'Interactive floorplan explorer', 'Neighborhood amenity map', 'Private tour request form'],
    apiRoutes: ['GET /api/residences/available', 'GET /api/floorplans/:unit', 'POST /api/tours/book']
  },
  {
    title: "L'Oiseau Editorial & Hospitality",
    summary: 'Atmospheric hospitality and editorial storytelling website built with fluid scroll choreography and bespoke typography.',
    techStack: ['Framer', 'React', 'Motion', 'Custom Fonts'],
    liveDomain: 'https://loiseau.framer.website/',
    thumbnail: editorialHospitalityVisual,
    features: ['Fluid scroll-linked reveals', 'Seasonal tasting menu layout', 'Editorial image framing', 'Table reservation flow'],
    apiRoutes: ['GET /api/menu/seasonal', 'POST /api/reservations/book', 'GET /api/story/chapters']
  },
  {
    title: 'Luminous Labs Commercial Health',
    summary: 'B2B clinical light-therapy & wellness technology portal presenting commercial device engineering and ROI calculators.',
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'],
    liveDomain: 'https://www.luminouslabs.health/commercial',
    thumbnail: '/assets/aistudio/TheCodeSpark_Neon_Hand_Interface_74a47cc3.png',
    features: ['Commercial clinic ROI planner', 'Biometric wavelength breakdown', 'Case study proof metrics', 'Enterprise consultation flow'],
    apiRoutes: ['GET /api/devices/commercial', 'POST /api/roi/calculate', 'POST /api/leads/commercial']
  },
  {
    title: 'Agnes Toth Creative Direction',
    summary: 'Curated creative direction and fashion photography portfolio celebrating bold editorial spreads and kinetic transitions.',
    techStack: ['React', 'GSAP', 'TypeScript', 'CSS Modules'],
    liveDomain: 'https://agnestoth.com/',
    thumbnail: fashionLuxuryVisual,
    features: ['Full-bleed editorial gallery', 'Interactive cursor transitions', 'Project credits monograph', 'Studio contact drawer'],
    apiRoutes: ['GET /api/portfolio/campaigns', 'GET /api/credits/:slug', 'POST /api/booking/inquiry']
  },
  {
    title: 'TribeStays Student Hostel Living',
    summary: 'Modern student accommodation & co-living booking platform showcasing campus hubs, room amenities, and virtual tours.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    liveDomain: 'https://tribestays.com/student-hostel',
    thumbnail: architectureEstateVisual,
    features: ['City & campus hostel finder', 'Room occupancy & tariff cards', 'Resident amenity checklist', 'Instant campus visit booking'],
    apiRoutes: ['GET /api/hostels/cities', 'GET /api/rooms/availability', 'POST /api/visits/schedule']
  },
  {
    title: 'Mersi Architecture Spatial Studio',
    summary: 'Architectural practice portfolio featuring spatial photography monographs, material studies, and built project archives.',
    techStack: ['React', 'Next.js', 'Motion', 'Tailwind CSS'],
    liveDomain: 'https://www.mersi-architecture.com/',
    thumbnail: architectureEstateVisual,
    features: ['Architectural project index', 'High-res spatial photography', 'Studio philosophy essay', 'Client commission portal'],
    apiRoutes: ['GET /api/architecture/projects', 'GET /api/monographs/:id', 'POST /api/commissions/inquire']
  },
  {
    title: 'DripModa UK Streetwear Store',
    summary: 'Contemporary UK streetwear e-commerce storefront with fast drop-down collection filtering, lookbooks, and Express checkout.',
    techStack: ['Shopify Headless', 'React', 'TypeScript', 'Tailwind CSS'],
    liveDomain: 'https://dripmodauk.co.uk/',
    thumbnail: fashionLuxuryVisual,
    features: ['Multi-currency GBP/EUR store', 'Instant size & colorway filter', 'Limited drop countdowns', 'Mobile slide-out bag'],
    apiRoutes: ['GET /api/collections/streetwear', 'POST /api/cart/add', 'GET /api/drops/upcoming']
  },
  {
    title: 'Pat McGrath Labs Luxury Beauty',
    summary: 'Global luxury cosmetics flagship e-commerce platform showcasing shade pickers, editorial campaign video loops, and VIP drops.',
    techStack: ['React', 'Commerce Cloud', 'TypeScript', 'CDN'],
    liveDomain: 'https://www.patmcgrath.com/',
    thumbnail: fashionLuxuryVisual,
    features: ['Interactive shade swatch matrix', 'Editorial runway lookbooks', 'VIP vault early access', 'Global localized checkout'],
    apiRoutes: ['GET /api/beauty/shades', 'POST /api/bag/checkout', 'GET /api/vip/early-access']
  },
  {
    title: 'Juri Fine Handcrafted Jewelry',
    summary: 'Boutique fine jewelry storefront highlighting sculptural gold/silver collections, stone details, and bespoke sizing guides.',
    techStack: ['Next.js', 'Shopify Storefront API', 'TypeScript', 'Tailwind CSS'],
    liveDomain: 'https://www.jurijewelry.com/',
    thumbnail: fashionLuxuryVisual,
    features: ['Macro jewelry detail zoom', 'Metal & gemstone variant switcher', 'Ring size conversion guide', 'Bespoke order concierge'],
    apiRoutes: ['GET /api/jewelry/collections', 'GET /api/sizing/chart', 'POST /api/bespoke/request']
  },
  {
    title: 'Explora Journeys 3D World Voyage',
    summary: 'Interactive ocean voyage planner featuring a 3D world globe with clickable destination ports and multi-leg cruise itineraries.',
    techStack: ['Three.js', 'WebGL', 'React', 'TypeScript'],
    liveDomain: 'https://explorajourneys.com/int/en/destinations-globe/world-journey',
    thumbnail: travelGlobeVisual,
    features: ['Interactive 3D Earth globe', 'Port-by-port voyage timeline', 'Suite & onboard experience cards', 'Real-time route arc rendering'],
    apiRoutes: ['GET /api/voyages/world-journey', 'GET /api/ports/:code', 'POST /api/suites/availability']
  },
  {
    title: 'IERTQA Software Quality & Testing',
    summary: 'Enterprise QA automation & software reliability portal highlighting continuous testing frameworks and defect-prevention metrics.',
    techStack: ['Next.js', 'TypeScript', 'Playwright', 'Tailwind CSS'],
    liveDomain: 'https://www.iertqa.com/',
    thumbnail: devopsVisual,
    features: ['Automated regression suites', 'CI/CD quality gate metrics', 'Cross-browser matrix coverage', 'QA audit request workflow'],
    apiRoutes: ['GET /api/qa/benchmarks', 'POST /api/audits/request', 'GET /api/frameworks/supported']
  },
  {
    title: 'The Outside In Spatial Brand',
    summary: 'Experiential architecture and lifestyle brand platform uniting bespoke outdoor/indoor design with editorial storytelling.',
    techStack: ['React', 'Motion', 'Tailwind CSS', 'TypeScript'],
    liveDomain: 'https://theoutsidein.com/',
    thumbnail: architectureEstateVisual,
    features: ['Full-screen editorial storytelling', 'Interactive project galleries', 'Material & craft breakdown', 'Custom consultation scheduler'],
    apiRoutes: ['GET /api/spaces/featured', 'GET /api/materials/library', 'POST /api/consultations/book']
  },
  {
    title: 'Salvato Interactive Storytelling',
    summary: 'Creative interactive digital showcase combining kinetic typography, spatial scroll effects, and curated visual chapters.',
    techStack: ['React', 'GSAP', 'WebGL', 'TypeScript'],
    liveDomain: 'https://ricardoseola.com/salvato/',
    thumbnail: editorialHospitalityVisual,
    features: ['Scroll-driven scene transitions', 'Custom kinetic typography', 'Chapter navigation bar', 'Adaptive high-DPI media'],
    apiRoutes: ['GET /api/chapters/index', 'GET /api/assets/preload', 'POST /api/feedback/note']
  },
  {
    title: 'Tenbin Labs Web3 & Protocol Studio',
    summary: 'Next-generation decentralized finance and RWA protocol interface built with crisp institutional telemetry and liquidity metrics.',
    techStack: ['Next.js', 'TypeScript', 'Ethers.js', 'Tailwind CSS'],
    liveDomain: 'https://www.tenbinlabs.xyz/',
    thumbnail: mobileAppSaasVisual,
    features: ['On-chain protocol metrics', 'Institutional vault architecture', 'Security audit documentation', 'Developer SDK links'],
    apiRoutes: ['GET /api/protocol/tvl', 'GET /api/vaults/yields', 'GET /api/audits/reports']
  },
  {
    title: 'Maika Sui Artisan Craft & Design',
    summary: 'Tactile lifestyle and craft e-commerce showcase blending artisanal ceramics, warm neutral palettes, and smooth product inspection.',
    techStack: ['React', 'Shopify', 'CSS Grid', 'TypeScript'],
    liveDomain: 'https://maikasui.com/',
    thumbnail: editorialHospitalityVisual,
    features: ['Artisan workshop origin stories', 'Curated ceramic lookbooks', 'Care & material guides', 'Global shipping estimator'],
    apiRoutes: ['GET /api/artisan/catalog', 'POST /api/cart/update', 'GET /api/shipping/rates']
  },
  {
    title: 'Taru Bali Eco Resort & Sanctuary',
    summary: 'Tropical boutique hospitality experience presenting eco-luxury villas, wellness retreats, and direct stay reservations.',
    techStack: ['Next.js', 'Motion', 'Tailwind CSS', 'Booking Engine'],
    liveDomain: 'https://tarubali.com/',
    thumbnail: editorialHospitalityVisual,
    features: ['Villa & sanctuary showcase', 'Wellness retreat itineraries', 'Direct room date picker', 'Sustainability impact report'],
    apiRoutes: ['GET /api/villas/availability', 'POST /api/stays/reserve', 'GET /api/retreats/calendar']
  },
  {
    title: 'Tails & Fin Pet Care Storefront',
    summary: 'Clean modern pet nutrition and aquatic care storefront featuring breed-filtered shopping, subscription refills, and vet guides.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Stripe'],
    liveDomain: 'https://tailsandfin.com/',
    thumbnail: ecommerceVisual,
    features: ['Pet profile food matcher', 'Auto-ship refill scheduler', 'Aquatic tank care calculators', 'Verified owner reviews'],
    apiRoutes: ['GET /api/products/pet-care', 'POST /api/subscriptions/autoship', 'GET /api/guides/nutrition']
  },
  {
    title: 'Vonder AI Micro-Learning Platform',
    summary: 'AI-powered gamified enterprise training and micro-learning platform transforming corporate SOPs into interactive modules.',
    techStack: ['Next.js', 'Gemini AI', 'Node.js', 'PostgreSQL'],
    liveDomain: 'https://www.vonder.ai/',
    thumbnail: aiSaasVisual,
    features: ['AI-generated micro-lessons', 'Gamified learner leaderboards', 'Real-time completion analytics', 'Enterprise LMS integrations'],
    apiRoutes: ['POST /api/ai/generate-lesson', 'GET /api/learners/leaderboard', 'GET /api/analytics/completion']
  },
  {
    title: 'John Hardy x Billie Eilish & Finneas',
    summary: 'Artisanal luxury jewelry collaboration storefront highlighting reclaimed silver/gold craft, capsule lookbooks, and global cart.',
    techStack: ['React', 'TypeScript', 'Headless Commerce', 'CDN'],
    liveDomain: 'https://johnhardy.com/collections/billie-eilish-and-finneas',
    thumbnail: fashionLuxuryVisual,
    features: ['Exclusive capsule collection', 'Reclaimed metal provenance', '360-degree craft gallery', 'Concierge boutique locator'],
    apiRoutes: ['GET /api/collections/capsule', 'GET /api/boutiques/nearby', 'POST /api/cart/luxury-checkout']
  }
];

const FULL_STACK_SAAS_SEEDS: RawProjectSeed[] = [
  {
    title: 'PulseBoard Multi-Tenant CRM',
    summary: 'Role-based enterprise CRM with Kanban deal pipelines, automated email follow-ups, and tenant-isolated PostgreSQL schemas.',
    techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma'],
    features: ['Tenant row-level isolation', 'Drag-and-drop deal stage pipeline', 'Webhook audit logs', 'CSV bulk contact importer'],
    apiRoutes: ['GET /api/deals/pipeline', 'POST /api/tenants/invite', 'PATCH /api/deals/:id/stage']
  },
  {
    title: 'InvoiceFlow GST Billing Suite',
    summary: 'Automated B2B invoicing engine generating GST-compliant PDF receipts, recurring subscription reminders, and ledger exports.',
    techStack: ['React 19', 'Node.js', 'Express', 'PostgreSQL'],
    features: ['HSN tax auto-calculator', 'Razorpay payment links', 'Monthly GSTR-1 summary export', 'Client portal access'],
    apiRoutes: ['POST /api/invoices/create', 'GET /api/gst/summary', 'POST /api/webhooks/razorpay']
  },
  {
    title: 'SprintForge Agile Issue Tracker',
    summary: 'Keyboard-first engineering project tracker featuring sprint velocity burndown charts, GitHub PR sync, and custom workflows.',
    techStack: ['Next.js', 'tRPC', 'PostgreSQL', 'Tailwind CSS'],
    features: ['GitHub webhook branch linker', 'Command palette navigation', 'Cycle velocity forecasting', 'Custom SLA rules'],
    apiRoutes: ['GET /api/sprints/active', 'POST /api/issues/transition', 'POST /api/webhooks/github']
  },
  {
    title: 'FormCraft Conditional Survey Engine',
    summary: 'Drag-and-drop form builder with branching skip logic, spam rate-limiting, and real-time analytics funnels.',
    techStack: ['React', 'TypeScript', 'MongoDB', 'Redis'],
    features: ['Visual logic branching tree', 'Drop-off step analytics', 'Custom domain embed widget', 'Webhook delivery retries'],
    apiRoutes: ['POST /api/forms/publish', 'POST /api/submissions', 'GET /api/analytics/dropoff']
  },
  {
    title: 'DocuSignet E-Signature Vault',
    summary: 'Tamper-evident digital contract workflow with SHA-256 document hashing, multi-party signing order, and audit trails.',
    techStack: ['Next.js', 'Node.js', 'AWS S3', 'PostgreSQL'],
    features: ['Cryptographic PDF tamper seal', 'Sequential signer notifications', 'Field placement studio', 'Timestamped audit certificate'],
    apiRoutes: ['POST /api/envelopes/send', 'POST /api/sign/verify', 'GET /api/audit/:envelopeId']
  },
  {
    title: 'MailBeacon Transactional Relay',
    summary: 'High-deliverability transactional email template designer with React Email previewing, bounce tracking, and DKIM checks.',
    techStack: ['TypeScript', 'Node.js', 'Redis', 'BullMQ'],
    features: ['Visual MJML/React template editor', 'Bounce & open event webhooks', 'Queue concurrency throttling', 'Sandbox test inbox'],
    apiRoutes: ['POST /api/v1/send', 'GET /api/domains/dkim', 'GET /api/logs/deliverability']
  },
  {
    title: 'BookSlot Calendar Scheduler',
    summary: 'Timezone-aware meeting booking platform with round-robin team routing, buffer windows, and Google Calendar sync.',
    techStack: ['Next.js', 'PostgreSQL', 'OAuth 2.0', 'Drizzle ORM'],
    features: ['Two-way conflict detection', 'Round-robin host assignment', 'Automated reminder emails', 'Custom availability rules'],
    apiRoutes: ['GET /api/slots/available', 'POST /api/bookings/confirm', 'DELETE /api/bookings/:id']
  },
  {
    title: 'HireDesk Applicant Tracking System',
    summary: 'End-to-end recruiting ATS featuring structured scorecard rubrics, blind resume screening, and interview panel scheduling.',
    techStack: ['React', 'NestJS', 'PostgreSQL', 'Elasticsearch'],
    features: ['Structured hiring rubrics', 'Full-text candidate search', 'Email sequence automation', 'Offer approval chain'],
    apiRoutes: ['GET /api/candidates/search', 'POST /api/interviews/scorecard', 'PATCH /api/applications/stage']
  },
  {
    title: 'SupportGrid Omnichannel Helpdesk',
    summary: 'Unified customer support inbox routing tickets from email and web chat with SLA breach timers and canned macros.',
    techStack: ['Next.js', 'WebSockets', 'PostgreSQL', 'Redis'],
    features: ['Real-time agent collision lock', 'SLA escalation alerts', 'Knowledge base article suggester', 'CSAT post-ticket survey'],
    apiRoutes: ['GET /api/tickets/inbox', 'POST /api/tickets/:id/reply', 'GET /api/sla/breaches']
  },
  {
    title: 'FlagSwitch Feature Flag Manager',
    summary: 'Low-latency feature toggle control plane supporting percentage rollouts, user segment targeting, and instant kill switches.',
    techStack: ['TypeScript', 'Go', 'Redis', 'React'],
    features: ['Sub-5ms SDK evaluation', 'Gradual canary percentage slider', 'Environment promotion diff', 'Audit history rollback'],
    apiRoutes: ['GET /api/sdk/flags', 'PATCH /api/flags/:key/rollout', 'POST /api/flags/kill-switch']
  },
  {
    title: 'AssetVault Digital DAM Portal',
    summary: 'Team brand asset repository with automatic image resizing, expiry links, color palette extraction, and tag search.',
    techStack: ['React', 'Node.js', 'Sharp', 'Cloudflare R2'],
    features: ['On-the-fly WebP optimization', 'Expiring external share links', 'Version diff viewer', 'License expiry alerts'],
    apiRoutes: ['POST /api/assets/upload', 'GET /api/assets/search', 'POST /api/shares/create']
  },
  {
    title: 'PayrollSync Compliance Portal',
    summary: 'Automated monthly salary disbursement calculator handling TDS slabs, PF/ESI deductions, and downloadable payslips.',
    techStack: ['Next.js', 'PostgreSQL', 'TypeScript', 'PDFKit'],
    features: ['Automated TDS tax slab engine', 'One-click bulk payslip PDF', 'Attendance leave sync', 'Bank NEFT batch sheet'],
    apiRoutes: ['POST /api/payroll/run', 'GET /api/payslips/:empId', 'GET /api/compliance/pf-return']
  },
  {
    title: 'WaitlistRocket Viral Launch Engine',
    summary: 'Pre-launch referral waitlist SaaS with custom leaderboard positions, fraud bot detection, and milestone rewards.',
    techStack: ['Next.js', 'Redis', 'PostgreSQL', 'Turnstile'],
    features: ['Unique referral rank bump', 'Disposable email blocker', 'Embeddable React widget', 'Conversion attribution graph'],
    apiRoutes: ['POST /api/waitlist/join', 'GET /api/waitlist/rank', 'GET /api/campaigns/metrics']
  },
  {
    title: 'FeedbackLoop Public Roadmap',
    summary: 'Customer feature voting board with duplicate request merging, changelog announcements, and MRR-weighted prioritization.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: ['MRR-weighted upvote sorting', 'Release changelog widget', 'Status email subscribers', 'Moderation queue'],
    apiRoutes: ['GET /api/boards/posts', 'POST /api/posts/:id/vote', 'POST /api/changelog/publish']
  },
  {
    title: 'ContractLens Vendor Renewal Hub',
    summary: 'SaaS spend and vendor contract tracker alerting finance teams 60 days ahead of auto-renewal deadlines.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Cron'],
    features: ['Seat utilization tracking', 'Renewal alert escalation', 'Department cost allocation', 'PDF contract clause repository'],
    apiRoutes: ['GET /api/contracts/upcoming', 'POST /api/vendors/audit', 'GET /api/spend/by-department']
  },
  {
    title: 'LinkPulse Branded URL Shortener',
    summary: 'Custom domain link management platform with geo-device analytics, QR code studio, and UTM campaign builder.',
    techStack: ['TypeScript', 'Fastify', 'Redis', 'ClickHouse'],
    features: ['Sub-10ms edge redirect', 'Dynamic SVG QR generator', 'Bot click filtering', 'Device & OS breakdown'],
    apiRoutes: ['POST /api/links/shorten', 'GET /api/links/:slug/stats', 'GET /:slug']
  },
  {
    title: 'StatusBeacon Uptime & Incident Page',
    summary: 'Multi-region endpoint monitor with automated incident timelines, SMS/Slack alerts, and public status pages.',
    techStack: ['Node.js', 'TimescaleDB', 'React', 'WebSockets'],
    features: ['60-second multi-region probes', 'P95 latency sparklines', 'Scheduled maintenance banners', 'Subscriber webhook alerts'],
    apiRoutes: ['GET /api/monitors/status', 'POST /api/incidents/create', 'GET /api/uptime/90d']
  },
  {
    title: 'SplitBill Team Expense Tracker',
    summary: 'Corporate petty-cash and receipt approval platform with OCR receipt totals and multi-level manager signoff.',
    techStack: ['React', 'Express', 'PostgreSQL', 'Tesseract'],
    features: ['Receipt line-item extraction', 'Policy threshold flags', 'Reimbursement batch export', 'Multi-currency conversion'],
    apiRoutes: ['POST /api/expenses/submit', 'PATCH /api/expenses/:id/approve', 'GET /api/reports/monthly']
  },
  {
    title: 'VaultPass Team Secret Manager',
    summary: 'Zero-knowledge encrypted `.env` and API credential vault with audit logs and CLI environment injection.',
    techStack: ['Next.js', 'WebCrypto API', 'PostgreSQL', 'Node.js'],
    features: ['Client-side AES-256-GCM encryption', 'Environment diff comparison', 'Secret rotation reminders', 'Role-scoped read access'],
    apiRoutes: ['POST /api/vaults/secrets', 'GET /api/audit/access-log', 'POST /api/tokens/rotate']
  },
  {
    title: 'EventPass Ticketing & Check-In',
    summary: 'Conference ticketing platform with dynamic QR passes, seat map selection, and offline-capable gate scanner.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'QRCode'],
    features: ['HMAC-signed QR tickets', 'Instant gate duplicate check', 'Early-bird tier pricing', 'Attendee badge PDF export'],
    apiRoutes: ['POST /api/tickets/checkout', 'POST /api/checkin/scan', 'GET /api/events/:id/attendance']
  },
  {
    title: 'ShiftGrid Workforce Roster Planner',
    summary: 'Weekly shift scheduling tool for multi-branch operations with overtime rule warnings and swap approvals.',
    techStack: ['React 19', 'TypeScript', 'PostgreSQL', 'Prisma'],
    features: ['Drag-and-drop shift timeline', 'Overtime limit conflict checks', 'Peer shift swap marketplace', 'Timesheet export'],
    apiRoutes: ['GET /api/rosters/week', 'POST /api/shifts/swap', 'GET /api/hours/summary']
  },
  {
    title: 'AuditTrail Compliance Checklist Hub',
    summary: 'SOC2 and ISO-27001 readiness tracker mapping control owners, evidence uploads, and quarterly review cycles.',
    techStack: ['Next.js', 'PostgreSQL', 'AWS S3', 'TypeScript'],
    features: ['Control coverage progress matrix', 'Automated evidence reminder', 'Auditor read-only guest link', 'Risk heat grid'],
    apiRoutes: ['GET /api/controls/coverage', 'POST /api/evidence/attach', 'GET /api/audits/export']
  },
  {
    title: 'ClientPortal Agency Workspace',
    summary: 'White-label agency client hub combining project milestones, deliverable sign-offs, and shared file feedback.',
    techStack: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS'],
    features: ['Custom client branding', 'Annotated deliverable approvals', 'Retainer hours tracker', 'Automated milestone billing'],
    apiRoutes: ['GET /api/portals/:clientSlug', 'POST /api/deliverables/approve', 'GET /api/retainers/balance']
  },
  {
    title: 'LeadEnrich B2B Prospecting Desk',
    summary: 'Company domain lookup and CRM sync dashboard validating MX records, tech stack fingerprints, and outreach status.',
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'Redis'],
    features: ['DNS & MX verification', 'Technology fingerprint detector', 'Duplicate lead deduplication', 'CSV export filter'],
    apiRoutes: ['POST /api/enrich/domain', 'GET /api/prospects/verified', 'POST /api/lists/export']
  },
  {
    title: 'DocHub Interactive API Docs',
    summary: 'OpenAPI-powered developer documentation portal with live in-browser request playground and SDK code snippets.',
    techStack: ['Next.js', 'OpenAPI 3.1', 'TypeScript', 'Monaco'],
    features: ['Live Try-It request runner', 'Multi-language snippet generator', 'Full-text endpoint search', 'Version switcher'],
    apiRoutes: ['GET /api/specs/openapi.json', 'POST /api/playground/proxy', 'GET /api/search/docs']
  },
  {
    title: 'NoteGraph Collaborative Wiki',
    summary: 'Bidirectional markdown workspace supporting live backlinks, slash commands, and nested team permissions.',
    techStack: ['React', 'Yjs', 'WebSockets', 'PostgreSQL'],
    features: ['CRDT multi-user editing', 'Knowledge graph visualization', 'Slash block menu', 'Markdown & PDF export'],
    apiRoutes: ['GET /api/docs/:id', 'WS /api/collab/:room', 'GET /api/graph/links']
  },
  {
    title: 'WebhookRelay Event Inspector',
    summary: 'Developer webhook ingestion proxy capturing payloads, verifying HMAC signatures, and replaying failed deliveries.',
    techStack: ['Node.js', 'Redis', 'PostgreSQL', 'React'],
    features: ['Live payload diff inspector', 'Exponential backoff retries', 'Custom transform scripts', 'Dead-letter replay'],
    apiRoutes: ['POST /api/ingest/:endpointId', 'POST /api/deliveries/:id/replay', 'GET /api/events/stream']
  },
  {
    title: 'AssetLease Rental Booking SaaS',
    summary: 'Equipment and studio rental management system handling availability calendars, security deposits, and damage logs.',
    techStack: ['Next.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
    features: ['Date-range inventory lock', 'Security deposit hold flow', 'Pre/post condition checklist', 'Late fee automation'],
    apiRoutes: ['GET /api/gear/availability', 'POST /api/rentals/reserve', 'POST /api/rentals/return']
  },
  {
    title: 'QuotaGuard API Rate Gateway',
    summary: 'API monetization and usage metering dashboard tracking per-key token buckets and monthly overage billing.',
    techStack: ['TypeScript', 'Redis', 'Express', 'React'],
    features: ['Sliding window rate limiter', 'Per-customer usage graphs', 'Key scoping permissions', 'Instant key revocation'],
    apiRoutes: ['POST /api/keys/provision', 'GET /api/usage/timeseries', 'DELETE /api/keys/:id']
  },
  {
    title: 'SignageCloud Screen Fleet CMS',
    summary: 'Remote digital signage scheduler pushing playlists, ticker updates, and emergency overrides to retail displays.',
    techStack: ['React', 'WebSockets', 'Node.js', 'MongoDB'],
    features: ['Live screen heartbeat map', 'Dayparting playlist rules', 'Split-zone layout editor', 'Offline asset caching'],
    apiRoutes: ['GET /api/screens/health', 'POST /api/playlists/deploy', 'WS /api/screens/channel']
  }
];

const GEN_AI_SEEDS: RawProjectSeed[] = [
  {
    title: 'DocuMind Enterprise RAG Copilot',
    summary: 'Hybrid dense+BM25 document retrieval workspace answering policy questions with exact page-level citations.',
    techStack: ['Next.js', 'Gemini API', 'pgvector', 'FastAPI'],
    features: ['Chunked PDF semantic indexing', 'Inline source citation drawer', 'Hallucination confidence guard', 'Multi-collection permissions'],
    apiRoutes: ['POST /api/rag/ingest', 'POST /api/rag/query', 'GET /api/documents/sources']
  },
  {
    title: 'CodeGuard AI PR Reviewer',
    summary: 'Automated GitHub pull-request analyzer catching security regressions, N+1 queries, and missing edge tests.',
    techStack: ['TypeScript', 'Gemini 2.5', 'GitHub App', 'Node.js'],
    features: ['Diff-aware inline suggestions', 'OWASP vulnerability scanner', 'Complexity score diff', 'Auto-generated unit test stub'],
    apiRoutes: ['POST /api/webhooks/pr', 'POST /api/review/analyze-diff', 'GET /api/repos/findings']
  },
  {
    title: 'VoiceDesk Multilingual Call Agent',
    summary: 'Low-latency conversational voice support agent supporting Hindi-English code-switching and CRM ticket creation.',
    techStack: ['WebRTC', 'Gemini Live', 'Node.js', 'React'],
    features: ['Barge-in turn interruption', 'Hinglish intent extraction', 'Live call transcript stream', 'Automatic CRM ticket summary'],
    apiRoutes: ['WS /api/voice/session', 'POST /api/calls/summarize', 'GET /api/calls/transcripts']
  },
  {
    title: 'SQLWhisper Natural Query Studio',
    summary: 'Schema-aware text-to-SQL assistant generating read-only PostgreSQL queries, explain plans, and instant charts.',
    techStack: ['React', 'FastAPI', 'Gemini API', 'PostgreSQL'],
    features: ['Read-only AST SQL sandbox', 'Automatic chart type selection', 'Schema FK relationship graph', 'Saved query snippets'],
    apiRoutes: ['POST /api/sql/generate', 'POST /api/sql/execute-safe', 'GET /api/schema/tables']
  },
  {
    title: 'ResumeForge ATS Match Scorer',
    summary: 'Semantic resume-to-JD analyzer highlighting missing competency keywords and rewriting bullet points with metrics.',
    techStack: ['Next.js', 'Gemini API', 'PDF.js', 'Tailwind CSS'],
    features: ['JD vs Resume gap matrix', 'Quantified bullet rewriter', 'LaTeX/PDF clean export', 'Role-specific rubric check'],
    apiRoutes: ['POST /api/resume/parse', 'POST /api/ats/score', 'POST /api/bullets/enhance']
  },
  {
    title: 'MockMentor AI Tech Interviewer',
    summary: 'Interactive technical interview simulator evaluating DSA complexity, system design trade-offs, and verbal clarity.',
    techStack: ['React', 'Monaco', 'Gemini API', 'WebSockets'],
    features: ['Live code execution feedback', 'Adaptive follow-up probing', 'System design rubric score', 'Session replay notes'],
    apiRoutes: ['POST /api/interview/start', 'POST /api/interview/evaluate', 'GET /api/sessions/:id/report']
  },
  {
    title: 'SupportTriage Auto-Classifier',
    summary: 'Incoming support email router classifying urgency, sentiment, and product area before dispatching to Slack.',
    techStack: ['Python', 'FastAPI', 'Gemini API', 'Redis'],
    features: ['Structured JSON classification', 'SLA priority tagging', 'Draft reply synthesis', 'Human-in-loop review queue'],
    apiRoutes: ['POST /api/triage/classify', 'POST /api/triage/draft', 'GET /api/metrics/accuracy']
  },
  {
    title: 'ContractRedline Legal Reviewer',
    summary: 'NDA and MSA clause analyzer flagging risky indemnity terms, auto-renewal traps, and missing liability caps.',
    techStack: ['Next.js', 'Gemini API', 'PostgreSQL', 'TypeScript'],
    features: ['Clause-by-clause risk heatmap', 'Standard playbook comparison', 'Redline suggestion export', 'Side-by-side diff view'],
    apiRoutes: ['POST /api/contracts/scan', 'GET /api/clauses/risks', 'POST /api/playbooks/compare']
  },
  {
    title: 'SlideCraft Deck Architect',
    summary: 'Turns technical engineering memos into structured presentation outlines with speaker notes and chart placeholders.',
    techStack: ['React', 'Gemini API', 'Node.js', 'PptxGenJS'],
    features: ['Narrative arc structuring', 'Auto speaker notes', 'One-click PPTX download', 'Brand palette theming'],
    apiRoutes: ['POST /api/decks/outline', 'POST /api/decks/export-pptx', 'GET /api/templates']
  },
  {
    title: 'VideoChapter Semantic Indexer',
    summary: 'Extracts timestamped lecture chapters, searchable transcripts, and concept flashcards from long engineering videos.',
    techStack: ['Next.js', 'Gemini Multimodal', 'FFmpeg', 'PostgreSQL'],
    features: ['Auto timestamped TOC', 'Concept Q&A jump links', 'SRT subtitle export', 'Quiz generator per chapter'],
    apiRoutes: ['POST /api/videos/index', 'GET /api/videos/:id/chapters', 'POST /api/videos/ask']
  },
  {
    title: 'PromptEval Regression Harness',
    summary: 'LLM prompt versioning and evaluation bench running golden test datasets against latency, cost, and rubric scores.',
    techStack: ['TypeScript', 'React', 'PostgreSQL', 'Gemini API'],
    features: ['Side-by-side prompt diff', 'LLM-as-judge grading matrix', 'Token cost calculator', 'CI regression webhook'],
    apiRoutes: ['POST /api/evals/run', 'GET /api/prompts/:id/versions', 'GET /api/evals/report']
  },
  {
    title: 'CatalogEnrich Product Copywriter',
    summary: 'Bulk e-commerce SKU enrichment pipeline turning product photos into SEO descriptions, attribute JSON, and alt-text.',
    techStack: ['Next.js', 'Gemini Vision', 'BullMQ', 'CSV'],
    features: ['Image-to-attribute extraction', 'Tone-of-voice presets', 'Duplicate SKU check', 'Shopify CSV export'],
    apiRoutes: ['POST /api/catalog/enrich-batch', 'GET /api/jobs/:id/status', 'GET /api/catalog/export']
  },
  {
    title: 'MeetNote Action Extractor',
    summary: 'Meeting audio/transcript processor extracting assigned owners, deadlines, blockers, and Jira ticket drafts.',
    techStack: ['React', 'Node.js', 'Gemini API', 'PostgreSQL'],
    features: ['Owner & due-date tagging', 'One-click Jira issue push', 'Decision log timeline', 'Weekly digest email'],
    apiRoutes: ['POST /api/meetings/process', 'GET /api/actions/open', 'POST /api/integrations/jira']
  },
  {
    title: 'ResearchBrief Paper Synthesizer',
    summary: 'Academic PDF reader summarizing methodology, limitations, datasets, and citation graphs across arXiv papers.',
    techStack: ['Next.js', 'FastAPI', 'Qdrant', 'Gemini API'],
    features: ['Cross-paper comparison matrix', 'Formula explanation sidebar', 'BibTeX export', 'Citation graph'],
    apiRoutes: ['POST /api/papers/upload', 'POST /api/papers/compare', 'GET /api/library/search']
  },
  {
    title: 'SchemaForge Mock Data Seeder',
    summary: 'Generates realistic relational seed datasets from TypeScript interfaces or Prisma schemas with foreign-key integrity.',
    techStack: ['TypeScript', 'React', 'Node.js', 'Gemini API'],
    features: ['FK-consistent JSON/SQL output', 'Locale-aware realistic names', '10k-row streaming download', 'Prisma & Drizzle parser'],
    apiRoutes: ['POST /api/seed/parse-schema', 'POST /api/seed/generate', 'GET /api/presets']
  },
  {
    title: 'AgentFlow Visual Tool Orchestrator',
    summary: 'Node-based multi-agent workflow studio wiring search, calculator, webhook, and database tools with trace inspection.',
    techStack: ['React Flow', 'TypeScript', 'Gemini API', 'Node.js'],
    features: ['Step-by-step execution trace', 'Tool schema validator', 'Loop & branch guards', 'JSON flow export'],
    apiRoutes: ['POST /api/workflows/execute', 'GET /api/traces/:runId', 'POST /api/tools/register']
  },
  {
    title: 'BugRepro Stacktrace Analyzer',
    summary: 'Parses production crash logs, maps minified frames, and suggests root-cause patches with reproduction steps.',
    techStack: ['React', 'Node.js', 'Gemini API', 'Sentry API'],
    features: ['Source-map stack unfolding', 'Probable commit blame hint', 'Minimal repro generator', 'Severity classifier'],
    apiRoutes: ['POST /api/crashes/analyze', 'GET /api/issues/clusters', 'POST /api/fixes/propose']
  },
  {
    title: 'LocalizeAI i18n JSON Translator',
    summary: 'Context-aware localization platform translating nested React i18n JSON files while preserving ICU variables.',
    techStack: ['Next.js', 'Gemini API', 'TypeScript', 'GitHub'],
    features: ['ICU placeholder protection', 'Glossary term enforcement', 'Missing key diff view', '18-language batch export'],
    apiRoutes: ['POST /api/i18n/translate', 'POST /api/glossary/upsert', 'GET /api/locales/coverage']
  },
  {
    title: 'BrandVoice Content Guardrail',
    summary: 'Editorial QA assistant checking marketing drafts against banned claims, readability grade, and compliance rules.',
    techStack: ['React', 'FastAPI', 'Gemini API', 'PostgreSQL'],
    features: ['Compliance policy linter', 'Flesch readability scoring', 'Inline rewrite suggestions', 'Approval workflow'],
    apiRoutes: ['POST /api/lint/content', 'GET /api/policies/rules', 'POST /api/drafts/approve']
  },
  {
    title: 'StudyBuddy Adaptive Quiz Tutor',
    summary: 'Socratic STEM tutor generating spaced-repetition flashcards and adaptive difficulty quizzes from class notes.',
    techStack: ['Next.js', 'Gemini API', 'PostgreSQL', 'SM-2'],
    features: ['SM-2 spaced repetition queue', 'Hint-first Socratic mode', 'Weak-topic mastery radar', 'Markdown note upload'],
    apiRoutes: ['POST /api/quiz/generate', 'POST /api/cards/review', 'GET /api/mastery/stats']
  },
  {
    title: 'InvoiceOCR Line-Item Extractor',
    summary: 'Extracts vendor GSTIN, HSN codes, line totals, and tax splits from scanned receipts into clean ERP JSON.',
    techStack: ['FastAPI', 'Gemini Vision', 'React', 'PostgreSQL'],
    features: ['Mathematical total cross-check', 'Low-confidence field highlight', 'Tally XML export', 'Batch folder upload'],
    apiRoutes: ['POST /api/ocr/extract', 'POST /api/ocr/verify', 'GET /api/exports/tally']
  },
  {
    title: 'PitchDeck Q&A Simulator',
    summary: 'Simulates skeptical VC partner Q&A on unit economics, CAC/LTV ratios, and moat claims before investor meetings.',
    techStack: ['React', 'Gemini API', 'Node.js', 'Tailwind CSS'],
    features: ['Persona difficulty selector', 'Metric consistency check', 'Objection drill cards', 'Scorecard summary'],
    apiRoutes: ['POST /api/pitch/upload', 'POST /api/pitch/question', 'GET /api/pitch/feedback']
  },
  {
    title: 'LogLens Anomaly Explainer',
    summary: 'Clusters noisy Nginx and Kubernetes error spikes into plain-English incident summaries with remediation commands.',
    techStack: ['Python', 'FastAPI', 'Gemini API', 'ClickHouse'],
    features: ['Drain3 log pattern clustering', 'Spike root-cause summary', 'Kubectl diagnostic hints', 'Slack alert digest'],
    apiRoutes: ['POST /api/logs/cluster', 'POST /api/logs/explain', 'GET /api/anomalies/recent']
  },
  {
    title: 'TestCaseGopher QA Generator',
    summary: 'Converts product requirement docs into structured Playwright E2E test plans and edge-case matrices.',
    techStack: ['TypeScript', 'React', 'Gemini API', 'Playwright'],
    features: ['Boundary value test generator', 'Playwright spec scaffolding', 'Jira Zephyr CSV export', 'Coverage gap tracker'],
    apiRoutes: ['POST /api/qa/from-prd', 'POST /api/qa/export-playwright', 'GET /api/suites']
  },
  {
    title: 'EmailCleanse Thread Summarizer',
    summary: 'Distills 40-message email threads into crisp executive decisions, open questions, and draft responses.',
    techStack: ['Next.js', 'Gmail API', 'Gemini API', 'TypeScript'],
    features: ['Decision bullet extraction', 'Urgency inbox triage', '3-tone reply drafts', 'Privacy-first zero retention'],
    apiRoutes: ['POST /api/threads/summarize', 'POST /api/replies/draft', 'GET /api/inbox/priority']
  },
  {
    title: 'ImageAudit Alt-Text & WCAG Tool',
    summary: 'Audits web pages for missing alt descriptions, low contrast ratios, and generates descriptive accessibility tags.',
    techStack: ['React', 'Node.js', 'Gemini Vision', 'Axe-core'],
    features: ['WCAG 2.1 AA contrast check', 'Context-aware alt generation', 'Bulk CMS CSV patch', 'Accessibility score report'],
    apiRoutes: ['POST /api/audit/url', 'POST /api/alt/generate', 'GET /api/reports/:id']
  },
  {
    title: 'SupportBot Knowledge Sync',
    summary: 'Self-updating customer help widget that detects outdated docs when GitHub releases change UI workflows.',
    techStack: ['Next.js', 'Pinecone', 'Gemini API', 'Webhooks'],
    features: ['Stale article drift alert', 'Grounded widget citations', 'Unanswered question log', '1-line script embed'],
    apiRoutes: ['POST /api/kb/sync', 'POST /api/chat/grounded', 'GET /api/kb/gaps']
  },
  {
    title: 'RFPMaster Proposal Copilot',
    summary: 'Auto-fills enterprise RFP security questionnaires using approved past responses with confidence scores.',
    techStack: ['React', 'FastAPI', 'pgvector', 'Gemini API'],
    features: ['Excel/DOCX question parser', 'Verified answer library match', 'SME review assignment', 'Export back to Excel'],
    apiRoutes: ['POST /api/rfp/import', 'POST /api/rfp/autofill', 'GET /api/answers/library']
  },
  {
    title: 'RegexCraft Plain-English Studio',
    summary: 'Generates, explains, and unit-tests complex regular expressions across JavaScript, Python, and PCRE dialects.',
    techStack: ['React', 'TypeScript', 'Gemini API', 'Vitest'],
    features: ['Token-by-token breakdown', 'Live match group highlighter', 'ReDoS backtracking warning', 'Auto test suite export'],
    apiRoutes: ['POST /api/regex/synthesize', 'POST /api/regex/benchmark', 'GET /api/patterns/common']
  },
  {
    title: 'ChartNarrator Executive Writer',
    summary: 'Turns CSV metrics and monthly KPI tables into executive narrative commentary for leadership slide decks.',
    techStack: ['Next.js', 'Python', 'Gemini API', 'Recharts'],
    features: ['MoM variance detection', 'Anomaly callout bullets', 'Boardroom tone formatting', 'Markdown copy export'],
    apiRoutes: ['POST /api/narrate/csv', 'GET /api/insights/variance', 'POST /api/charts/spec']
  }
];

const FINTECH_SEEDS: RawProjectSeed[] = [
  {
    title: 'AlphaEdge Algorithmic Order Desk',
    summary: 'Backtesting and paper-trading execution terminal supporting VWAP, TWAP, and RSI-crossover strategy telemetry.',
    techStack: ['React', 'Python', 'FastAPI', 'TimescaleDB'],
    features: ['Tick-level equity backtester', 'Sharpe & max drawdown cards', 'Live paper order book', 'Risk exposure limit guard'],
    apiRoutes: ['POST /api/backtest/run', 'GET /api/orders/book', 'GET /api/portfolio/pnl']
  },
  {
    title: 'LedgerCore Double-Entry Engine',
    summary: 'Immutable double-entry accounting microservice guaranteeing zero-sum balance invariants across wallet transfers.',
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'React'],
    features: ['Idempotency key enforcement', 'Serializable ledger locks', 'Trial balance auto-reconciler', 'Audit journal viewer'],
    apiRoutes: ['POST /api/ledger/transfer', 'GET /api/accounts/:id/balance', 'GET /api/audit/trial-balance']
  },
  {
    title: 'UPIFlow Merchant Settlement Hub',
    summary: 'Payment gateway aggregator dashboard tracking UPI intent conversion, bank downtime fallback, and T+1 settlements.',
    techStack: ['Next.js', 'Node.js', 'Redis', 'PostgreSQL'],
    features: ['Smart PSP failover routing', 'Real-time success rate gauge', 'UTR reconciliation matcher', 'Refund dispute tracker'],
    apiRoutes: ['POST /api/payments/intent', 'GET /api/routing/health', 'POST /api/reconcile/utr']
  },
  {
    title: 'OptionsChain Greeks Analyzer',
    summary: 'Interactive Black-Scholes options payoff builder visualizing Delta, Gamma, Theta decay, and IV skew curves.',
    techStack: ['React', 'TypeScript', 'WebSockets', 'D3.js'],
    features: ['Multi-leg strategy payoff graph', 'Live IV percentile gauge', 'Max profit & breakeven math', 'Margin requirement calc'],
    apiRoutes: ['GET /api/options/chain', 'POST /api/payoff/simulate', 'WS /api/ticks/stream']
  },
  {
    title: 'SpendWise Personal NetWorth OS',
    summary: 'Multi-account personal finance cockpit tracking SIP XIRR returns, credit utilization, and emergency runway.',
    techStack: ['Next.js', 'PostgreSQL', 'Recharts', 'Tailwind CSS'],
    features: ['True XIRR mutual fund calc', 'Goal SIP inflation planner', 'Recurring bill calendar', 'CSV statement parser'],
    apiRoutes: ['GET /api/networth/overview', 'POST /api/transactions/import', 'GET /api/goals/projection']
  },
  {
    title: 'FraudShield Velocity Scoring API',
    summary: 'Real-time transaction risk engine flagging impossible travel, card testing bursts, and device fingerprint anomalies.',
    techStack: ['Go', 'Redis', 'PostgreSQL', 'React'],
    features: ['Sub-15ms rule evaluation', 'Sliding velocity counters', 'Analyst case review queue', 'Precision/recall metrics'],
    apiRoutes: ['POST /api/risk/score', 'GET /api/cases/flagged', 'PATCH /api/rules/:id']
  },
  {
    title: 'CryptoPulse Arbitrage Monitor',
    summary: 'Cross-exchange order-book spread tracker alerting traders when liquidity-adjusted spreads exceed fee thresholds.',
    techStack: ['TypeScript', 'WebSockets', 'Node.js', 'React'],
    features: ['Depth-aware slippage math', 'Fee-adjusted net spread', 'Exchange latency telemetry', 'Historical spread log'],
    apiRoutes: ['WS /api/spreads/live', 'GET /api/exchanges/fees', 'GET /api/alerts/history']
  },
  {
    title: 'LoanOrigination Credit Underwriter',
    summary: 'Digital NBFC lending workflow verifying PAN/GST cashflows, FOIR ratios, and generating instant amortization schedules.',
    techStack: ['React', 'Java Spring Boot', 'PostgreSQL', 'Docker'],
    features: ['Automated FOIR & DTI scoring', 'EMI schedule PDF generator', 'KYC document checklist', 'Sanction letter workflow'],
    apiRoutes: ['POST /api/loans/underwrite', 'GET /api/loans/:id/schedule', 'POST /api/kyc/verify']
  },
  {
    title: 'TreasuryYield Fixed-Income Tracker',
    summary: 'Corporate treasury ladder dashboard comparing T-Bills, G-Secs, and liquid fund post-tax yields.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts'],
    features: ['Maturity ladder timeline', 'Post-tax yield comparator', 'Duration risk sensitivity', 'Coupon cashflow calendar'],
    apiRoutes: ['GET /api/bonds/yield-curve', 'POST /api/ladders/build', 'GET /api/cashflows/upcoming']
  },
  {
    title: 'TaxHarvest Capital Gains Planner',
    summary: 'Automated equity STCG/LTCG tax-loss harvesting optimizer scanning portfolio lots before financial year-end.',
    techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    features: ['FIFO tax lot matcher', '₹1.25L LTCG exemption tracker', 'Wash-sale awareness flag', 'Broker CSV importer'],
    apiRoutes: ['POST /api/portfolio/lots', 'GET /api/tax/harvest-opportunities', 'GET /api/tax/summary']
  },
  {
    title: 'EscrowVault Milestone Marketplace',
    summary: 'Programmable milestone escrow platform holding buyer funds until verified delivery or inspection sign-off.',
    techStack: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL'],
    features: ['Milestone release state machine', 'Dispute freeze arbitration', 'Split payout ledger', 'Automated invoice PDF'],
    apiRoutes: ['POST /api/escrow/fund', 'POST /api/milestones/:id/release', 'POST /api/disputes/open']
  },
  {
    title: 'ForexHedger FX Exposure Desk',
    summary: 'SME exporter dashboard tracking USD/INR invoice receivables, forward cover ratios, and mark-to-market variance.',
    techStack: ['React', 'TypeScript', 'Node.js', 'TimescaleDB'],
    features: ['Unhedged exposure heatmap', 'Forward contract MTM calc', 'Sensitivity stress table', 'Maturity alert calendar'],
    apiRoutes: ['GET /api/fx/exposure', 'POST /api/forwards/book', 'GET /api/fx/rates']
  },
  {
    title: 'ChitFund Transparent Ledger App',
    summary: 'Digitized community savings group portal tracking monthly auctions, dividend splits, and verified member receipts.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Live auction bid log', 'Auto dividend calculation', 'UPI receipt tracking', 'Defaulter reminder alerts'],
    apiRoutes: ['GET /api/groups/:id/ledger', 'POST /api/auctions/bid', 'POST /api/dues/record']
  },
  {
    title: 'CapTable Equity & ESOP Manager',
    summary: 'Startup cap table modeling tool simulating dilution across SAFE notes, priced rounds, and 4-year ESOP cliffs.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts'],
    features: ['Waterfall exit simulator', 'Vesting cliff calendar', '409A strike price log', 'Shareholder portal'],
    apiRoutes: ['GET /api/captable/summary', 'POST /api/scenarios/dilution', 'GET /api/grants/vesting']
  },
  {
    title: 'SubscriptionMeter Usage Billing',
    summary: 'Hybrid seat + metered event billing engine ingesting telemetry counters and syncing Stripe usage invoices.',
    techStack: ['TypeScript', 'ClickHouse', 'Node.js', 'React'],
    features: ['Idempotent event deduplication', 'Tiered volume pricing', 'Real-time spend cap alerts', 'Invoice previewer'],
    apiRoutes: ['POST /api/meter/events', 'GET /api/customers/:id/bill', 'POST /api/plans/configure']
  },
  {
    title: 'MicroFinance Field Collection App',
    summary: 'Offline-first SHG loan collection portal syncing field receipts, route schedules, and overdue follow-ups.',
    techStack: ['React', 'IndexedDB', 'Node.js', 'PostgreSQL'],
    features: ['Offline IndexedDB receipt queue', 'Center collection sheet', 'SMS receipt confirmation', 'Branch PAR30 metrics'],
    apiRoutes: ['POST /api/collections/sync', 'GET /api/centers/daily-sheet', 'GET /api/branches/par']
  },
  {
    title: 'CryptoTax Koinly-Style Reconciler',
    summary: 'Computes 30% VDA tax and 1% TDS obligations across DEX swaps, staking rewards, and exchange CSV imports.',
    techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    features: ['Loss offset restriction rules', '1% TDS mismatch detector', 'Wallet address sync', 'Schedule VDA PDF'],
    apiRoutes: ['POST /api/vda/import', 'GET /api/vda/tax-report', 'GET /api/tds/reconcile']
  },
  {
    title: 'InsureCompare Policy Analyzer',
    summary: 'Side-by-side health and term insurance policy comparator exposing room-rent caps, waiting periods, and co-pay clauses.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Hidden clause extractor', 'Claim settlement ratio trends', 'Family floater premium calc', 'Shortlist PDF'],
    apiRoutes: ['GET /api/policies/compare', 'POST /api/quotes/calculate', 'GET /api/insurers/csr']
  },
  {
    title: 'StockScreener Fundamental Terminal',
    summary: 'Indian equity screener filtering 2,500+ NSE stocks by ROCE, PEG ratio, promoter pledge, and quarterly OPM.',
    techStack: ['React', 'Python', 'PostgreSQL', 'Redis'],
    features: ['Custom formula filter builder', '10-year financial ratio table', 'Peer valuation comparison', 'Watchlist alerts'],
    apiRoutes: ['POST /api/screener/query', 'GET /api/stocks/:symbol/financials', 'POST /api/watchlists/alert']
  },
  {
    title: 'ReconcileBot Bank Statement Matcher',
    summary: 'Automated three-way matching between bank MT940 statements, payment gateway payouts, and ERP sales orders.',
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    features: ['Fuzzy amount & date matching', 'Unreconciled exception workbench', 'Batch auto-clearing rules', 'Audit trail export'],
    apiRoutes: ['POST /api/recon/upload-bank', 'POST /api/recon/run-match', 'GET /api/recon/exceptions']
  },
  {
    title: 'RemitTrack Cross-Border FX Calc',
    summary: 'Transparent international remittance comparator showing true mid-market markup, SWIFT fees, and arrival ETA.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'Redis'],
    features: ['Live hidden FX spread detector', 'TCS remittance tax estimator', 'Corridor fee leaderboard', 'Rate target alerts'],
    apiRoutes: ['GET /api/remit/compare', 'POST /api/alerts/rate', 'GET /api/corridors']
  },
  {
    title: 'AlgoJournal Trade Psychology Log',
    summary: 'Trader performance journal tagging setup emotions, R-multiple expectancy, and win-rate by time of day.',
    techStack: ['React', 'PostgreSQL', 'Recharts', 'Tailwind CSS'],
    features: ['R-multiple equity curve', 'Mistake tag frequency chart', 'Trade screenshot annotation', 'Broker tradebook sync'],
    apiRoutes: ['POST /api/trades/log', 'GET /api/analytics/expectancy', 'GET /api/analytics/time-heatmap']
  },
  {
    title: 'BNPL Checkout Risk Sandbox',
    summary: 'Buy-Now-Pay-Later installment simulator computing merchant MDR, default reserve buffers, and cohort loss curves.',
    techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    features: ['3/6/9-month EMI split preview', 'Cohort vintage default curve', 'Merchant settlement calc', 'Credit limit tiering'],
    apiRoutes: ['POST /api/bnpl/simulate', 'GET /api/cohorts/vintage', 'POST /api/limits/evaluate']
  },
  {
    title: 'RealEstate REIT Yield Explorer',
    summary: 'Fractional commercial real estate and REIT cashflow simulator modeling rental escalation and cap-rate sensitivity.',
    techStack: ['Next.js', 'TypeScript', 'Recharts', 'PostgreSQL'],
    features: ['Net distribution yield calc', 'Occupancy sensitivity matrix', 'Taxable vs dividend split', 'Property portfolio map'],
    apiRoutes: ['GET /api/reits/list', 'POST /api/yield/project', 'GET /api/properties/:id']
  },
  {
    title: 'SplitwisePro Group Debt Simplifier',
    summary: 'Graph-based minimum-cashflow debt settlement app minimizing total group transfers using greedy net-balance matching.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    features: ['Min-transfer graph reducer', 'UPI deep-link settle button', 'Itemized receipt splitting', 'Multi-currency trip mode'],
    apiRoutes: ['GET /api/groups/:id/simplify', 'POST /api/expenses/add', 'POST /api/settle/confirm']
  }
];

const ECOMMERCE_SEEDS: RawProjectSeed[] = [
  {
    title: 'AtelierCraft Headless D2C Store',
    summary: 'High-craft headless storefront featuring optimistic cart drawers, variant inventory locks, and Razorpay checkout.',
    techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Stripe'],
    features: ['Zero-CLS variant switcher', 'Real-time stock reservation', 'Abandoned cart recovery hook', 'Order tracking timeline'],
    apiRoutes: ['GET /api/products/:slug', 'POST /api/cart/reserve', 'POST /api/checkout/session']
  },
  {
    title: 'BazaarMulti Vendor Marketplace',
    summary: 'Multi-vendor marketplace engine with split payout commissions, seller onboarding KYC, and unified shipping labels.',
    techStack: ['React', 'NestJS', 'PostgreSQL', 'Redis'],
    features: ['Automated vendor commission splits', 'Seller inventory dashboard', 'Multi-warehouse shipping calc', 'Dispute resolution center'],
    apiRoutes: ['GET /api/marketplace/feed', 'POST /api/sellers/payout', 'POST /api/orders/split']
  },
  {
    title: 'QuickCart 10-Min Dark Store OMS',
    summary: 'Hyperlocal inventory picking and rider dispatch dashboard built for sub-15-minute neighborhood grocery delivery.',
    techStack: ['React', 'Node.js', 'WebSockets', 'PostGIS'],
    features: ['Dark-store bin location routing', 'Rider proximity dispatch', 'Cold-chain alert flags', 'Live ETA map'],
    apiRoutes: ['GET /api/darkstores/:id/orders', 'POST /api/picklists/complete', 'POST /api/dispatch/assign']
  },
  {
    title: 'TryOnStudio Apparel Size Predictor',
    summary: 'Interactive garment fit recommender mapping user measurements against brand-specific chest, waist, and length specs.',
    techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    features: ['Brand-normalized size chart', 'Return rate reduction telemetry', 'Fit confidence meter', 'Shopify app widget'],
    apiRoutes: ['POST /api/fit/recommend', 'GET /api/brands/charts', 'GET /api/analytics/returns']
  },
  {
    title: 'FlashDrop High-Concurrency Sale',
    summary: 'Redis Lua-scripted inventory reservation engine engineered to prevent overselling during 10,000-RPS flash drops.',
    techStack: ['Next.js', 'Redis', 'Go', 'PostgreSQL'],
    features: ['Atomic Redis token queue', 'Waiting room fairness gate', '10-minute checkout lock', 'Bot rate shield'],
    apiRoutes: ['POST /api/drop/enter-queue', 'POST /api/drop/claim', 'GET /api/drop/stock']
  },
  {
    title: 'ReturnFlow Reverse Logistics Hub',
    summary: 'Self-serve customer exchange portal prioritizing instant store credit and automated courier reverse pickup.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Shiprocket API'],
    features: ['Instant size-swap flow', 'Bonus credit incentive engine', 'Photo defect verification', 'Courier AWB generator'],
    apiRoutes: ['POST /api/returns/initiate', 'POST /api/exchanges/instant', 'POST /api/awb/reverse']
  },
  {
    title: 'WholesaleB2B Tiered Catalog',
    summary: 'B2B wholesale ordering portal enforcing MOQ rules, volume slab discounts, and net-30 credit line limits.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    features: ['Customer-specific price lists', 'Bulk SKU grid order pad', 'Net-30 credit approval', 'GST proforma invoice PDF'],
    apiRoutes: ['GET /api/b2b/price-list', 'POST /api/b2b/bulk-order', 'GET /api/credit/limit']
  },
  {
    title: 'PrintForge Custom Merch Designer',
    summary: 'Interactive HTML5 Canvas apparel customizer with live mockup previews, DPI safety checks, and print-ready exports.',
    techStack: ['React', 'Fabric.js', 'Node.js', 'AWS S3'],
    features: ['300-DPI print area validator', 'Front/back sleeve placement', 'Live pricing by ink layers', 'Vector SVG export'],
    apiRoutes: ['POST /api/designs/save', 'POST /api/mockups/render', 'POST /api/orders/print-spec']
  },
  {
    title: 'SubscribeBox Coffee Club OS',
    summary: 'Recurring subscription box manager allowing subscribers to skip deliveries, swap roast profiles, and bundle add-ons.',
    techStack: ['Next.js', 'Stripe Billing', 'PostgreSQL', 'TypeScript'],
    features: ['1-click skip/pause portal', 'Dynamic bundle pricing', 'Dunning retry recovery', 'Churn reason survey'],
    apiRoutes: ['POST /api/subscriptions/create', 'PATCH /api/subscriptions/skip', 'POST /api/webhooks/billing']
  },
  {
    title: 'PricePulse Competitor Tracker',
    summary: 'Automated retail price intelligence dashboard monitoring MAP violations and dynamic repricing margins.',
    techStack: ['Python', 'Playwright', 'PostgreSQL', 'React'],
    features: ['Buy-box price history chart', 'Margin floor protection', 'MAP breach alerts', 'SKU match confidence'],
    apiRoutes: ['GET /api/prices/compare', 'POST /api/reprice/rules', 'GET /api/alerts/map-breach']
  },
  {
    title: 'LoyaltyStamp Omnichannel Rewards',
    summary: 'Unified POS + online loyalty ledger issuing tiered cashback points, birthday perks, and referral coupons.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    features: ['POS phone-number OTP earn', 'Expiring points scheduler', 'VIP tier benefits', 'Coupon fraud guard'],
    apiRoutes: ['POST /api/points/accrue', 'POST /api/points/redeem', 'GET /api/members/:phone']
  },
  {
    title: 'WarehouseWMS Barcode Picker',
    summary: 'Mobile-friendly warehouse inventory system supporting FIFO lot picking, cycle counts, and bin-to-bin transfers.',
    techStack: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
    features: ['Camera barcode scanning', 'Shortest-aisle pick path', 'Low-stock reorder alerts', 'Packing slip verification'],
    apiRoutes: ['GET /api/wms/picklists', 'POST /api/wms/scan-item', 'POST /api/wms/transfer']
  },
  {
    title: 'AuctionLive Collectible Bidding',
    summary: 'Real-time WebSocket auction room with anti-sniping 30-second clock extensions and verified bidder escrow.',
    techStack: ['Next.js', 'WebSockets', 'Redis', 'PostgreSQL'],
    features: ['Anti-sniping timer extend', 'Max proxy auto-bidding', 'Sub-100ms bid broadcast', 'Lot provenance cards'],
    apiRoutes: ['WS /api/auctions/:lotId', 'POST /api/bids/proxy', 'GET /api/lots/closing-soon']
  },
  {
    title: 'FoodCloud Multi-Kitchen POS',
    summary: 'Cloud kitchen order aggregator routing Swiggy, Zomato, and direct web orders onto color-coded KDS displays.',
    techStack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
    features: ['Kitchen Display System (KDS)', 'Prep-time bottleneck meter', 'Recipe ingredient depletion', 'Day-end Z-report'],
    apiRoutes: ['GET /api/kds/queue', 'PATCH /api/orders/:id/ready', 'GET /api/inventory/depletion']
  },
  {
    title: 'OpticStore Lens Prescription Hub',
    summary: 'Eyewear e-commerce configurator capturing SPH/CYL/Axis prescriptions, pupillary distance checks, and lens coatings.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Interactive Rx validation', 'Thin-index lens recommender', 'Blue-cut vs photochromic diff', 'Saved Rx profiles'],
    apiRoutes: ['POST /api/rx/validate', 'POST /api/lenses/configure', 'GET /api/customers/rx']
  },
  {
    title: 'GiftRegistry Wedding & Baby Hub',
    summary: 'Collaborative gift registry platform supporting group cash contributions, thank-you tracking, and duplicate prevention.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    features: ['Group gift progress bar', 'Private address shipping', 'Contributor thank-you tracker', 'Custom share URL'],
    apiRoutes: ['POST /api/registries/create', 'POST /api/gifts/contribute', 'GET /api/registries/:slug']
  },
  {
    title: 'AutoParts VIN Fitment Finder',
    summary: 'Year-Make-Model and VIN lookup storefront ensuring 100% brake, filter, and OEM spare part compatibility.',
    techStack: ['Next.js', 'Elasticsearch', 'PostgreSQL', 'TypeScript'],
    features: ['Garage vehicle saver', 'OEM cross-reference search', 'Instant compatibility badge', 'Mechanic bulk quote'],
    apiRoutes: ['GET /api/vehicles/fitment', 'GET /api/parts/search', 'POST /api/quotes/mechanic']
  },
  {
    title: 'LocalFarm Fresh CSA Box Portal',
    summary: 'Farm-to-table weekly harvest storefront letting subscribers customize seasonal produce boxes and route zones.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Harvest yield cap controls', 'Box item swap window', 'Zipcode route cutoffs', 'Farmer origin cards'],
    apiRoutes: ['GET /api/harvest/weekly', 'POST /api/boxes/customize', 'GET /api/routes/delivery']
  },
  {
    title: 'DigitalDownloads License Hub',
    summary: 'Creator marketplace for Figma kits, Notion templates, and code boilerplates with automated license key issuance.',
    techStack: ['Next.js', 'Stripe', 'AWS S3', 'PostgreSQL'],
    features: ['Versioned update emails', 'Seat activation limits', 'VAT/GST digital receipts', 'Bundle discount builder'],
    apiRoutes: ['POST /api/licenses/issue', 'POST /api/licenses/verify', 'GET /api/downloads/:token']
  },
  {
    title: 'Furniture3D Room Configurator',
    summary: 'Modular sofa and desk e-commerce builder calculating dimensions, fabric finishes, and instant delivery pricing.',
    techStack: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    features: ['Live fabric swatch swap', 'Dimension millimeter tape', 'BOM pricing breakdown', 'AR preview export'],
    apiRoutes: ['GET /api/materials/swatches', 'POST /api/configs/price', 'POST /api/configs/share']
  },
  {
    title: 'PharmaDirect Rx Compliance Store',
    summary: 'Online pharmacy ordering portal with mandatory prescription upload review, generic substitute suggestions, and batch expiry tracking.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS S3'],
    features: ['Pharmacist verification queue', 'Salt-composition matcher', 'FEFO batch expiry pick', 'Refill reminder SMS'],
    apiRoutes: ['POST /api/rx/upload', 'GET /api/medicines/substitutes', 'PATCH /api/orders/approve-rx']
  },
  {
    title: 'TicketResale Verified Fan Hub',
    summary: 'Face-value capped secondary concert ticket exchange with barcode rotation and seller payout hold until entry.',
    techStack: ['React', 'NestJS', 'PostgreSQL', 'Redis'],
    features: ['Anti-scalping price ceiling', 'Dynamic QR ticket transfer', 'Buyer protection escrow', 'Seat view gallery'],
    apiRoutes: ['POST /api/listings/verify', 'POST /api/tickets/transfer', 'GET /api/events/:id/listings']
  },
  {
    title: 'CraftRoast Coffee Subscription Quiz',
    summary: 'Guided brew-method quiz matching customers with grind size, roast notes, and automated bi-weekly shipments.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Brew equipment matcher', 'Flavor profile radar', 'Grind & bag weight calc', 'Instant cart prefill'],
    apiRoutes: ['POST /api/quiz/match', 'GET /api/roasts/catalog', 'POST /api/cart/bundle']
  },
  {
    title: 'BookExchange Campus Marketplace',
    summary: 'College student peer-to-peer textbook buy/sell platform with ISBN scanner lookup, condition grading, and campus meetup spots.',
    techStack: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: ['ISBN metadata auto-fill', 'Campus safe-zone selector', 'In-app buyer chat', 'Semester wishlist alerts'],
    apiRoutes: ['GET /api/books/isbn/:code', 'POST /api/listings/create', 'GET /api/campus/zones']
  },
  {
    title: 'CouponEngine Cart Rule Evaluator',
    summary: 'Flexible e-commerce promo engine evaluating stackable BOGO, bank-card BIN offers, and minimum-cart rules.',
    techStack: ['TypeScript', 'Node.js', 'Redis', 'React'],
    features: ['Rule priority conflict solver', 'Bank BIN offer matcher', 'Redemption cap counter', 'Cart simulation sandbox'],
    apiRoutes: ['POST /api/promos/evaluate', 'POST /api/promos/create', 'GET /api/promos/analytics']
  }
];

const DATA_ANALYTICS_SEEDS: RawProjectSeed[] = [
  {
    title: 'RetailPulse Power BI Executive Suite',
    summary: 'End-to-end omnichannel retail BI workbook analyzing SKU gross margin, regional stockouts, and cohort LTV.',
    techStack: ['Power BI', 'SQL', 'Python', 'DAX'],
    features: ['Dynamic YoY DAX time intelligence', 'ABC-XYZ inventory matrix', 'Store manager drill-through', 'Margin waterfall chart'],
    apiRoutes: ['GET /api/bi/retail-kpis', 'GET /api/bi/stockouts', 'POST /api/bi/export-csv']
  },
  {
    title: 'ChurnRadar Telecom Retention Model',
    summary: 'XGBoost customer churn prediction pipeline surfacing SHAP explainability drivers and targeted retention offers.',
    techStack: ['Python', 'XGBoost', 'SHAP', 'FastAPI'],
    features: ['Individual SHAP reason codes', 'Lift & gain decile charts', 'Retention ROI simulator', 'Batch CSV scoring UI'],
    apiRoutes: ['POST /api/churn/predict', 'GET /api/churn/shap/:custId', 'GET /api/model/roc-auc']
  },
  {
    title: 'SupplyChain Demand Forecaster',
    summary: 'Multi-horizon SKU demand forecasting workbench blending Prophet seasonality with festive spike regressors.',
    techStack: ['Python', 'Prophet', 'Pandas', 'React'],
    features: ['Diwali/festive regressor flags', '80%/95% confidence bands', 'Safety stock calculator', 'MAPE backtest table'],
    apiRoutes: ['POST /api/forecast/sku', 'GET /api/inventory/safety-stock', 'GET /api/backtest/mape']
  },
  {
    title: 'ClickStream Funnel Attribution Lab',
    summary: 'ClickHouse-powered product analytics explorer computing conversion funnels, Markov channel attribution, and retention.',
    techStack: ['ClickHouse', 'SQL', 'React', 'Recharts'],
    features: ['Sub-second 10M-row aggregation', 'N-day cohort heatmap', 'First vs Markov attribution', 'Session path explorer'],
    apiRoutes: ['POST /api/analytics/funnel', 'GET /api/cohorts/retention', 'GET /api/attribution/channels']
  },
  {
    title: 'FinHealth Credit Default Scorecard',
    summary: 'Interpretable logistic regression and WoE binning scorecard calibrated for regulatory credit risk audits.',
    techStack: ['Python', 'Scikit-Learn', 'FastAPI', 'React'],
    features: ['WoE & IV feature table', 'KS statistic & Gini readout', 'Cutoff threshold slider', 'Fairness parity check'],
    apiRoutes: ['POST /api/scorecard/evaluate', 'GET /api/scorecard/woe', 'GET /api/scorecard/ks-curve']
  },
  {
    title: 'HR Attrition & Workforce Analytics',
    summary: 'People analytics portal tracking department attrition velocity, tenure survival curves, and compa-ratio equity.',
    techStack: ['Power BI', 'Python', 'SQL', 'Tailwind CSS'],
    features: ['Kaplan-Meier tenure curves', 'Compa-ratio scatter plot', 'Flight-risk heatmap', 'Hiring pipeline funnel'],
    apiRoutes: ['GET /api/hr/attrition-rate', 'GET /api/hr/compa-ratio', 'GET /api/hr/tenure-survival']
  },
  {
    title: 'AdSpend ROAS Marketing Mix Model',
    summary: 'Bayesian Marketing Mix Modeling dashboard quantifying diminishing returns across Meta, Google Search, and YouTube.',
    techStack: ['Python', 'PyMC', 'FastAPI', 'React'],
    features: ['Adstock carryover curves', 'Budget reallocation optimizer', 'Channel saturation chart', 'Incremental ROAS table'],
    apiRoutes: ['POST /api/mmm/optimize-budget', 'GET /api/mmm/saturation', 'GET /api/mmm/roas']
  },
  {
    title: 'EnergyGrid Smart Meter Telemetry',
    summary: 'Time-series substation load analyzer detecting peak-demand tariff spikes, power-factor drops, and feeder anomalies.',
    techStack: ['TimescaleDB', 'Python', 'React', 'Recharts'],
    features: ['15-min interval load curve', 'Peak tariff penalty alerts', 'Transformer phase imbalance', 'Monthly kWh forecast'],
    apiRoutes: ['GET /api/grid/load-series', 'GET /api/grid/anomalies', 'GET /api/tariffs/forecast']
  },
  {
    title: 'FleetFuel Logistics Cost Optimizer',
    summary: 'Route-level diesel efficiency and idle-time analytics dashboard identifying high-pilferage corridors across 400 trucks.',
    techStack: ['SQL', 'Python', 'Power BI', 'PostgreSQL'],
    features: ['Km-per-liter anomaly flags', 'Turnaround detention timer', 'Toll vs mileage variance', 'Driver scorecard'],
    apiRoutes: ['GET /api/fleet/efficiency', 'GET /api/routes/detention', 'GET /api/drivers/rankings']
  },
  {
    title: 'HospitalOPD Wait-Time & Bed BI',
    summary: 'Hospital operations dashboard analyzing department OPD bottlenecks, ICU occupancy rates, and discharge turnaround.',
    techStack: ['Power BI', 'PostgreSQL', 'Python', 'React'],
    features: ['Hourly OPD arrival heatmap', 'Bed turnover SLA gauge', 'Specialty utilization bars', 'Staff shift alignment'],
    apiRoutes: ['GET /api/hospital/bed-census', 'GET /api/opd/wait-times', 'GET /api/discharge/turnaround']
  },
  {
    title: 'SaaS MRR & NRR Cohort Ledger',
    summary: 'Subscription financial metrics engine tracking Net Revenue Retention, expansion MRR, and logo churn cohorts.',
    techStack: ['dbt', 'PostgreSQL', 'React', 'TypeScript'],
    features: ['MRR movement waterfall', '12-month NRR triangle', 'CAC payback period calc', 'Quick ratio gauge'],
    apiRoutes: ['GET /api/saas/mrr-bridge', 'GET /api/saas/nrr-cohorts', 'GET /api/saas/unit-economics']
  },
  {
    title: 'RFM Customer Segmentation Engine',
    summary: 'Automated Recency-Frequency-Monetary clustering notebook segmenting 500K shoppers into 8 actionable lifecycle tiers.',
    techStack: ['Python', 'K-Means', 'SQL', 'React'],
    features: ['Champions vs At-Risk matrix', 'Segment migration Sankey', 'Campaign list exporter', 'Avg basket frequency'],
    apiRoutes: ['POST /api/rfm/compute', 'GET /api/segments/distribution', 'GET /api/segments/export']
  },
  {
    title: 'ABTest Bayesian Significance Calc',
    summary: 'Experimentation analysis workbench preventing peeking bias with sequential SPRT and Bayesian credible intervals.',
    techStack: ['TypeScript', 'Python', 'SciPy', 'React'],
    features: ['Sample Ratio Mismatch (SRM) alert', 'Probability to beat baseline', 'Minimum detectable effect calc', 'Segment breakdown'],
    apiRoutes: ['POST /api/ab/evaluate', 'POST /api/ab/sample-size', 'GET /api/experiments/active']
  },
  {
    title: 'MetroRidership Transit Planner',
    summary: 'Station-pair OD matrix analyzer visualizing peak-hour platform crowding and optimal train headway intervals.',
    techStack: ['Python', 'GeoPandas', 'React', 'D3.js'],
    features: ['Hourly station entry heatmap', 'Origin-Destination chord view', 'Headway load simulator', 'Feeder bus gap map'],
    apiRoutes: ['GET /api/metro/od-matrix', 'GET /api/metro/crowding', 'POST /api/headway/simulate']
  },
  {
    title: 'AirQuality Hyperlocal AQI Monitor',
    summary: 'Spatiotemporal PM2.5 and NO2 analytics dashboard correlating sensor drifts with wind-rose and traffic bursts.',
    techStack: ['Python', 'TimescaleDB', 'React', 'Recharts'],
    features: ['24h rolling AQI classification', 'Sensor calibration drift check', 'Diurnal pollution pattern', 'Health advisory triggers'],
    apiRoutes: ['GET /api/aqi/stations', 'GET /api/aqi/diurnal', 'GET /api/aqi/forecast']
  },
  {
    title: 'RealEstate Price Per SqFt Index',
    summary: 'Hedonic housing price regression explorer modeling metro-station proximity premiums across 120 city localities.',
    techStack: ['Python', 'LightGBM', 'PostgreSQL', 'React'],
    features: ['Locality yield vs appreciation', 'Metro proximity premium curve', '2BHK/3BHK rental yield map', 'Fair-value estimator'],
    apiRoutes: ['POST /api/housing/estimate', 'GET /api/localities/index', 'GET /api/yields/compare']
  },
  {
    title: 'CricketBall-by-Ball Win Prob Engine',
    summary: 'T20 match telemetry analyzer computing live win probability shifts, venue par scores, and bowler matchups.',
    techStack: ['Python', 'XGBoost', 'FastAPI', 'React'],
    features: ['Over-by-over win probability', 'Phase strike-rate breakdown', 'Left/Right matchup matrix', 'Venue chase bias'],
    apiRoutes: ['POST /api/cricket/win-prob', 'GET /api/players/matchup', 'GET /api/venues/par-score']
  },
  {
    title: 'WarehouseABC Deadstock Finder',
    summary: 'Working-capital release analyzer identifying slow-moving SKUs, aging inventory tiers, and markdown recovery scenarios.',
    techStack: ['SQL', 'Python', 'Power BI', 'React'],
    features: ['90/180/365-day aging buckets', 'Carrying cost calculator', 'Bundle clearance simulator', 'Supplier lead-time variance'],
    apiRoutes: ['GET /api/inventory/aging', 'POST /api/clearance/simulate', 'GET /api/suppliers/otif']
  },
  {
    title: 'EdTech DropOff & Mastery Analytics',
    summary: 'Learning analytics platform pinpointing exact video timestamps and quiz concepts causing student course drop-offs.',
    techStack: ['Python', 'dbt', 'PostgreSQL', 'React'],
    features: ['Module completion survival curve', 'Time-on-task distribution', 'At-risk learner early alert', 'Mentor response SLA'],
    apiRoutes: ['GET /api/edtech/dropoff', 'GET /api/learners/at-risk', 'GET /api/cohorts/completion']
  },
  {
    title: 'CallCenter Queue Erlang-C Planner',
    summary: 'Support staffing simulator using Erlang-C queuing math to balance target 20-second answer speed against agent cost.',
    techStack: ['TypeScript', 'Python', 'React', 'Recharts'],
    features: ['Interval agent requirement table', 'Abandonment rate curve', 'Shift shrinkage adjuster', 'SLA what-if slider'],
    apiRoutes: ['POST /api/erlang/calculate', 'GET /api/queues/hourly-load', 'POST /api/shifts/optimize']
  },
  {
    title: 'ColdChain Spoilage Sensor BI',
    summary: 'IoT temperature excursion analytics tracking pharma and dairy truck breaches across regional transit corridors.',
    techStack: ['TimescaleDB', 'Python', 'FastAPI', 'React'],
    features: ['Degree-minutes breach score', 'Reefer door-open correlation', 'Carrier compliance ranking', 'Batch recall trace'],
    apiRoutes: ['GET /api/coldchain/excursions', 'GET /api/carriers/scorecard', 'GET /api/batches/:id/trace']
  },
  {
    title: 'MovieBoxOffice Opening Predictor',
    summary: 'Pre-release theatrical revenue model combining trailer velocity, screen count, and holiday weekend multipliers.',
    techStack: ['Python', 'Scikit-Learn', 'FastAPI', 'React'],
    features: ['Opening weekend range band', 'Word-of-mouth decay curve', 'Territory occupancy tracker', 'Comparable film benchmark'],
    apiRoutes: ['POST /api/boxoffice/predict', 'GET /api/films/comparables', 'GET /api/occupancy/trends']
  },
  {
    title: 'BankBranch Cash ATM Replenisher',
    summary: 'Cash-in-transit forecasting model predicting ATM depletion dates across urban and rural pin codes.',
    techStack: ['Python', 'LightGBM', 'PostgreSQL', 'React'],
    features: ['Payday & holiday spike modeling', 'Stockout vs idle-cash cost', 'Armored van route batching', 'Vault float summary'],
    apiRoutes: ['GET /api/atms/depletion', 'POST /api/cit/schedule', 'GET /api/cash/utilization']
  },
  {
    title: 'Manufacturing OEE Defect Telemetry',
    summary: 'Shop-floor Overall Equipment Effectiveness monitor decomposing Availability, Performance, and Quality losses.',
    techStack: ['Python', 'TimescaleDB', 'React', 'Recharts'],
    features: ['Six Big Losses Pareto chart', 'Micro-stoppage frequency log', 'Shift-over-shift OEE trend', 'Scrap root-cause tags'],
    apiRoutes: ['GET /api/oee/lines', 'GET /api/losses/pareto', 'GET /api/shifts/comparison']
  },
  {
    title: 'CarbonScope ESG Emissions Ledger',
    summary: 'Scope 1, 2, and 3 corporate carbon accounting workbook translating utility bills and travel logs into tCO2e.',
    techStack: ['Next.js', 'Python', 'PostgreSQL', 'Recharts'],
    features: ['Emission factor registry', 'Supplier Scope-3 intensity', 'Net-zero trajectory chart', 'BRSR/GRI audit export'],
    apiRoutes: ['POST /api/esg/calculate', 'GET /api/esg/breakdown', 'GET /api/esg/export-brsr']
  }
];

const DEVOPS_SEEDS: RawProjectSeed[] = [
  {
    title: 'ObserveLy Distributed Trace Console',
    summary: 'OpenTelemetry trace waterfall and Kubernetes pod health console correlating P99 latency spikes with container OOMs.',
    techStack: ['OpenTelemetry', 'Go', 'ClickHouse', 'React'],
    features: ['Span-level waterfall trace', 'Pod CPU/memory saturation', 'Service dependency topology', 'SLO error-budget burn'],
    apiRoutes: ['GET /api/traces/:traceId', 'GET /api/clusters/health', 'GET /api/slo/budget']
  },
  {
    title: 'DeployZero GitOps Canary Runner',
    summary: 'Automated progressive delivery controller shifting 5% → 25% → 100% traffic with automatic Prometheus rollback guards.',
    techStack: ['Kubernetes', 'Argo Rollouts', 'TypeScript', 'React'],
    features: ['Automated 5xx rollback', 'Traffic split slider', 'Container digest diff', 'Slack deployment approvals'],
    apiRoutes: ['POST /api/rollouts/promote', 'POST /api/rollouts/abort', 'GET /api/deployments/history']
  },
  {
    title: 'TerraDrift Cloud Drift Detector',
    summary: 'Terraform state monitor detecting out-of-band AWS console edits and visualizing blast-radius dependency graphs.',
    techStack: ['Terraform', 'AWS SDK', 'Go', 'React'],
    features: ['Scheduled state plan diff', 'Blast-radius resource tree', 'IAM over-permission alert', 'PR drift comment bot'],
    apiRoutes: ['POST /api/terraform/drift-scan', 'GET /api/stacks/diffs', 'GET /api/iam/warnings']
  },
  {
    title: 'DockerSlim Image Hardening Lab',
    summary: 'CI container scanner analyzing multi-stage Dockerfile layers, CVE packages, and distroless size reductions.',
    techStack: ['Docker', 'Trivy', 'Node.js', 'React'],
    features: ['Layer-by-layer MB breakdown', 'Critical CVE patch suggester', 'SBOM CycloneDX export', 'Non-root user verifier'],
    apiRoutes: ['POST /api/images/scan', 'GET /api/images/:digest/layers', 'GET /api/sbom/download']
  },
  {
    title: 'KubeCost FinOps Rightsizer',
    summary: 'Kubernetes namespace cost allocator comparing requested CPU/RAM against 14-day P95 actual pod consumption.',
    techStack: ['Kubernetes', 'Prometheus', 'Python', 'React'],
    features: ['Idle node waste calculator', 'Rightsize YAML patch gen', 'Spot vs On-Demand split', 'Team chargeback ledger'],
    apiRoutes: ['GET /api/finops/namespaces', 'GET /api/finops/recommendations', 'GET /api/finops/waste']
  },
  {
    title: 'EdgeCache CDN Purge & Geo-Router',
    summary: 'Multi-POP cache invalidation control plane supporting wildcard surrogate-key purges and cache-hit ratio graphs.',
    techStack: ['Cloudflare Workers', 'Redis', 'TypeScript', 'React'],
    features: ['Sub-second surrogate purge', 'Origin shield hit-ratio stats', 'Geo-latency map', 'Stale-while-revalidate rules'],
    apiRoutes: ['POST /api/cache/purge', 'GET /api/edge/hit-ratio', 'PATCH /api/rules/ttl']
  },
  {
    title: 'CertWatch TLS & DNS Expiry Guard',
    summary: 'Automated certificate transparency monitor alerting SRE teams on expiring SSL certs, CAA gaps, and DNS hijacks.',
    techStack: ['Go', 'PostgreSQL', 'React', 'Cron'],
    features: ['TLS 1.3 cipher grade check', 'DNS record diff snapshot', "Let's Encrypt renewal probe", 'Webhook escalation'],
    apiRoutes: ['GET /api/certs/expiring', 'POST /api/dns/snapshot', 'GET /api/domains/audit']
  },
  {
    title: 'PGDoctor Query & Index Advisor',
    summary: 'PostgreSQL `pg_stat_statements` profiler surfacing slow sequential scans, unused indexes, and lock wait trees.',
    techStack: ['PostgreSQL', 'TypeScript', 'Node.js', 'React'],
    features: ['EXPLAIN ANALYZE visualizer', 'Missing index DDL suggester', 'Table bloat & vacuum monitor', 'Deadlock history'],
    apiRoutes: ['GET /api/pg/slow-queries', 'POST /api/pg/explain', 'GET /api/pg/bloat']
  },
  {
    title: 'QueuePulse BullMQ & Kafka Monitor',
    summary: 'Unified message broker dashboard tracking consumer lag, dead-letter retries, and partition throughput skew.',
    techStack: ['Kafka', 'Redis', 'Node.js', 'React'],
    features: ['Consumer group lag alerts', 'Bulk DLQ payload replay', 'Worker concurrency scaler', 'Message schema viewer'],
    apiRoutes: ['GET /api/queues/metrics', 'POST /api/dlq/replay-all', 'GET /api/kafka/lag']
  },
  {
    title: 'SecretScan Git Pre-Commit Shield',
    summary: 'Entropy and pattern scanner catching leaked AWS keys, Stripe tokens, and private PEM certs across repositories.',
    techStack: ['Go', 'GitHub Actions', 'React', 'PostgreSQL'],
    features: ['Shannon entropy detector', '120+ provider regex rules', 'Commit history audit', 'Auto-revocation checklist'],
    apiRoutes: ['POST /api/scan/repo', 'GET /api/findings/open', 'PATCH /api/findings/:id/resolve']
  },
  {
    title: 'VaultBackup S3 Snapshot Verifier',
    summary: 'Automated database backup tester restoring nightly PostgreSQL dumps into ephemeral containers to verify integrity.',
    techStack: ['Docker', 'PostgreSQL', 'AWS S3', 'Node.js'],
    features: ['Daily restore drill badge', 'Row-count parity check', 'RPO & RTO duration log', 'Encrypted checksum verification'],
    apiRoutes: ['POST /api/backups/verify-drill', 'GET /api/backups/snapshots', 'GET /api/rto/metrics']
  },
  {
    title: 'LoadStorm k6 Traffic Generator',
    summary: 'Browser-controlled distributed load testing runner executing k6 ramp-up scripts with live RPS & error-rate curves.',
    techStack: ['k6', 'Go', 'InfluxDB', 'React'],
    features: ['Step & spike profile builder', 'P50/P95/P99 latency bands', 'Threshold pass/fail gates', 'Shareable run report'],
    apiRoutes: ['POST /api/loadtest/start', 'GET /api/loadtest/:id/stream', 'POST /api/loadtest/stop']
  },
  {
    title: 'EphemeralEnv PR Preview Provisioner',
    summary: 'Spins up isolated Docker Compose + wildcard TLS preview URLs on every pull request and reaps them on merge.',
    techStack: ['Docker', 'Traefik', 'Node.js', 'React'],
    features: ['Auto wildcard subdomain', 'Seeded preview DB clone', 'Idle auto-sleep reaper', 'PR status comment link'],
    apiRoutes: ['POST /api/previews/provision', 'DELETE /api/previews/:pr', 'GET /api/previews/active']
  },
  {
    title: 'WireGuard Mesh VPN Control Hub',
    summary: 'Zero-trust peer key manager generating split-tunnel WireGuard configs, ACL subnet rules, and handshake logs.',
    techStack: ['WireGuard', 'Go', 'React', 'SQLite'],
    features: ['1-click QR mobile config', 'Role-based subnet ACLs', 'Stale peer key expiry', 'Bandwidth telemetry'],
    apiRoutes: ['POST /api/peers/create', 'GET /api/peers/status', 'DELETE /api/peers/:id']
  },
  {
    title: 'NginxGateway WAF Rule Studio',
    summary: 'Visual reverse-proxy config generator creating rate limits, CORS headers, and OWASP ModSecurity rules cleanly.',
    techStack: ['Nginx', 'TypeScript', 'React', 'Lua'],
    features: ['Live config syntax linter', 'Geo-IP country block matrix', 'Bot challenge rules', 'Zero-downtime reload log'],
    apiRoutes: ['POST /api/waf/validate', 'POST /api/waf/deploy', 'GET /api/waf/blocked-requests']
  },
  {
    title: 'ChaosMonkey Fault Injection Lab',
    summary: 'Controlled resilience testing dashboard injecting artificial 500ms network jitter or pod kills in staging.',
    techStack: ['Kubernetes', 'Toxiproxy', 'Go', 'React'],
    features: ['Timed auto-revert safety switch', 'Blast-radius namespace lock', 'Circuit-breaker verifier', 'GameDay report log'],
    apiRoutes: ['POST /api/chaos/inject', 'POST /api/chaos/halt-all', 'GET /api/chaos/experiments']
  },
  {
    title: 'RunnerPool Self-Hosted CI Scaler',
    summary: 'Autoscaling GitHub Actions ephemeral VM pool tracking job queue wait times and NVMe build cache hit rates.',
    techStack: ['Firecracker', 'Go', 'React', 'Prometheus'],
    features: ['Sub-5s microVM boot', 'Shared Docker layer cache', 'Cost vs GitHub-hosted calc', 'Queue depth ticker'],
    apiRoutes: ['GET /api/runners/pool', 'GET /api/jobs/queue-time', 'POST /api/cache/warm']
  },
  {
    title: 'LogShipper OpenSearch Pipeline',
    summary: 'FluentBit routing debugger parsing JSON logs, PII-masking Aadhaar/PAN fields, and managing hot-warm index rollover.',
    techStack: ['FluentBit', 'OpenSearch', 'Python', 'React'],
    features: ['Regex PII scrubber tester', 'Index lifecycle storage graph', 'Drop-filter cost saver', 'Live tail stream'],
    apiRoutes: ['POST /api/pipelines/test-mask', 'GET /api/indices/ilm', 'GET /api/logs/tail']
  },
  {
    title: 'ServerlessColdStart Benchmarker',
    summary: 'Cross-region benchmark suite comparing AWS Lambda, Cloud Run, and Edge Worker cold-start latencies.',
    techStack: ['TypeScript', 'AWS Lambda', 'Cloud Run', 'React'],
    features: ['Runtime memory vs latency plot', '24h hourly cold-start ratio', 'Bundle size impact meter', 'Cost per 1M invocations'],
    apiRoutes: ['POST /api/bench/trigger', 'GET /api/bench/compare', 'GET /api/regions/latency']
  },
  {
    title: 'ArtifactRegistry Cleanup Bot',
    summary: 'Automates retention policies for npm, Maven, and Docker registries keeping tagged releases while pruning untagged blobs.',
    techStack: ['Node.js', 'PostgreSQL', 'React', 'Docker'],
    features: ['Dry-run GB savings preview', 'Protected semver regexes', 'Orphaned manifest GC', 'Storage trend chart'],
    apiRoutes: ['POST /api/gc/dry-run', 'POST /api/gc/execute', 'GET /api/registry/storage']
  },
  {
    title: 'IncidentPager On-Call Rotator',
    summary: 'Escalation policy and on-call shift scheduler supporting timezone handoffs, override swaps, and post-mortem drafts.',
    techStack: ['Next.js', 'PostgreSQL', 'Twilio', 'TypeScript'],
    features: ['Fairness burden balance chart', '1-click shift override', 'Acknowledge SLA timer', 'Blameless post-mortem doc'],
    apiRoutes: ['GET /api/oncall/who-is-up', 'POST /api/alerts/trigger', 'POST /api/postmortems/create']
  },
  {
    title: 'GraphQLFederated Schema Registry',
    summary: 'Subgraph schema composition checker preventing breaking field removals across microservices before deployment.',
    techStack: ['GraphQL', 'TypeScript', 'Node.js', 'React'],
    features: ['Breaking change diff blocker', 'Client operation usage map', 'Supergraph SDL viewer', 'Deprecation tracker'],
    apiRoutes: ['POST /api/schema/check', 'GET /api/subgraphs', 'GET /api/operations/usage']
  },
  {
    title: 'S3Bucket Security Posture Scanner',
    summary: 'Audits object storage buckets for public ACLs, missing server-side KMS encryption, and unlogged access policies.',
    techStack: ['Python', 'Boto3', 'FastAPI', 'React'],
    features: ['One-click remediation CLI', 'Cross-account IAM trust map', 'Lifecycle cost saver', 'Compliance score'],
    apiRoutes: ['POST /api/s3/audit', 'GET /api/s3/exposures', 'POST /api/s3/remediate']
  },
  {
    title: 'gRPC Protobuf Contract Tester',
    summary: 'Interactive browser gRPC-Web client loading `.proto` descriptors to invoke unary and server-streaming RPCs.',
    techStack: ['TypeScript', 'gRPC-Web', 'React', 'Go'],
    features: ['Proto reflection loader', 'Metadata header inspector', 'Latency timing breakdown', 'Saved collection tree'],
    apiRoutes: ['POST /api/grpc/invoke', 'POST /api/proto/upload', 'GET /api/services/list']
  },
  {
    title: 'SSHJump Bastion Session Auditor',
    summary: 'Short-lived SSH certificate authority recording terminal session keystrokes and enforcing dual-approval production access.',
    techStack: ['Go', 'PostgreSQL', 'React', 'WebSockets'],
    features: ['4-hour ephemeral SSH certs', 'Asciinema session replay', 'Slack peer approval', 'Host inventory tags'],
    apiRoutes: ['POST /api/ssh/request-cert', 'GET /api/sessions/replays', 'POST /api/approvals/grant']
  }
];

const EDTECH_HEALTH_SEEDS: RawProjectSeed[] = [
  {
    title: 'CodeArena Interactive Judge LMS',
    summary: 'Sandboxed DSA coding judge running multi-language solutions against hidden time/memory test cases in real time.',
    techStack: ['Next.js', 'Docker', 'Judge0', 'PostgreSQL'],
    features: ['Time & memory limit sandbox', 'Custom test-case runner', 'Complexity comparison notes', 'Contest leaderboard'],
    apiRoutes: ['POST /api/submissions/run', 'GET /api/problems/:slug', 'GET /api/leaderboard']
  },
  {
    title: 'MediQueue Clinic OPD Scheduler',
    summary: 'Paperless clinic token and EHR portal managing live doctor queue displays, digital Rx PDFs, and WhatsApp reminders.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    features: ['Live waiting room token TV', 'Drug interaction warning', 'Visit history timeline', 'Instant PDF prescription'],
    apiRoutes: ['POST /api/tokens/issue', 'WS /api/clinic/queue', 'POST /api/rx/generate']
  },
  {
    title: 'CohortPulse Attendance & Grading',
    summary: 'Engineering bootcamp operations portal tracking QR class check-ins, GitHub assignment PRs, and rubric grades.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    features: ['Rotating QR check-in', 'GitHub PR auto-grader', 'Rubric feedback matrix', 'Certificate generator'],
    apiRoutes: ['POST /api/attendance/checkin', 'GET /api/cohorts/grades', 'POST /api/certificates/mint']
  },
  {
    title: 'TeleMed HD Video Consult Portal',
    summary: 'HIPAA-conscious doctor-patient video consultation app with encrypted vitals intake and e-prescription sync.',
    techStack: ['React', 'WebRTC', 'Node.js', 'PostgreSQL'],
    features: ['Pre-call vitals intake card', 'Screen-share lab report view', 'Follow-up slot booking', 'Encrypted chat'],
    apiRoutes: ['POST /api/rooms/create', 'POST /api/vitals/submit', 'GET /api/consults/history']
  },
  {
    title: 'LabReport Trend Analyzer',
    summary: 'Patient health dashboard parsing CBC, HbA1c, and Lipid profile PDFs to chart multi-year biomarker trends.',
    techStack: ['React', 'Python', 'FastAPI', 'Recharts'],
    features: ['Reference range color bands', 'Doctor shareable summary link', 'Flagged outlier timeline', 'Family profile switch'],
    apiRoutes: ['POST /api/labs/parse-pdf', 'GET /api/biomarkers/trends', 'POST /api/share/doctor-link']
  },
  {
    title: 'ExamGuard Proctored Test Engine',
    summary: 'University online assessment platform monitoring tab-switch focus, randomized question banks, and autosaved answers.',
    techStack: ['React', 'Node.js', 'Redis', 'PostgreSQL'],
    features: ['Zero-data-loss answer autosave', 'Randomized pool shuffling', 'Detailed section scorecard', 'Negative marking engine'],
    apiRoutes: ['POST /api/exams/start', 'POST /api/exams/autosave', 'POST /api/exams/submit']
  },
  {
    title: 'FlashDeck Spaced Memory Trainer',
    summary: 'Anki-compatible active recall web app supporting LaTeX math, Cloze deletions, and daily streak analytics.',
    techStack: ['React 19', 'TypeScript', 'IndexedDB', 'KaTeX'],
    features: ['KaTeX equation rendering', 'Cloze deletion cards', 'Offline browser sync', 'Retention heatmap'],
    apiRoutes: ['GET /api/decks/due', 'POST /api/cards/grade', 'POST /api/decks/import']
  },
  {
    title: 'BloodBank Donor Dispatch Hub',
    summary: 'Hospital blood component inventory tracker matching urgent O-negative requests with verified nearby donors.',
    techStack: ['Next.js', 'PostGIS', 'Node.js', 'PostgreSQL'],
    features: ['Component expiry alerts', '56-day donor cooldown guard', 'Geo-radius urgent alerts', 'Cross-match log'],
    apiRoutes: ['GET /api/blood/stock', 'POST /api/requests/urgent', 'GET /api/donors/eligible']
  },
  {
    title: 'CampusBus GPS Live Tracker',
    summary: 'Student transit app broadcasting university shuttle stops, live arrival countdowns, and route delay alerts.',
    techStack: ['React', 'WebSockets', 'Node.js', 'Leaflet'],
    features: ['5-second GPS coordinate stream', 'Stop ETA countdown', 'Driver panic alert button', 'Route schedule table'],
    apiRoutes: ['WS /api/buses/telemetry', 'GET /api/routes/stops', 'GET /api/buses/active']
  },
  {
    title: 'DietMacro Clinical Meal Planner',
    summary: 'Nutritionist client portal crafting Indian regional macro meal plans with glycemic load and adherence logs.',
    techStack: ['React', 'TypeScript', 'PostgreSQL', 'Recharts'],
    features: ['Indian food database (IFCT)', 'Macro target split slider', 'Weekly grocery list export', 'Check-in weight curve'],
    apiRoutes: ['GET /api/foods/search', 'POST /api/mealplans/create', 'GET /api/clients/progress']
  },
  {
    title: 'PeerReview Rubric Grader',
    summary: 'University project evaluation portal enabling anonymous double-blind peer reviews with outlier moderation.',
    techStack: ['Next.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    features: ['Double-blind pairing matrix', 'Weighted rubric criteria', 'TA variance flagger', 'Gradebook CSV export'],
    apiRoutes: ['POST /api/reviews/assign', 'POST /api/reviews/submit', 'GET /api/grades/summary']
  },
  {
    title: 'PhysioMotion Rehab Tracker',
    summary: 'Guided post-injury physiotherapy tracker logging joint range-of-motion angles, pain scores, and daily sets.',
    techStack: ['React', 'MediaPipe', 'TypeScript', 'Node.js'],
    features: ['On-device pose angle gauge', 'Daily rep counter', 'Pain vs mobility chart', 'Therapist video notes'],
    apiRoutes: ['POST /api/rehab/log-session', 'GET /api/patients/rom-trend', 'GET /api/exercises/plan']
  },
  {
    title: 'ThesisCite Research Organizer',
    summary: 'Graduate thesis workspace managing PDF annotations, APA/IEEE bibliography formatting, and chapter word targets.',
    techStack: ['React', 'TypeScript', 'IndexedDB', 'Node.js'],
    features: ['1-click IEEE/APA citation', 'DOI metadata fetcher', 'Daily word-count tracker', 'Advisor comment drawer'],
    apiRoutes: ['GET /api/doi/:prefix/:suffix', 'POST /api/citations/format', 'GET /api/thesis/progress']
  },
  {
    title: 'VaccinTrack Pediatric Scheduler',
    summary: 'IAP-compliant child immunization calendar calculating due dates from birth date with clinic batch tracking.',
    techStack: ['Next.js', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    features: ['Auto IAP schedule builder', 'Lot & expiry record', 'SMS/WhatsApp due alerts', 'Printable immunization card'],
    apiRoutes: ['GET /api/vaccines/schedule', 'POST /api/doses/record', 'GET /api/cards/pdf']
  },
  {
    title: 'SkillMatrix Corporate Upskilling',
    summary: 'L&D engineering competency dashboard tracking team certifications, internal tech talks, and skill coverage gaps.',
    techStack: ['React', 'NestJS', 'PostgreSQL', 'Recharts'],
    features: ['Team capability radar', 'Learning path assignments', 'Budget reimbursement tracker', 'Quarterly skill delta'],
    apiRoutes: ['GET /api/teams/skill-matrix', 'POST /api/learning/assign', 'GET /api/certs/expiring']
  },
  {
    title: 'SleepPulse Circadian Recovery Log',
    summary: 'Personal sleep hygiene tracker correlating caffeine cutoff, screen exposure, and morning readiness scores.',
    techStack: ['React', 'TypeScript', 'IndexedDB', 'Recharts'],
    features: ['Sleep debt rolling average', 'Habit correlation matrix', 'Bedtime consistency gauge', 'JSON data export'],
    apiRoutes: ['POST /api/sleep/log', 'GET /api/sleep/correlations', 'GET /api/sleep/debt']
  },
  {
    title: 'LibrarySeat Smart Reading Room',
    summary: 'Campus library desk reservation app showing power-outlet seats, quiet-zone availability, and QR check-in.',
    techStack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
    features: ['Interactive floorplan seat map', '15-min no-show auto-release', 'Study room group booking', 'Peak hours bar chart'],
    apiRoutes: ['GET /api/seats/floor/:num', 'POST /api/seats/reserve', 'POST /api/seats/checkin']
  },
  {
    title: 'DentalChart 32-Tooth EHR Canvas',
    summary: 'Interactive odontogram charting tool for dental clinics logging root canals, crowns, and phased treatment estimates.',
    techStack: ['React', 'SVG', 'Node.js', 'PostgreSQL'],
    features: ['Clickable 32-tooth SVG map', 'Surface-level cavity markers', 'Phased treatment quote PDF', 'X-ray gallery'],
    apiRoutes: ['GET /api/patients/:id/odontogram', 'POST /api/procedures/add', 'POST /api/quotes/dental']
  },
  {
    title: 'HostelMess Rebate & Menu Portal',
    summary: 'University hostel dining manager handling meal skip rebates, weekly menu voting, and food waste telemetry.',
    techStack: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: ['QR mess plate counter', 'Advance leave rebate calc', 'Student feedback poll', 'Daily prep headcount'],
    apiRoutes: ['POST /api/mess/rebate', 'POST /api/mess/scan', 'GET /api/mess/headcount']
  },
  {
    title: 'SignLanguage FingerSpell Tutor',
    summary: 'Interactive webcam hand-landmark trainer helping learners practice fingerspelling alphabets with real-time accuracy cues.',
    techStack: ['React', 'MediaPipe', 'TypeScript', 'Tailwind CSS'],
    features: ['On-device hand landmarks', 'Letter accuracy meter', 'Timed word challenges', 'Zero-server video privacy'],
    apiRoutes: ['GET /api/lessons/alphabet', 'POST /api/progress/save', 'GET /api/stats/streak']
  },
  {
    title: 'PathoLab Sample Barcode LIMS',
    summary: 'Diagnostic lab information system tracking blood sample tubes from home collection to analyzer validation.',
    techStack: ['Next.js', 'PostgreSQL', 'Node.js', 'Barcode'],
    features: ['Chain-of-custody timestamps', 'Abnormal critical value alert', 'Doctor approval e-sign', 'QR report download'],
    apiRoutes: ['POST /api/samples/accession', 'POST /api/results/validate', 'GET /api/reports/:id/pdf']
  },
  {
    title: 'ScholarshipMatch Eligibility Finder',
    summary: 'Structured filter engine matching Indian undergraduate students with state, central, and CSR merit scholarships.',
    techStack: ['Next.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    features: ['Income & category eligibility', 'Deadline countdown cards', 'Document checklist tracker', 'Bookmark alerts'],
    apiRoutes: ['POST /api/scholarships/match', 'GET /api/scholarships/closing', 'GET /api/checklists/:id']
  },
  {
    title: 'PharmacyInventory Expiry Guard',
    summary: 'Retail medical store stock manager flagging near-expiry strips 90 days ahead for distributor return credit notes.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: ['FEFO batch-wise billing', 'Schedule H1 register log', 'Distributor return sheet', 'Low-stock auto-PO'],
    apiRoutes: ['GET /api/batches/expiring', 'POST /api/returns/distributor', 'GET /api/registers/h1']
  },
  {
    title: 'MockVivas AI Oral Exam Coach',
    summary: 'Computer science viva preparation simulator testing OS, DBMS, and CN concepts with concise follow-up scoring.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    features: ['Subject-wise viva decks', 'Conceptual keyword checklist', 'Confidence pacing timer', 'Weak topic summary'],
    apiRoutes: ['POST /api/viva/start', 'POST /api/viva/grade', 'GET /api/viva/topics']
  },
  {
    title: 'AlumniMentors Career Coffee Hub',
    summary: 'College alumni mentorship directory connecting final-year students with placed graduates for mock interviews.',
    techStack: ['Next.js', 'PostgreSQL', 'OAuth 2.0', 'Tailwind CSS'],
    features: ['Company & role filters', 'Slot-limited booking cap', 'Session prep checklist', 'Verified alumni badge'],
    apiRoutes: ['GET /api/mentors/directory', 'POST /api/sessions/book', 'GET /api/mentors/:id']
  }
];

const REALTIME_MOBILE_SEEDS: RawProjectSeed[] = [
  {
    title: 'CollabDraw Multiplayer Canvas',
    summary: 'Real-time infinite whiteboard supporting multi-cursor presence, sticky notes, freehand strokes, and SVG export.',
    techStack: ['React', 'HTML5 Canvas', 'WebSockets', 'Yjs'],
    features: ['Sub-30ms cursor presence', 'Conflict-free CRDT strokes', 'Pan & zoom minimap', 'PNG/SVG snapshot'],
    apiRoutes: ['WS /api/boards/:roomId', 'POST /api/boards/snapshot', 'GET /api/boards/:id']
  },
  {
    title: 'CodePair Live Interview IDE',
    summary: 'Synchronized multi-user code editor with live execution console, language switcher, and cursor selection tracking.',
    techStack: ['React', 'Monaco', 'WebSockets', 'Docker'],
    features: ['Operational transform sync', 'Timed stdout/stderr runner', 'Role lock (Host/Candidate)', 'Session playback'],
    apiRoutes: ['WS /api/pair/:sessionId', 'POST /api/runner/execute', 'GET /api/sessions/:id']
  },
  {
    title: 'RidePool Campus Commute App',
    summary: 'Verified college-email carpool and auto-share matcher pairing students along overlapping morning commute corridors.',
    techStack: ['React', 'Node.js', 'PostGIS', 'WebSockets'],
    features: ['Corridor route overlap check', 'Verified .edu/.ac.in filter', 'Live ride SOS share', 'Split fare calculator'],
    apiRoutes: ['POST /api/rides/match', 'WS /api/rides/:id/chat', 'POST /api/rides/complete']
  },
  {
    title: 'LivePoll Audience Q&A Stage',
    summary: 'Conference interactive Q&A and live bar-chart poll app handling 5,000 concurrent mobile voters cleanly.',
    techStack: ['Next.js', 'Redis PubSub', 'WebSockets', 'Tailwind CSS'],
    features: ['QR instant mobile join', 'Upvote question moderation', 'Animated live bar results', 'CSV Q&A export'],
    apiRoutes: ['WS /api/stages/:code', 'POST /api/polls/vote', 'POST /api/questions/upvote']
  },
  {
    title: 'CourierTrack Live Fleet Map',
    summary: 'Real-time parcel delivery tracker streaming courier telemetry, geofence arrival alerts, and proof-of-delivery photos.',
    techStack: ['React', 'WebSockets', 'Node.js', 'PostgreSQL'],
    features: ['Live route polyline ETA', 'Geofence 500m arrival ping', 'OTP delivery handshake', 'Stop sequence list'],
    apiRoutes: ['WS /api/fleet/stream', 'POST /api/deliveries/pod', 'GET /api/tracking/:awb']
  },
  {
    title: 'FocusRoom Pomodoro Co-Working',
    summary: 'Ambient virtual study room with synchronized 25/5 Pomodoro timers, shared task checklists, and focus streaks.',
    techStack: ['React', 'WebSockets', 'Node.js', 'PostgreSQL'],
    features: ['Synced room timer clock', 'Gentle session transition chime', 'Visible participant goals', 'Daily focus hours chart'],
    apiRoutes: ['WS /api/rooms/:id', 'POST /api/tasks/toggle', 'GET /api/users/focus-stats']
  },
  {
    title: 'RetroBoard Sprint Ceremony Hub',
    summary: 'Anonymous sprint retrospective board with dot-voting timers, card grouping, and automatic action-item carryover.',
    techStack: ['React', 'WebSockets', 'Node.js', 'Tailwind CSS'],
    features: ['Private card reveal phase', 'Timed 3-dot voting', 'Drag-merge duplicate cards', 'Markdown export'],
    apiRoutes: ['WS /api/retro/:boardId', 'POST /api/retro/reveal', 'POST /api/retro/export']
  },
  {
    title: 'DropShare Local P2P File Transfer',
    summary: 'WebRTC peer-to-peer file transfer utility sending large builds across devices on Wi-Fi without cloud storage limits.',
    techStack: ['WebRTC', 'React', 'TypeScript', 'WebSockets'],
    features: ['End-to-end DTLS transfer', 'Chunked progress bar', '6-digit room pairing PIN', 'Zero file size cap'],
    apiRoutes: ['WS /api/signal/offer', 'WS /api/signal/ice', 'GET /api/health']
  },
  {
    title: 'PlanningPoker Agile Estimator',
    summary: 'Real-time Fibonacci story-point estimation room with simultaneous reveal, outlier highlighting, and Jira sync.',
    techStack: ['React', 'WebSockets', 'TypeScript', 'Node.js'],
    features: ['Simultaneous card flip', 'Mean/median readout', 'Spectator observer mode', 'Story queue importer'],
    apiRoutes: ['WS /api/poker/:room', 'POST /api/poker/reveal', 'POST /api/stories/import']
  },
  {
    title: 'TableOrder QR Restaurant Menu',
    summary: 'Contactless dine-in ordering PWA allowing multiple table guests to add items to one shared live table cart.',
    techStack: ['Next.js', 'WebSockets', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Multi-phone shared cart', 'Kitchen status push updates', 'Split check by item', 'Allergen tag filter'],
    apiRoutes: ['WS /api/tables/:tableId', 'POST /api/orders/fire-kds', 'POST /api/bills/split']
  },
  {
    title: 'ChessArena Real-Time Blitz Club',
    summary: 'Low-latency 3+2 blitz chess web app featuring legal-move validation, increment clocks, and PGN game analysis.',
    techStack: ['React', 'chess.js', 'WebSockets', 'Node.js'],
    features: ['Server-authoritative clocks', 'Premoves & draw offers', 'Elo rating delta calc', 'Full PGN export'],
    apiRoutes: ['WS /api/chess/:gameId', 'POST /api/matchmaking/queue', 'GET /api/games/:id/pgn']
  },
  {
    title: 'HabitStreak Offline PWA Tracker',
    summary: 'Installable mobile-first PWA habit tracker using Service Workers and IndexedDB for instant offline daily check-ins.',
    techStack: ['React 19', 'PWA', 'IndexedDB', 'Tailwind CSS'],
    features: ['Installable home-screen app', 'Annual grid heatmap', 'Grace-day freeze token', 'JSON backup restore'],
    apiRoutes: ['GET /manifest.webmanifest', 'POST /api/habits/sync', 'GET /api/habits/streaks']
  },
  {
    title: 'MusicJam Synced Queue Room',
    summary: 'Collaborative room jukebox where attendees search tracks, upvote next songs, and vote to skip via mobile.',
    techStack: ['React', 'WebSockets', 'Redis', 'Node.js'],
    features: ['Real-time upvote priority queue', 'Duplicate track cooldown', 'Host playback lock', 'Room QR invite'],
    apiRoutes: ['WS /api/jam/:roomId', 'POST /api/queue/upvote', 'POST /api/queue/skip-vote']
  },
  {
    title: 'EmergencySOS Campus Beacon',
    summary: 'Mobile safety PWA broadcasting live GPS coordinates and audio/status pings to campus security and trusted contacts.',
    techStack: ['React', 'Geolocation API', 'WebSockets', 'Node.js'],
    features: ['Hold-to-trigger false-alarm guard', 'Battery & signal telemetry', 'Safe-check countdown timer', 'Security dispatch console'],
    apiRoutes: ['POST /api/sos/trigger', 'WS /api/sos/beacon', 'POST /api/sos/resolve']
  },
  {
    title: 'SportsTurf Slot Split Booker',
    summary: 'Mobile-friendly cricket/football turf slot booking app with UPI split-pay links among 10 players.',
    techStack: ['Next.js', 'PostgreSQL', 'Razorpay', 'Tailwind CSS'],
    features: ['Floodlight hourly pricing', 'Per-player split share link', 'Weather rain-reschedule', 'Captain pass rewards'],
    apiRoutes: ['GET /api/turfs/:id/slots', 'POST /api/bookings/split-create', 'POST /api/payments/share']
  },
  {
    title: 'AuctionFantasy Draft Room',
    summary: 'Live multiplayer sports draft room with 45-second turn timers, purse cap enforcement, and auto-draft fallback.',
    techStack: ['React', 'WebSockets', 'Redis', 'Node.js'],
    features: ['Server-synced draft clock', 'Purse & role quota guard', 'Live squad balance view', 'Auto-pick queue'],
    apiRoutes: ['WS /api/draft/:leagueId', 'POST /api/draft/bid', 'GET /api/squads/:teamId']
  },
  {
    title: 'NeighborhoodTool Library App',
    summary: 'Community hardware & camera lending PWA tracking borrower handoffs, return due dates, and maintenance notes.',
    techStack: ['React', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    features: ['QR handoff check-out', 'Consumable blade/battery log', 'Waitlist queue pings', 'Condition photo stamp'],
    apiRoutes: ['GET /api/tools/catalog', 'POST /api/loans/checkout', 'POST /api/loans/return']
  },
  {
    title: 'ExpenseTrip Offline Split PWA',
    summary: 'Mountain/road-trip offline expense logger working without cell coverage and syncing settlements once back online.',
    techStack: ['React', 'IndexedDB', 'Service Worker', 'TypeScript'],
    features: ['Zero-network offline ledger', 'Equal/percentage/shares split', 'Receipt photo compression', 'Net settlement summary'],
    apiRoutes: ['POST /api/trips/sync', 'GET /api/trips/:id/balances', 'POST /api/trips/export']
  },
  {
    title: 'QuizBattle Classroom Arena',
    summary: 'Fast-paced multiplayer classroom quiz arena awarding speed-bonused points with live podium transitions.',
    techStack: ['React', 'WebSockets', 'Node.js', 'Redis'],
    features: ['Latency-compensated scoring', '4-shape mobile controller', 'Streak multiplier bonus', 'Post-game accuracy CSV'],
    apiRoutes: ['WS /api/arena/:pin', 'POST /api/arena/answer', 'GET /api/arena/:pin/report']
  },
  {
    title: 'ParkingValet SMS Ticketless Hub',
    summary: 'Hotel & mall valet operations console issuing digital claim links, car-call requests, and bay location tags.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    features: ['1-tap guest car request', 'Valet bay key-hook ID', 'Pre-existing scratch photo log', 'Pickup ETA countdown'],
    apiRoutes: ['POST /api/valet/park', 'POST /api/valet/summon', 'PATCH /api/valet/delivered']
  },
  {
    title: 'WalkiePush Team Voice Channels',
    summary: 'Browser-based push-to-talk audio channel app for event crews with active-speaker lock and channel switching.',
    techStack: ['WebRTC', 'React', 'WebSockets', 'Node.js'],
    features: ['Single-speaker floor lock', 'Hold-spacebar push-to-talk', 'Channel mute groups', 'Connection quality meter'],
    apiRoutes: ['WS /api/ptt/channel', 'POST /api/ptt/acquire-floor', 'GET /api/channels']
  },
  {
    title: 'PetCare Vaccination & Walk Log',
    summary: 'Pet owner mobile web tracker sharing live walk maps, feeding schedules, and vet prescription records with sitters.',
    techStack: ['React', 'PostgreSQL', 'Leaflet', 'Tailwind CSS'],
    features: ['Shared caregiver permissions', 'Deworming & vet reminders', 'Weight curve tracker', 'Emergency vet card'],
    apiRoutes: ['GET /api/pets/:id', 'POST /api/walks/log', 'GET /api/vet/records']
  },
  {
    title: 'QueueSkip Temple & Museum Pass',
    summary: 'Time-slotted heritage monument entry pass portal balancing hourly crowd capacity with QR turnstile validation.',
    techStack: ['Next.js', 'PostgreSQL', 'Redis', 'QRCode'],
    features: ['Hourly capacity quota gauge', 'Offline gate verification', 'Audio tour companion guide', 'Group pass bundling'],
    apiRoutes: ['GET /api/slots/capacity', 'POST /api/passes/book', 'POST /api/gates/validate']
  },
  {
    title: 'PodcastRoom Live Call-In Studio',
    summary: 'Browser podcast recording room featuring multi-track local WAV capture, stage hand-raise queue, and soundboard cues.',
    techStack: ['WebRTC', 'React', 'Node.js', 'IndexedDB'],
    features: ['Local lossless track backup', 'Listener hand-raise queue', 'Echo cancellation toggle', 'Auto level meter'],
    apiRoutes: ['WS /api/studio/:room', 'POST /api/tracks/upload', 'POST /api/stage/promote']
  },
  {
    title: 'SmartHome Energy Telemetry UI',
    summary: 'MQTT-bridged home solar & smart-plug dashboard monitoring real-time kW generation, battery SoC, and appliance schedules.',
    techStack: ['React', 'MQTT', 'WebSockets', 'Recharts'],
    features: ['Solar vs grid live flow', 'Appliance kWh cost breakdown', 'Peak tariff auto-shutoff', '7-day battery forecast'],
    apiRoutes: ['WS /api/iot/telemetry', 'POST /api/switches/:id/toggle', 'GET /api/solar/yield']
  }
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const DEFAULT_CATEGORY_THUMBNAILS: Record<ProjectCategory, string[]> = {
  'Live Web Showcase': [fashionLuxuryVisual, architectureEstateVisual, editorialHospitalityVisual, travelGlobeVisual, mobileAppSaasVisual],
  'Full-Stack SaaS': [aiSaasVisual, ecommerceVisual, mobileAppSaasVisual],
  'Generative AI & Agents': [
    aiSaasVisual,
    '/assets/aistudio/Autonomous_AI_Agents_Tech_Talk_Poster_db3b38b0.png',
    '/assets/aistudio/Neon_AI_Coding_in_the_Cosmos_d8fdb42f.png'
  ],
  'FinTech & Trading': [
    fintechVisual,
    '/assets/aistudio/Focused_Crypto_Trading_Workspace_58db5cbb.png'
  ],
  'E-Commerce & Marketplaces': [ecommerceVisual, fashionLuxuryVisual],
  'Data Analytics & BI': [
    fintechVisual,
    '/assets/aistudio/AI-Powered_Learning_Platform_Conference_4d9a70e4.png'
  ],
  'DevOps & Cloud Systems': [
    devopsVisual,
    '/assets/aistudio/TheCodeSpark_Developer_Toolkit_Poster_1d5ebe66.png'
  ],
  'EdTech & Healthcare': [
    '/assets/aistudio/TheCodeSpark_AI_Coding_Conference_d7477d11.png',
    '/assets/aistudio/Corporate_Training_Auditorium_Session_76c6f74e.png',
    aiSaasVisual
  ],
  'Real-Time & Mobile Apps': [
    mobileAppSaasVisual,
    travelGlobeVisual,
    '/assets/aistudio/TheCodeSpark_Neon_Hand_Interface_74a47cc3.png'
  ]
};

const CATEGORY_BLOCKS: { category: ProjectCategory; seeds: RawProjectSeed[] }[] = [
  { category: 'Live Web Showcase', seeds: LIVE_WEB_SHOWCASE_SEEDS },
  { category: 'Full-Stack SaaS', seeds: FULL_STACK_SAAS_SEEDS },
  { category: 'Generative AI & Agents', seeds: GEN_AI_SEEDS },
  { category: 'FinTech & Trading', seeds: FINTECH_SEEDS },
  { category: 'E-Commerce & Marketplaces', seeds: ECOMMERCE_SEEDS },
  { category: 'Data Analytics & BI', seeds: DATA_ANALYTICS_SEEDS },
  { category: 'DevOps & Cloud Systems', seeds: DEVOPS_SEEDS },
  { category: 'EdTech & Healthcare', seeds: EDTECH_HEALTH_SEEDS },
  { category: 'Real-Time & Mobile Apps', seeds: REALTIME_MOBILE_SEEDS }
];

const LATENCIES = ['14 ms', '18 ms', '22 ms', '26 ms', '31 ms', '19 ms', '24 ms', '16 ms'];
const UPTIMES = ['99.98%', '99.95%', '99.99%', '99.92%', '99.97%', '99.94%'];

export const PROJECT_CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Live Web Showcase',
  'Full-Stack SaaS',
  'Generative AI & Agents',
  'FinTech & Trading',
  'E-Commerce & Marketplaces',
  'Data Analytics & BI',
  'DevOps & Cloud Systems',
  'EdTech & Healthcare',
  'Real-Time & Mobile Apps'
];

export const FEATURED_PROJECTS: FeaturedProject[] = (() => {
  const list: FeaturedProject[] = [];
  let runningIdx = 1;

  for (const block of CATEGORY_BLOCKS) {
    for (const seed of block.seeds) {
      const idx = runningIdx++;
      const slug = slugify(seed.title);
      const padded = String(idx).padStart(3, '0');
      const pool = DEFAULT_CATEGORY_THUMBNAILS[block.category];
      const fallbackThumb = pool[idx % pool.length];
      list.push({
        id: `TCS-${padded}`,
        index: idx,
        slug,
        title: seed.title,
        category: block.category,
        summary: seed.summary,
        techStack: seed.techStack,
        leadEngineer: ENGINEERS[(idx * 7) % ENGINEERS.length],
        cohort: COHORTS[idx % COHORTS.length],
        liveDomain: seed.liveDomain || `https://${slug}.thecodespark.live`,
        thumbnail: seed.thumbnail || fallbackThumb,
        isExternalLive: Boolean(seed.liveDomain),
        responseLatency: LATENCIES[idx % LATENCIES.length],
        uptime: UPTIMES[idx % UPTIMES.length],
        features: seed.features,
        apiRoutes: seed.apiRoutes,
        featured: block.category === 'Live Web Showcase'
      });
    }
  }

  return list;
})();

export const CLIENT_LIVE_PROJECTS: FeaturedProject[] = FEATURED_PROJECTS.filter(
  (p) => p.isExternalLive
);
