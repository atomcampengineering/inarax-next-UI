import Reveal from "@/components/ui/Reveal";

const checklist = [
  "Dynamic Skill Mapping",
  "Expert Feedback Loops",
  "Real-world Case Studies",
  "Certified Outcomes",
];

/**
 * Renders the homepage hero: value proposition, proof badges, a feature
 * checklist, primary CTA, and a decorative "AI calibrating" preview card.
 *
 * @returns The top-of-page marketing hero.
 */
export default function Hero() {
  return (
    <section className="relative bg-white min-h-[85vh] flex items-center overflow-hidden grid-blueprint">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center py-size-xl relative z-10">
        <Reveal className="md:col-span-7 flex flex-col items-start gap-size-md">
          <div className="flex items-center gap-size-xs bg-surface-container-low px-size-sm py-1 rounded-full border border-outline-variant/30">
            <span className="text-label-md font-label-md text-primary tracking-widest">
              A PRODUCT BY ATOMCAMP ARABIA
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
              className="bg-primary-container text-on-primary px-size-xl py-size-md rounded-lg font-headline-md text-headline-md primary-cta-glow transition-all hover:-translate-y-0.5 active:scale-95"
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
          className="md:col-span-5 relative group mt-size-md md:mt-0"
        >
          {/* Decorative preview card — no real data, just conveys "AI is working" while a user waits. */}
          <div className="relative z-20 p-size-md bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105">
            <div className="bg-surface-container-highest/10 rounded-lg p-base mb-size-sm flex items-center justify-between">
              <div className="flex items-center gap-size-sm">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm">
                    auto_awesome
                  </span>
                </div>
                <div className="h-2 w-24 bg-outline-variant/30 rounded-full" />
              </div>
              <div className="h-2 w-12 bg-primary/40 rounded-full" />
            </div>
            <div className="aspect-video bg-surface-container-highest/5 rounded-lg border border-outline-variant/20 flex flex-col items-center justify-center gap-size-md">
              <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              <p className="text-outline font-label-md text-label-md">
                InaraX AI is calibrating your curriculum...
              </p>
            </div>
            <div className="mt-size-md space-y-size-sm">
              <div className="h-3 w-full bg-outline-variant/10 rounded-full" />
              <div className="h-3 w-3/4 bg-outline-variant/10 rounded-full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
