import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Shared chrome for every marketing page (the `(main)` route group): a fixed
 * Navbar, a flex-grow main slot for the page content, and the Footer.
 *
 * @param children - The page content rendered for the current route.
 * @returns The marketing layout shell.
 */
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
