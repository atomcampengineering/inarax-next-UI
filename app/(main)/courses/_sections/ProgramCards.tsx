import Reveal from "@/components/ui/Reveal";

const programs = [
  {
    badge: "For engineers & technical learners",
    title: "AI for Engineers",
    tagline: "Go from ML fundamentals to deployment-ready AI systems.",
    description:
      "A structured path — Associate → Intermediate → Advanced. Master architecture, scaling, and production environments for modern artificial intelligence.",
    cta: "Explore AI for Engineers",
  },
  {
    badge: "For working professionals (Python + APIs)",
    title: "AI for Professionals",
    tagline: "Master AI tools, agents, and workflows for your career.",
    description:
      "A level-based path — Beginner → Intermediate → Advanced. Apply AI directly to your operations, decision making, and daily workflows with minimal technical friction.",
    cta: "Explore AI for Professionals",
  },
];

/**
 * Presents the two structured, level-based programs learners can choose
 * between after their placement check.
 *
 * @returns The "choose your AI program" section.
 */
export default function ProgramCards() {
  return (
    <section className="py-size-xl bg-surface-container-low border-y border-outline-variant/20">
      <Reveal className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-size-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-size-sm">
            Choose your AI program
          </h2>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-body-md text-left md:text-center">
            Two structured, level-based programs. Take a quick placement
            check, start at the right level, and move up as you master each
            stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-size-lg mt-size-lg">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-surface-container-lowest border border-outline-variant p-size-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="inline-block bg-surface-container-highest text-on-surface-variant px-size-sm py-size-xs rounded font-label-md text-[12px] mb-size-md uppercase tracking-wider">
                  {program.badge}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-size-sm">
                  {program.title}
                </h3>
                <p className="font-bold text-primary mb-size-md">
                  {program.tagline}
                </p>
                <p className="text-on-surface-variant mb-size-lg font-body-md">
                  {program.description}
                </p>
              </div>
              <div className="border-t border-outline-variant/30 pt-size-md mt-auto">
                <p className="text-on-surface font-headline-md mb-size-md">
                  $25 per level · $75 full program
                </p>
                <a
                  className="inline-flex items-center text-primary font-bold hover:gap-size-sm transition-all group"
                  href="#"
                >
                  {program.cta}
                  <span className="material-symbols-outlined ml-size-xs transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
