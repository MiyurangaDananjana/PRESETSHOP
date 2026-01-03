// Mock data for products
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  presetCount: number;
  image: string;
  featured: boolean;
  category: string;
  beforeImage: string;
  afterImage: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    id: "golden-hour",
    name: "Golden Hour Collection",
    description: "Warm, cinematic tones perfect for sunset and golden hour photography. Enhance natural light with rich, dreamy colors.",
    price: 49,
    presetCount: 15,
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
    featured: true,
    category: "Outdoor",
    beforeImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&sat=20",
    features: [
      "15 professionally crafted presets",
      "Compatible with Lightroom Classic & Mobile",
      "One-click application",
      "Video tutorial included",
      "Lifetime updates",
      "Commercial use license"
    ],
    faqs: [
      {
        question: "What version of Lightroom do I need?",
        answer: "These presets work with Lightroom Classic CC, Lightroom CC, and Lightroom Mobile (Premium subscription required for mobile)."
      },
      {
        question: "Can I use these presets commercially?",
        answer: "Yes! All our presets come with a commercial use license, perfect for professional photographers."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day money-back guarantee if you're not satisfied with your purchase."
      }
    ]
  },
  {
    id: "moody-portraits",
    name: "Moody Portraits Pack",
    description: "Create dramatic, emotive portraits with deep shadows and selective color grading. Perfect for fashion and editorial work.",
    price: 59,
    presetCount: 20,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    featured: true,
    category: "Portrait",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&sat=5",
    features: [
      "20 moody portrait presets",
      "Optimized for skin tones",
      "Desktop & mobile versions",
      "Installation guide",
      "Free updates forever",
      "Email support"
    ],
    faqs: [
      {
        question: "Are these presets suitable for all skin tones?",
        answer: "Yes, our presets are carefully calibrated to work beautifully with all skin tones."
      },
      {
        question: "How do I install the presets?",
        answer: "We provide a detailed PDF guide and video tutorial showing exactly how to install on desktop and mobile."
      }
    ]
  },
  {
    id: "urban-street",
    name: "Urban Street Collection",
    description: "Gritty, high-contrast looks for urban photography. Inspired by street photography masters.",
    price: 39,
    presetCount: 12,
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    featured: true,
    category: "Street",
    beforeImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&contrast=20",
    features: [
      "12 urban-inspired presets",
      "High contrast aesthetics",
      "Works with RAW and JPEG",
      "Quick start guide",
      "Lifetime access",
      "Priority support"
    ],
    faqs: [
      {
        question: "Can I adjust the presets after applying?",
        answer: "Absolutely! Our presets are designed as starting points. You can fine-tune any setting to match your vision."
      }
    ]
  },
  {
    id: "natural-wedding",
    name: "Natural Wedding Bundle",
    description: "Soft, romantic tones for wedding photography. Timeless elegance meets modern aesthetics.",
    price: 79,
    presetCount: 25,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    featured: false,
    category: "Wedding",
    beforeImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80&sat=-10",
    features: [
      "25 wedding presets",
      "Ceremony & reception looks",
      "Complimentary skin retouching",
      "Video tutorials",
      "Free seasonal updates",
      "Commercial license"
    ],
    faqs: []
  },
  {
    id: "film-emulation",
    name: "Film Emulation Series",
    description: "Authentic film looks from classic stocks. Kodak, Fuji, and Ilford inspired tones.",
    price: 69,
    presetCount: 18,
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    featured: false,
    category: "Film",
    beforeImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80&sepia=30",
    features: [
      "18 film-inspired presets",
      "Classic film grain included",
      "Color & B&W options",
      "Detailed documentation",
      "Unlimited downloads",
      "Professional support"
    ],
    faqs: []
  },
  {
    id: "travel-adventure",
    name: "Travel & Adventure Pack",
    description: "Vibrant, eye-catching presets for travel and landscape photography. Make your adventures pop.",
    price: 45,
    presetCount: 14,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    featured: true,
    category: "Travel",
    beforeImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&sat=30",
    features: [
      "14 travel presets",
      "Landscape optimized",
      "Mobile & desktop",
      "Quick reference guide",
      "Forever updates",
      "Commercial rights"
    ],
    faqs: []
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Wedding Photographer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content: "These presets have completely transformed my workflow. What used to take hours now takes minutes, and my clients absolutely love the consistent, professional look.",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Portrait Artist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content: "The moody portrait pack is absolutely incredible. The skin tone preservation is second to none. Worth every penny and more!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content: "As someone who edits hundreds of photos per trip, these presets are a game-changer. Consistent quality across all my content now.",
    rating: 5
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getAllProducts(): Product[] {
  return products;
}
