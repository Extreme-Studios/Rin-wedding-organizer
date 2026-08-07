import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/content";
import { SectionHeading, Reveal } from "./ui";
import { cn } from "../utils/cn";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-36 bg-white">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Hal yang Perlu Anda Ketahui"
          subtitle="Jawaban untuk pertanyaan yang paling sering diajukan. Jika masih ada yang ingin ditanyakan, hubungi kami lewat WhatsApp."
        />

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div
                  className={cn(
                    "rounded-3xl border transition-all duration-500 overflow-hidden",
                    isOpen
                      ? "border-gold/50 bg-cream/70 shadow-soft"
                      : "border-champagne/50 bg-white hover:border-gold/40"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg md:text-xl text-espresso font-medium">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "h-9 w-9 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 border",
                        isOpen
                          ? "bg-gradient-to-br from-gold to-nude text-white rotate-45 border-transparent"
                          : "bg-cream text-gold-dark border-champagne/60"
                      )}
                    >
                      <Plus size={16} strokeWidth={2.2} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-7 pb-7 text-taupe leading-relaxed font-light">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
