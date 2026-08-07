import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { business } from "../data/content";
import { GoldButton } from "./ui";

const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  business.whatsappMessage
)}`;

const HERO_IMAGE =
  "https://images.pexels.com/photos/29080967/pexels-photo-29080967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=2000";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-svh min-h-[640px] overflow-hidden">
      {/* Parallax image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Elegant bride with beautiful makeup by Rin Wedding Organizer"
          className="h-full w-full object-cover object-[center_30%]"
          fetchPriority="high"
        />
      </motion.div>
      {/* Warm cinematic overlays — no black, warm brown tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3f352c]/55 via-[#5c4d3f]/30 to-[#3f352c]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3f352c]/40 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-7"
        >
          <span className="h-px w-10 bg-champagne/80" />
          <span className="flex items-center gap-2 text-champagne text-xs md:text-sm tracking-[0.4em] uppercase font-light">
            <Sparkles size={14} /> {business.tagline}
          </span>
          <span className="h-px w-10 bg-champagne/80" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-white text-5xl md:text-7xl lg:text-[5.4rem] leading-[1.06] max-w-4xl text-balance font-medium"
        >
          Where <span className="italic font-light text-champagne">Beauty</span> Meets
          <br className="hidden md:block" /> Your Perfect Wedding
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-cream/90 text-base md:text-lg font-light leading-relaxed"
        >
          {business.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <GoldButton href={waLink}>Book Consultation</GoldButton>
          <GoldButton href="#gallery" variant="ghost-light">
            View Portfolio
          </GoldButton>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
}
