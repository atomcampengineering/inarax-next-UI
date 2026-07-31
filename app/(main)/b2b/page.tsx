import Hero from "./_sections/Hero";
import WhyGenericTrainingFails from "./_sections/WhyGenericTrainingFails";
import ThreeMovingParts from "./_sections/ThreeMovingParts";
import HowItWorks from "./_sections/HowItWorks";
import WhyPartnerWithInaraX from "./_sections/WhyPartnerWithInaraX";
import EnterpriseReady from "./_sections/EnterpriseReady";
import Faq from "./_sections/Faq";
import FinalCta from "./_sections/FinalCta";

/**
 * Renders the B2B marketing landing page by composing the top-level
 * conversion sections. This is the former homepage content, moved here
 * when "/" was repurposed for different content. Navigation and footer
 * are provided by the (main) layout.
 *
 * @returns The B2B landing page.
 */
export default function B2BPage() {
  return (
    <>
      <Hero />
      <WhyGenericTrainingFails />
      <ThreeMovingParts />
      <HowItWorks />
      <WhyPartnerWithInaraX />
      <EnterpriseReady />
      <Faq />
      <FinalCta />
    </>
  );
}
