/**
 * Placeholder landing page for the footer's "Privacy" link.
 *
 * @returns A minimal placeholder section; no privacy policy is written yet.
 */
export default function PrivacyPage() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-4">
          This is privacy
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          This page is a placeholder — the privacy policy isn&apos;t built
          yet.
        </p>
      </div>
    </section>
  );
}
