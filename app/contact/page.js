import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Realty Executives Sudbury | Get in Touch",
  description:
    "Reach the Realty Executives Sudbury team for buying, selling, or career questions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-2 sm:px-6 py-8 pb-20">
        <div className="mx-auto w-full sm:max-w-3xl">
          <ContactForm
            title="Tell us about your move"
            description="Whether you're buying, selling, or relocating, we'll tailor the search to your timeline, budget, and preferred neighborhoods."
            submitLabel="Send message"
          />
        </div>
      </section>
    </main>
  );
}
