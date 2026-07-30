import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "./_sections/Hero";
import WhyGenericTrainingFails from "./_sections/WhyGenericTrainingFails";
import ThreeMovingParts from "./_sections/ThreeMovingParts";
import HowItWorks from "./_sections/HowItWorks";
import WhyPartnerWithInaraX from "./_sections/WhyPartnerWithInaraX";
import EnterpriseReady from "./_sections/EnterpriseReady";
import Faq from "./_sections/Faq";
import FinalCta from "./_sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <WhyGenericTrainingFails />
        <ThreeMovingParts />
        <HowItWorks />
        <WhyPartnerWithInaraX />
        <EnterpriseReady />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
