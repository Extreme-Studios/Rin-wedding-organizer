import { motion } from "framer-motion";
import { Check, Gem, Crown, Star, Diamond, type LucideIcon } from "lucide-react";
import { packages, business } from "../data/content";
import { SectionHeading, fadeUp, stagger, GoldButton } from "./ui";
import { cn } from "../utils/cn";

const tierIcons: LucideIcon[] = [Star, Gem, Crown, Diamond];

const waFor = (pkg: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Halo Kak Rin, saya tertarik dengan paket pernikahan ${pkg}.`
  )}`;

export default function Packages() {
  return (
    <section id="packages" className="py-24 md:py-36 bg-cream/60 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: "url('/portfolio/wedding-rings.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-72 w-[60rem] rounded-full bg-champagne/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Paket Pernikahan"
          title="Pilih Perayaan yang Paling Tepat"
          subtitle="Paket disusun untuk berbagai skala perayaan dan dapat disesuaikan dengan impian serta anggaran Anda."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch"
        >
          {packages.map((pkg, i) => {
            const Icon = tierIcons[i % tierIcons.length];
            return (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                className={cn(
                  "relative flex flex-col rounded-[1.8rem] p-8 transition-all duration-500 hover:-translate-y-2",
                  pkg.featured
                    ? "bg-gradient-to-b from-[#4a3f33] to-[#5c4d3f] text-white shadow-lift xl:scale-[1.04]"
                    : "bg-white shadow-soft hover:shadow-lift"
                )}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-nude px-5 py-1.5 text-[0.65rem] tracking-[0.25em] uppercase text-white shadow-soft whitespace-nowrap">
                    Paling Eksklusif
                  </span>
                )}
                <div
                  className={cn(
                    "h-14 w-14 rounded-2xl flex items-center justify-center mb-6",
                    pkg.featured
                      ? "bg-white/10 border border-champagne/40"
                      : "bg-cream border border-champagne/60"
                  )}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className={pkg.featured ? "text-champagne" : "text-gold-dark"}
                  />
                </div>
                <h3
                  className={cn(
                    "font-serif text-3xl font-medium",
                    pkg.featured ? "text-white" : "text-espresso"
                  )}
                >
                  {pkg.name}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-xs tracking-[0.18em] uppercase",
                    pkg.featured ? "text-champagne/90" : "text-taupe"
                  )}
                >
                  {pkg.note}
                </p>
                <p
                  className={cn(
                    "mt-5 font-serif text-4xl",
                    pkg.featured ? "text-champagne" : "text-gold-dark"
                  )}
                >
                  {pkg.price}
                  <span
                    className={cn(
                      "ml-1 font-sans text-xs tracking-wide",
                      pkg.featured ? "text-cream/70" : "text-taupe"
                    )}
                  >
                    / mulai
                  </span>
                </p>

                <ul className="mt-7 space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-light">
                      <span
                        className={cn(
                          "mt-0.5 h-4.5 w-4.5 shrink-0 rounded-full flex items-center justify-center",
                          pkg.featured ? "bg-champagne/25" : "bg-champagne/50"
                        )}
                      >
                        <Check
                          size={11}
                          strokeWidth={3}
                          className={pkg.featured ? "text-champagne" : "text-gold-dark"}
                        />
                      </span>
                      <span className={pkg.featured ? "text-cream/95" : "text-cocoa"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <GoldButton
                  href={waFor(pkg.name)}
                  variant={pkg.featured ? "solid" : "outline"}
                  className="mt-8 w-full !px-4 text-center"
                >
                  Pesan {pkg.name}
                </GoldButton>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="mt-10 text-center text-sm text-taupe font-light">
          * Harga adalah estimasi awal. Setiap paket dapat disesuaikan. Hubungi kami
            untuk penawaran sesuai kebutuhan.
        </p>
      </div>
    </section>
  );
}
