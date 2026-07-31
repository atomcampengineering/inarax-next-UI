import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

/**
 * Closes the "personalized path" section with a compact cross-sell into the
 * B2B offering.
 *
 * @returns The B2B promotional band.
 */
export default function B2BBand() {
  return (
    <Reveal className="mt-size-lg bg-primary-container text-on-primary p-size-lg rounded-xl flex flex-col md:flex-row items-center justify-between gap-size-md">
      <div>
        <h5 className="font-headline-md text-headline-md mb-size-xs">
          InaraX for Organizations
        </h5>
        <p className="font-body-md opacity-90">
          Scalable skill verification for teams of 10 to 10,000.
        </p>
      </div>
      <Link
        className="bg-white text-primary-container px-size-lg py-size-sm rounded-lg font-label-md text-label-md whitespace-nowrap"
        href="/contact-sales"
      >
        Request Demo
      </Link>
    </Reveal>
  );
}
