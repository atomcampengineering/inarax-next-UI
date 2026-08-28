import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const checklist = [
  "Dynamic Skill Mapping",
  "Expert Feedback Loops",
  "Real-world Case Studies",
  "Certified Outcomes",
];

/**
 * Renders the homepage hero: value proposition, proof badges, a feature
 * checklist, primary CTA, and a looping product preview video.
 *
 * @returns The top-of-page marketing hero.
 */
export default function Hero() {
  return (
    <section className="relative bg-white min-h-[85vh] flex items-center overflow-hidden grid-blueprint px-margin-mobile md:px-margin-desktop">
      {/* Switches at a custom 990px breakpoint (later than Tailwind's default md/768px), matching
          the b2b Hero — that's about where there's enough room per column for the heading and the
          video not to feel cramped, and it avoids both columns shrinking abruptly right at 768px. */}
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 min-[990px]:grid-cols-2 gap-gutter items-center py-size-xl relative z-10">
        {/* min-w-0 overrides the grid item's default min-width: auto (its content's intrinsic
            min-content size) — without it, this column refuses to shrink past its longest word's
            width and the heading overflows sideways into the video column near the breakpoint. */}
        <Reveal className="min-w-0 flex flex-col items-start gap-size-md">
          <div className="flex items-center bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant/30">
            <span className="flex items-center gap-2 text-[16px] font-bold text-primary tracking-widest">
              A Product by
              <Image
                src="/images/atomcamp-arabia-logo.png"
                alt="Atomcamp Arabia"
                width={150}
                height={50}
                className="h-6 w-auto object-contain"
                priority
              />
            </span>
          </div>
          <div className="inline-flex items-center gap-size-xs bg-primary-fixed text-on-primary-fixed-variant px-size-sm py-1 rounded-lg">
            <span className="material-symbols-outlined text-[18px]">
              auto_awesome
            </span>
            <span className="text-label-md font-label-md">
              Adaptive AI learning
            </span>
          </div>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-inarax-black leading-tight">
            Personalized by AI.
            <br />
            Verified by humans.
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
            inaraX figures out what you already know, then builds a learning
            path that fits your level, your field, and your goals and keeps
            it current as AI changes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-size-sm my-size-md">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-size-sm">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  check_circle
                </span>
                <span className="text-label-md font-label-md text-on-surface">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-size-md sm:gap-size-lg">
            <button
              type="button"
              className="bg-primary-container text-on-primary px-size-lg py-size-sm sm:px-size-xl sm:py-size-md rounded-lg font-headline-md text-headline-sm sm:text-headline-md primary-cta-glow transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Start Learning Now
            </button>
            <a
              className="flex items-center gap-size-xs text-on-surface-variant font-label-md hover:text-on-surface transition-colors"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                play_arrow
              </span>
              Watch Demo
            </a>
          </div>
        </Reveal>
        <Reveal
          delayMs={200}
          className="relative group mt-size-md min-[990px]:mt-0"
        >
          {/* Product preview video, replacing the earlier decorative "AI calibrating" mock UI. */}
          <div className="relative z-20 rounded-xl overflow-hidden border border-outline-variant/30 shadow-2xl transition-transform duration-700 group-hover:scale-105">
            <video
              className="w-full aspect-video object-cover"
              src="/videos/hero-section-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
