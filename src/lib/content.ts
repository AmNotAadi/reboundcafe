export const BRAND = {
  name: "Rebound Cafe",
  location: "TT Nagar, Bhopal",
  logo: "https://content.jdmagicbox.com/v2/comp/bhopal/n5/0755px755.x755.250428232129.a4n5/catalogue/rebound-cafe-tt-nagar-bhopal-coffee-shops-2mc6ac0gmj-250.jpg",
  heroVideoPoster: "/assets/hero-poster.jpg",
  heroVideoSources: [
    {
      src: "https://lh3.googleusercontent.com/ggs/AF1QipNvGsud1a9Xv1nVKwcw60UHy3vdHxdWHB2dEkCO=m18",
      type: "video/mp4",
      media: "(max-width: 767px)",
    },
    {
      src: "https://lh3.googleusercontent.com/ggs/AF1QipNvGsud1a9Xv1nVKwcw60UHy3vdHxdWHB2dEkCO=m18",
      type: "video/mp4",
      media: "(min-width: 768px)",
    },
  ],
};

export const SIGNATURE_CARDS = [
  {
    title: "Handcrafted Coffee",
    copy: "Single-origin pours finished tableside with brushed gold kettles.",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipND77EZoytfxVUcI1-tDKl-IJ8RzQ0X43OFp9mp=w940-h784-n-k-no-nu",
  },
  {
    title: "Cozy Seating",
    copy: "Layered textures, low lighting and curated playlists slow time down.",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNG193Hb2WBL-kXSbAV9EUo1k5_cKQyH_4HW3On=w940-h1570-n-k-no-nu",
  },
  {
    title: "Artisanal Desserts",
    copy: "Seasonal patisserie plates with edible florals and molten centers.",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPYGznSY67fGBZSrXjXWWgy2ivxlHfXzCFrjRyf=w940-h943-n-k-no-nu",
  },
];

export const ABOUT_TEASER = {
  image:
    "https://lh3.googleusercontent.com/p/AF1QipOiap3YXyh0Znvc6pnomzpAQ89AhgmKgHA1sGdy=w960-h1200-n-k-no-nu",
  headline: "Atmosphere Worth Lingering For",
  copy: "Warm wooden floors, olive walls and brass lighting craft a cinematic glow where conversations linger well past dessert.",
  link: "/about",
};

export const MENU_TEASER = {
  background:
    "https://lh3.googleusercontent.com/p/AF1QipMuZ7KcQQc5g6CepSiexi29Dv3ZQo-ScNiZ6l51=w940-h673-n-k-no-nu",
  heading: "Your Menu Here",
  subheading:
    "Curate signature flights, seasonal dégustations and chef table pairings tailored to your story.",
  link: "/menu",
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  dietary?: string[];
};

export const MENU_SECTIONS: { title: string; items: MenuItem[] }[] = [
  {
    title: "Coffee Rituals",
    items: [
      {
        name: "Slow Drip Reverie",
        description: "24-hour cold brew finished with smoked vanilla cream.",
        price: "₹420",
      },
      {
        name: "Syphon Tasting",
        description: "Two single-origin pours, paired with citrus ribbons.",
        price: "₹560",
      },
    ],
  },
  {
    title: "Bespoke Beverages",
    items: [
      {
        name: "Olive Grove Spritz",
        description: "Green tea, lime leaf cordial, sparkling tonic.",
        price: "₹380",
      },
      {
        name: "Amber Latte",
        description: "Spiced jaggery caramel, espresso, oat espuma.",
        price: "₹340",
      },
    ],
  },
  {
    title: "Savories",
    items: [
      {
        name: "Truffle Brioche Melt",
        description: "Wild mushrooms, burrata, micro basil, brown butter.",
        price: "₹610",
      },
      {
        name: "Cedar Char Sandwich",
        description: "Charred peppers, halloumi, preserved lemon aioli.",
        price: "₹540",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Midnight Ganache",
        description: "70% single-origin chocolate, smoked salt, olive oil.",
        price: "₹460",
      },
      {
        name: "Bhopal Bloom",
        description: "Saffron mousse, pistachio praline, rose gel.",
        price: "₹480",
      },
    ],
  },
  {
    title: "Seasonal Specials",
    items: [],
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: "Interior" | "Food" | "Events";
  image: string;
  alt: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Sunlit Booth",
    category: "Interior",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPi3xdSocYEBZjieP3XUoUXy3Fr1jZmDCEABTaH=w940-h1200-n-k-no-nu",
    alt: "Sunlit booth with olive walls",
  },
  {
    id: "g2",
    title: "Signature Dessert",
    category: "Food",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNTNxpQyMpxaiYMbGaYJqyePmHQAkYoWo_-U_Jv=w940-h943-n-k-no-nu",
    alt: "Dessert plated with gold accents",
  },
  {
    id: "g3",
    title: "Evening Glow",
    category: "Interior",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOVSxPUIRxS4t5jlxdcaCke5dMGJyBs-OPsVoaq=w940-h1570-n-k-no-nu",
    alt: "Cozy evening cafe corner",
  },
  {
    id: "g4",
    title: "Chef's Table",
    category: "Events",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxB7-RS9KZddPFxDs39EM7jNijOUUryPYehMnUiFD8q3neeolvH-WKWp__Q25rbcsmbnbs-FS5usTucWLMoVQ_13ivC-xlfWIIiwyiqTVR5HInZGwgKLko4F_UuDseovN3fBqHYkrO0l__0=w940-h1200-n-k-no-nu",
    alt: "Chef's table setup",
  },
  {
    id: "g5",
    title: "Latte Art",
    category: "Food",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOka1yv9wTjiHVEilE37nSbKNkKcUxIbvt6f6UR=w940-h1176-n-k-no-nu",
    alt: "Latte art close-up",
  },
  {
    id: "g6",
    title: "Exterior",
    category: "Events",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipM67dPTHY76yb4ivuxsneFXGAxK7neu7ln1Q_Iu=w960-h640-n-k-no-nu",
    alt: "Exterior view of Rebound Cafe",
  },
];

export const INSTAGRAM_FALLBACK = GALLERY_ITEMS.slice(0, 6).map((item, index) => ({
  id: `insta-${item.id}`,
  imageUrl: item.image,
  permalink: "https://www.instagram.com/reboundcafe",
  caption: `${item.title} — Snapshot ${index + 1}`,
}));

export const CONTACT = {
  phone: "+91 98765 43210",
  email: "hello@reboundcafe.in",
  address: "Plot 21, TT Nagar, Bhopal, MP 462003",
  hours: [
    { day: "Mon – Thu", hours: "9:00 AM – 11:00 PM" },
    { day: "Fri – Sun", hours: "9:00 AM – Midnight" },
  ],
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.464338938589!2d77.401702!3d23.226184200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43368955567f%3A0x7177b926e41b9e3c!2sRebound%20Cafe!5e0!3m2!1sen!2sin!4v1763191291761!5m2!1sen!2sin",
};
