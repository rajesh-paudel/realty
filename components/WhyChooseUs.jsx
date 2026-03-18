import { CalendarCheck2, Handshake, MapPin, Megaphone } from "lucide-react";

const features = [
  {
    title: "Local Expertise",
    description:
      "Neighborhood knowledge to price, negotiate, and close with confidence.",
    icon: MapPin,
  },
  {
    title: "Strategic Marketing",
    description:
      "Professional visuals and targeted campaigns that reach the right buyers.",
    icon: Megaphone,
  },
  {
    title: "Full-Service Support",
    description: "From prep to offers, we manage the details end-to-end.",
    icon: Handshake,
  },
  {
    title: "Fast, Clear Timelines",
    description:
      "Quick scheduling and consistent updates so you always know next steps.",
    icon: CalendarCheck2,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-8 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-100/70 blur-[120px]" />
        <div className="absolute left-1/2 top-24 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-rose-100/50 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center font-sans">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Why choose{" "}
            <span className="font-normal italic text-slate-700">us?</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            From first tour to closing day, we keep your move simple, clear, and
            well-supported.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-8">
            {[features[0], features[2]].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src="/hero.png"
                alt="Realty Executives listing"
                className="relative h-64 w-64 rounded-2xl object-cover sm:h-72 sm:w-72"
              />
            </div>
            <button className="mt-16 rounded-lg bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600 cursor-pointer">
              Get a FREE consult
            </button>
          </div>

          <div className="space-y-8">
            {[features[1], features[3]].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
