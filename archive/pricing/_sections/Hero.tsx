import Reveal from "@/components/ui/Reveal";

/**
 * Renders the pricing page intro: a centered headline and one-line
 * explanation of the two ways to pay (single course vs. inaraX Plus).
 *
 * @returns The top-of-page pricing hero.
 */
export default function Hero() {
  return (
    // White background + grid-blueprint, matching the homepage Hero's treatment (per an explicit
    // decision to reuse the existing sitewide texture instead of the mockup's own two-directional
    // .blueprint-lines variant — see changes/pricing-page-build-log.md).
    <section className="relative bg-white overflow-hidden grid-blueprint">
      <Reveal className="px-margin-mobile md:px-margin-desktop py-size-xl max-w-4xl mx-auto text-center">
        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-size-md tracking-tight text-on-surface">
          Plans and pricing
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto text-left md:text-center">
          Buy a single course for one payment, or get inaraX Plus for the
          full library, live sessions, and community. Cancel anytime.
        </p>
      </Reveal>
    </section>
  );
}
