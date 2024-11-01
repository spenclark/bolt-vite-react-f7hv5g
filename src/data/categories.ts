import { Category } from '../types';

export const categories: Category[] = [
  {
    title: "Marketing Tools",
    slug: "marketing-tools",
    icon: "Megaphone",
    description: "Grow your business with powerful marketing solutions",
    subcategories: [
      {
        name: "Email Marketing",
        tools: [
          {name: "SendFox", description: "One-time purchase for lifetime access to email marketing features"},
          {name: "MailSend", description: "Lifetime deal for email marketing and automation"},
          {name: "Sendy", description: "Self-hosted email marketing software with a one-time purchase"}
        ]
      },
      {
        name: "Social Media Management",
        tools: [
          {name: "Pallyy", description: "Lifetime deal for social media scheduling and analytics"},
          {name: "Postfity", description: "One-time purchase for social media management"},
          {name: "SocialBee", description: "Offers lifetime deals periodically for comprehensive social media management"}
        ]
      },
      {
        name: "Content Creation",
        tools: [
          {name: "Jasper AI", description: "Occasionally offers lifetime deals for AI-powered content creation"},
          {name: "Writesonic", description: "One-time purchase options for AI writing assistant"},
          {name: "Copysmith", description: "Lifetime deal for AI-powered copywriting tool"}
        ]
      }
    ],
    count: 9,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Productivity & Collaboration",
    slug: "productivity-collaboration",
    icon: "Users",
    description: "Streamline teamwork and boost efficiency",
    subcategories: [
      {
        name: "Project Management",
        tools: [
          {name: "ClickUp", description: "Lifetime deal for project management and team collaboration"},
          {name: "Notion", description: "One-time purchase option for personal use"},
          {name: "Taskade", description: "Lifetime deal for project management and team collaboration"}
        ]
      },
      {
        name: "File Sharing and Storage",
        tools: [
          {name: "pCloud", description: "Lifetime subscription for cloud storage"},
          {name: "Internxt", description: "One-time purchase for secure cloud storage"},
          {name: "Sync.com", description: "Lifetime plans for secure file storage and sharing"}
        ]
      }
    ],
    count: 6,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Design and Creativity",
    slug: "design-creativity",
    icon: "Palette",
    description: "Unleash your creativity with powerful design tools",
    subcategories: [
      {
        name: "Graphic Design",
        tools: [
          {name: "Pixelied", description: "Lifetime deal for online graphic design tool"},
          {name: "PixTeller", description: "One-time purchase for graphic design and animation"},
          {name: "Snapseed", description: "Free, one-time download for mobile photo editing"}
        ]
      },
      {
        name: "Video Editing",
        tools: [
          {name: "VSDC Pro", description: "Lifetime license for video editing software"},
          {name: "Filmora", description: "One-time purchase option for video editing software"},
          {name: "DaVinci Resolve", description: "Free version with one-time purchase for Studio version"}
        ]
      }
    ],
    count: 6,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Business and Finance",
    slug: "business-finance",
    icon: "DollarSign",
    description: "Manage your finances and grow your business",
    subcategories: [
      {
        name: "Accounting Software",
        tools: [
          {name: "Wave", description: "Free accounting software with one-time payment options for payroll and payments"},
          {name: "GnuCash", description: "Free, open-source accounting software"},
          {name: "Manager", description: "One-time purchase for desktop accounting software"}
        ]
      },
      {
        name: "Invoicing Tools",
        tools: [
          {name: "Invoice Ninja", description: "Self-hosted option with one-time purchase"},
          {name: "Invoicely", description: "Lifetime deal occasionally available for invoicing software"},
          {name: "Zoho Invoice", description: "Free invoicing software with one-time payment options for advanced features"}
        ]
      }
    ],
    count: 6,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Education and Learning",
    slug: "education-learning",
    icon: "BookOpen",
    description: "Enhance your knowledge and skills with educational tools",
    subcategories: [
      {
        name: "Course Creation",
        tools: [
          {name: "Teachable", description: "One-time purchase options for course creation platform"},
          {name: "Thinkific", description: "Lifetime deal occasionally available for course creation"},
          {name: "LearnWorlds", description: "One-time purchase options for online course platform"}
        ]
      },
      {
        name: "Note-Taking and Mind Mapping",
        tools: [
          {name: "Obsidian", description: "Free for personal use with one-time purchase for sync service"},
          {name: "Xmind", description: "One-time purchase option for mind mapping software"},
          {name: "MindMeister", description: "Lifetime deal occasionally available for mind mapping tool"}
        ]
      }
    ],
    count: 6,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Website Building and Management",
    slug: "website-building-management",
    icon: "Globe",
    description: "Create and manage your online presence",
    subcategories: [
      {
        name: "Website Builders",
        tools: [
          {name: "Brizy", description: "Lifetime deal for website builder"},
          {name: "Elementor", description: "One-time purchase options for WordPress page builder"},
          {name: "Oxygen Builder", description: "Lifetime license for WordPress website builder"}
        ]
      },
      {
        name: "E-commerce Platforms",
        tools: [
          {name: "WooCommerce", description: "Free plugin with one-time purchases for extensions"},
          {name: "OpenCart", description: "Free, open-source e-commerce platform with one-time paid extensions"},
          {name: "PrestaShop", description: "Free, open-source with one-time purchases for themes and modules"}
        ]
      }
    ],
    count: 6,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=400"
  }
];