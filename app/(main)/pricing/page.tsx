/**
 * Placeholder landing page for the site's pricing plans, linked from the
 * Navbar, the courses Hero, and both FinalCta sections.
 *
 * @returns A minimal placeholder section; no pricing table is built yet.
 */
export default function PricingPage() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-4">
          This is pricing
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          This page is a placeholder — pricing plans aren&apos;t built yet.
        </p>
      </div>
    </section>
  );
}
