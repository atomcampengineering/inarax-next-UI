import Reveal from "@/components/ui/Reveal";

const trustStrip = [
  { icon: "cancel", label: "Cancel anytime" },
  { icon: "lock", label: "Secure checkout" },
  { icon: "build", label: "Built by Atomcamp Arabia" },
];

/**
 * Renders the single featured $7 "AI for Professionals" offer as the page's
 * main CTA, plus a trust strip beneath it.
 *
 * @returns The featured pricing card section.
 */
export default function PricingCard() {
  return (
    <section className="pb-size-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col items-center">
      <Reveal
        className="relative overflow-hidden w-full max-w-2xl bg-surface-container-lowest border border-outline-variant rounded-xl p-size-md sm:p-size-lg shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      >
        <div className="absolute top-0 right-0 bg-primary-container text-on-primary px-size-sm py-size-xs rounded-bl-xl text-label-md font-label-md">
          Limited Time Offer
        </div>
        <h2 className="text-headline-lg font-headline-lg text-on-background mb-size-xs">
          AI for Professionals
        </h2>
        <div className="flex items-baseline gap-2 mb-size-md">
          <span className="text-display-lg font-display-lg text-primary">
            $7
          </span>
          <span className="text-body-md font-body-md text-on-surface-variant">
            / one-time payment
          </span>
        </div>
        <p className="text-body-md font-body-md text-on-surface-variant mb-size-lg">
          The learners will obtain the entire platform access by purchasing
          the &quot;AI for Professional&quot; course for the entire year of
          2026. So get started with your learning journey with inaraX and
          avail this opportunity!
        </p>
        <button
          type="button"
          className="w-full bg-primary-container text-on-primary text-label-md font-label-md py-size-sm rounded-full hover:bg-primary-container/90 soft-glow-shadow transition-all active:scale-95 mb-size-sm"
        >
          Get started with your learning journey
        </button>
        <p className="text-center text-label-md font-label-md text-on-surface-variant">
          *Purchase grants full platform access until Dec 31, 2026
        </p>
      </Reveal>
      <Reveal
        delayMs={100}
        className="w-full flex flex-wrap justify-center items-center gap-size-md mt-size-lg text-label-md font-label-md text-outline"
      >
        {trustStrip.map((item, index) => (
          <div key={item.label} className="flex items-center gap-size-md">
            {index > 0 && (
              <div className="w-1 h-1 rounded-full bg-outline/50" />
            )}
            <div className="flex items-center gap-size-xs">
              <span className="material-symbols-outlined text-[16px]">
                {item.icon}
              </span>
              {item.label}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
