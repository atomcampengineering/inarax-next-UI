import Link from "next/link";

/**
 * Placeholder sign-up page, linked from the Navbar's "Sign up" action.
 *
 * @returns A minimal centered placeholder card; no registration form is wired up yet.
 */
export default function SignupPage() {
  return (
    <section className="w-full max-w-md text-center bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-size-lg">
      <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-4">
        This is signup
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
        This page is a placeholder — sign-up isn&apos;t built yet.
      </p>
      <Link href="/" className="text-primary font-bold hover:underline">
        Back to home
      </Link>
    </section>
  );
}
