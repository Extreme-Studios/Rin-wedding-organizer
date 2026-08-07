import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { business, navLinks } from "../data/content";
import { cn } from "../utils/cn";

const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  business.whatsappMessage
)}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div
              className={cn(
                "h-11 w-11 rounded-full flex items-center justify-center font-serif text-xl transition-all duration-500 border",
                scrolled
                  ? "bg-gradient-to-br from-gold to-nude text-white border-transparent"
                  : "bg-white/15 backdrop-blur-sm text-white border-white/40"
              )}
            >
              R
            </div>
            <div className="leading-tight">
              <span
                className={cn(
                  "block font-serif text-xl md:text-[1.35rem] transition-colors duration-500",
                  scrolled ? "text-espresso" : "text-white"
                )}
              >
                Rin <span className="italic font-light">Wedding</span>
              </span>
              <span
                className={cn(
                  "block text-[0.6rem] tracking-[0.35em] uppercase transition-colors duration-500",
                  scrolled ? "text-gold-dark" : "text-white/80"
                )}
              >
                Organizer &amp; MUA
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[0.8rem] tracking-[0.14em] uppercase font-medium transition-colors duration-300 relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                  scrolled
                    ? "text-cocoa hover:text-gold-dark"
                    : "text-white/90 hover:text-white"
                )}
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.78rem] tracking-[0.12em] uppercase font-medium transition-all duration-500 hover:-translate-y-0.5",
                scrolled
                  ? "bg-gradient-to-r from-gold to-nude text-white shadow-soft"
                  : "bg-white/15 border border-white/40 text-white backdrop-blur-sm hover:bg-white hover:text-cocoa"
              )}
            >
              <MessageCircle size={15} strokeWidth={2} />
              WhatsApp
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden h-11 w-11 rounded-full flex items-center justify-center transition-colors duration-500 border",
              scrolled
                ? "text-cocoa border-champagne bg-cream"
                : "text-white border-white/40 bg-white/10 backdrop-blur-sm"
            )}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
              className="h-full flex flex-col items-center justify-center gap-5 px-8"
            >
              {navLinks.map((l) => (
                <motion.a
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl text-espresso hover:text-gold-dark transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-nude text-white px-8 py-3.5 text-sm tracking-[0.14em] uppercase shadow-lift"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
