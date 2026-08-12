/* Konten situs Rin Wedding Organizer. */

export const business = {
  name: "Rin Wedding Organizer",
  shortName: "Rin",
  tagline: "Penata Acara & Penata Rias",
  city: "Sidoarjo, Jawa Timur",
  headline: "Cantik di Hari Spesialmu",
  subheadline:
    "Wedding Organizer dan Makeup Artist profesional di Sidoarjo untuk mewujudkan pernikahan berkesan, riasan elegan, dan layanan lengkap.",
  phone: "+62 859-1067-26664",
  whatsapp: "62859106726664",
  whatsappMessage: "Halo Kak Rin, saya ingin konsultasi untuk acara pernikahan saya.",
  email: "",
  instagram: "_rinweddingsidoarjo",
  instagramUrl: "https://www.instagram.com/_rinweddingsidoarjo/",
  address: "Sidoarjo, Jawa Timur",
  mapsEmbed: "https://www.google.com/maps?q=Sidoarjo,+Jawa+Timur&output=embed",
  hours: [
    { days: "Senin - Jumat", time: "09.00 - 18.00 WIB" },
    { days: "Sabtu", time: "08.00 - 20.00 WIB" },
    { days: "Minggu", time: "Sesuai janji" },
  ],
  stats: [
    { value: "350+", label: "Pernikahan Ditangani" },
    { value: "8+", label: "Tahun Pengalaman" },
    { value: "500+", label: "Pengantin Dirias" },
    { value: "5.0", label: "Rating Klien" },
  ],
};

// Koleksi foto wedding milik Rin: pasangan, momen akad, dan detail pernikahan.
const weddingImages = [
  "/portfolio/wedding-hero.jpg",
  "/portfolio/wedding-traditional-couple.jpg",
  "/portfolio/wedding-rings.jpg",
  "/portfolio/wedding-bride-groom.jpg",
  "/portfolio/wedding-couple-white.jpg",
  "/portfolio/wedding-bride.jpg",
  "/portfolio/wedding-forehead-kiss.jpg",
  "/portfolio/wedding-classic-couple.jpg",
];

export type Service = { title: string; icon: string; image: string; description: string };

export const services: Service[] = [
  { title: "Makeup Pengantin", icon: "sparkles", image: weddingImages[4], description: "Riasan pengantin tahan lama dan elegan, tetap memukau dari akad hingga acara selesai." },
  { title: "Makeup Lamaran", icon: "heart", image: weddingImages[7], description: "Tampilan lembut dan romantis untuk hari lamaran yang cantik di setiap foto." },
  { title: "Makeup Tradisional", icon: "crown", image: weddingImages[1], description: "Paes dan tata rias tradisional Jawa dengan sentuhan modern yang tetap berkelas." },
  { title: "Makeup Wisuda", icon: "graduation", image: weddingImages[5], description: "Riasan segar, kamera-ready, dan nyaman dipakai sepanjang momen spesial." },
  { title: "Makeup Foto", icon: "camera", image: weddingImages[0], description: "Riasan untuk prewedding, pemotretan keluarga, dan kebutuhan profesional." },
  { title: "Wedding Organizer", icon: "calendar", image: weddingImages[6], description: "Koordinasi menyeluruh untuk vendor, rundown, dan tamu agar acara berjalan tenang." },
  { title: "Dekorasi", icon: "flower", image: weddingImages[2], description: "Detail venue dan suasana pernikahan yang disesuaikan dengan tema impian Anda." },
  { title: "Perencanaan Pernikahan", icon: "clipboard", image: weddingImages[0], description: "Dari konsep, timeline, hingga anggaran, setiap detail direncanakan dengan rapi." },
  { title: "Dokumentasi", icon: "video", image: weddingImages[6], description: "Foto dan video sinematik untuk menyimpan setiap emosi di hari bahagia Anda." },
  { title: "Busana Pengantin", icon: "shirt", image: weddingImages[3], description: "Pilihan gaun, kebaya, dan beskap yang disesuaikan untuk pengantin." },
  { title: "Hair Styling & Hijab Do", icon: "scissors", image: weddingImages[5], description: "Sanggul, soft waves, dan hijab do modern yang menyempurnakan penampilan." },
  { title: "Henna Art", icon: "pen", image: weddingImages[2], description: "Henna klasik, floral, dan kontemporer untuk lamaran atau pernikahan." },
  { title: "Makeup Keluarga", icon: "users", image: weddingImages[7], description: "Tampilan serasi untuk ibu, saudara, dan keluarga inti pengantin." },
  { title: "MC & Hiburan", icon: "mic", image: weddingImages[0], description: "MC dan hiburan untuk menjaga suasana perayaan tetap hidup dan hangat." },
];

export type GalleryItem = { src: string; category: string; alt: string; ratio: "portrait" | "landscape" };
export const galleryCategories = ["Semua", "Momen Pasangan", "Rias Pengantin", "Pernikahan Tradisional", "Detail Pernikahan"];
export const gallery: GalleryItem[] = [
  { src: weddingImages[0], category: "Momen Pasangan", alt: "Pasangan pengantin berjalan bersama", ratio: "landscape" },
  { src: weddingImages[1], category: "Pernikahan Tradisional", alt: "Pasangan pengantin dengan busana tradisional Jawa", ratio: "portrait" },
  { src: weddingImages[2], category: "Detail Pernikahan", alt: "Buku nikah dan cincin pernikahan", ratio: "landscape" },
  { src: weddingImages[3], category: "Rias Pengantin", alt: "Pengantin perempuan dalam busana putih", ratio: "landscape" },
  { src: weddingImages[4], category: "Momen Pasangan", alt: "Pasangan pengantin dalam busana putih", ratio: "portrait" },
  { src: weddingImages[5], category: "Rias Pengantin", alt: "Detail rias dan busana pengantin perempuan", ratio: "portrait" },
  { src: weddingImages[6], category: "Momen Pasangan", alt: "Momen mesra pasangan pengantin", ratio: "portrait" },
  { src: weddingImages[7], category: "Momen Pasangan", alt: "Potret klasik pasangan pengantin", ratio: "portrait" },
];

