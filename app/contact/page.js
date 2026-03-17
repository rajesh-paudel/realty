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

        <div className="mt-10 mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-slate-900 text-center">
            Contact Details
          </h2>
          <p className="mt-2 text-sm text-slate-600 text-center">
            Reach us by phone, email, or visit our office.
          </p>
        </div>

        <div className="mt-6 mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="flex min-w-0 items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600/10 text-rose-600 shrink-0">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Office</p>
              <p className="mt-1 text-base font-semibold text-slate-900 whitespace-nowrap">
                705-586-3334
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600/10 text-rose-600 shrink-0">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Email</p>
              <p className="mt-1 text-base font-semibold text-slate-900 whitespace-nowrap">
                sudburybroker@gmail.com
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600/10 text-rose-600 shrink-0">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Office Address
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900 line-clamp-2">
                765 Barrydowne Rd Unit #101, Sudbury, ON P3A 3T6
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
