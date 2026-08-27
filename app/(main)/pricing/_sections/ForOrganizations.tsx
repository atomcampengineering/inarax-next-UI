import Image from "next/image";
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
      <div className="bg-surface-container-low rounded-xl p-size-md sm:p-size-xl flex flex-col min-[900px]:flex-row items-center gap-size-lg border border-outline-variant/30">
        <div className="flex-1">
          <h2 className="text-headline-lg font-headline-lg text-on-background mb-size-sm text-left">
            Training a team?
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-size-md">
            Give every employee a path personalized to their role and level,
            with content built around your goals and progress your L&D team
            can track.
          </p>
          <div className="flex justify-start">
            {/* Points to /request-consultation, not /b2b — matching the sitewide convention
                (e.g. home's B2BBand.tsx), not the mockup's own href. */}
            <Link
              href="/request-consultation"
              className="inline-flex items-center justify-center border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary px-size-lg py-size-sm rounded-full text-label-md font-label-md transition-all duration-300"
            >
              Request a consultation
              <span className="material-symbols-outlined ml-size-xs text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
        <div className="relative w-full min-[900px]:flex-1 h-[220px] min-[900px]:h-[300px] rounded-lg overflow-hidden border border-outline-variant/30">
          <Image
            alt="Corporate team collaborating around a digital display during a training session"
            className="object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM55ZgbE8NL5Nshc5471acAHoVROqkS4SRzAP21lDgZjtsKP96l2cLMcmZ7Qq_GLwytBnp5F89Q0cnQ9zmzZLNXxVXkOg824awocYFVaIY9rEAgA2BBlb9mOpzMosZB3Iw1ppkLF_Zht35OkhyImOsYWKWaPogmp1N_eEZrdc05MSTYl2s6EjeoRpOB4rwj_urEF0N2QaGjUB740mSCJ4ehji7qAaCej60rNy1TYcjhkeK-XaRNRaO"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
      </div>
    </Reveal>
  );
}
