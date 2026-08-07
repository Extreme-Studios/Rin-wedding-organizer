import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Gem, HeartHandshake, Eye, BadgeCheck } from "lucide-react";
import { business } from "../data/content";
import { Reveal } from "./ui";

const values = [
  { icon: BadgeCheck, label: "Professional" },
  { icon: Award, label: "Experienced" },
  { icon: HeartHandshake, label: "Personalized Service" },
  { icon: Gem, label: "Premium Products" },
  { icon: Eye, label: "Attention to Detail" },
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
                src="https://images.pexels.com/photos/37710473/pexels-photo-37710473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=800"
                alt="Rin applying elegant bridal makeup"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="absolute -bottom-10 -right-4 md:-right-10 w-48 md:w-60">
            <div className="rounded-3xl overflow-hidden border-[6px] border-white shadow-lift aspect-square">
              <img
                src="https://images.pexels.com/photos/29194871/pexels-photo-29194871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500&fit=crop"
                alt="Traditional Javanese bridal makeup"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.35} className="absolute -top-6 -left-3 md:-left-8">
            <div className="rounded-2xl bg-white/85 backdrop-blur-md shadow-soft px-6 py-4 border border-champagne/50">
              <p className="font-serif text-3xl text-gold-dark">8+</p>
              <p className="text-xs tracking-[0.18em] uppercase text-taupe">
                Years of Artistry
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
                About {business.shortName}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] font-medium text-espresso text-balance">
              Crafting Unforgettable Weddings,{" "}
              <span className="italic font-light text-gold-dark">One Detail at a Time</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-7 text-taupe leading-relaxed font-light text-base md:text-lg">
              <strong className="font-medium text-cocoa">{business.name}</strong>{" "}
              specializes in creating unforgettable weddings with elegant makeup and
              complete wedding services. From your first consultation to the final
              farewell of your reception, we design every moment with intention —
              blending timeless beauty, refined decoration and seamless coordination.
            </p>
            <p className="mt-5 text-taupe leading-relaxed font-light text-base md:text-lg">
              Based in {business.city}, our team has beautified hundreds of brides and
              orchestrated celebrations of every scale — intimate akad ceremonies,
              grand traditional weddings and modern luxury receptions.
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
