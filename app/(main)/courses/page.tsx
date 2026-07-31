import Hero from "./_sections/Hero";
import ProgramCards from "./_sections/ProgramCards";
import HowInaraxAdapts from "./_sections/HowInaraxAdapts";
import CommunityBlurb from "./_sections/CommunityBlurb";
import FinalCta from "./_sections/FinalCta";

/**
 * Renders the courses page by composing its sections in mockup order.
 * Navigation and footer come from the shared (main) layout.
 *
 * @returns The courses page.
 */
export default function CoursesPage() {
  return (
    <>
      <Hero />
      <ProgramCards />
      <HowInaraxAdapts />
      <CommunityBlurb />
      <FinalCta />
    </>
  );
}
