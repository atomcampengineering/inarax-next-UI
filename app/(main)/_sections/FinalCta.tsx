import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

/**
 * Ends the homepage with one last conversion prompt for both individual
 * learners and organizations.
 *
 * @returns The closing call-to-action band.
 */
export default function FinalCta() {
  return (
    <section className="py-size-xl px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-surface">
      <Reveal className="max-w-4xl mx-auto text-center relative z-10 px-size-md sm:px-size-lg py-size-lg sm:py-size-xl rounded-3xl border border-white/10 bg-inarax-black shadow-2xl">
        <h2 className="text-white font-display-lg text-display-lg-mobile md:text-headline-lg mb-size-lg">
          Start learning with inaraX
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-size-md">
          <button
            type="button"
            className="bg-primary-container text-on-primary font-headline-md text-headline-md text-center px-size-md sm:px-size-xl py-size-md rounded-lg primary-cta-glow transition-all hover:scale-105 active:scale-95"
          >
            Get started
          </button>
          <Link
            className="border border-white/20 text-white font-headline-md text-headline-md text-center px-size-md sm:px-size-xl py-size-md rounded-lg hover:bg-white/5 transition-all"
            href="/b2b"
          >
            For organizations →
          </Link>
        </div>
        <p className="mt-size-md text-outline-variant font-label-md text-label-md">
          Join 5,000+ professionals advancing their careers today.
        </p>
      </Reveal>
    </section>
  );
}
