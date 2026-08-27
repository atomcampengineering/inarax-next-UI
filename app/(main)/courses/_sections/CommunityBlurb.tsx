import Reveal from "@/components/ui/Reveal";

/**
 * Frames InaraX as more than a course library — a community learners join,
 * not just a catalog they browse.
 *
 * @returns The community blurb section.
 */
export default function CommunityBlurb() {
  return (
    <section className="py-size-xl border-t border-outline-variant/20">
      <Reveal className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-size-md text-left">
          More than a course, be part of a community
        </h2>
        <div className="text-left">
          <p className="text-body-lg text-on-surface-variant mb-size-md leading-relaxed">
            Join a global network of ambitious builders and leaders. InaraX
            isn&apos;t just about static lessons; it&apos;s about the
            connections you make and the real-world projects you ship
            alongside peers from the world&apos;s most innovative companies.
          </p>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Whether you&apos;re debugging an agentic workflow or discussing
            AI ethics, our community provides the support system needed to
            sustain long-term growth in a rapidly shifting technological
            landscape.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
