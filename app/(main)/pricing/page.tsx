import Hero from "./_sections/Hero";
import PlansGrid from "./_sections/PlansGrid";
import ForOrganizations from "./_sections/ForOrganizations";
import Faq from "./_sections/Faq";

/**
 * Renders the pricing page by composing its sections in mockup order.
 * Navigation and footer come from the shared (main) layout.
 *
 * @returns The pricing page.
 */
export default function PricingPage() {
  return (
    <>
      <Hero />
      <PlansGrid />
      <ForOrganizations />
      <Faq />
    </>
  );
}
