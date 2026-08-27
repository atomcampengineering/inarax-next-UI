import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

type PlanFeature = {
  icon: string;
  label: string;
  /** Bolds the label — used for the Yearly plan's "Everything in Quarterly" rollup line. */
  emphasize?: boolean;
};

type Plan = {
  name: string;
  description: string;
  price: string;
  priceUnit: string;
  note: string;
  features: PlanFeature[];
  bestFor: string;
  cta: { label: string; href: string };
  badge?: { label: string; className: string };
  /** Popular plan: thicker primary border + always-on CTA glow instead of the default outline card. */
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Single course",
    description: "One course, one payment.",
    price: "$25",
    priceUnit: "per level",
    note: "Yours for as long as the course is offered on inaraX.",
    features: [
      { icon: "check_circle", label: "One-time purchase" },
      { icon: "check_circle", label: "Certificate included" },
    ],
    bestFor: "Learners who want a single, specific course.",
    cta: { label: "Browse catalog", href: "/courses" },
  },
  {
    name: "inaraX Plus, Quarterly",
    description: "Full library, billed every 3 months.",
    price: "$45",
    priceUnit: "/quarter",
    note: "One charge · cancel anytime",
    features: [
      { icon: "check_circle", label: "Entire catalog while subscribed" },
      { icon: "check_circle", label: "Weekly live sessions" },
      { icon: "check_circle", label: "Community & mentoring" },
      { icon: "check_circle", label: "Unlimited certificates" },
      { icon: "check_circle", label: "Guided learning programs" },
    ],
    bestFor: "Learners who want everything and to stay current.",
    cta: { label: "Get Plus", href: "/purchase" },
    badge: {
      label: "POPULAR",
      className: "bg-primary text-on-primary",
    },
    highlighted: true,
  },
  {
    name: "inaraX Plus, Yearly",
    description: "Best value — one payment for the whole year.",
    price: "$100",
    priceUnit: "/year",
    note: "One charge · cancel anytime",
    features: [
      {
        icon: "add_circle",
        label: "Everything in Quarterly",
        emphasize: true,
      },
      { icon: "check_circle", label: "Save $80 a year (44%)" },
      { icon: "check_circle", label: "One bill for the year" },
    ],
    bestFor: "Committed learners who want the lowest price.",
    cta: { label: "Get Plus", href: "/purchase" },
    badge: {
      label: "Save $80 (44%) vs quarterly",
      className: "bg-tertiary-container text-on-tertiary-container",
    },
  },
];

const cardDelays = [100, 200, 300];

const trustStrip = [
  { icon: "verified_user", label: "Cancel anytime" },
  { icon: "lock", label: "Secure checkout" },
  { icon: "architecture", label: "Built by Atomcamp Arabia" },
];

/**
 * Renders the three pricing tiers (single course, Plus Quarterly, Plus
 * Yearly) as a card grid, plus a trust strip beneath it.
 *
 * @returns The pricing plans section.
 */
export default function PlansGrid() {
  return (
    <section className="py-size-lg px-margin-desktop max-w-container-max mx-auto">
      <Reveal className="text-center mb-size-xl">
        <h2 className="text-headline-lg font-headline-lg text-on-background mb-size-sm">
          Choose your plan
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant text-left md:text-center">
          Want one specific course? Buy it once. Want everything, plus live
          sessions and community? Get Plus.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {plans.map((plan, index) => (
          <Reveal
            key={plan.name}
            delayMs={cardDelays[index]}
            className={`bg-surface-container-lowest rounded-xl p-size-lg flex flex-col relative shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
              plan.highlighted
                ? "border-2 border-primary"
                : "border border-outline-variant/50"
            }`}
          >
            {plan.badge && (
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 px-size-sm py-size-xs rounded-full text-[10px] font-bold tracking-wider uppercase whitespace-nowrap ${plan.badge.className}`}
              >
                {plan.badge.label}
              </div>
            )}
            <div className="mb-size-lg flex-grow">
              <h3 className="text-headline-md font-headline-md text-on-background mb-size-xs">
                {plan.name}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-size-md h-12">
                {plan.description}
              </p>
              <div className="mb-size-sm">
                <span className="text-headline-lg font-headline-lg text-primary">
                  {plan.price}
                </span>
                <span className="text-label-md font-label-md text-on-surface-variant">
                  {" "}
                  {plan.priceUnit}
                </span>
              </div>
              <p className="text-label-md font-label-md text-outline mb-size-lg">
                {plan.note}
              </p>
              <div className="space-y-size-sm">
                {plan.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-start gap-size-sm"
                  >
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      {feature.icon}
                    </span>
                    <span
                      className={`text-body-md font-body-md text-on-background ${
                        feature.emphasize ? "font-bold" : ""
                      }`}
                    >
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="p-size-sm bg-surface-container-low rounded-lg mb-size-md">
                <p className="text-label-md font-label-md text-on-surface-variant">
                  <span className="font-bold text-on-background">
                    Best for:
                  </span>{" "}
                  {plan.bestFor}
                </p>
              </div>
              <Link
                href={plan.cta.href}
                className={`block w-full text-center px-size-md py-size-sm rounded-full text-label-md font-label-md transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary-container text-on-primary hover:bg-primary-container/90 primary-cta-glow"
                    : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                {plan.cta.label}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal
        delayMs={300}
        className="flex flex-wrap justify-center items-center gap-size-md mt-size-lg text-label-md font-label-md text-outline"
      >
        {trustStrip.map((item, index) => (
          <div key={item.label} className="flex items-center gap-size-md">
            {index > 0 && (
              <div className="w-1 h-1 rounded-full bg-outline/50" />
            )}
            <div className="flex items-center gap-size-xs">
              <span className="material-symbols-outlined text-[16px]">
                {item.icon}
              </span>
              {item.label}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
