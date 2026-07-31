import AccordionItem from "@/components/ui/AccordionItem";

const faqs = [
  {
    question: "How long does it take to set up?",
    answer:
      "Typically, we can have your personalized dashboard and first set of courses ready within 10-14 business days.",
  },
  {
    question: "Can we upload our own proprietary data?",
    answer:
      "Yes. We provide secure sandboxed environments where you can include company-specific documents to train the models for your team's unique context.",
  },
  {
    question: "What is the minimum number of seats?",
    answer:
      "Our B2B program starts at 50 seats. For smaller teams, we recommend our standard team subscriptions.",
  },
  {
    question: "Are the courses certified?",
    answer:
      "Yes, learners receive industry-recognized certifications upon completion, co-branded with InaraX and Atomcamp Arabia.",
  },
  {
    question: "Do you offer on-site workshops?",
    answer:
      "While we are digital-first, we do offer hybrid packages that include high-impact on-site workshops for senior leadership.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes, the InaraX platform is fully responsive and available as a native app for iOS and Android.",
  },
];

/**
 * Answers the most common buyer questions without forcing the page into a separate support flow.
 *
 * @returns The FAQ accordion section.
 */
export default function Faq() {
  return (
    // The lighter container surface makes the FAQ feel like a distinct reference area.
    <section className="py-24 bg-surface-container">
      <div className="max-w-3xl mx-auto px-margin-desktop">
        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-12 text-center">
          Questions we hear often
        </h2>
        {/* Keep the accordion stack compact so answers stay scannable. */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              cardClassName="bg-white rounded-xl shadow-sm border border-outline-variant/10"
              buttonClassName="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              contentClassName="px-6"
              trigger={
                <span className="font-bold text-on-surface">
                  {faq.question}
                </span>
              }
            >
              <div className="pb-6 text-on-surface-variant">{faq.answer}</div>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
