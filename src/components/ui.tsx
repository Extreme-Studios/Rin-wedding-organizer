import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "mb-14 md:mb-20 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 mb-5",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-gold/60" />
        <span className="uppercase tracking-[0.3em] text-xs font-medium text-gold-dark">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-gold/60" />
      </div>
      <h2
        className={cn(
          "font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] font-medium text-balance",
          light ? "text-ivory" : "text-espresso"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-6 text-base md:text-lg leading-relaxed font-light",
            light ? "text-cream/80" : "text-taupe"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function GoldButton({
  href,
  children,
  variant = "solid",
  className,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost-light";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-medium tracking-[0.12em] uppercase transition-all duration-500 will-change-transform";
  const styles = {
    solid:
      "bg-gradient-to-r from-gold to-nude text-white shadow-lift hover:shadow-xl hover:-translate-y-0.5 hover:brightness-105",
    outline:
      "border border-gold/60 text-cocoa hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-0.5",
    "ghost-light":
      "border border-white/50 text-white backdrop-blur-sm bg-white/10 hover:bg-white hover:text-cocoa hover:-translate-y-0.5",
  };
  const cls = cn(base, styles[variant], className);
  if (href)
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
