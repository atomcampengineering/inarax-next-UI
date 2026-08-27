import Reveal from "@/components/ui/Reveal";

const features = [
  {
    icon: "psychology",
    title: "AI Tutor",
    description: "24/7 intelligent companion for real-time guidance.",
  },
  {
    icon: "auto_stories",
    title: "Dynamic Lessons",
    description: "Modules that adjust complexity on the fly.",
  },
  {
    icon: "badge",
    title: "Credentials",
    description: "Industry-standard proof of your new capabilities.",
  },
  {
    icon: "groups",
    title: "Community",
    description: "Network with professionals on similar journeys.",
  },
];

/**
 * Lists the platform-wide features that support the adaptive learning loop
 * (tutor, lessons, credentials, community), below a labeled divider.
 *
 * @returns The ecosystem-features grid.
 */
export default function EcosystemFeatures() {
  return (
    <Reveal className="mt-size-xl">
      <div className="flex items-center gap-size-sm mb-size-lg">
        <div className="h-px flex-grow bg-outline-variant/30" />
        <span className="font-label-md text-label-md text-on-surface-variant/70 uppercase tracking-widest">
          ECOSYSTEM FEATURES
        </span>
        <div className="h-px flex-grow bg-outline-variant/30" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-size-lg border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors bg-surface-container-lowest shadow-sm text-center sm:text-left"
          >
            <span
              className="material-symbols-outlined text-primary mb-size-md"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              {feature.icon}
            </span>
            <h4 className="font-label-md text-label-md text-on-surface mb-size-xs uppercase tracking-wider">
              {feature.title}
            </h4>
            <p className="font-body-md text-on-surface-variant text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
