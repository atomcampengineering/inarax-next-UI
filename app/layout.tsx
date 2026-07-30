import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "InaraX | B2B AI Training for Teams",
  description:
    "InaraX builds AI training courses personalized to every role on your team. One subscription, one dashboard, adaptive learning for your whole organization.",
};

/**
 * Builds the root HTML shell for the app and wires the global fonts,
 * metadata, and base body styling used by every route.
 *
 * @param children - The active route tree rendered inside the shared shell.
 * @returns The document scaffold for the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Attach the two font families to CSS variables so Tailwind tokens can use them globally.
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      {/* Load Material Symbols once at the root so every section can reuse the icon font. */}
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Apply the shared surface, text, and selection styles to the entire app. */}
      <body className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed-dim">
        {children}
      </body>
    </html>
  );
}
