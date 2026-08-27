import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

/**
 * Closes the courses page with a direct enrollment prompt and a path into
 * the B2B offering for team leads.
 *
 * @returns The closing call-to-action band.
 */
export default function FinalCta() {
  return (
    <section className="py-size-xl bg-primary-fixed border-y border-outline-variant/20">
      <Reveal className="max-w-container-max mx-auto px-margin-desktop">
        <div className="flex flex-col items-center text-center">
          <p className="font-label-md text-label-md text-primary tracking-widest uppercase mb-size-sm font-bold">
            GET STARTED
          </p>
          <h2 className="font-headline-lg text-display-lg-mobile md:text-headline-lg text-on-primary-fixed mb-size-md">
            Ready to start learning?
          </h2>
          <p className="max-w-2xl text-on-primary-fixed-variant mb-size-lg font-body-lg text-left md:text-center">
            Sign in to enroll in the AI for Engineers or AI for
            Professionals program. Your personalized learning journey
            begins today.
          </p>
          <div className="flex flex-col sm:flex-row gap-size-md mb-size-lg">
            <button
              type="button"
              className="bg-primary text-on-primary font-label-md text-label-md px-size-lg py-size-md rounded-full active:scale-95 transition-all shadow-md"
            >
              Start learning
            </button>
            <Link
              className="border border-primary text-primary font-label-md text-label-md px-size-lg py-size-md rounded-full hover:bg-primary/5 active:scale-95 transition-all"
              href="/pricing"
            >
              View pricing
            </Link>
          </div>
          <Link
            className="text-primary font-bold flex items-center hover:underline"
            href="/b2b"
          >
            Training a team? Explore inaraX for organizations
            <span className="material-symbols-outlined ml-size-xs">
              corporate_fare
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
