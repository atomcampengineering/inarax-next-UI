import Reveal from "@/components/ui/Reveal";
import AccordionItem from "@/components/ui/AccordionItem";

const steps = [
  {
    icon: "shopping_cart",
    step: "STEP 01",
    title: "Subscribe",
    summary: "Commercial scope: seats, term, and success measures.",
    detail:
      "We align with your procurement and strategic goals. Whether you need to upskill 50 managers or 5,000 frontline staff, we define the roadmap together for maximum ROI.",
  },
  {
    icon: "architecture",
    step: "STEP 02",
    title: "Course",
    summary:
      "We build the course with your subscription funds, personalized for every user.",
    detail:
      "Our AI engine generates specialized curriculum chunks based on role profiles. A software engineer learns AI coding paradigms while a HR lead learns AI policy and bias mitigation.",
  },
  {
    icon: "monitoring",
    step: "STEP 03",
    title: "Monitor",
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
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Heading shares this max-w-3xl mx-auto box with the accordion cards below it, so it
            aligns with that container instead of the wider section padding edge. */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-12 text-left">
            How it works
          </h2>
          {/* Delay each card slightly to create a staggered reveal without extra choreography. */}
          <div className="space-y-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delayMs={index * 100}>
              <AccordionItem
                cardClassName="glass-card rounded-2xl overflow-hidden"
                buttonClassName="w-full flex items-center justify-between p-5 sm:p-8 text-left focus:outline-none"
                contentClassName="bg-white/50 px-5 sm:px-8"
                chevronClassName="material-symbols-outlined transition-transform text-primary text-3xl"
                trigger={
                  // Mobile: the icon sits inline with the "STEP 0x" label only, so the title/summary
                  // column starts flush left instead of being pushed right by a full-height icon
                  // column. Tablet/laptop keep the original icon-beside-everything layout — achieved
                  // by rendering the icon twice and toggling which one is visible per breakpoint,
                  // since the two layouts need the icon in different positions in the flex flow.
                  // The `!` (important) is required because Google's Material Symbols stylesheet
                  // ships its own `.material-symbols-outlined { display: inline-block }` rule at the
                  // same specificity as Tailwind's hidden/md:hidden utilities, and loads later in the
                  // cascade — without `!`, that external rule silently wins and both icons show at once.
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl !hidden md:!inline-block">
                      {step.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-2 md:mb-0 md:block">
                        <span className="material-symbols-outlined text-primary text-3xl md:!hidden">
                          {step.icon}
                        </span>
                        <span className="font-label-caps text-primary md:mb-2 md:block">
                          {step.step}
                        </span>
                      </div>
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
                {/* The expanded content adds detail without forcing the whole section to be permanently long.
                    An invisible icon-sized spacer mirrors the trigger's icon+gap so this text lines up with
                    the title/summary column above it exactly, instead of approximating the offset with a
                    fixed margin. Hidden on mobile to match the trigger's icon also not reserving that
                    column there (see the trigger's own comment above). */}
                <div className="py-4 sm:py-6 flex items-start gap-4 border-t border-outline-variant/10 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-3xl invisible !hidden md:!inline-block"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </span>
                  <div>{step.detail}</div>
                </div>
              </AccordionItem>
            </Reveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
