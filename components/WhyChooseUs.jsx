const features = [
  {
    title: "Local Expertise",
    description:
      "Decades of Sudbury market insight to price, negotiate, and close with confidence.",
  },
  {
    title: "Full-Service Support",
    description:
      "From listing prep to marketing and showings, we handle the details end-to-end.",
  },
  {
    title: "Trusted Network",
    description:
      "Access vetted inspectors, lenders, and contractors for a smooth transaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl font-serif">
            A smarter way to buy or sell in Sudbury
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Professional guidance, clear communication, and results you can
            measure.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600/10 text-rose-600">
                <span className="text-base font-semibold">RE</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
