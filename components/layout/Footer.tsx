const productLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Pricing", href: "/pricing" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Security", href: "/security" },
];

const contactLinks = [
  { label: "Contact Sales", href: "/contact-sales" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

/**
 * Renders the site footer with product, legal, and contact navigation links.
 *
 * @returns The shared marketing footer.
 */
export default function Footer() {
  return (
    // Use the darker inverse surface to separate the footer from the main content stack.
    <footer className="bg-inverse-surface border-t border-outline-variant/10">
      {/* Lay out the link groups in columns that collapse cleanly on smaller screens. */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter px-margin-desktop py-12 max-w-container-max mx-auto">
        <div className="col-span-2 md:col-span-1">
          <div className="font-headline-sm text-headline-sm font-bold text-inverse-on-surface mb-4">
            InaraX
          </div>
          <p className="text-on-surface-variant text-body-sm max-w-xs mb-4">
            Adaptive learning for individuals &amp; teams.
          </p>
        </div>
        <div>
          <h4 className="font-label-caps text-on-primary-fixed-variant mb-6 uppercase">
      {/* Keep the legal line and utility icons in a separate row so they read like footer metadata. */}
            Product
          </h4>
          <ul className="space-y-4">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-on-surface-variant hover:text-inverse-on-surface transition-colors text-body-sm"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-on-primary-fixed-variant mb-6 uppercase">
            Legal
          </h4>
          <ul className="space-y-4">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-on-surface-variant hover:text-inverse-on-surface transition-colors text-body-sm"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-on-primary-fixed-variant mb-6 uppercase">
            Contact
          </h4>
          <ul className="space-y-4">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-on-surface-variant hover:text-inverse-on-surface transition-colors text-body-sm"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-body-sm">
          © 2024 InaraX AI. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-on-surface-variant hover:text-white cursor-pointer">
            language
          </span>
          <span className="material-symbols-outlined text-on-surface-variant hover:text-white cursor-pointer">
            hub
          </span>
        </div>
      </div>
    </footer>
  );
}
