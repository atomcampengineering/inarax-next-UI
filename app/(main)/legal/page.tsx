/**
 * Placeholder landing page for the footer's "Legal" link — the umbrella
 * page for legal information not yet split into Privacy/Terms detail.
 *
 * @returns A minimal placeholder section; no legal content is written yet.
 */
export default function LegalPage() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-4">
          This is legal
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          This page is a placeholder — legal information isn&apos;t built
          yet.
        </p>
      </div>
    </section>
  );
}
