import Hero from "@/components/Hero";
import { fetchMedia, fetchProperties } from "@/lib/api";
import { cityToSlug } from "@/lib/slug";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import ContactBanner from "@/components/ContactBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import MortgageSection from "@/components/MortgageSection";
import LatestBlogs from "@/components/LatestBlogs";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Realty Executives Sudbury | Homes for Sale & Local Experts",
  description:
    "Discover Sudbury homes for sale, expert agents, and local market insights from Realty Executives.",
};
export default async function Home() {
  const Types = ["Multiplex", "Vacant Land", "Detached"];
  const featuredByCity = await Promise.all(
    Types.map(async (homeType) => {
      const data = await fetchProperties({
        cityToPass: "Sudbury",
        listingType: "sale",
        homeType: homeType,
        top: 8,
        skip: 0,
      });

      const properties = await Promise.all(
        (data.items || []).map(async (property) => {
          const media = await fetchMedia(property.ListingKey, 1);
          return {
            ...property,
            Media: media,
            thumbnail: media?.[0]?.MediaURL || null,
          };
        }),
      );

      return {
        homeType,
        citySlug: "Sudbury",
        properties,
        totalCount: Number(data.totalCount) || properties.length,
      };
    }),
  );

  const featuredSections = featuredByCity.filter(
    (section) => section?.properties?.length > 0,
  );
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhyChooseUs />
      <section className="mx-auto max-w-5xl px-6 py-10 mt-6 text-center">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-5xl font-serif">
          New homes for sale in
          <span className=" ml-4 text-rose-500">Sudbury</span>
        </h2>
      </section>
      {featuredSections.map((section, index) => (
        <Slider
          key={section.homeType}
          sectionId={index === 0 ? "listings" : undefined}
          homeType={section.homeType}
          citySlug={section.citySlug}
          properties={section.properties}
          totalCount={section.totalCount}
        />
      ))}

      <MortgageSection />
      <ContactBanner />
      <LatestBlogs />

      <Testimonials />
      <div className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl mb-8 font-bold uppercase  text-slate-900 sm:text-4xl">
            Get in touch
          </h2>
          <div className="mt-4">
            <div className="mx-auto flex max-w-4xl flex-col gap-4 text-sm text-slate-700 sm:flex-row sm:justify-between">
              <div className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-1 sm:justify-start sm:px-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2z" />
                  </svg>
                </span>
                <span>705-586-3334</span>
              </div>
              <div className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-1 sm:justify-start sm:px-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <span>sudburybroker@gmail.com</span>
              </div>
              <div className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-center sm:flex-1 sm:justify-start sm:px-6 sm:text-left">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </span>
                <span className="leading-tight">
                  <span className="block">765 Barrydowne Rd Unit #101</span>
                  <span className="block">Sudbury, ON P3A-3T6</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm
          compact
          title="Ready to get started?"
          description="Tell us what you're looking for and we'll be in touch shortly."
          submitLabel="Send request"
          showHeader={false}
        />
      </div>
    </main>
  );
}
