export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string | number;
  category: "coffee" | "tea" | "breakfast" | "mains" | "desserts" | "beverages";
  image?: string;
  tags?: ("VEG" | "VEGAN" | "GLUTEN-FREE" | "BESTSELLER" | "NEW" | "CHEF'S PICK" | "SIGNATURE")[];
  origin?: string;
  calories?: string;
}

export interface Review {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  rating: number;
  comment: string;
  date?: string;
  platform?: "Google" | "TripAdvisor" | "Instagram";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "ambience" | "food" | "coffee" | "moments";
  src: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
  alt: string;
}

export interface ExperienceCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface CraftStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

export interface ThemeColors {
  background: string;
  foreground: string;
  surface: string;
  surfaceRaised: string;
  accent: string;
  accentHover: string;
  accentSubtle: string;
  accentSecondary: string;
  muted: string;
  mutedForeground: string;
  border: string;
}

export interface CafeConfig {
  demoMode: boolean;
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: {
    line1: string;
    line2: string;
    line3: string;
  };
  heroSubtext: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapsUrl: string;
  instagram: {
    handle: string;
    url: string;
  };
  currency: string;
  currencySymbol: string;
  brandStory: {
    headline: string;
    subheadline: string;
    paragraph1: string;
    paragraph2: string;
    highlightWord: string;
  };
  openingHours: {
    day: string;
    hours: string;
    isWeekend?: boolean;
  }[];
  trustStats: {
    rating: string;
    totalReviews: string;
    yearsCrafting: string;
    signatureBlends: string;
  };
  themeStyle: "luxury" | "modern" | "contemporary" | "youthful";
  themes: Record<string, ThemeColors>;
  experiences: ExperienceCard[];
  featuredDish: {
    name: string;
    title: string;
    description: string;
    price: string;
    image: string;
    badge: string;
    notes: string[];
  };
  craftStory: {
    title: string;
    subtitle: string;
    steps: CraftStep[];
  };
  ambience: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    videoUrl?: string;
    features: string[];
  };
  menuCategories: {
    id: "coffee" | "tea" | "breakfast" | "mains" | "desserts" | "beverages";
    label: string;
    description: string;
  }[];
  menu: MenuItem[];
  gallery: GalleryItem[];
  reviews: Review[];
  instagramPosts: {
    id: string;
    image: string;
    likes: string;
    comments: string;
    caption: string;
  }[];
}

