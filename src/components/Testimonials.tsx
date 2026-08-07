import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";
import { SectionHeading } from "./ui";
import { cn } from "../utils/cn";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (d: number) => {
      setDir(d);
      setIndex((i) => (i + d + testimonials.length) % testimonials.length);
    },
    []
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-36 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-blush blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cream blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Cerita dari Klien Kami"
          subtitle="Kepercayaan setiap pasangan adalah hal yang paling berarti bagi kami."
        />

        <div className="relative">
          <div className="relative min-h-[26rem] sm:min-h-[22rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: dir * -60, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[2rem] bg-white/80 backdrop-blur-md border border-champagne/50 shadow-lift px-8 py-10 md:px-14 md:py-12 text-center"
              >
                <Quote
                  size={40}
                  strokeWidth={1}
                  className="mx-auto text-gold/70 mb-5 rotate-180"
                />
                <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-cocoa italic font-light text-balance">
                  “{t.quote}”
                </blockquote>
                <div className="mt-7 flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <figcaption className="mt-6 flex items-center justify-center gap-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover border-2 border-champagne shadow-soft"
                  />
                  <div className="text-left">
                    <p className="font-medium text-espresso">{t.name}</p>
                    <p className="text-xs tracking-[0.14em] uppercase text-taupe mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="h-11 w-11 rounded-full border border-champagne bg-white text-gold-dark flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-white hover:border-gold shadow-soft"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-400",
                    i === index ? "w-8 bg-gold" : "w-2 bg-champagne hover:bg-gold/50"
                  )}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="h-11 w-11 rounded-full border border-champagne bg-white text-gold-dark flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-white hover:border-gold shadow-soft"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
