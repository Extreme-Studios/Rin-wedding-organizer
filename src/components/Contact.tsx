import { Phone, MapPin, Clock } from "lucide-react";
import { business } from "../data/content";
import { SectionHeading, Reveal, GoldButton } from "./ui";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  business.whatsappMessage
)}`;

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-cream/60 relative overflow-hidden">
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-champagne/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Hubungi Kami"
          title="Rencanakan Pernikahan Impianmu"
          subtitle="Ceritakan tanggal, konsep, dan gaya yang Anda inginkan. Selebihnya biar kami yang bantu siapkan."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Info card */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-[2rem] bg-white shadow-soft p-8 md:p-10 flex flex-col">
              <h3 className="font-serif text-3xl text-espresso font-medium">
                {business.name}
              </h3>
              <p className="mt-2 text-sm text-taupe font-light">{business.city}</p>

              <ul className="mt-8 space-y-6 flex-1">
                <li className="flex gap-4">
                  <span className="h-11 w-11 shrink-0 rounded-2xl bg-cream border border-champagne/60 flex items-center justify-center">
                    <MapPin size={18} className="text-gold-dark" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.18em] uppercase text-taupe">Lokasi</p>
                    <p className="mt-1 text-cocoa font-light">{business.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="h-11 w-11 shrink-0 rounded-2xl bg-cream border border-champagne/60 flex items-center justify-center">
                    <Phone size={18} className="text-gold-dark" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.18em] uppercase text-taupe">Telepon</p>
                    <a href={`tel:${business.phone.replace(/[^+\d]/g, "")}`} className="mt-1 block text-cocoa font-light hover:text-gold-dark transition-colors">
                      {business.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="h-11 w-11 shrink-0 rounded-2xl bg-cream border border-champagne/60 flex items-center justify-center">
                    <Clock size={18} className="text-gold-dark" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.18em] uppercase text-taupe">
                      Jam Operasional
                    </p>
                    <ul className="mt-1 space-y-1">
                      {business.hours.map((h) => (
                        <li key={h.days} className="text-cocoa font-light text-sm">
                          <span className="text-taupe">{h.days}:</span> {h.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <GoldButton href={waLink} className="flex-1 !px-5">
                  <WhatsAppIcon size={16} /> WhatsApp
                </GoldButton>
                <GoldButton href={business.instagramUrl} variant="outline" className="flex-1 !px-5">
                  <InstagramIcon size={16} /> Instagram
                </GoldButton>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="h-full min-h-[24rem] rounded-[2rem] overflow-hidden shadow-soft border-[6px] border-white">
              <iframe
                title={`Peta lokasi ${business.name}`}
                src={business.mapsEmbed}
                className="h-full w-full min-h-[24rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
