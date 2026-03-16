import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="bg-[#072a4a] px-6 py-12 text-white shadow-[0_24px_50px_-35px_rgba(2,10,20,0.6)]">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden text-center">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -right-24 top-8 h-56 w-56 rounded-full bg-[#1a4a78] blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[#0a3a5f] blur-3xl" />
          </div>
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#a9c6e8]">
              We Have Answers
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Have Real Estate Questions?
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
