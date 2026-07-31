"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "B2B", href: "/b2b" },
];

/**
 * Renders the fixed top navigation bar used across the marketing pages.
 *
 * @returns The desktop-first header with brand, primary links, and CTAs.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // Keep the header pinned so the primary calls to action stay available while scrolling.
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md border-b border-on-surface/5 shadow-sm">
      {/* Constrain the content width while preserving the full-bleed blurred background. */}
      <div className="flex items-center justify-between px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          InaraX
        </div>
        <div className="hidden md:flex items-center gap-8">
          {/* Whichever link matches the current route is visually emphasized. */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1 font-body-md"
                    : "text-on-surface-variant hover:text-primary transition-colors font-body-md"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* Keep the auth and signup actions visually distinct from the navigation links. */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-on-surface-variant hover:text-primary transition-colors font-body-md"
          >
            Log in
          </button>
          <button
            type="button"
            className="bg-primary-container text-on-primary px-6 py-2 rounded-full font-bold transition-transform active:scale-95"
          >
            Sign up
          </button>
          {/* Mobile-only menu toggle — reveals the nav links below md, where they're otherwise hidden. */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-t border-on-surface/5 bg-surface px-margin-mobile py-4 flex flex-col gap-1"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
                className={
                  isActive
                    ? "text-primary font-bold py-2 font-body-md"
                    : "text-on-surface-variant hover:text-primary transition-colors py-2 font-body-md"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