export const beforeAfter = {
  title: "Dua Momen, Satu Cerita",
  subtitle: "Geser untuk menikmati dua momen pernikahan yang diabadikan bersama Rin.",
  before: weddingImages[2], after: weddingImages[6], beforeLabel: "Detail Akad", afterLabel: "Momen Bersama",
};

export type WeddingPackage = { name: string; price: string; note: string; featured?: boolean; features: string[] };
export const packages: WeddingPackage[] = [
  { name: "Silver", price: "Mulai Rp8,5 jt", note: "Pesta intim", features: ["Makeup dan hair styling pengantin", "1 sesi styling pengantin pria", "Retouch makeup 1x", "Sewa busana pengantin 1 set", "Dekorasi pelaminan mini", "Koordinator hari H"] },
  { name: "Gold", price: "Mulai Rp15 jt", note: "Favorit pasangan", features: ["Semua fasilitas Silver", "Makeup keluarga 2 orang", "Dekorasi dan bunga premium", "Dokumentasi foto 1 hari", "MC resepsi", "Henna pengantin", "Bantuan perencanaan pernikahan"] },
  { name: "Platinum", price: "Mulai Rp25 jt", note: "Pengalaman istimewa", featured: true, features: ["Semua fasilitas Gold", "Makeup keluarga 4 orang", "Foto dan video sinematik", "Dekorasi venue premium", "Tim wedding organizer lengkap", "Makeup prewedding", "Hiburan dan akustik", "Konsep pernikahan khusus"] },
  { name: "Premium", price: "Mulai Rp40 jt", note: "Pernikahan mewah sesuai keinginan", features: ["Semua fasilitas Platinum", "Makeup keluarga tanpa batas", "Gaun pengantin desainer", "Styling venue dan pencahayaan", "Video same-day edit", "Manajemen vendor lengkap", "Asisten pribadi", "Sesi foto setelah pernikahan"] },
];

export type Testimonial = { name: string; role: string; photo: string; rating: number; quote: string };
export const testimonials: Testimonial[] = [
  { name: "Amelia & Raka", role: "Pernikahan - Sidoarjo", photo: weddingImages[4], rating: 5, quote: "Makeupnya tahan dari akad sampai foto terakhir. Timnya juga sangat tenang, rapi, dan perhatian." },
  { name: "Salsabila", role: "Pernikahan Tradisional - Surabaya", photo: weddingImages[1], rating: 5, quote: "Paesnya cantik sekali. Rin paham riasan tradisional sekaligus membuat hasilnya tetap elegan dan modern." },
  { name: "Nadya & Bimo", role: "Paket Platinum - Malang", photo: weddingImages[6], rating: 5, quote: "Di hari pernikahan kami tidak perlu khawatir apa pun. Semua vendor dan rundown tertangani dengan baik." },
  { name: "Karina", role: "Lamaran - Sidoarjo", photo: weddingImages[7], rating: 5, quote: "Hasilnya soft, glowing, dan sangat fotogenik. Banyak yang bertanya siapa MUA-nya." },
];

export const instagramPosts = weddingImages;
export const faqs = [
  { q: "Kapan sebaiknya melakukan booking?", a: "Untuk tanggal pernikahan di musim ramai, sebaiknya booking 6-12 bulan sebelumnya. Untuk makeup saja, 1-3 bulan sebelumnya biasanya cukup. DP akan mengamankan tanggal Anda." },
  { q: "Apakah tersedia makeup trial sebelum acara?", a: "Ya. Makeup trial dapat dijadwalkan sebelum hari H agar look, kenyamanan kulit, dan detail riasan sesuai keinginan." },
  { q: "Produk makeup apa yang digunakan?", a: "Kami menggunakan produk berkualitas dengan pilihan yang tahan lama, aman, dan dapat disesuaikan dengan kondisi kulit." },
  { q: "Apakah bisa ke luar Sidoarjo?", a: "Bisa. Kami melayani Sidoarjo, Surabaya, Malang, Gresik, dan area Jawa Timur lainnya. Biaya perjalanan dapat berlaku sesuai lokasi." },
  { q: "Apakah paket bisa disesuaikan?", a: "Bisa. Paket adalah titik awal. Tema dekorasi, makeup keluarga, dokumentasi, dan layanan lainnya dapat disesuaikan dengan kebutuhan serta anggaran." },
  { q: "Bagaimana sistem pembayarannya?", a: "DP diperlukan untuk mengunci tanggal acara. Detail termin pembayaran akan diinformasikan saat konsultasi." },
];
export const navLinks = [
  { label: "Beranda", href: "#home" }, { label: "Tentang", href: "#about" }, { label: "Layanan", href: "#services" }, { label: "Galeri", href: "#gallery" }, { label: "Paket", href: "#packages" }, { label: "Testimoni", href: "#testimonials" }, { label: "FAQ", href: "#faq" }, { label: "Kontak", href: "#contact" },
];
