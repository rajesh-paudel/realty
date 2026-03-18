import React from "react";

const steps = [
  {
    number: 1,
    title: "Sign up for free in 2 minutes",
    description:
      "Provide some basic information such as your address and mortgage information.",
    image: "/signUpForFree.png",
  },
  {
    number: 2,
    title: "Get personalised deals",
    description:
      "We analyse your data and match you to products from the whole of market (95 lenders+).",
    image: "/personalizedDeals.png",
  },
  {
    number: 3,
    title: "We keep looking for better deals",
    description:
      "We monitor your mortgage and home value and alert you to changes, keeping you on the best mortgage.",
    image: "/keepLookingBetter.png",
  },
  {
    number: 4,
    title: "Speak to a mortgage advisor",
    description:
      "We've partnered with Fluent Mortgages who will support you through the application process.",
    image: "/MortgageAdvisor.png",
  },
];

const MortgageSection = () => {
  return (
    <section className="py-20 pb-32 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600">
            Realty Executives Sudbury can help you save on your home-related
            finances
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white p-8 rounded-2xl  border border-gray-200 flex flex-col items-center text-center "
            >
              {/* Step Number Badge */}
              <div className="absolute -top-5 w-10 h-10 bg-white border-2 border-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 shadow-sm">
                {step.number}
              </div>

              {/* Icon Container */}
              <img
                src={step.image}
                alt=""
                className="h-36 w-36 object-contain"
                aria-hidden="true"
              />

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MortgageSection;
