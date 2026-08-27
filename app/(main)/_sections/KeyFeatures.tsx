import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

/**
 * Presents the two audiences InaraX serves — individuals and organizations —
 * as a "two-door fork" so visitors can self-select their path immediately.
 *
 * @returns The two-door-fork feature section.
 */
export default function KeyFeatures() {
  return (
    <section className="bg-white py-size-xl px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="flex flex-col md:flex-row items-center justify-between gap-size-lg mb-size-xl">
          <h2 className="font-display-lg-mobile md:font-display-lg text-headline-lg md:text-display-lg text-on-surface md:w-1/2 text-center md:text-left whitespace-nowrap md:whitespace-normal">
            The two-door fork
          </h2>
          <p className="text-on-surface-variant text-body-lg font-body-lg md:w-1/2 text-left">
            Our platform combines cutting-edge AI with human oversight to
            create a learning experience that is as unique as your career
            path.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 min-[800px]:grid-cols-3 gap-gutter">
          <Reveal className="p-size-md min-[640px]:p-size-lg min-[800px]:p-size-sm min-[1000px]:p-size-lg border border-outline-variant/30 rounded-xl bg-white hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-size-md">
              <span className="material-symbols-outlined text-primary">
                rocket_launch
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-size-sm">
              For individuals
            </h3>
            <p className="text-on-surface-variant text-body-lg font-body-lg mb-size-md">
              Learn AI built around where you are. Take a placement check,
              pick your goal, and start at the right level.
            </p>
            <button
              type="button"
              className="text-primary font-label-md text-label-md border-b-2 border-primary hover:text-primary-container transition-colors"
            >
              Get started
            </button>
          </Reveal>
          <Reveal
            delayMs={100}
            className="relative rounded-xl overflow-hidden border border-outline-variant/30"
          >
            {/* h-full (not aspect-video) so this fills the grid row's stretched height to match
                the flanking cards, instead of being capped at a 16:9 ratio and leaving a gap. */}
            <video
              className="w-full h-full object-cover"
              src="/videos/two-door-fork.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </Reveal>
          <Reveal
            delayMs={200}
            className="p-size-md min-[640px]:p-size-lg min-[800px]:p-size-sm min-[1000px]:p-size-lg border border-outline-variant/30 rounded-xl bg-white hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-size-md">
              <span className="material-symbols-outlined text-primary">
                psychology
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-size-sm">
              For organizations
            </h3>
            <p className="text-on-surface-variant text-body-lg font-body-lg mb-size-md">
              Train your whole team without one-size-fits-all. Personalized
              to every role, with progress your L&amp;D team can track.
            </p>
            <Link
              className="text-primary font-label-md text-label-md border-b-2 border-primary hover:text-primary-container transition-colors"
              href="/request-consultation"
            >
              Request a consultation
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
