import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    title: "Assessment",
    description: "Continuous evaluation to understand your growth.",
    alt: "Assessment",
    src: "https://lh3.googleusercontent.com/aida/AP1WRLuALQ9O8BBZjm1NTshmtk2yI5ZFOZMRxY131mnT7j0WyECMCGXkZVoozSt8_Yz1PiEeteKbDmy0szodX2gLzzgHvM2fogS68WvgJsCNth9Z5l8yVSFS5Ygdh6yOIocJ2ni6GV1hS3jG_cykePVKgGdSN8u2vYwUyu79cBGI4CZbn_5Xg7VkJbP7YIjExPjvXMrF0jXkKHRLuDaNjKzZnAbo_R5Ih1-CKsAEl0RdsojVm9VA2CZsmuOseVA",
  },
  {
    title: "Personalization",
    description: "Content recalibrates based on your performance.",
    alt: "Personalization",
    src: "https://lh3.googleusercontent.com/aida/AP1WRLsGepfL3lHaTTqTFBvtIh1u4EHqeNy21PX6WCaiX4Xy41Mo9d8evES6gglHR7RHPt9K4awgEJIHHARFSPY2OD-SAXLqPBf3IflDP_tnNZ6-WTPpGcWnojE3GWDWGy1cMJ4Spr2L3MkFhRFYw1G0eVuTxRIViNZxchtTsLwsXJdt3XYSUvM6Tt__pn_h72WB4JSvTUp5V0ezAGBSNEBRjURD8PdUau4OcG-r0bEMXo6Jw4v_fBxBff1guA",
  },
  {
    title: "Mastery",
    description: "Proof of skills that actually translate to work.",
    alt: "Mastery",
    src: "https://lh3.googleusercontent.com/aida/AP1WRLuegY-v84nlCnm0j565fYvHmKhLDsZo7a10rUn2jbpqHuEXas-Xg2t4HrwvP7B5qYNMCCzOBws__csSJl_O129pcTYrfCzdHy6n8tEEZZCcSAd3q2XqfZLcZg4SQ8u72Iq7pA356V4EZa7CO3Soy18Fl5nYrL9lLxnKgkHK4gqkLFZwZPrUo9ufAXZAqNQEl1c3y4zkX6LrPhzmfGJXTrebWmJi0VjsuMXad_jNh8CBgTgDWtRFWZKABg",
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
            <Image
              alt={card.alt}
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              src={card.src}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
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
