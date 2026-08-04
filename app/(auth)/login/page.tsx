import Link from "next/link";

/**
 * Placeholder sign-in page, linked from the Navbar's "Log in" action.
 *
 * @returns A minimal centered placeholder card; no auth form is wired up yet.
 */
export default function LoginPage() {
  return (
    <section className="w-full max-w-md text-center bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-size-lg">
      <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-4">
        This is login
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
        This page is a placeholder — sign-in isn&apos;t built yet.
      </p>
      <Link href="/" className="text-primary font-bold hover:underline">
        Back to home
      </Link>
    </section>
  );
}
