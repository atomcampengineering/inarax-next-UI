import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

/**
 * Presents the two audiences InaraX serves — individuals and organizations —
 * as a "two-door fork" so visitors can self-select their path immediately.
 *
 * @returns The two-door-fork feature section.
 */
export default function KeyFeatures() {
  return (
    <section className="bg-white py-size-xl px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="flex flex-col md:flex-row items-center justify-between gap-size-lg mb-size-xl">
          <h2 className="font-display-lg-mobile md:font-display-lg text-headline-lg md:text-display-lg text-on-surface md:w-1/2 text-center md:text-left whitespace-nowrap md:whitespace-normal">
            The two-door fork
          </h2>
          <p className="text-on-surface-variant text-body-lg font-body-lg md:w-1/2 text-left">
            Our platform combines cutting-edge AI with human oversight to
            create a learning experience that is as unique as your career
            path.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1000px]:grid-cols-3 gap-gutter">
          <Reveal className="p-size-md sm:p-size-lg border border-outline-variant/30 rounded-xl bg-white hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-size-md">
              <span className="material-symbols-outlined text-primary">
                rocket_launch
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-size-sm">
              For individuals
            </h3>
            <p className="text-on-surface-variant text-body-lg font-body-lg mb-size-md">
              Learn AI built around where you are. Take a placement check,
              pick your goal, and start at the right level.
            </p>
            <button
              type="button"
              className="text-primary font-label-md text-label-md border-b-2 border-primary hover:text-primary-container transition-colors"
            >
              Get started
            </button>
          </Reveal>
          <Reveal
            delayMs={100}
            className="hidden min-[1000px]:block relative rounded-xl overflow-hidden border border-outline-variant/30"
          >
            <Image
              alt="Futuristic workspace illustration"
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLvBlE9Y2-TW_h_2Ari9xz6lhfVffmEPdPcS0bJnER-LFKsasImvxwustryLhFaNZqKJDI7jqv_rl9XPwY2vxiVEP3QSG7ai9rrQxA6ElOXtSJNHmfN_Bxz4RxFo-2_oP15lT-UyephghO_qAL0I8Qk2OjLb2elEA_Djl5qdx8vlmZkG9UJZP3GHjW3ItIG56I8uMr4GpcXuIzGBzF21amDAkQORfR4C71Uz6pGkfD0WS5NNvNcrl9e8fgo"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </Reveal>
          <Reveal
            delayMs={200}
            className="p-size-md sm:p-size-lg border border-outline-variant/30 rounded-xl bg-white hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-size-md">
              <span className="material-symbols-outlined text-primary">
                psychology
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-size-sm">
              For organizations
            </h3>
            <p className="text-on-surface-variant text-body-lg font-body-lg mb-size-md">
              Train your whole team without one-size-fits-all. Personalized
              to every role, with progress your L&amp;D team can track.
            </p>
            <Link
              className="text-primary font-label-md text-label-md border-b-2 border-primary hover:text-primary-container transition-colors"
              href="/request-consultation"
            >
              Request a consultation
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
