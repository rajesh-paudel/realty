const features = [
  {
    title: "Expertise and Experience",
    description: "Local market insight from a proven, trusted team.",
  },
  {
    title: "Best Price Guidance",
    description: "Smart pricing strategies to maximize your outcome.",
  },
  {
    title: "Flexible Options",
    description: "Tailored plans that fit your timeline and goals.",
  },
  {
    title: "24/7 Client Support",
    description: "We stay responsive at every step of the process.",
  },
  {
    title: "Safety and Security",
    description: "Verified listings and careful, transparent guidance.",
  },
  {
    title: "Dedicated Advisors",
    description: "Personalized help from search to closing.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-32 sm:pb-44">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            Why{" "}
            <span className="font-semibold text-rose-500">
              Realty Executives Sudbury
            </span>
            ?
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Real estate expertise that makes buying, selling, and relocating
            feel clear, confident, and supported.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="space-y-12">
            {[features[0], features[1], features[2]].map((feature, index) => (
              <div
                key={feature.title}
                className={`text-right ${index % 2 === 0 ? "" : "mr-10 "}`}
              >
                <div className="flex items-center justify-end gap-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <span
                    className={`h-3 w-3 rounded-full ${
                      index % 2 === 0 ? "bg-rose-500" : "bg-blue-500 "
                    }`}
                  />
                </div>
                <p className="mt-1 text-base text-slate-600 ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="/whychooseus.png"
              alt="Why choose us"
              className="h-56 w-56 object-contain sm:h-96 sm:w-96"
            />
          </div>

          <div className="space-y-12">
            {[features[3], features[4], features[5]].map((feature, index) => (
              <div
                key={feature.title}
                className={`text-left ${index % 2 === 0 ? "" : "ml-10 "}`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      index % 2 === 0 ? "bg-rose-500" : "bg-blue-500"
                    }`}
                  />
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-1 text-base text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
