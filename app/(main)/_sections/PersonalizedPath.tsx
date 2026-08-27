import Reveal from "@/components/ui/Reveal";
import PathSteps from "./PathSteps";
import TwoBrainsArchitecture from "./TwoBrainsArchitecture";
import B2BBand from "./B2BBand";

/**
 * Walks visitors through the three-step personalization flow, then explains
 * the two-model system behind it and cross-sells the B2B offering — all on
 * one shared section background.
 *
 * @returns The personalized-path section.
 */
export default function PersonalizedPath() {
  return (
    // surface-container-low is the closest theme token to the mockup's raw
    // #F7F7F8 background — see changes/home-page-build-log.md for the note
    // on this substitution.
    <section className="bg-surface-container-low py-size-xl px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="mb-size-xl max-w-3xl">
          <div className="flex items-center gap-base mb-size-sm">
            <span className="w-12 h-[1px] bg-primary" />
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
              Process
            </span>
          </div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-size-md">
            Your personalized path in 3 steps.
          </h2>
        </Reveal>
        <PathSteps />
        <Reveal className="flex flex-col items-start justify-center py-size-lg">
          <button
            type="button"
            className="bg-primary-container text-on-primary px-size-md py-size-sm sm:px-size-xl sm:py-size-md rounded-lg font-headline-md text-headline-sm sm:text-headline-md primary-cta-glow transition-all inline-flex items-center gap-size-sm active:scale-95"
          >
            Start your placement
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </Reveal>
        <TwoBrainsArchitecture />
        <B2BBand />
      </div>
    </section>
  );
}
