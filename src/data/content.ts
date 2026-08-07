/* ============================================================
   RIN WEDDING ORGANIZER — CONTENT / CMS FILE
   Edit everything here: business info, services, gallery,
   packages, testimonials, FAQ. No content is hardcoded in UI.
   ============================================================ */

export const business = {
  name: "Rin Wedding Organizer",
  shortName: "Rin",
  tagline: "Wedding Organizer & Makeup Artist",
  city: "Sidoarjo, East Java, Indonesia",
  headline: "Where Beauty Meets Your Perfect Wedding",
  subheadline:
    "Professional Wedding Organizer & Makeup Artist in Sidoarjo — crafting unforgettable weddings with elegant makeup and complete wedding services.",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  whatsappMessage:
    "Hello Rin Wedding Organizer, I would like to book a consultation for my wedding ✨",
  email: "hello@rinwedding.id",
  instagram: "rinweddingorganizer",
  instagramUrl: "https://instagram.com/rinweddingorganizer",
  address: "Jl. Raya Ponti No. 88, Sidoarjo, East Java 61219",
  mapsEmbed:
    "https://www.google.com/maps?q=Sidoarjo,+East+Java,+Indonesia&output=embed",
  hours: [
    { days: "Monday — Friday", time: "09.00 — 18.00 WIB" },
    { days: "Saturday", time: "08.00 — 20.00 WIB" },
    { days: "Sunday", time: "By Appointment" },
  ],
  stats: [
    { value: "350+", label: "Weddings Organized" },
    { value: "8+", label: "Years of Experience" },
    { value: "500+", label: "Brides Beautified" },
    { value: "5.0", label: "Client Rating" },
  ],
};

export type Service = {
  title: string;
  icon: string; // lucide icon name key
  image: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Wedding Makeup",
    icon: "sparkles",
    image:
      "https://images.pexels.com/photos/31266975/pexels-photo-31266975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Flawless, long-lasting bridal makeup with premium products — radiant from the akad until the last dance.",
  },
  {
    title: "Engagement Makeup",
    icon: "heart",
    image:
      "https://images.pexels.com/photos/16096141/pexels-photo-16096141.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Soft, romantic looks for your engagement day that photograph beautifully and feel effortlessly you.",
  },
  {
    title: "Traditional Makeup",
    icon: "crown",
    image:
      "https://images.pexels.com/photos/29194864/pexels-photo-29194864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Authentic paes and traditional styling — Javanese, Madurese and modern-traditional fusion looks.",
  },
  {
    title: "Graduation Makeup",
    icon: "graduation",
    image:
      "https://images.pexels.com/photos/38785088/pexels-photo-38785088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Fresh, camera-ready glam for your graduation day — natural glow that lasts through every photo.",
  },
  {
    title: "Photoshoot Makeup",
    icon: "camera",
    image:
      "https://images.pexels.com/photos/31252207/pexels-photo-31252207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Editorial-grade makeup for prewedding sessions, maternity shoots and professional portraits.",
  },
  {
    title: "Wedding Organizer",
    icon: "calendar",
    image:
      "https://images.pexels.com/photos/29194910/pexels-photo-29194910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "End-to-end coordination on your big day — vendors, rundown and guests handled with calm precision.",
  },
  {
    title: "Decoration",
    icon: "flower",
    image:
      "https://images.pexels.com/photos/29040917/pexels-photo-29040917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Elegant floral styling, pelaminan and venue decoration tailored to your theme and palette.",
  },
  {
    title: "Wedding Planning",
    icon: "clipboard",
    image:
      "https://images.pexels.com/photos/17001756/pexels-photo-17001756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "From concept to timeline and budget — a personal planner who makes every detail feel easy.",
  },
  {
    title: "Documentation",
    icon: "video",
    image:
      "https://images.pexels.com/photos/35698089/pexels-photo-35698089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Cinematic photography & videography that preserves every emotion of your celebration.",
  },
  {
    title: "Bridal Dress",
    icon: "shirt",
    image:
      "https://images.pexels.com/photos/29545940/pexels-photo-29545940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Curated collection of bridal gowns, kebaya and beskap — fitted perfectly for bride & groom.",
  },
  {
    title: "Hair Styling & Hijab Do",
    icon: "scissors",
    image:
      "https://images.pexels.com/photos/20885663/pexels-photo-20885663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Elegant updos, soft waves and modern hijab styling that complete your bridal look.",
  },
  {
    title: "Henna Art",
    icon: "pen",
    image:
      "https://images.pexels.com/photos/35474505/pexels-photo-35474505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Delicate henna artistry for engagement and wedding — classic, floral and contemporary patterns.",
  },
  {
    title: "Family Makeup",
    icon: "users",
    image:
      "https://images.pexels.com/photos/19898027/pexels-photo-19898027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Coordinated looks for mothers, sisters and the bridal party — everyone glowing in harmony.",
  },
  {
    title: "MC & Entertainment",
    icon: "mic",
    image:
      "https://images.pexels.com/photos/16120230/pexels-photo-16120230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Charismatic MCs, live acoustic music and entertainment that keep your celebration alive.",
  },
];

