/**
 * Placeholder landing page for the courses Hero's "Find your level" CTA —
 * the entry point into the (not-yet-built) placement check flow.
 *
 * @returns A minimal placeholder section; no placement quiz is wired up yet.
 */
export default function FindLevelPage() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-4">
          This is find your level
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          This page is a placeholder — the placement check isn&apos;t built
          yet.
        </p>
      </div>
    </section>
  );
}
