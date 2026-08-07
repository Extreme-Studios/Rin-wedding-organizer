import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { gallery, galleryCategories } from "../data/content";
import { SectionHeading } from "./ui";
import { cn } from "../utils/cn";

export default function Gallery() {
  const [active, setActive] = useState("Semua");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () =>
      active === "Semua" ? gallery : gallery.filter((g) => g.category === active),
    [active]
  );

  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? null : (i - 1 + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, next, prev]);

  return (
    <section id="gallery" className="py-24 md:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Portofolio"
          title="Momen Indah Bersama Rin"
          subtitle="Pilihan karya terbaru dari Rin Wedding - riasan pengantin, pesona tradisional, dan momen spesial yang ditangani sepenuh hati."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-5 py-2.5 text-[0.8rem] tracking-[0.08em] uppercase transition-all duration-400",
                active === cat
                  ? "bg-gradient-to-r from-gold to-nude text-white shadow-soft"
                  : "bg-cream text-taupe border border-champagne/50 hover:border-gold/60 hover:text-cocoa"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <motion.div layout className="masonry">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.figure
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative cursor-zoom-in overflow-hidden rounded-3xl shadow-soft"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-700 group-hover:scale-108",
                    item.ratio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute bottom-0 inset-x-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-champagne text-[0.68rem] tracking-[0.28em] uppercase">
                    {item.category}
                  </p>
                  <p className="text-white font-serif text-xl mt-1">{item.alt}</p>
                </figcaption>
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                  <ZoomIn size={16} className="text-white" />
                </div>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && items[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/90 backdrop-blur-lg p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Tutup"
              className="absolute top-5 right-5 h-12 w-12 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-cocoa transition-all duration-300 z-10"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>
            <button
              aria-label="Foto sebelumnya"
              className="absolute left-3 md:left-8 h-12 w-12 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-cocoa transition-all duration-300 z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              aria-label="Foto berikutnya"
              className="absolute right-3 md:right-8 h-12 w-12 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-cocoa transition-all duration-300 z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={items[lightbox].src}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[lightbox].src}
                alt={items[lightbox].alt}
                className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-champagne text-[0.68rem] tracking-[0.3em] uppercase">
                  {items[lightbox].category}
                </p>
                <p className="text-white font-serif text-xl mt-1">
                  {items[lightbox].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
