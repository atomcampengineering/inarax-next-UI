import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Take a quick placement check",
    summary:
      "A short quiz shows inaraX what you already know, so you start at the right level.",
    alt: "Personalization survey preview",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOhsIbVRH0E5qPV4uvg1g7SbX0pjBIALgRLF8IOgTa3IAHBqmZljmd8bXMj9p6vhPGLmCZLX6coAdLBzMKGQZxpR5wESj0qEWceS2w0lAH9VCrrad379Rwy98CnGmUefkqjz7bcKsl0Q6mCEjIEid4CYTMys8QasRA6tFZKHvZgyZPnmPliv8L82tQ5Cmo2HWiwCyVLsIOjqs0QX8wnsgTpZK2AVMZhOCXl-gbmBCJBWYwVfnlReQWEQBl73fzLBALS5ajySj2hghX1A",
    imageClassName: "object-contain bg-white",
  },
  {
    number: "02",
    title: "Pick your goal and field",
    summary:
      "Tell us where you're headed — engineer, manager, entrepreneur — and your domain.",
    alt: "Placement Assessment Interface",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ7SRdL1Ix-UXOu7bwZJlyQoRWcSyQp5kJB77uCirzu3GItRM1Zg46clnyFc2j61GXuN8WJcSuQyddwlZV0UdjHN-rx75GXpUq57bfQMYutu51EDoMyFZH7PJqZJrzxrz3J0LDZnmaTSGhucbKAn_poRWT-FvsRjBXZjoMTMtdj-MxwMeq8AJw5yJo_uljCQmi5bkQQckVd3serI_UjKc7A6c3j7-38N1nbpQkVp8eRAYsjkiNJ_HhGgum7lx25i_12mRVVIpQswJuJw",
    imageClassName: "object-contain",
  },
  {
    number: "03",
    title: "Learn on a path that adapts",
    summary:
      "Move forward as you master things, with a tutor that steps in only when you're stuck.",
    alt: "Expert reviewing AI content",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXEtgVcSEe-3Zo1XoiZxvrhLO8xY0gNj_gIR1j1r9gN-WR7BLk47CLCyDnap5oxQ4VI2fgI7yuxHQKiiNClKujIp2kU-8j46TAYwoZDAeuBdCMHzxED_W_LJ1j13ZTiiLk8mrCYBN7DDjLEcmoK8oamLFoSk81o8-mwD2QpwUCETRgWrAs0n2I5SmCQyhD2QGht6H8AWg8-G_pV3uknpyeEzV1NyImkOYnEt2sUbD_ti6fu9Nw0ZoceKG_7sN20M8WSbKOmnKBlq2HwQ",
    imageClassName: "object-cover",
  },
];

/**
 * Lays out the three-step "placement check -> goal -> adaptive path" flow
 * as image-led cards, one per step.
 *
 * @returns The three-step process grid.
 */
export default function PathSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-size-xl">
      {steps.map((step, index) => (
        <Reveal
          key={step.number}
          delayMs={index * 100}
          className="md:col-span-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden group"
        >
          <div className="h-48 relative overflow-hidden">
            <Image
              alt={step.alt}
              className={`${step.imageClassName} transition-transform duration-500 group-hover:scale-105`}
              src={step.src}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
          <div className="p-size-md">
            <div className="flex flex-col gap-base mb-base">
              <span className="text-primary font-headline-md">
                {step.number}
              </span>
              <h4 className="font-headline-md text-headline-md">
                {step.title}
              </h4>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-justify">
              {step.summary}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
