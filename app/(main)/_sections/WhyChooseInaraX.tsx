import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

/**
 * Lays out six proof points (alternating claim / supporting image) in a
 * bordered, table-like grid.
 *
 * @returns The "why learners and teams choose inaraX" section.
 */
export default function WhyChooseInaraX() {
  return (
    <section className="py-size-xl px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="mb-size-xl">
          <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface mb-size-md text-left md:whitespace-nowrap">
            Why learners and teams choose inaraX
          </h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg text-justify">
            Experience a learning platform designed for the modern
            professional. InaraX combines adaptive AI with human expertise
            to ensure your skills stay sharp, relevant, and verified in an
            ever-evolving landscape.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-outline-variant/30 rounded-xl overflow-hidden">
          <div className="p-size-md sm:p-size-lg border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col gap-size-md bg-white">
            <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">
              No time wasted on what you already know.
            </h3>
            <p className="text-on-surface-variant font-body-lg">
              Traditional courses force you through linear paths. InaraX
              skips the noise, focusing 100% of your energy on the missing
              20% of your knowledge.
            </p>
          </div>
          <div className="relative min-h-[180px] md:min-h-0 p-size-md sm:p-size-lg border-b md:border-b-0 md:border-r border-outline-variant/30 bg-surface-container-low flex items-center justify-center">
            <Image
              alt="Minimalist AI-themed digital art"
              className="rounded-lg object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI4oLcGeAem_agCRYNus70GFSv-ncoY1oAQMLB5BaO9fIFfP55I4XHG3t-Igpi9LcPjYb_HUFue0qu1fTu4YJllZbv7hu-Jf0m-VE2MPq2y4jK0y-Jk5K0UC9nS38f0d45a8U0Nrsd3uFEERVwCRrNR1feY6ryoHwOR8n4nr0A93xWU4K80szyJlTwQNmt3Vrz86Lr243ui6cG4z9fApXurxYghCXNq_wokK9r2pTMm2_XbKtlz0iOHUuJ4LR6QvrqpaLtKZoigvo"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
          <div className="p-size-md sm:p-size-lg border-b md:border-b-0 border-outline-variant/30 flex flex-col gap-size-md bg-white">
            <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">
              Learning in your context, not a void.
            </h3>
            <p className="text-on-surface-variant font-body-lg">
              Bring your actual work challenges into the platform. Our AI
              anonymizes data and generates safe, relevant scenarios for you
              to practice on.
            </p>
          </div>
          <div className="relative min-h-[180px] md:min-h-0 p-size-md sm:p-size-lg border-b md:border-b-0 md:border-r border-outline-variant/30 bg-surface-container-low flex items-center justify-center">
            <Image
              alt="Futuristic workspace illustration"
              className="rounded-lg object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4k0peryA6u1LO651lhfvBpxs1dMgCrNVQayAL3h7bJbeF2Xh6tLteXhYXK2hjAiuhhpLs1s7JYIH-DfhLjYaIdK_eVs-uffaaMyCe4PYXAcumPOzBipkXJY2nHsmo98RWscAzEQTlE-X0k5jGA1ZIKpzoC5KbHnXpuVRybR_DCCGDghgSyS8_O-Dl3DRWdWUyW6uCP8b9CxTGv52123AqBwE1iyA9zE1ce0wiHPtk1hyLkt3JoNOFwXKt-5ICHVgzIEBT4ZsdPfg"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
          <div className="p-size-md sm:p-size-lg border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col gap-size-md bg-white">
            <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">
              Support that doesn&apos;t end with a video.
            </h3>
            <p className="text-on-surface-variant font-body-lg">
              Get access to live office hours every week. When AI reaches
              its limit, our human experts step in to provide the nuance
              only a veteran professional can offer.
            </p>
          </div>
          <div className="relative min-h-[180px] md:min-h-0 p-size-md sm:p-size-lg bg-surface-container-low flex items-center justify-center">
            <Image
              alt="Live Credentials Certificate"
              className="rounded-lg object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-VPfONuonSzNp-tR6aG1AH9L-Dv8puMnRX6Q1loLqnEiz8QWuWa-opxlvjT3fEOUIEWm0YI2R6wxKv7zswlgV3pECSxJlmVbPQNKgbMYYMswuIabqDsMDw-1BV-Ka1IViYsFI2X_v4wpgUYqBHq22_A89hXGXRiFPCf3gV_CR3yZlWWN7362Ny4ZGiywGJQv2DZsoIOomXx-6B3_oo-etGk5AZVNRIIAEUaUgTI5Z2ncK5pfPTLepd64ZEe0tn3O4qmxjCiP9LSs"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
