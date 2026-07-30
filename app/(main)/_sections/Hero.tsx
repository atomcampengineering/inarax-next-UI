import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

/**
 * Renders the hero section that introduces the value proposition and primary CTA.
 *
 * @returns The top-of-page marketing hero.
 */
export default function Hero() {
  return (
    // Use a warm background block to separate the hero from the rest of the page sections.
    <section className="relative overflow-hidden py-24 bg-[#FFFBF0]">
      {/* Build the headline and illustration as a two-column composition on larger screens. */}
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps mb-6 uppercase tracking-wider">
            For organizations
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-6 leading-tight">
            AI training for your team, personalized to every role
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Your organization subscribes to inaraX, and we build a course for
            your people. Personalized to each role and seniority. Employees
            learn in the app while your admins track progress, completion,
            and quiz scores from a single dashboard.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-inverse-surface text-on-primary px-8 py-4 rounded-xl font-headline-sm text-headline-sm transition-all hover:shadow-lg active:scale-95">
              Request a consultation
            </button>
          </div>
        </Reveal>
        <Reveal delayMs={200} className="relative">
          {/* The image sits inside a circular glass card to match the site’s premium visual language. */}
          <div className="glass-card p-4 rounded-full aspect-square flex items-center justify-center relative z-10 overflow-hidden">
            <Image
              alt="A clean, professional 3D rendering of a futuristic learning interface showing diverse team members connecting via digital nodes."
              className="w-full h-full object-cover rounded-full shadow-inner"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyF_-7GGOVIUPtgQdYByVdICxiJnePk4kFcXpH9HhJnhmKohoAKHLHmXHBusICXXsOfAY8aR_OzGY628QxZq1eyWrJh2fRmwVtx5pGogOfa8sTSgOF99beBAxiQQJc_k8wVLTZrtVigzzQueIE54tQMU2TG4WuIBhNTbY-fMqdiFHRs1ZVR1vZ9CsDY1PhfhDBbNO8m0QMtO3rgs6Opr3419G87tBwmOccwyoaB8kAi51lNaAYcN3XoisaouT3bh6RtL_ol2h9aZg"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              priority
            />
          </div>
          {/* The blurred orb adds depth without introducing another hard-edged shape. */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
        </Reveal>
      </div>
    </section>
  );
}
