import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

/**
 * Ends the page with the final conversion prompt and secondary navigation choices.
 *
 * @returns The closing call-to-action section.
 */
export default function FinalCta() {
  return (
    // Close the page on the darkest surface so the final action feels deliberate and contained.
    <section className="py-24 bg-inverse-surface text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-desktop text-center">
        <Reveal>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
            Let&apos;s talk
          </h2>
        </Reveal>
        <Reveal delayMs={100}>
          <p className="font-body-lg text-body-lg mb-10 text-white/70 max-w-2xl mx-auto">
            Tell us your organization, a rough seat count, and the skills or
            outcomes you need the course to support. We&apos;ll map a
            subscription and delivery plan to match.
          </p>
        </Reveal>
        {/* Keep both actions visible on mobile by stacking them before they expand to a row on larger screens. */}
        <Reveal delayMs={200} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/request-consultation"
            className="inline-block w-full sm:w-auto bg-white text-inverse-surface px-10 py-4 rounded-xl font-headline-sm text-headline-sm transition-all hover:scale-105 active:scale-95"
          >
            Request a consultation
          </Link>
          <Link
            href="/courses"
            className="inline-block w-full sm:w-auto border border-white/20 text-white px-10 py-4 rounded-xl font-headline-sm text-headline-sm hover:bg-white/10 transition-all active:scale-95"
          >
            Browse courses
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
