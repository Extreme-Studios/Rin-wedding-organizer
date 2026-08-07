import { motion } from "framer-motion";
import {
  Sparkles, Heart, Crown, GraduationCap, Camera, CalendarHeart,
  Flower2, ClipboardList, Video, Shirt, Scissors, PenTool, Users,
  Mic2, type LucideIcon,
} from "lucide-react";
import { services } from "../data/content";
import { SectionHeading, fadeUp, stagger } from "./ui";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  heart: Heart,
  crown: Crown,
  graduation: GraduationCap,
  camera: Camera,
  calendar: CalendarHeart,
  flower: Flower2,
  clipboard: ClipboardList,
  video: Video,
  shirt: Shirt,
  scissors: Scissors,
  pen: PenTool,
  users: Users,
  mic: Mic2,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-cream/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="A Complete Suite of Wedding Artistry"
          subtitle="From flawless bridal makeup to full wedding orchestration — every service is delivered with premium products, refined taste and genuine care."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Sparkles;
            return (
              <motion.article
                key={s.title}
                variants={fadeUp}
                className="group relative rounded-[1.6rem] bg-white shadow-soft overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                  <div className="absolute -bottom-6 left-6 h-13 w-13 rounded-2xl bg-white shadow-soft flex items-center justify-center border border-champagne/60 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-nude">
                    <Icon
                      size={22}
                      strokeWidth={1.6}
                      className="text-gold-dark transition-colors duration-500 group-hover:text-white"
                    />
                  </div>
                </div>
                <div className="px-6 pt-10 pb-7">
                  <h3 className="font-serif text-[1.45rem] text-espresso font-medium">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-taupe font-light">
                    {s.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
