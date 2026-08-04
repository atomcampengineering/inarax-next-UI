import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "B2B", href: "/b2b" },
  { label: "Enterprise", href: "/enterprise" },
];

const legalLinks = [
  { label: "Legal", href: "/legal" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const socialLinks = [
  { label: "Website", icon: "public" },
  { label: "Chat", icon: "chat" },
  { label: "Careers", icon: "work" },
];

/**
 * Renders the site footer with the brand blurb, product/legal navigation,
 * a consultation CTA, and social links.
 *
 * @returns The shared marketing footer.
 */
export default function Footer() {
  return (
    // Light surface footer, per the "Corporate Modernism" design system — a thin top border
    // separates it from the page instead of the previous dark inverse-surface band.
    <footer className="w-full px-margin-desktop py-size-lg grid grid-cols-1 md:grid-cols-4 gap-gutter bg-surface-container-lowest border-t border-outline-variant/50">
      <div className="space-y-size-md">
        <Image
          alt="InaraX Logo"
          className="w-32 object-contain mb-size-md"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8mT3Hbo_ioxofYAmD1WXUWXOwqLmTvyGkevd_DQvfH96zMa7DbE-r9Al-XOauSrOruC5u6OZd4XCy6fiSg6VdoCBr1bCOZTLySuzFEc00xVv-VHffIeIg2LNBIB2gKDvLGXaLR8znPXHEcm3IDUXfUBYDCZmXzgpsPqjxBj-OwQOfTpB4MtZNE7XzbiVRG6hZB780qunFDK44BLjwKamDOLb6sDOUcQuFTdPYuJY2fxXitSxL3-1P-1zkS7x3c-1q7zOzaCNdCos"
          width={128}
          height={40}
        />
        <p className="text-on-surface-variant font-body-md">
          Personalized learning paths powered by AI, verified by industry
          experts. A product of Atomcamp Arabia.
        </p>
        <div className="flex gap-size-md">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
              aria-label={social.label}
            >
              <span className="material-symbols-outlined">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-headline-md text-headline-md mb-size-md">Product</h4>
        <ul className="space-y-size-sm">
          {productLinks.map((link) => (
            <li key={link.label}>
              <Link
                className="text-on-surface-variant hover:text-primary transition-transform inline-block hover:translate-x-1"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-headline-md text-headline-md mb-size-md">Legal</h4>
        <ul className="space-y-size-sm">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <Link
                className="text-on-surface-variant hover:text-primary transition-transform inline-block hover:translate-x-1"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-headline-md text-headline-md mb-size-md">Contact</h4>
        <p className="text-on-surface-variant font-body-md">
          Ready to start? Get in touch with our learning advisors.
        </p>
        <Link
          className="mt-size-md inline-block text-primary font-label-md text-label-md border-b-2 border-primary"
          href="/request-consultation"
        >
          Request a consultation
        </Link>
      </div>
      <div className="col-span-1 md:col-span-4 pt-size-lg border-t border-outline-variant/30 text-center">
        <p className="text-on-surface-variant font-label-md text-label-md">
          © 2026 InaraX AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
