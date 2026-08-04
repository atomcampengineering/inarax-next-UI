import Reveal from "@/components/ui/Reveal";

/**
 * Explains why generic training programs fail and frames the personalized alternative.
 *
 * @returns The problem-statement section for the landing page.
 */
export default function WhyGenericTrainingFails() {
  return (
    // This section uses the base surface so the supporting argument feels grounded and readable.
    <section className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Present the explanation as a two-column layout so the narrative and proof point stay balanced. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-8">
              Generic training is expensive — and it doesn&apos;t stick.
            </h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
              <p>
                Most corporate training hands everyone the same course and
                hopes it lands. It ignores what people already know and what
                their role actually needs, so budgets get spent and skills
                don&apos;t move.
              </p>
              <p>
                We&apos;ve solved this by moving away from
                &apos;one-size-fits-all&apos; modules toward context-aware
                learning paths.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={150}>
            {/* The highlighted card turns the abstract problem into a concrete role-based example. */}
            <div className="bg-success-container p-10 rounded-3xl border border-success/30">
              <span className="material-symbols-outlined text-4xl text-success mb-6">
                psychology
              </span>
              <p className="font-body-lg text-body-lg text-on-success-container leading-relaxed">
                AI for a bank teller ≠ AI for the C-suite. A risk officer and
                an investment banker need different things again. inaraX
                personalizes one subscription for every role and level, so
                each person learns what&apos;s relevant to them.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
