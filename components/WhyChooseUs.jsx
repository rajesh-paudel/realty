import {
  BarChart3,
  CalendarCheck2,
  Handshake,
  Home,
  MapPin,
  Megaphone,
} from "lucide-react";

const features = [
  {
    title: "Local Expertise",
    description:
      "Decades of Sudbury market insight to price, negotiate, and close with confidence.",
    icon: MapPin,
  },
  {
    title: "Strategic Marketing",
    description:
      "Professional photography, listing optimization, and targeted campaigns that drive qualified buyers.",
    icon: Megaphone,
  },
  {
    title: "Full-Service Support",
    description:
      "From listing prep to showings and offers, we handle the details end-to-end.",
    icon: Handshake,
  },
  {
    title: "Data-Driven Pricing",
    description:
      "We use local comps and trend analysis to position your home for maximum results.",
    icon: BarChart3,
  },
  {
    title: "Tour-Ready Scheduling",
    description:
      "Flexible booking, quick feedback loops, and proactive communication at every step.",
    icon: CalendarCheck2,
  },
  {
    title: "Buyer Guidance",
    description:
      "Clear roadmaps, lender coordination, and closing support for confident decisions.",
    icon: Home,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-t border-slate-100 bg-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-rose-100/60 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl font-serif">
            The local team that keeps your move on track
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Practical strategy, honest guidance, and steady communication from
            day one to closing day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600/10 text-rose-600 transition group-hover:scale-105">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr] sm:p-8">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              A plan built around your goals
            </h3>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              We align pricing, marketing, and negotiation with your timeline,
              so every decision stays focused on results.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700">
                Clear timelines
              </span>
              <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700">
                Consistent updates
              </span>
              <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700">
                Local negotiation edge
              </span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <p className="text-2xl font-semibold text-slate-900">350+</p>
              <p className="mt-1 text-xs text-slate-600">
                local transactions supported
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <p className="text-2xl font-semibold text-slate-900">24/7</p>
              <p className="mt-1 text-xs text-slate-600">
                proactive communication
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <p className="text-2xl font-semibold text-slate-900">98%</p>
              <p className="mt-1 text-xs text-slate-600">
                client satisfaction focus
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <p className="text-2xl font-semibold text-slate-900">1965</p>
              <p className="mt-1 text-xs text-slate-600">
                national brand heritage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
