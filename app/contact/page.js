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
      <section className="mx-auto max-w-6xl px-6 py-8 pb-20">
        <div>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl text-center">
            Let&apos;s find your next home.
          </h1>
          <p className="text-base text-slate-600 text-center">
            Share what you&apos;re looking for and our local team will follow up
            with listings, tours, and market insights.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-600/10 text-rose-600">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Office</p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                705-586-3334
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-600/10 text-rose-600">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Email</p>
              <p className="mt-1 text-base font-semibold text-rose-600">
                sudburybroker@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-600/10 text-rose-600">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Office Address
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                765 Barrydowne Rd Unit #101
              </p>
              <p className="text-base font-semibold text-slate-900">
                Sudbury, ON P3A 3T6
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ContactForm
            title="Tell us about your move"
            description="Whether you&apos;re buying, selling, or relocating, we&apos;ll tailor the search to your timeline, budget, and preferred neighborhoods."
            submitLabel="Send message"
          />
        </div>
      </section>
    </main>
  );
}
