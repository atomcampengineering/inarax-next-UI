/**
 * Minimal shell for the authentication flow — deliberately skips the
 * shared Navbar/Footer from the (main) route group, since a sign-in/sign-up
 * screen shouldn't offer marketing navigation away from the task at hand.
 *
 * @param children - The active auth page (login or signup).
 * @returns A centered, chrome-free layout for the (auth) route group.
 */
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex items-center justify-center px-margin-mobile md:px-margin-desktop bg-surface">
      {children}
    </div>
  );
}
