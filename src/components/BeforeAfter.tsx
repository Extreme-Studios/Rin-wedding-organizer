import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";
import { beforeAfter } from "../data/content";
import { SectionHeading, Reveal } from "./ui";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const simulated = beforeAfter.before === beforeAfter.after;

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };
  const onPointerUp = () => (dragging.current = false);

  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-white via-blush/60 to-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Before & After"
          title={beforeAfter.title}
          subtitle={beforeAfter.subtitle}
        />

        <Reveal className="mx-auto max-w-3xl">
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className="relative aspect-[4/5] sm:aspect-[5/5] md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lift select-none touch-none cursor-ew-resize border-[8px] border-white"
          >
            {/* After (full) */}
            <img
              src={beforeAfter.after}
              alt="After — flawless bridal makeup"
              loading="lazy"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            {/* Before (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeAfter.before}
                alt="Before makeup"
                loading="lazy"
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover object-top"
                style={
                  simulated
                    ? { filter: "saturate(0.35) contrast(0.92) brightness(1.04) sepia(0.12)" }
                    : undefined
                }
              />
            </div>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.25)]"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white shadow-lift flex items-center justify-center border border-champagne">
                <MoveHorizontal size={22} className="text-gold-dark" />
              </div>
            </div>

            {/* Labels */}
            <span className="absolute top-5 left-5 rounded-full bg-white/85 backdrop-blur-sm px-4 py-1.5 text-[0.7rem] tracking-[0.25em] uppercase text-cocoa">
              {beforeAfter.beforeLabel}
            </span>
            <span className="absolute top-5 right-5 rounded-full bg-gradient-to-r from-gold to-nude px-4 py-1.5 text-[0.7rem] tracking-[0.25em] uppercase text-white shadow-soft">
              {beforeAfter.afterLabel}
            </span>
          </div>
          <p className="mt-6 text-center text-sm text-taupe font-light tracking-wide">
            ← Drag the handle to compare →
          </p>
        </Reveal>
      </div>
    </section>
  );
}
