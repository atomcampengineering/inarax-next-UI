import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const pathStops = [
  {
    icon: "assignment_turned_in",
    label: "Placement",
    size: "w-16 h-16",
    bg: "bg-primary-fixed",
    iconColor: "text-primary",
    labelClassName: "font-label-md text-label-md",
    filled: false,
  },
  {
    icon: "auto_awesome",
    label: "Core skills",
    size: "w-20 h-20 shadow-lg",
    bg: "bg-primary",
    iconColor: "text-on-primary",
    labelClassName: "font-label-md text-label-md text-primary font-bold",
    filled: true,
  },
  {
    icon: "trending_up",
    label: "Career",
    size: "w-16 h-16",
    bg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    labelClassName: "font-label-md text-label-md",
    filled: false,
  },
];

/**
 * Renders the courses page hero: the public-catalog badge, headline, CTAs,
 * and a 3-stop "Placement -> Core skills -> Career" path preview.
 *
 * @returns The top-of-page hero.
 */
export default function Hero() {
  return (
    // White background, matching the home and b2b page heroes for a consistent look site-wide.
    <section className="relative py-size-xl overflow-hidden bg-white">
      {/* Decorative vertical rules, matching the mockup's technical/blueprint motif. Desktop only. */}
      <div className="hidden lg:block">
        <div className="absolute top-0 bottom-0 w-px bg-outline-variant/20 left-[10%]" />
        <div className="absolute top-0 bottom-0 w-px bg-outline-variant/20 left-[30%]" />
        <div className="absolute top-0 bottom-0 w-px bg-outline-variant/20 left-[70%]" />
        <div className="absolute top-0 bottom-0 w-px bg-outline-variant/20 left-[90%]" />
      </div>
      <Reveal className="max-w-container-max mx-auto px-margin-desktop text-center">
        <span className="inline-block bg-primary/10 text-primary px-base py-size-xs rounded-full font-label-md text-[12px] uppercase mb-size-md font-bold tracking-widest">
          PUBLIC CATALOG
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-size-md">
          AI programs that start where you are
        </h1>
        <p className="max-w-3xl mx-auto font-body-lg text-body-lg text-on-surface-variant mb-size-lg">
          Take a quick placement check and inaraX builds a path around your
          level, your field, and your goal — so you&apos;re never stuck
          relearning what you already know. Choose AI for Engineers or AI
          for Professionals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-size-md mb-size-xl">
          <Link
            href="/find-level"
            className="bg-primary text-on-primary font-label-md text-label-md px-size-lg py-size-md rounded active:scale-95 transition-all soft-glow-shadow"
          >
            Find your level
          </Link>
          <Link
            href="/pricing"
            className="border border-outline-variant text-on-surface font-label-md text-label-md px-size-lg py-size-md rounded hover:bg-surface-container-low active:scale-95 transition-all"
          >
            View pricing
          </Link>
        </div>
        <div className="max-w-4xl mx-auto border border-outline-variant/50 rounded-xl p-size-lg bg-surface-container-lowest shadow-sm relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-size-md relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 hidden md:block -translate-y-1/2" />
            {pathStops.map((stop) => (
              <div
                key={stop.label}
                className="relative z-10 bg-surface-container-lowest px-size-md text-center"
              >
                <div
                  className={`${stop.size} rounded-full ${stop.bg} flex items-center justify-center mb-size-sm mx-auto`}
                >
                  <span
                    className={`material-symbols-outlined ${stop.iconColor}`}
                    style={
                      stop.filled
                        ? { fontVariationSettings: '"FILL" 1' }
                        : undefined
                    }
                  >
                    {stop.icon}
                  </span>
                </div>
                <p className={stop.labelClassName}>{stop.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-size-lg text-on-surface-variant font-label-md flex items-center justify-center gap-size-xs">
            How your path adapts
            <span className="material-symbols-outlined text-primary text-[18px]">
              arrow_right_alt
            </span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
