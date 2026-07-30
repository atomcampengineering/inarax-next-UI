import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: "key",
    title: "Single sign-on (SSO)",
    description:
      "Integrate with your existing identity providers for seamless access.",
  },
  {
    icon: "admin_panel_settings",
    title: "Admin controls",
    description:
      "Granular permissions and dashboard tools to manage your team effectively.",
  },
  {
    icon: "verified",
    title: "Expert-reviewed content",
    description:
      "All AI-generated paths are vetted by human experts for accuracy.",
  },
  {
    icon: "security",
    title: "Your data stays yours",
    description:
      "Strict data isolation and enterprise-grade security protocols.",
  },
  {
    icon: "handshake",
    title: "Backed by Atomcamp Arabia",
    description:
      "Leveraging world-class educational expertise and infrastructure.",
  },
];

export default function EnterpriseReady() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-12 text-center">
          Built for how organizations work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              delayMs={index * 100}
              className="flex flex-col items-center text-center p-8 glass-card rounded-2xl"
            >
              <span className="material-symbols-outlined text-primary mb-4 text-4xl">
                {card.icon}
              </span>
              <h4 className="font-bold text-on-surface mb-2">{card.title}</h4>
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
