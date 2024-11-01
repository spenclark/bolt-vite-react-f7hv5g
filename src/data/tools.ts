import { Tool } from '../types';

export const tools: Tool[] = [
  {
    title: "MailMaster Pro",
    slug: "mailmaster-pro",
    description: "Complete email marketing platform with automation, segmentation, and analytics",
    price: 299,
    regularPrice: 49,
    rating: 4.9,
    reviews: 243,
    categorySlug: "marketing-tools",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=400",
    features: [
      "Unlimited email sends",
      "Advanced automation workflows",
      "A/B testing",
      "Custom segmentation",
      "Detailed analytics dashboard",
      "Landing page builder",
      "Integration with 100+ tools"
    ]
  },
  // ... more tools
];

export const featuredTools = tools.slice(0, 3);