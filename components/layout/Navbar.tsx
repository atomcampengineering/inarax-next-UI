import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "Solutions", href: "/solutions" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md border-b border-on-surface/5 shadow-sm">
      <div className="flex items-center justify-between px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          InaraX
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === "Solutions" ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary transition-colors font-body-md">
            Log in
          </button>
          <button className="bg-primary-container text-on-primary px-6 py-2 rounded-full font-bold transition-transform active:scale-95">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
