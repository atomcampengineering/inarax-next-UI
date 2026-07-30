import Hero from "./_sections/Hero";
import WhyGenericTrainingFails from "./_sections/WhyGenericTrainingFails";
import ThreeMovingParts from "./_sections/ThreeMovingParts";
import HowItWorks from "./_sections/HowItWorks";
import WhyPartnerWithInaraX from "./_sections/WhyPartnerWithInaraX";
import EnterpriseReady from "./_sections/EnterpriseReady";
import Faq from "./_sections/Faq";
import FinalCta from "./_sections/FinalCta";

/**
 * Renders the marketing landing page by composing the top-level conversion
 * sections. Navigation and footer are provided by the (marketing) layout.
 *
 * @returns The homepage for the public marketing site.
 */
export default function Home() {
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
