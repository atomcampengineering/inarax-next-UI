import Hero from "./_sections/Hero";
import KeyFeatures from "./_sections/KeyFeatures";
import PersonalizedPath from "./_sections/PersonalizedPath";
import WhyChooseInaraX from "./_sections/WhyChooseInaraX";
import Faq from "./_sections/Faq";
import FinalCta from "./_sections/FinalCta";

/**
 * Renders the site homepage by composing its marketing sections in mockup
 * order. Navigation and footer come from the shared (main) layout.
 *
 * @returns The homepage.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <PersonalizedPath />
      <WhyChooseInaraX />
      <Faq />
      <FinalCta />
    </>
  );
}
