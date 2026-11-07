export interface ProductModule {
  number: number;
  title: string;
  items: string[];
  note?: string;
}

export interface CourseProduct {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  techStack: string[];
  architectureHighlights: {
    title: string;
    desc: string;
    icon: string;
  }[];
  modules: ProductModule[];
}

export const IGNITE2_PRODUCTS: CourseProduct[] = [
  {
    id: "loveable-ai",
    name: "Loveable Ai",
    badge: "PRODUCT 1 • AUTONOMOUS AI BUILDER",
    tagline: "Multi-Agent AI Builder for Prompt-to-Code Generation & Iterative Refinement",
    description:
      "A Lovable-style AI builder is a platform where users describe what they want to build in a prompt, and multiple AI agents work together to generate and refine the solution. Each agent focuses on a different role, such as planning, structuring, or improving the output, and their responses combine to produce a clearer and more useful result. This project focuses on the core workflow of AI-assisted product building: project workspaces, prompt-driven generation, agent collaboration, output viewing, and iterative improvements. It helps students understand how modern AI tools structure prompts, manage generated files, and support continuous refinement.",
    accentColor: "#ec4899",
    bgGradient: "from-pink-500/15 via-purple-500/10 to-transparent",
    techStack: [
      "React 19 & Next.js 15",
      "LangChain & LCEL",
      "Zod Schema Validation",
      "Multi-Agent Swarm",
      "WebSockets Streaming",
      "Redis Cache & State",
      "Monaco Editor",
      "Docker Sandbox"
    ],
    architectureHighlights: [
      {
        title: "Multi-Agent Swarm",
        desc: "Specialized Planner, Architect, Coder & Critic agents collaborating on a single prompt",
        icon: "Bot"
      },
      {
        title: "Streaming Progressive UI",
        desc: "Tokens streamed in real time with side-by-side live file tree and code preview",
        icon: "Zap"
      },
      {
        title: "Prompt Version History",
        desc: "Diff-based comparison between iteration runs with instant rollback and branch support",
        icon: "GitBranch"
      },
      {
        title: "Deterministic Validation",
        desc: "Zod-enforced JSON contracts ensuring generated code is syntactically sound before execution",
        icon: "CheckCircle"
      }
    ],
    modules: [
      {
        number: 1,
        title: "Account & Setup",
        items: [
          "Sign up with email, password & OAuth verification",
          "Secure user log in with JWT & session cookies",
          "User log out & token revocation",
          "Password reset flow with secure magic tokens",
          "Basic profile details & user developer preferences"
        ]
      },
      {
        number: 2,
        title: "Project Workspace",
        items: [
          "Create new AI generation project",
          "Interactive project dashboard with system metrics",
          "Project description & context prompt configuration",
          "Edit project details, title & metadata",
          "Delete project with safe confirmation",
          "Recent projects list with last-active timestamps"
        ]
      },
      {
        number: 3,
        title: "Prompt Input",
        items: [
          "Enter project prompt with markdown & code syntax support",
          "Prompt history tracking with execution timestamps",
          "In-place prompt edit and re-run",
          "Regenerate response with different sampling parameters",
          "Save prompt versions as reusable templates"
        ]
      },
      {
        number: 4,
        title: "AI Agent Collaboration",
        items: [
          "Multiple autonomous agents responding synchronously/asynchronously to one prompt",
          "Agents configured with distinct system roles (Planner, Architect, Coder, Critic)",
          "View agent responses and internal reasoning separately",
          "Combined unified solution synthesis view",
          "Regenerate individual agent response without re-running the entire swarm"
        ]
      },
      {
        number: 5,
        title: "Generated Output",
        items: [
          "View generated code or structured content in real time",
          "Structured output view with syntax highlighting",
          "One-click copy generated code blocks",
          "Download generated files as ZIP archive",
          "Regenerate output with alternative model presets"
        ]
      },
      {
        number: 6,
        title: "Iteration & Refinement",
        items: [
          "Conversational follow-up prompts for targeted modifications",
          "Improve existing output with conversational context memory",
          "Update generated result with incremental file patches",
          "Prompt version history with timestamped states",
          "Side-by-side diff comparison of previous vs new outputs"
        ]
      },
      {
        number: 7,
        title: "File & Project Structure",
        items: [
          "Generated file tree directory list",
          "Open file preview with syntax-highlighted Monaco editor",
          "Edit generated code content directly in the browser",
          "Save file changes with optimistic UI updates",
          "Download entire project files with package.json dependencies"
        ]
      },
      {
        number: 8,
        title: "Collaboration & Organization",
        items: [
          "Project activity history and audit log",
          "Prompt interaction timeline with chronological events",
          "Organize projects into custom folders and tags",
          "Full-text search across projects, prompts, and generated files"
        ]
      },
      {
        number: 9,
        title: "User Experience (UX)",
        items: [
          "Interactive loading skeletons and agent status indicators during generation",
          "Streaming token responses with progressive markdown rendering",
          "Clean, minimalist dark-mode workspace layout",
          "Dark mode / light mode theme customization",
          "Push notifications and sound cues for generation completion"
        ]
      },
      {
        number: 10,
        title: "Basic AI Controls",
        items: [
          "Select number of active agents in the swarm",
          "Choose agent roles, system personas, and temperature limits",
          "Regenerate individual agent reasoning steps",
          "Immediate stop generation and abort controller signal"
        ]
      },
      {
        number: 11,
        title: "Assignments & Independent Research",
        note: "These topics are intentionally designed to push you to explore beyond the lessons, strengthen problem-solving skills, and build independent engineering habits.",
        items: [
          "Prompt Optimization using toon techniques for token efficiency",
          "Deploy & benchmark Free Local Models using Ollama and HuggingFace, understanding cloud deployment strategies",
          "Filter malicious or unusual prompts submitted by users using prompt injection guardrails and sanitization"
        ]
      }
    ]
  },
  {
    id: "pixxo-imagekit",
    name: "Pixxo (ImageKit)",
    badge: "PRODUCT 2 • PRODUCTION MEDIA INFRASTRUCTURE",
    tagline: "High-Performance Media Processing, Dynamic URL Transformations & CloudFront Edge CDN",
    description:
      "This product is a high-performance media processing and delivery platform designed to manage, transform, and serve images and videos at scale. Instead of being treated as a simple academic project, it is built as a production-style system focused on performance, reliability, and infrastructure design. The core of the platform is an image transformation and optimization engine capable of performing resizing, cropping, format conversion, and compression through URL-based transformation parameters targeting sub-500ms latency even in worst-case scenarios. Integrates with Amazon CloudFront edge locations, structured media management, caching strategies, and scalable storage architecture.",
    accentColor: "#06b6d4",
    bgGradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
    techStack: [
      "Node.js & Express.js",
      "Sharp High-Speed Engine",
      "Amazon CloudFront Edge CDN",
      "AWS S3 Distributed Storage",
      "Redis Caching & TTL",
      "Docker Containers",
      "FFmpeg for Video Trimming",
      "MongoDB Asset Catalog"
    ],
    architectureHighlights: [
      {
        title: "Dynamic URL Transformations",
        desc: "Transform images on-the-fly via URL parameters (/tr:w-500,h-300,f-webp/photo.jpg)",
        icon: "Cpu"
      },
      {
        title: "Sub-500ms Edge SLA",
        desc: "Cached at 400+ Amazon CloudFront edge locations worldwide for near-instant global delivery",
        icon: "Gauge"
      },
      {
        title: "Intelligent Compression",
        desc: "Automatic WebP/AVIF format conversion saving up to 70% bandwidth with zero perceptible quality loss",
        icon: "Minimize2"
      },
      {
        title: "Production DAM Layer",
        desc: "Digital asset management with folder hierarchies, role-based sharing & expirable secure tokens",
        icon: "FolderGit2"
      }
    ],
    modules: [
      {
        number: 1,
        title: "Account & Setup",
        items: [
          "Sign up with organization profile and API access keys",
          "Secure authentication with JWT & API signature validation",
          "Log in & session management",
          "Reset password & account recovery security",
          "Basic profile details & organization billing tier display"
        ]
      },
      {
        number: 2,
        title: "Media Upload",
        items: [
          "Upload high-resolution images (JPEG, PNG, WebP, SVG, TIFF)",
          "Upload videos (MP4, WebM, MOV) with multipart chunking",
          "Interactive drag & drop upload dropzone",
          "Multiple simultaneous batch file uploads with queue management",
          "Real-time upload progress indicators and chunk status",
          "File size limit validation & client-side MIME checks"
        ]
      },
      {
        number: 3,
        title: "Media Library",
        items: [
          "Responsive grid view with thumbnail previews",
          "Detailed list view with file dimensions, sizes, and formats",
          "Folder creation and nested directory hierarchies",
          "Drag-and-drop moving files between folders",
          "In-place file renaming with URL slug preservation",
          "Safe deletion with soft-delete recycle bin",
          "Sort media by upload date, file size, or name",
          "Instant search files by name, extension, and tags"
        ]
      },
      {
        number: 4,
        title: "Media Preview",
        items: [
          "Full-screen high-resolution image preview modal",
          "In-browser HTML5 video preview with custom playback controls",
          "Interactive zoom in / zoom out with pan controls",
          "File details inspector (dimensions, color profile, EXIF data, CDN URL)",
          "Direct original asset download",
          "One-click copy optimized CDN delivery link"
        ]
      },
      {
        number: 5,
        title: "Image Editing Basic (URL Transformation Engine)",
        items: [
          "Dynamic resizing with aspect ratio preservation (w, h parameters)",
          "Smart cropping: center crop, pad crop, and focus-aware bounding",
          "Rotation (90°, 180°, 270°) and flip operations",
          "Automatic format conversion (JPG, PNG, WebP, AVIF)",
          "Quality adjustment slider (q-80, q-60) for bandwidth tuning",
          "Live preview of transformed output before generating URLs"
        ]
      },
      {
        number: 6,
        title: "Organization & Management",
        items: [
          "Tag media files with custom categorical keywords",
          "Filter and query media assets by multiple tags",
          "Bulk actions: bulk delete, bulk move, bulk download",
          "Mark and filter favorite media items for quick access"
        ]
      },
      {
        number: 7,
        title: "Sharing & Access Control",
        items: [
          "Generate public CDN delivery links",
          "Time-limited expiring signed share links (HMAC SHA-256)",
          "Responsive HTML embed code generator with srcset",
          "Direct Amazon CloudFront edge distribution URL generator"
        ]
      },
      {
        number: 8,
        title: "Storage Insights & Analytics",
        items: [
          "Real-time storage quota usage tracker",
          "Bandwidth consumption estimate and monthly trends",
          "Total files count and folder breakdown statistics",
          "Visual storage breakdown by file type (Images vs Videos vs Documents)"
        ]
      },
      {
        number: 9,
        title: "UX Enhancements",
        items: [
          "Intersection-observer image lazy loading with blur-up placeholders",
          "Toast notifications for background processing and uploads",
          "Keyboard shortcuts for preview navigation (Arrow keys, Esc, Space)",
          "Full dark mode theme support with high-contrast accessibility"
        ]
      },
      {
        number: 10,
        title: "Medium-Level Advanced Features",
        items: [
          "Watermark overlay positioning (logo stamp, opacity, padding)",
          "Basic serverless video trimming and thumbnail generation via FFmpeg",
          "Background removal placeholder and automated cutout toggle",
          "Face detection smart crop toggle using lightweight computer vision"
        ]
      },
      {
        number: 11,
        title: "Assignments & Performance Benchmarking",
        note: "Production-grade system experiments designed to test edge caching behavior, cache hit ratios, and high-concurrency throughput.",
        items: [
          "Analyze Amazon CloudFront edge caching hit/miss metrics and measure latency differences across global regions",
          "Engineer a custom SVG/PNG watermark pipeline that runs concurrently during dynamic Sharp transformations",
          "Perform a stress-test benchmark generating 1,000 transformed URLs under 1 second using Redis cache layers"
        ]
      }
    ]
  }
];
