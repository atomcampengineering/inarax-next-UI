import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    title: "Assessment",
    description: "Continuous evaluation to understand your growth.",
    alt: "Assessment",
    src: "/videos/assesment-course-page.mp4",
  },
  {
    title: "Personalization",
    description: "Content recalibrates based on your performance.",
    alt: "Personalization",
    src: "/videos/assesment-course-page.mp4",
  },
  {
    title: "Mastery",
    description: "Proof of skills that actually translate to work.",
    alt: "Mastery",
    src: "/videos/assesment-course-page.mp4",
  },
];

/**
 * Illustrates the assessment -> personalization -> mastery loop that
 * powers InaraX's adaptivity, one image-led card per stage.
 *
 * @returns The three-card adaptive-technology showcase.
 */
export default function AdaptiveShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-size-xl relative z-10">
      {cards.map((card, index) => (
        <Reveal
          key={card.title}
          delayMs={index * 100}
          className="liquid-glass p-base rounded-xl flex flex-col items-center text-center group"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-size-md bg-surface-container-low">
            <video
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={card.src}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="px-size-md pb-size-md">
            <h3 className="font-headline-md text-headline-md mb-size-sm text-on-surface">
              {card.title}
            </h3>
            <p className="font-body-md text-on-surface-variant">
              {card.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
