import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Gem, HeartHandshake, Eye, BadgeCheck } from "lucide-react";
import { business } from "../data/content";
import { Reveal } from "./ui";

const values = [
  { icon: BadgeCheck, label: "Profesional" },
  { icon: Award, label: "Berpengalaman" },
  { icon: HeartHandshake, label: "Layanan Personal" },
  { icon: Gem, label: "Produk Premium" },
  { icon: Eye, label: "Detail Terjaga" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" className="relative py-24 md:py-36 bg-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blush blur-3xl opacity-70" />
      <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-cream blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Image composition */}
        <div ref={ref} className="relative">
          <Reveal>
            <div className="relative rounded-[2rem] overflow-hidden shadow-lift aspect-[4/5]">
              <motion.img
                style={{ y: imgY, scale: 1.12 }}
                src="/portfolio/rin-4.jpg"
                alt="Portofolio makeup Rin Wedding"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="absolute -bottom-10 -right-4 md:-right-10 w-48 md:w-60">
            <div className="rounded-3xl overflow-hidden border-[6px] border-white shadow-lift aspect-square">
              <img
                src="/portfolio/rin-3.jpg"
                alt="Portofolio riasan Rin Wedding"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.35} className="absolute -top-6 -left-3 md:-left-8">
            <div className="rounded-2xl bg-white/85 backdrop-blur-md shadow-soft px-6 py-4 border border-champagne/50">
              <p className="font-serif text-3xl text-gold-dark">8+</p>
              <p className="text-xs tracking-[0.18em] uppercase text-taupe">
                Tahun Berkarya
              </p>
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold/60" />
              <span className="uppercase tracking-[0.3em] text-xs font-medium text-gold-dark">
                Tentang {business.shortName}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] font-medium text-espresso text-balance">
              Merangkai Pernikahan Berkesan,{" "}
              <span className="italic font-light text-gold-dark">dengan Detail yang Bermakna</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-7 text-taupe leading-relaxed font-light text-base md:text-lg">
              <strong className="font-medium text-cocoa">{business.name}</strong>{" "}
              menghadirkan pernikahan berkesan melalui riasan elegan dan layanan
              pernikahan lengkap. Dari konsultasi pertama sampai akhir acara,
              kami menyiapkan setiap momen dengan penuh perhatian - memadukan
              keindahan, dekorasi, dan koordinasi yang rapi.
            </p>
            <p className="mt-5 text-taupe leading-relaxed font-light text-base md:text-lg">
              Berbasis di {business.city}, tim kami telah merias ratusan pengantin dan
              menangani perayaan dalam berbagai skala - mulai akad intim,
              pernikahan adat, hingga resepsi modern.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-9 flex flex-wrap gap-3">
              {values.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-cream border border-champagne/60 px-4.5 py-2.5 text-sm text-cocoa transition-all duration-300 hover:bg-champagne/40 hover:-translate-y-0.5"
                >
                  <Icon size={15} className="text-gold-dark" strokeWidth={1.8} />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-champagne/50 pt-9">
              {business.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl md:text-4xl text-gold-dark">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[0.72rem] tracking-[0.14em] uppercase text-taupe">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
