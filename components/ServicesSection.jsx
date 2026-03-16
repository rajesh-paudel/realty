const services = [
  {
    title: "Buy With Confidence",
    description:
      "Personalized search, neighborhood insights, and strategy that wins in competitive markets.",
  },
  {
    title: "Sell For Top Value",
    description:
      "Pricing, staging guidance, and multi-channel marketing to maximize exposure.",
  },
  {
    title: "Invest & Grow",
    description:
      "Smart acquisition planning, cash-flow analysis, and portfolio guidance.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl font-serif">
              Real estate guidance for every step
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Whether you&apos;re buying, selling, or investing, we tailor the
              plan to your goals.
            </p>
          </div>
          <div className="text-sm font-semibold text-rose-600">
            Realty Executives Sudbury
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {service.description}
              </p>
              <div className="mt-4 h-1 w-10 rounded-full bg-rose-600/60" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
