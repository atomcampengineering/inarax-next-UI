import Reveal from "@/components/ui/Reveal";

/**
 * Explains the two-model system (a fast router and a deep tutor) behind
 * InaraX's adaptive learning.
 *
 * @returns The "two brains" architecture explainer.
 */
export default function TwoBrainsArchitecture() {
  return (
    <>
      <Reveal className="text-center mb-size-xl max-w-3xl mx-auto mt-size-xl">
        <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface mb-size-md">
          The &apos;two brains&apos; architecture
        </h2>
        <p className="text-on-surface-variant text-body-lg font-body-lg max-w-[700px] mx-auto">
          Two systems work together: one keeps you on the smartest path, the
          other steps in as a tutor the moment you struggle - teaching from
          verified material only, never guessing.
        </p>
      </Reveal>
      <Reveal className="mt-size-xl bg-inarax-black rounded-2xl p-size-lg grid grid-cols-1 md:grid-cols-2 gap-size-lg border border-white/5">
        <div className="p-size-md">
          <div className="flex items-center gap-size-sm mb-size-sm text-primary">
            <span className="material-symbols-outlined">bolt</span>
            <h4 className="font-headline-md text-headline-md text-white">
              Fast Brain — the router
            </h4>
          </div>
          <p className="text-outline-variant font-body-md">
            Handles instant responses, basic feedback, and layout generation
            for rapid progress.
          </p>
        </div>
        <div className="p-size-md">
          <div className="flex items-center gap-size-sm mb-size-sm text-primary">
            <span className="material-symbols-outlined">verified_user</span>
            <h4 className="font-headline-md text-headline-md text-white">
              Deep Brain — the tutor
            </h4>
          </div>
          <p className="text-outline-variant font-body-md">
            Complex problem solving and human-expert hybrid analysis for
            high-stakes concepts.
          </p>
        </div>
      </Reveal>
    </>
  );
}
