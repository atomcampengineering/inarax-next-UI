import Reveal from "@/components/ui/Reveal";
import AccordionItem from "@/components/ui/AccordionItem";

type Program = {
  badge: string;
  title: string;
  tagline: string;
  /** Short, prominent line on the card face calling out who the course is for. */
  thumbnailNote?: string;
  description: string;
  /** Paragraphs revealed by the "Learn more" toggle. Omitted where no expanded copy exists yet. */
  learnMore?: string[];
  price: string;
  cta: string;
};

const programs: Program[] = [
  {
    badge: "For working professionals",
    title: "AI for Professionals",
    tagline: "Master AI tools, agents, and workflows for your career.",
    thumbnailNote: "This course is for learners without any technical background.",
    description:
      "A level-based path — Associate → Intermediate → Professional. Apply AI directly to your operations, decision making, and daily workflows with minimal technical friction.",
    learnMore: [
      "We have designed this course to help you learn AI according to your existing skills and sector-specific profession. When you click to learn this course, an assessment will appear. This assessment will have several questions that will determine the level of your current AI/tech capabilities related to your profession. Additionally, it will ask what are your professional aspirations, that will help the platform develop focused content for your AI learning. This way the platform will choose whether you are the associate, intermediate or professional level.",
      "Please note that for the year 2026, this course is priced at USD 7. This payment will unlock all levels for this course only. For next year, the payment plan will be subject to change.",
    ],
    price: "$7 · unlocks all levels through 2026",
    cta: "Explore AI for Professionals",
  },
  {
    badge: "Foundational AI knowledge for every role",
    title: "AI Literacy",
    tagline: "Build a working understanding of AI concepts and tools.",
    description:
      "A foundational course for anyone who wants to understand what AI can (and can't) do, without needing a technical background.",
    // No long-form assessment copy or confirmed price yet — content to be supplied before launch.
    price: "Pricing coming soon",
    cta: "Explore AI Literacy",
  },
];

/**
 * Presents the two courses currently available, each with a short pitch and
 * an expandable "Learn more" for the details, plus a note that more courses
 * are on the way.
 *
 * @returns The "choose your AI program" section.
 */
export default function ProgramCards() {
  return (
    <section className="py-size-xl bg-surface-container-low border-y border-outline-variant/20">
      <Reveal className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-size-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-size-sm text-left">
            Choose your AI program
          </h2>
          <p className="max-w-2xl text-on-surface-variant text-body-md text-left">
            Start with AI for Professionals or AI Literacy — new programs
            launch every month.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-size-lg mt-size-lg">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-surface-container-lowest border border-outline-variant p-size-md sm:p-size-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Badge — purple-tinted label to tie into the course card accent color. */}
                <span className="inline-block bg-[#f3e8ff] text-[#7e22ce] px-size-sm py-size-xs rounded font-label-md text-[12px] mb-size-md uppercase tracking-wider">
                  {program.badge}
                </span>
                {/* Title in purple to give the card a strong visual anchor. */}
                <h3 className="font-headline-md text-headline-md text-[#6d28d9] mb-size-sm">
                  {program.title}
                </h3>
                {/* Tagline keeps the primary-color bold treatment but shifts to purple. */}
                <p className="font-bold text-[#7c3aed] mb-size-sm">
                  {program.tagline}
                </p>
                {program.thumbnailNote && (
                  <p className="text-on-surface-variant font-body-md mb-size-md">
                    {program.thumbnailNote}
                  </p>
                )}
                <p className="text-on-surface-variant mb-size-md font-body-md">
                  {program.description}
                </p>
                {program.learnMore && (
                  <AccordionItem
                    cardClassName="mb-size-md"
                    buttonClassName="inline-flex items-center gap-size-xs text-primary font-bold focus:outline-none"
                    contentClassName=""
                    chevronClassName="material-symbols-outlined transition-transform text-[18px]"
                    trigger={<span>Learn more</span>}
                  >
                    {/* Padding lives on each paragraph's wrapper, not contentClassName above —
                        that element carries max-height/overflow-hidden for the collapse
                        animation, and a max-height: 0 box still renders its own padding. */}
                    <div className="flex flex-col gap-size-sm text-on-surface-variant font-body-md pt-size-sm">
                      {program.learnMore.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </AccordionItem>
                )}
              </div>
              <div className="border-t border-outline-variant/30 pt-size-md mt-auto">
                <p className="text-on-surface font-headline-md mb-size-md">
                  {program.price}
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
        <div className="mt-size-lg border border-dashed border-outline-variant rounded-xl p-size-lg text-center bg-surface-container-lowest/50">
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            Stay tuned as we launch new courses every month
          </p>
        </div>
      </Reveal>
    </section>
  );
}
