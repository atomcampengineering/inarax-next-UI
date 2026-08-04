/**
 * Placeholder landing page for the "Request a consultation" CTA used across
 * the b2b page and the footer. Renamed from `/contact-sales` to match the
 * button copy it's linked from.
 *
 * @returns A minimal placeholder section; no form is wired up yet.
 */
export default function RequestConsultationPage() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-4">
          This is request a consultation
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          This page is a placeholder — the consultation request form
          isn&apos;t built yet.
        </p>
      </div>
    </section>
  );
}
