const features = [
  {
    title: "Expertise and Experience",
    description: "Local market insight from a proven, trusted team.",
    dotColor: "bg-yellow-400",
  },
  {
    title: "Best Price Guidance", // Middle Item Left
    description: "Smart pricing strategies to maximize your outcome.",
    dotColor: "bg-blue-500",
  },
  {
    title: "Flexible Options",
    description: "Tailored plans that fit your timeline and goals.",
    dotColor: "bg-yellow-400",
  },
  {
    title: "24/7 Client Support",
    description: "We stay responsive at every step of the process.",
    dotColor: "bg-yellow-400",
  },
  {
    title: "Safety and Security", // Middle Item Right
    description: "Verified listings and careful, transparent guidance.",
    dotColor: "bg-blue-500",
  },
  {
    title: "Dedicated Advisors",
    description: "Personalized help from search to closing.",
    dotColor: "bg-yellow-400",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-32 px-4 font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#333c4d]">
            Why{" "}
            <span className="text-[#f1c40f]">Realty Executives Sudbury</span>?
          </h2>
          <p className="mt-3 text-gray-500 font-light max-w-2xl mx-auto">
            Real estate expertise that makes buying, selling, and relocating
            feel clear, confident, and supported.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-12 items-center">
          {/* Left Column (Right Aligned) */}
          <div className="space-y-16 lg:space-y-24">
            {features.slice(0, 3).map((feature, idx) => (
              <div
                key={idx}
                className={`text-right transition-all duration-300 
                  ${idx === 1 ? "md:mr-12" : ""}`} // Pushes the middle item inward toward the car
              >
                <div className="flex items-center justify-end gap-3 mb-1">
                  <h3 className="text-lg font-bold text-[#333c4d]">
                    {feature.title}
                  </h3>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${feature.dotColor}`}
                  />
                </div>
                <p className="text-sm text-gray-400 font-light leading-relaxed max-w-[220px] ml-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Visual */}
          <div className="flex justify-center py-8">
            <img
              src="/whychooseus.png"
              alt="Realty Executives"
              className="w-full max-w-[420px] h-auto object-contain"
            />
          </div>

          {/* Right Column (Left Aligned) */}
          <div className="space-y-16 lg:space-y-24">
            {features.slice(3, 6).map((feature, idx) => (
              <div
                key={idx}
                className={`text-left transition-all duration-300
                  ${idx === 1 ? "md:ml-12" : ""}`} // Pushes the middle item inward toward the car
              >
                <div className="flex items-center justify-start gap-3 mb-1">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${feature.dotColor}`}
                  />
                  <h3 className="text-lg font-bold text-[#333c4d]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 font-light leading-relaxed max-w-[220px]">
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
