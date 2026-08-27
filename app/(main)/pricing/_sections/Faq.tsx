import AccordionItem from "@/components/ui/AccordionItem";

const faqs = [
  {
    question: "Can I switch between plans later?",
    answer:
      "Yes, you can upgrade from Quarterly to Yearly at any time. The remaining balance on your current quarter will be prorated towards your new yearly subscription.",
  },
  {
    question: "What happens to my certificates if I cancel Plus?",
    answer:
      "You keep any certificates you have already earned forever. They will remain accessible on your profile and can be shared. However, you will lose access to course materials you haven't completed or purchased individually.",
  },
  {
    question: "Are there refunds for single courses?",
    answer:
      "We offer a 14-day money-back guarantee on single course purchases, provided you have not completed more than 30% of the course material.",
  },
];

/**
 * Answers billing/plan questions specific to the pricing page.
 *
 * @returns The pricing page FAQ accordion.
 */
export default function Faq() {
  return (
    <section className="px-margin-desktop py-size-xl max-w-4xl mx-auto">
      <div className="text-center mb-size-lg">
        <h2 className="text-headline-lg font-headline-lg text-on-background mb-size-sm">
          Frequently asked questions
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant">
          Answers about inaraX plans, billing, and course purchases.
        </p>
      </div>
      <div className="space-y-size-sm">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.question}
            cardClassName="border-b border-outline-variant/30"
            buttonClassName="w-full flex justify-between items-center font-headline-md text-headline-md text-on-background py-size-sm text-left focus:outline-none"
            trigger={faq.question}
          >
            {/* Bottom padding lives here, on the innermost div, not on the AccordionItem's
                contentClassName — that element also carries max-height/overflow-hidden for the
                collapse animation, and a max-height: 0 box still renders its own padding, so
                padding placed on contentClassName would let text peek through while collapsed.
                Same fix already applied in the homepage's Faq.tsx. */}
            <div className="text-on-surface-variant font-body-md pb-size-md">
              {faq.answer}
            </div>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
}
