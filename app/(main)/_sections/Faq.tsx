import Link from "next/link";
import AccordionItem from "@/components/ui/AccordionItem";

const faqs = [
  {
    question: "How does human verification work?",
    answer:
      'Every project and assessment you submit is first reviewed by our AI to provide immediate feedback. Subsequently, a subject matter expert from Atomcamp Arabia reviews the submission to ensure it meets real-world industry standards, providing the "Verified by humans" seal.',
  },
  {
    question: "Can I use InaraX for my whole team?",
    answer:
      "Yes! Our B2B platform allows managers to track team skill progress, identify capability gaps, and deploy personalized learning paths at scale. We offer customized billing and administrative dashboards for organizations.",
  },
  {
    question: "What happens if I get stuck?",
    answer:
      'InaraX provides 24/7 AI tutoring through our "Fast Brain" for quick queries. For more complex roadblocks, you can attend our weekly live sessions or message a human mentor directly within the platform.',
  },
  {
    question: "How is inaraX different from a normal online course?",
    answer:
      "A normal course gives everyone the same videos. inaraX checks what you already know, builds a path around your level and goal, and adapts as you go — so you're never stuck in material that's too basic or too advanced.",
  },
  {
    question: "Do I need a technical background?",
    answer:
      "No. inaraX personalizes for tech and non-tech backgrounds alike, and for different goals - whether you want to become an AI engineer, lead AI in your team, or build something as a founder.",
  },
  {
    question: "What happens when my certificate expires?",
    answer:
      "AI changes fast, so credentials renew on a cycle. Near expiry, a short re-assessment keeps yours valid or shows you exactly what's changed since you last certified. It's how an inaraX certificate proves you're current today.",
  },
  {
    question: "Where does the learning content come from, can I trust it?",
    answer:
      "Every explanation, example, and drill is grounded in expert-reviewed material, not the open internet. When the tutor helps you, it draws from verified content only — so you're never quietly taught something wrong.",
  },
  {
    question: "Can my company use inaraX to train teams?",
    answer:
      "Yes. For organizations, we co-build content around your context and goals, then inaraX personalizes it for every employee by role and seniority. Your L&D team can track progress and outcomes.",
    cta: { label: "Request a consultation", href: "/request-consultation" },
  },
  {
    question: "What do I get beyond the course itself?",
    answer:
      "Membership in a community that keeps learning together: weekly live sessions on the latest in AI, mentoring and implementation support, and ongoing access as the field evolves.",
  },
  {
    question: "How much does it cost?",
    answer:
      "See Pricing for individual plans and memberships. For teams, pricing is tailored to your scope -",
    cta: { label: "request a consultation", href: "/request-consultation" },
  },
];

/**
 * Answers common visitor questions inline so casual browsers don't have to
 * leave the homepage to get basic details.
 *
 * @returns The homepage FAQ accordion.
 */
export default function Faq() {
  return (
    <section className="py-size-xl px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-size-xl text-center">
          Frequently asked questions:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              cardClassName="bg-surface border border-outline-variant/30 rounded-lg overflow-hidden transition-all duration-300"
              buttonClassName="w-full flex justify-between items-center p-size-md text-left focus:outline-none"
              contentClassName="px-size-md"
              trigger={
                <span className="font-headline-md text-headline-md">
                  {faq.question}
                </span>
              }
            >
              {/* Vertical padding lives here, not on contentClassName above — that div also
                  carries max-height/overflow-hidden for the collapse animation, and with
                  box-sizing: border-box a max-height: 0 element still renders its own
                  padding, so a bottom-padding there let one line of text peek through
                  even while collapsed. See changes/home-page-build-log.md. */}
              <div className="text-on-surface-variant font-body-md pb-size-md">
                {faq.answer}
                {faq.cta && (
                  <Link
                    className="text-primary font-label-md text-label-md border-b-2 border-primary ml-size-xs"
                    href={faq.cta.href}
                  >
                    {faq.cta.label}
                  </Link>
                )}
              </div>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