export type GalleryItem = {
  src: string;
  category: string;
  alt: string;
  ratio: "portrait" | "landscape";
};

export const galleryCategories = [
  "All",
  "Bridal Makeup",
  "Traditional Makeup",
  "Wedding Decoration",
  "Bride Portrait",
  "Bride Couple",
  "Behind The Scene",
  "Family Makeup",
];

export const gallery: GalleryItem[] = [
  { src: "https://images.pexels.com/photos/31266975/pexels-photo-31266975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Bridal Makeup", alt: "Elegant bridal portrait with tiara and lace", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/29545940/pexels-photo-29545940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Bridal Makeup", alt: "Bride in white lace wedding dress", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/16096141/pexels-photo-16096141.png?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Bridal Makeup", alt: "Bridal makeup with jewelry details", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/31252207/pexels-photo-31252207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Bridal Makeup", alt: "Soft light bridal beauty portrait", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/29194871/pexels-photo-29194871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Traditional Makeup", alt: "Traditional Javanese bridal portrait", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/29194864/pexels-photo-29194864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Traditional Makeup", alt: "Javanese bride in elegant kebaya", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/37751839/pexels-photo-37751839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Traditional Makeup", alt: "Traditional Javanese bridal attire", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/37864226/pexels-photo-37864226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Traditional Makeup", alt: "Traditional kebaya portrait", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/18573153/pexels-photo-18573153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", category: "Wedding Decoration", alt: "Floral arrangement at wedding reception", ratio: "landscape" },
  { src: "https://images.pexels.com/photos/24023469/pexels-photo-24023469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Wedding Decoration", alt: "Wedding table setting with florals", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/29040917/pexels-photo-29040917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", category: "Wedding Decoration", alt: "Elegant centerpiece with candles", ratio: "landscape" },
  { src: "https://images.pexels.com/photos/17315409/pexels-photo-17315409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", category: "Wedding Decoration", alt: "Luxury reception with chandeliers", ratio: "landscape" },
  { src: "https://images.pexels.com/photos/16120230/pexels-photo-16120230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", category: "Wedding Decoration", alt: "Romantic floral venue decor", ratio: "landscape" },
  { src: "https://images.pexels.com/photos/29624009/pexels-photo-29624009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Bride Portrait", alt: "Bride smiling in mirror before ceremony", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/15686774/pexels-photo-15686774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Bride Portrait", alt: "Bride in elegant gown indoors", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/15568349/pexels-photo-15568349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Bride Portrait", alt: "Happy bride near curtains", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/29080967/pexels-photo-29080967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", category: "Bride Portrait", alt: "Bride by the window in natural light", ratio: "landscape" },
  { src: "https://images.pexels.com/photos/35698089/pexels-photo-35698089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Bride Couple", alt: "Romantic wedding embrace", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/31965857/pexels-photo-31965857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Bride Couple", alt: "Couple holding hands elegantly", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/18195782/pexels-photo-18195782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", category: "Bride Couple", alt: "Bride and groom smiling together", ratio: "landscape" },
  { src: "https://images.pexels.com/photos/7777910/pexels-photo-7777910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", category: "Bride Couple", alt: "Joyful newlyweds", ratio: "landscape" },
  { src: "https://images.pexels.com/photos/37710473/pexels-photo-37710473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Behind The Scene", alt: "Bride getting ready with makeup artist", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/32427370/pexels-photo-32427370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Behind The Scene", alt: "Bridal makeup preparation in soft light", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/37710475/pexels-photo-37710475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Behind The Scene", alt: "Makeup artist applying bridal eyeshadow", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/31828127/pexels-photo-31828127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Behind The Scene", alt: "Bride silhouetted by window light", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/19898027/pexels-photo-19898027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", category: "Family Makeup", alt: "Joyful makeup session", ratio: "landscape" },
  { src: "https://images.pexels.com/photos/20885663/pexels-photo-20885663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Family Makeup", alt: "Final touches of makeup and hair", ratio: "portrait" },
  { src: "https://images.pexels.com/photos/29624010/pexels-photo-29624010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", category: "Family Makeup", alt: "Makeup and hairstyling preparation", ratio: "portrait" },
];

export const beforeAfter = {
  title: "The Rin Transformation",
  subtitle:
    "Drag the slider to see the artistry — premium products, flawless technique and a glow that lasts all day.",
  /* If before === after, the site renders the "before" side with a
     natural bare-skin treatment automatically. Replace with real
     before/after photos anytime. */
  before:
    "https://images.pexels.com/photos/31252207/pexels-photo-31252207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1100&w=900",
  after:
    "https://images.pexels.com/photos/31252207/pexels-photo-31252207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1100&w=900",
  beforeLabel: "Before",
  afterLabel: "After",
};

export type WeddingPackage = {
  name: string;
  price: string;
  note: string;
  featured?: boolean;
  features: string[];
};

export const packages: WeddingPackage[] = [
  {
    name: "Silver",
    price: "IDR 8.5jt",
    note: "Intimate celebrations",
    features: [
      "Bridal makeup & hair styling",
      "1 groom styling session",
      "Makeup retouch (1x)",
      "Bridal dress rental (1 set)",
      "Mini pelaminan decoration",
      "Wedding day coordinator",
    ],
  },
  {
    name: "Gold",
    price: "IDR 15jt",
    note: "Most loved by couples",
    features: [
      "Everything in Silver",
      "Family makeup (2 persons)",
      "Premium decoration & florals",
      "Photo documentation (1 day)",
      "MC for reception",
      "Henna art for the bride",
      "Wedding planning assistance",
    ],
  },
  {
    name: "Platinum",
    price: "IDR 25jt",
    note: "The signature experience",
    featured: true,
    features: [
      "Everything in Gold",
      "Family makeup (4 persons)",
      "Photo + cinematic video",
      "Luxury venue decoration",
      "Full wedding organizer team",
      "Prewedding photoshoot makeup",
      "Entertainment & acoustic band",
      "Custom wedding concept",
    ],
  },
  {
    name: "Premium",
    price: "IDR 40jt+",
    note: "Bespoke luxury weddings",
    features: [
      "Everything in Platinum",
      "Unlimited family makeup",
      "Designer bridal gown",
      "Full venue styling & lighting",
      "Same-day edit video",
      "Complete vendor management",
      "Dedicated personal assistant",
      "After-wedding photo session",
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  photo: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Amelia & Raka",
    role: "Wedding — Sidoarjo",
    photo:
      "https://images.pexels.com/photos/38785088/pexels-photo-38785088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200&fit=crop",
    rating: 5,
    quote:
      "Kak Rin made me feel like the most beautiful version of myself. The makeup lasted from akad to the very last photo — flawless. The whole team was calm, organized and so kind.",
  },
  {
    name: "Salsabila",
    role: "Traditional Wedding — Surabaya",
    photo:
      "https://images.pexels.com/photos/34937733/pexels-photo-34937733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200&fit=crop",
    rating: 5,
    quote:
      "The paes was absolutely stunning — my grandmother cried when she saw me. Rin understands traditional beauty deeply while keeping everything elegant and modern.",
  },
  {
    name: "Nadya & Bimo",
    role: "Platinum Package — Malang",
    photo:
      "https://images.pexels.com/photos/28998609/pexels-photo-28998609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200&fit=crop",
    rating: 5,
    quote:
      "We didn't worry about a single thing on our wedding day. Every vendor, every minute of the rundown — handled perfectly. Worth every rupiah, truly a luxury experience.",
  },
  {
    name: "Karina",
    role: "Engagement — Sidoarjo",
    photo:
      "https://images.pexels.com/photos/5193860/pexels-photo-5193860.png?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200&fit=crop",
    rating: 5,
    quote:
      "Soft, glowing and so photogenic! Everyone kept asking who did my makeup. Booking again for my wedding next year — wouldn't trust anyone else.",
  },
];

export const instagramPosts = [
  "https://images.pexels.com/photos/31266975/pexels-photo-31266975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500&fit=crop",
  "https://images.pexels.com/photos/29194864/pexels-photo-29194864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500&fit=crop",
  "https://images.pexels.com/photos/29040917/pexels-photo-29040917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500&fit=crop",
  "https://images.pexels.com/photos/35698089/pexels-photo-35698089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500&fit=crop",
  "https://images.pexels.com/photos/37710473/pexels-photo-37710473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500&fit=crop",
  "https://images.pexels.com/photos/29624009/pexels-photo-29624009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500&fit=crop",
];

export const faqs = [
  {
    q: "How far in advance should we book?",
    a: "For wedding dates in peak season (May–September and December), we recommend booking 6–12 months in advance. For makeup-only services, 1–3 months is usually sufficient. A small deposit secures your date.",
  },
  {
    q: "Do you provide a makeup trial before the wedding?",
    a: "Yes. Every wedding package includes a complimentary makeup trial 2–4 weeks before your big day, so we can perfect your look, test skin compatibility and align on every detail.",
  },
  {
    q: "What makeup brands do you use?",
    a: "We use premium, internationally recognized brands with long-wear, HD-friendly and halal-certified options available. All tools are sanitized to professional hygiene standards.",
  },
  {
    q: "Can you travel outside Sidoarjo?",
    a: "Absolutely. We regularly serve Surabaya, Malang, Gresik and destinations across East Java and beyond. Travel and accommodation fees apply for locations outside Greater Sidoarjo.",
  },
  {
    q: "Can packages be customized?",
    a: "Every package is a starting point. We happily tailor decoration themes, add family makeup, documentation, entertainment or adjust services to fit your vision and budget.",
  },
  {
    q: "How does payment work?",
    a: "A 30% deposit confirms your booking, 50% is due one month before the event, and the remainder on the wedding day. We accept bank transfer and provide official invoices.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
