import Reveal from "@/components/ui/Reveal";

/**
 * Renders the pricing page intro: a centered headline and the $7
 * limited-time-offer explanation, above the featured pricing card.
 *
 * @returns The top-of-page pricing hero.
 */
export default function Hero() {
  return (
    // White background + grid-blueprint, matching the homepage Hero's treatment (kept
    // deliberately over the new mockup's own two-directional grid-bg variant, per an
    // explicit decision to stay consistent with the rest of the site).
    <section className="relative bg-white overflow-hidden grid-blueprint">
      {/* Same two-level container as PricingCard.tsx below (px-margin + max-w-container-max,
          then a centered max-w-2xl box) so this heading's left edge lines up exactly with the
          featured pricing card's left edge at every viewport width, not just approximately. */}
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Reveal className="py-size-xl max-w-2xl mx-auto text-left">
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-size-md tracking-tight text-on-surface text-left">
            Plans and Pricing
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant text-left">
            inaraX is your learning companion for life. We want learners to
            feel confident about their AI skills in this increasingly
            demanding industry globally. For this, we have priced the entire
            platform at USD 7 till 31st December 2026.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
