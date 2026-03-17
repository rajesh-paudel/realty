import Hero from "@/components/Hero";
import { fetchMedia, fetchProperties } from "@/lib/api";
import { cityToSlug } from "@/lib/slug";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import ContactBanner from "@/components/ContactBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Realty Executives Sudbury | Homes for Sale & Local Experts",
  description:
    "Discover Sudbury homes for sale, expert agents, and local market insights from Realty Executives.",
};
export default async function Home() {
  const Types = ["Detached", "Condo Apartment", "Multiplex", "Vacant Land"];
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
    (section) => section.properties.length > 0,
  );
  return (
    <main className="min-h-screen bg-white">
      <Hero />

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
      <WhyChooseUs />

      <ContactBanner />
      <ContactForm
        compact
        title="Ready to get started?"
        description="Tell us what you're looking for and we'll be in touch shortly."
        submitLabel="Send request"
      />
      <Testimonials />
    </main>
  );
}
