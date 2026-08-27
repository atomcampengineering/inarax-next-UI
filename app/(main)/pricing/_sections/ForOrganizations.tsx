import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

/**
 * Cross-sells the B2B offering to visitors who landed on individual pricing.
 *
 * @returns The "training a team?" promotional band.
 */
export default function ForOrganizations() {
  return (
    <Reveal className="my-size-xl mx-margin-mobile md:mx-margin-desktop">
      <div className="bg-surface-container rounded-2xl p-size-md sm:p-size-xl flex flex-col min-[900px]:flex-row items-center justify-between gap-size-lg relative overflow-hidden">
        {/* Faint brand-tinted gradient, matching the mockup's original composition — every
            color it references (primary, surface-container) already matches globals.css. */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary to-transparent" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-headline-lg font-headline-lg text-on-background mb-size-sm text-center min-[900px]:text-left">
            Training a team?
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Give every employee a path personalized to their role and level,
            with content built around your goals and progress your L&D team
            can track.
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          {/* Points to /request-consultation, not /b2b — matching the sitewide convention
              (e.g. home's B2BBand.tsx), not the mockup's own href. */}
          <Link
            href="/request-consultation"
            className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary/5 px-size-lg py-size-sm rounded-full text-label-md font-label-md transition-all duration-300"
          >
            Request a consultation
            <span className="material-symbols-outlined ml-size-xs text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
