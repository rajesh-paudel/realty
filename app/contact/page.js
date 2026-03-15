import { Mail, MapPin, Phone } from "lucide-react";

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

        <div className="mt-12 flex flex-col gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl text-center font-semibold text-slate-900">
              Tell us about your move
            </h2>
            <p className="text-base text-slate-600 text-center">
              Whether you&apos;re buying, selling, or relocating, we&apos;ll
              tailor the search to your timeline, budget, and preferred
              neighborhoods.
            </p>
          </div>
          <form className="space-y-6 w-full max-w-5xl mx-auto rounded-3xl border border-slate-100 bg-white p-6 shadow-lg">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  id="firstName"
                  name="firstName"
                  placeholder="Jamie"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  id="lastName"
                  name="lastName"
                  placeholder="Lee"
                  type="text"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  id="phone"
                  name="phone"
                  placeholder="(705) 000-0000"
                  type="tel"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="interest"
                >
                  I&apos;m interested in
                </label>
                <select
                  className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  id="interest"
                  name="interest"
                >
                  <option>Buying a home</option>
                  <option>Selling a home</option>
                  <option>Renting</option>
                  <option>Relocating</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="timeline"
                >
                  Ideal move date
                </label>
                <input
                  className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  id="timeline"
                  name="timeline"
                  placeholder="Within 3 months"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-slate-700"
                htmlFor="message"
              >
                How can we help?
              </label>
              <textarea
                className="min-h-[120px] rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                id="message"
                name="message"
                placeholder="Tell us about neighborhoods, price range, and any must-haves."
              />
            </div>
            <div className="flex justify-center">
              <button
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                type="submit"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
