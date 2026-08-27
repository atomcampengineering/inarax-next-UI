/**
 * Placeholder landing page for the pricing page's "Get Plus" CTAs.
 * Linked from both paid plan cards on `/pricing` until a real checkout
 * flow exists.
 *
 * @returns A minimal placeholder section; no checkout flow is built yet.
 */
export default function PurchasePage() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-4">
          This is purchase
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          This page is a placeholder — checkout isn&apos;t built yet.
        </p>
      </div>
    </section>
  );
}