export const cafeConfig: CafeConfig = {
  demoMode: true,
  name: "L'ATELIER CAFÉ & ROASTERY",
  shortName: "L'ATELIER",
  tagline: "Artisanal Roastery, Culinary Craft & Slow Living",
  heroHeadline: {
    line1: "COFFEE.",
    line2: "CONVERSATION.",
    line3: "MOMENTS.",
  },
  heroSubtext:
    "An architectural sanctuary where artisanal single-origin roast profiles meet European culinary elegance and timeless ambience.",
  city: "Mumbai",
  area: "Bandra West",
  address: "Plot 42, Waterfield Road, Bandra West, Mumbai 400050",
  phone: "+91 98200 12345",
  whatsapp: "+919820012345",
  email: "concierge@ateliercafe.com",
  mapsUrl: "https://maps.google.com/?q=Bandra+West+Mumbai",
  instagram: {
    handle: "@ateliercafe.official",
    url: "https://instagram.com",
  },
  currency: "INR",
  currencySymbol: "₹",
  brandStory: {
    headline: "MORE THAN JUST COFFEE.",
    subheadline: "A slow morning ritual, an afternoon refuge, an evening conversation.",
    paragraph1:
      "Born from an obsession with terroir, precision roasting, and intentional architecture, L'Atelier was created as a sanctuary from the urban rush.",
    paragraph2:
      "Every single batch of our beans is sourced directly from ethical high-altitude estates, roasted in-house in small micro-lots, and extracted with state-of-the-art precision.",
    highlightWord: "ATMOSPHERE",
  },
  openingHours: [
    { day: "MON — FRI", hours: "07:30 — 23:00" },
    { day: "SATURDAY", hours: "08:00 — 23:30", isWeekend: true },
    { day: "SUNDAY", hours: "08:00 — 23:30", isWeekend: true },
  ],
  trustStats: {
    rating: "4.9",
    totalReviews: "1,420+",
    yearsCrafting: "8 Years",
    signatureBlends: "14 Estates",
  },
  themeStyle: "luxury",
  themes: {
    luxury: {
      background: "#0C0A09", // Deep espresso obsidian
      foreground: "#F7F5F0", // Warm cream
      surface: "#171412",
      surfaceRaised: "#221D1A",
      accent: "#D4AF37", // Warm vintage gold
      accentHover: "#E5C158",
      accentSubtle: "rgba(212, 175, 55, 0.12)",
      accentSecondary: "#C28E5C", // Roasted hazelnut copper
      muted: "#2C2622",
      mutedForeground: "#A8A096",
      border: "rgba(212, 175, 55, 0.18)",
    },
    modern: {
      background: "#121415",
      foreground: "#F4F4F5",
      surface: "#1A1D20",
      surfaceRaised: "#24282D",
      accent: "#38BDF8",
      accentHover: "#7DD3FC",
      accentSubtle: "rgba(56, 189, 248, 0.12)",
      accentSecondary: "#34D399",
      muted: "#27272A",
      mutedForeground: "#A1A1AA",
      border: "rgba(255, 255, 255, 0.1)",
    },
    contemporary: {
      background: "#FAF7F2",
      foreground: "#1C1917",
      surface: "#FFFFFF",
      surfaceRaised: "#F3EFEA",
      accent: "#8B5E3C",
      accentHover: "#704828",
      accentSubtle: "rgba(139, 94, 60, 0.1)",
      accentSecondary: "#C89D7C",
      muted: "#E7E2D9",
      mutedForeground: "#78716C",
      border: "rgba(28, 25, 23, 0.12)",
    },
    youthful: {
      background: "#FFFBF5",
      foreground: "#292524",
      surface: "#FFFFFF",
      surfaceRaised: "#FCE7D8",
      accent: "#E05A47", // Terracotta coral
      accentHover: "#C84937",
      accentSubtle: "rgba(224, 90, 71, 0.12)",
      accentSecondary: "#2D6A4F",
      muted: "#F5ECE5",
      mutedForeground: "#78716C",
      border: "rgba(224, 90, 71, 0.2)",
    },
  },
  experiences: [
    {
      id: "01",
      number: "01",
      title: "ARTISANAL COFFEE",
      subtitle: "Single-origin micro-lots",
      description:
        "Direct-trade beans calibrated every morning to the exact humidity, extracted on custom dual-boiler synesso machines.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "02",
      number: "02",
      title: "CULINARY CRAFT",
      subtitle: "Slow-fermented & fresh",
      description:
        "Artisanal French Viennoiserie rolled by hand daily at 4:00 AM alongside seasonal farm-to-table savory plates.",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "03",
      number: "03",
      title: "ATMOSPHERIC HAVEN",
      subtitle: "Brutalist meets botanical",
      description:
        "Warm acoustic wood detailing, custom low-spectrum ambient lighting, and serene outdoor veranda seating.",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "04",
      number: "04",
      title: "TIMELESS MOMENTS",
      subtitle: "Conversations & solitude",
      description:
        "Whether a deep creative sprint or an intimate date, our space is curated to make every conversation memorable.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  featuredDish: {
    name: "TRUFFLE WILD MUSHROOM BRIOCHE",
    title: "THE ONE YOU'LL COME BACK FOR.",
    description:
      "Pan-seared forest chanterelles and king oyster mushrooms over house-baked toasted brioche, whipped cultured thyme butter, and 24-month aged Grana Padano.",
    price: "₹680",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1400&q=80",
    badge: "CHEF'S SIGNATURE",
    notes: ["Handmade Brioche", "Fresh Foraged Mushrooms", "Infused Black Truffle Oil"],
  },
  craftStory: {
    title: "FROM BEANS TO BEAUTY.",
    subtitle: "The uncompromised four-stage journey of our signature extraction.",
    steps: [
      {
        step: "01",
        title: "Ethical Harvest",
        description:
          "Hand-picked ripe red cherries from 1,800m altitude high-shade estates in Chikmagalur & Yirgacheffe.",
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      },
      {
        step: "02",
        title: "Micro-Lot Roasting",
        description:
          "Cast-iron drum roast profiles developed individually per varietal to amplify floral acidity and chocolate sweetness.",
        image:
          "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80",
      },
      {
        step: "03",
        title: "Precision Extraction",
        description:
          "Laser-calibrated 9-bar pre-infusion profiles tailored to highlight delicate notes of jasmine, bergamot & caramel.",
        image:
          "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
      },
      {
        step: "04",
        title: "The Finished Pour",
        description:
          "Silky micro-foam textured to 62°C, poured with deliberate precision for an unforgettable velvet mouthfeel.",
        image:
          "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  ambience: {
    title: "COME FOR THE COFFEE. STAY FOR THE ATMOSPHERE.",
    subtitle: "Designed to evoke calm, curiosity, and connection.",
    description:
      "Surrounded by tactile lime plaster, hand-finished walnut timber, and floor-to-ceiling glass that captures morning golden light, L'Atelier creates an acoustic haven inside the city.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Natural Daylight Veranda",
      "Curated Ambient Vinyl Audio",
      "High-Speed Fiber for Deep Work",
      "Pet Friendly Courtyard",
    ],
  },
  menuCategories: [
    {
      id: "coffee",
      label: "COFFEE & ESPRESSO",
      description: "In-house roasted single origins, manual brews, and espresso classics.",
    },
    {
      id: "tea",
      label: "TEA & BOTANICALS",
      description: "Artisanal loose-leaf teas, botanical infusions, and ceremonial matcha.",
    },
    {
      id: "breakfast",
      label: "BREAKFAST & BAKERY",
      description: "Freshly baked sourdoughs, viennoiserie, and hearty morning bowls.",
    },
    {
      id: "mains",
      label: "ARTISANAL MAINS",
      description: "Contemporary bistro plates, gourmet sourdough toasts, and seasonal bowls.",
    },
    {
      id: "desserts",
      label: "PASTRY & DESSERTS",
      description: "Fine French pastries, Basque cheesecakes, and house chocolate creations.",
    },
    {
      id: "beverages",
      label: "COOLERS & MOCKTAILS",
      description: "House cold brews, botanical tonics, and fermented fruit refreshers.",
    },
  ],
  menu: [
    {
      id: "c1",
      name: "Single-Origin Cortado",
      description: "Double ristretto over equal parts steamed silky whole milk in vintage glassware.",
      price: "₹280",
      category: "coffee",
      tags: ["SIGNATURE", "BESTSELLER"],
      origin: "Chikmagalur Red Honey",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "c2",
      name: "Spanish Saffron Latte",
      description: "House-made saffron vanilla syrup, espresso, and textured oat milk dusted with gold leaf.",
      price: "₹360",
      category: "coffee",
      tags: ["SIGNATURE", "NEW"],
      image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "c3",
      name: "Cold Drip Tonic",
      description: "16-hour slow cold drip coffee over artisanal Indian tonic water and charred rosemary.",
      price: "₹340",
      category: "coffee",
      tags: ["BESTSELLER"],
      origin: "Ethiopian Yirgacheffe",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "c4",
      name: "V60 Pour Over Reserve",
      description: "Light roast with delicate notes of peach blossoms, Earl Grey, and cane sugar sweetness.",
      price: "₹320",
      category: "coffee",
      tags: ["SIGNATURE"],
      origin: "Panama Geisha Lot 12",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "t1",
      name: "Ceremonial Uji Matcha Latte",
      description: "First-harvest ceremonial grade matcha whisked to order with warm vanilla oat milk.",
      price: "₹390",
      category: "tea",
      tags: ["SIGNATURE", "VEGAN"],
      origin: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "t2",
      name: "Smoked Silver Needle White Tea",
      description: "Rare sun-dried silver buds with subtle orchid fragrance and velvet smooth finish.",
      price: "₹310",
      category: "tea",
      tags: ["VEG"],
      origin: "Darjeeling Singbulli",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "b1",
      name: "Artisanal Almond Croissant",
      description: "Twice-baked butter croissant loaded with rich frangipane cream and toasted sliced almonds.",
      price: "₹320",
      category: "breakfast",
      tags: ["BESTSELLER", "VEG"],
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "b2",
      name: "Avocado & Stracciatella Tartine",
      description: "Whipped Italian stracciatella, sliced Hass avocado, pickled shallots & dukkah on seeded sourdough.",
      price: "₹540",
      category: "breakfast",
      tags: ["SIGNATURE", "VEG"],
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "m1",
      name: "Truffle Wild Mushroom Brioche",
      description: "Pan-seared forest mushrooms, whipped cultured thyme butter, aged Grana Padano on toasted brioche.",
      price: "₹680",
      category: "mains",
      tags: ["CHEF'S PICK", "SIGNATURE", "VEG"],
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "m2",
      name: "Burrata & Heirloom Tomato Bowl",
      description: "Fresh Puglia burrata, balsamic caviar, garden basil emulsion, toasted pine nuts, crusty focaccia.",
      price: "₹620",
      category: "mains",
      tags: ["BESTSELLER", "VEG", "GLUTEN-FREE"],
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "d1",
      name: "Burnt Basque Cheesecake",
      description: "Creamy caramelized center, Madagascar vanilla bean, accompanied by seasonal sour cherry compote.",
      price: "₹420",
      category: "desserts",
      tags: ["BESTSELLER", "VEG"],
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "d2",
      name: "70% Single-Origin Chocolate Tart",
      description: "Valrhona Guanaja dark ganache in crisp cocoa sable shell with sea salt flakes and espresso foam.",
      price: "₹460",
      category: "desserts",
      tags: ["SIGNATURE", "VEG"],
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "v1",
      name: "Cascara Blood Orange Spritz",
      description: "Brewed coffee cherry cascara, fresh Sicilian blood orange juice, sparkling soda, and mint.",
      price: "₹340",
      category: "beverages",
      tags: ["NEW", "VEGAN"],
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "v2",
      name: "Smoked Yuzu Lemonade",
      description: "Japanese Yuzu citrus puree, cold-pressed green apple, smoked sea salt, and crushed crystal ice.",
      price: "₹320",
      category: "beverages",
      tags: ["VEGAN"],
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
    },
  ],
  gallery: [
    {
      id: "g1",
      title: "Morning Pour",
      category: "coffee",
      src: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "portrait",
      alt: "Barista pouring latte art with precision micro-foam",
    },
    {
      id: "g2",
      title: "Veranda Sanctuary",
      category: "ambience",
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "landscape",
      alt: "Sunlit café interior with acoustic wood and leafy greenery",
    },
    {
      id: "g3",
      title: "Freshly Baked Viennoiserie",
      category: "food",
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "square",
      alt: "Golden flaky croissants and pastries resting on bakery rack",
    },
    {
      id: "g4",
      title: "Espresso Extraction",
      category: "coffee",
      src: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "wide",
      alt: "Rich golden espresso flowing from bottomless portafilter",
    },
    {
      id: "g5",
      title: "Truffle Brioche Toast",
      category: "food",
      src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "portrait",
      alt: "Gourmet brioche with foraged mushrooms and shaved parmesan",
    },
    {
      id: "g6",
      title: "Afternoon Light",
      category: "moments",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "landscape",
      alt: "Guests enjoying conversation over coffee in warm ambience",
    },
  ],
  reviews: [
    {
      id: "r1",
      name: "Siddharth Rao",
      role: "Architect & Coffee Connoisseur",
      rating: 5,
      comment:
        "Easily the most thoughtful café in the city. The single-origin cortado is exceptional, and the interior acoustic design makes it perfect for both conversations and quiet deep work.",
      platform: "Google",
      date: "2 weeks ago",
    },
    {
      id: "r2",
      name: "Ananya Mehta",
      role: "Food & Travel Writer",
      rating: 5,
      comment:
        "The Truffle Wild Mushroom Brioche alone is worth the trip across town. Paired with their Spanish Saffron Latte, it’s an absolute masterclass in flavor.",
      platform: "Google",
      date: "1 month ago",
    },
    {
      id: "r3",
      name: "Vikram Singhania",
      role: "Creative Director",
      rating: 5,
      comment:
        "A true European-grade roastery experience. Aesthetic, unhurried, with flawless service. There is nothing else like this in Mumbai.",
      platform: "Google",
      date: "3 weeks ago",
    },
  ],
  instagramPosts: [
    {
      id: "ig1",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
      likes: "1,248",
      comments: "42",
      caption: "Golden hour rituals at the roastery bar. #AtelierLife",
    },
    {
      id: "ig2",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      likes: "982",
      comments: "31",
      caption: "Baked fresh daily at 4:00 AM with French cultured butter.",
    },
    {
      id: "ig3",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80",
      likes: "1,530",
      comments: "64",
      caption: "Single origin extraction. 9 bars of calibrated perfection.",
    },
    {
      id: "ig4",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
      likes: "2,105",
      comments: "89",
      caption: "Find your corner of calm amid the city rush.",
    },
    {
      id: "ig5",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
      likes: "1,740",
      comments: "58",
      caption: "Weekend brunch highlights. Have you tried our mushroom brioche?",
    },
    {
      id: "ig6",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
      likes: "2,420",
      comments: "112",
      caption: "Caramelized Basque cheesecake fresh out of the hearth.",
    },
  ],
};
