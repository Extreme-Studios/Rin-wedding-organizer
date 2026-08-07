import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { instagramPosts, business } from "../data/content";
import { SectionHeading, GoldButton, fadeUp, stagger } from "./ui";
import { InstagramIcon } from "./icons";

export default function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-cream/70">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Instagram"
          title={`@${business.instagram}`}
          subtitle="Ikuti perjalanan kami - inspirasi pengantin, karya nyata, dan proses di balik layar."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {instagramPosts.map((src, i) => (
            <motion.a
              key={i}
              variants={fadeUp}
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1} by ${business.name}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/70 to-nude/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="flex items-center gap-2 text-white text-sm font-medium translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <Heart size={16} className="fill-white" /> Lihat Postingan
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <GoldButton href={business.instagramUrl}>
            <InstagramIcon size={16} /> Ikuti di Instagram
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
