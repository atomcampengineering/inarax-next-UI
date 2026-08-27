import Reveal from "@/components/ui/Reveal";
import AdaptiveShowcase from "./AdaptiveShowcase";
import EcosystemFeatures from "./EcosystemFeatures";

/**
 * Explains the adaptive-technology loop (assessment, personalization,
 * mastery) and the ecosystem features around it, on one shared section.
 *
 * @returns The "how inaraX adapts to you" section.
 */
export default function HowInaraxAdapts() {
  return (
    <section className="py-size-xl relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal className="mb-size-xl">
          <span className="inline-block font-label-md text-label-md text-primary tracking-[0.2em] mb-size-sm uppercase">
            ADAPTIVE TECHNOLOGY
          </span>
          <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface mb-size-md">
            How inaraX adapts to you
          </h2>
        </Reveal>
        <AdaptiveShowcase />
        <EcosystemFeatures />
      </div>
    </section>
  );
}
