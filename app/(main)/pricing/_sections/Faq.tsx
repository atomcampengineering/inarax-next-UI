import AccordionItem from "@/components/ui/AccordionItem";

const faqs = [
  {
    question: "Does the $7 include all courses?",
    answer:
      'Yes, purchasing the "AI for Professionals" course at the promotional rate grants you full platform access to all current and future courses until December 31st, 2026.',
  },
  {
    question: "What happens after December 31st, 2026?",
    answer:
      "After the promotional period ends, your account will transition to a standard subscription plan. We will notify you well in advance of any pricing changes.",
  },
];

/**
 * Answers questions specific to the $7 limited-time pricing offer.
 *
 * @returns The pricing page FAQ accordion.
 */
export default function Faq() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-size-xl bg-surface">
      {/* Heading lives inside the same max-w-3xl mx-auto box as the accordion list below it,
          so it aligns with the questions container rather than the page's own left margin. */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-headline-lg font-headline-lg text-on-background mb-size-lg text-left">
          Frequently asked questions
        </h2>
        <div className="flex flex-col gap-size-sm">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              cardClassName="bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden transition-all duration-300"
              buttonClassName="w-full flex justify-between items-center p-size-md text-left focus:outline-none"
              contentClassName="px-size-md"
              trigger={
                <span className="font-headline-md text-headline-sm sm:text-headline-md">
                  {faq.question}
                </span>
              }
            >
              {/* Padding lives here, not on contentClassName above — that element also carries
                  max-height/overflow-hidden for the collapse animation, and a max-height: 0 box
                  still renders its own padding, so padding on contentClassName would let text
                  peek through while collapsed. Same fix already applied sitewide. */}
              <div className="text-on-surface-variant font-body-md pb-size-md">
                {faq.answer}
              </div>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
