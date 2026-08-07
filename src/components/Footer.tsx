import { Heart } from "lucide-react";
import { business, navLinks } from "../data/content";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  business.whatsappMessage
)}`;

export default function Footer() {
  return (
    <footer className="bg-[#4a3f33] text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold to-nude flex items-center justify-center font-serif text-2xl text-white">
                R
              </div>
              <div className="leading-tight">
                <p className="font-serif text-2xl text-white">
                  Rin <span className="italic font-light">Wedding</span>
                </p>
                <p className="text-[0.6rem] tracking-[0.35em] uppercase text-champagne/80">
                  Organizer &amp; MUA
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm font-light leading-relaxed text-cream/70 max-w-xs">
              Riasan elegan dan layanan pernikahan lengkap untuk mewujudkan
              hari spesial Anda di {business.city}.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="md:justify-self-center">
            <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-5">
              Jelajahi
            </p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-light text-cream/80 hover:text-champagne transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="md:justify-self-end">
            <p className="text-xs tracking-[0.3em] uppercase text-champagne mb-5">
              Ikuti Kami
            </p>
            <div className="flex gap-3">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-12 w-12 rounded-full border border-champagne/40 flex items-center justify-center text-champagne hover:bg-gradient-to-br hover:from-gold hover:to-nude hover:text-white hover:border-transparent transition-all duration-400"
              >
                <InstagramIcon size={19} />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="h-12 w-12 rounded-full border border-champagne/40 flex items-center justify-center text-champagne hover:bg-gradient-to-br hover:from-gold hover:to-nude hover:text-white hover:border-transparent transition-all duration-400"
              >
                <WhatsAppIcon size={19} />
              </a>
            </div>
            <p className="mt-5 text-sm font-light text-cream/70">
              @{business.instagram}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/15 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60 font-light">
          <p>© 2026 {business.name}. Seluruh hak cipta dilindungi.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan <Heart size={12} className="fill-gold text-gold" /> di Sidoarjo
          </p>
        </div>
      </div>
    </footer>
  );
}
