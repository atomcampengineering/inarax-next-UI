import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: "receipt_long",
    title: "Procurement",
    description:
      "Streamlined contracting with fixed per-seat pricing. No hidden costs for customization—it's built into the subscription model from day one.",
  },
  {
    icon: "school",
    title: "L&D Professionals",
    description:
      "Stop spending months designing content. Our AI does the heavy lifting, allowing you to focus on strategy and culture instead of asset production.",
  },
  {
    icon: "leaderboard",
    title: "Leadership",
    description:
      "Ensure your entire organization speaks the same language about AI while having the specialized skills to actually deploy it within their silos.",
  },
  {
    icon: "person",
    title: "End Learner",
    description:
      "Content that finally matters. Employees get the tools they need to be 10x more productive in their specific jobs, not just a generic overview.",
  },
];

export default function WhyPartnerWithInaraX() {
  return (
    <section className="py-24 bg-surface-container-high">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              delayMs={index * 100}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">
                  {card.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-4">
                {card.title}
              </h3>
              <p className="text-on-surface-variant text-body-sm">
                {card.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
