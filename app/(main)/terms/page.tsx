/**
 * Placeholder landing page for the footer's "Terms" link.
 *
 * @returns A minimal placeholder section; no terms of service are written yet.
 */
export default function TermsPage() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-4">
          This is terms
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          This page is a placeholder — the terms of service aren&apos;t
          built yet.
        </p>
      </div>
    </section>
  );
}
