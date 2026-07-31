import Reveal from "@/components/ui/Reveal";
import AccordionItem from "@/components/ui/AccordionItem";

const steps = [
  {
    icon: "shopping_cart",
    step: "STEP 01",
    title: "1. Subscribe",
    summary: "Commercial scope: seats, term, and success measures.",
    detail:
      "We align with your procurement and strategic goals. Whether you need to upskill 50 managers or 5,000 frontline staff, we define the roadmap together for maximum ROI.",
  },
  {
    icon: "architecture",
    step: "STEP 02",
    title: "2. Course",
    summary:
      "We build the course with your subscription funds, personalized for every user.",
    detail:
      "Our AI engine generates specialized curriculum chunks based on role profiles. A software engineer learns AI coding paradigms while a HR lead learns AI policy and bias mitigation.",
  },
  {
    icon: "monitoring",
    step: "STEP 03",
    title: "3. Monitor",
    summary: "One dashboard: progress, completion, and quiz data.",
    detail:
      "Real-time analytics for admins. Identify high-potential talent, monitor engagement across departments, and ensure compliance benchmarks are met through automated reporting.",
  },
];

/**
 * Explains the delivery flow in three ordered steps so prospects can understand the implementation path.
 *
 * @returns The process section with expandable step cards.
 */
export default function HowItWorks() {
  return (
    // Reuse the neutral surface so the accordion cards provide the primary visual hierarchy.
    <section className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-12 text-center">
          How it works
        </h2>
        {/* Delay each card slightly to create a staggered reveal without extra choreography. */}
        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delayMs={index * 100}>
              <AccordionItem
                cardClassName="glass-card rounded-2xl overflow-hidden"
                buttonClassName="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                contentClassName="bg-white/50 px-8"
                chevronClassName="material-symbols-outlined transition-transform text-primary text-3xl"
                trigger={
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {step.icon}
                    </span>
                    <div>
                      <span className="font-label-caps text-primary mb-2 block">
                        {step.step}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm">
                        {step.title}
                      </h3>
                      <p className="text-on-surface-variant mt-1">
                        {step.summary}
                      </p>
                    </div>
                  </div>
                }
              >
                {/* The expanded content adds detail without forcing the whole section to be permanently long. */}
                <div className="py-6 ml-12 border-t border-outline-variant/10 text-on-surface-variant">
                  {step.detail}
                </div>
              </AccordionItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
