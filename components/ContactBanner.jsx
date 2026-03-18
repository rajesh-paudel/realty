import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="bg-[#072a4a] px-6 py-12 text-white shadow-[0_24px_50px_-35px_rgba(2,10,20,0.6)]">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden text-center">
          <div className="pointer-events-none absolute inset-0 opacity-40"></div>
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Need Any Help Buying/Selling in Sudbury ?
            </h2>
            <p className="text-sm text-[#d7e6f8] sm:text-base">
              Connect with our executive team for guidance on buying, selling,
              or investing with confidence.
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-white/80 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us Today!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
