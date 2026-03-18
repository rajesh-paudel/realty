export const metadata = {
  title: "Join Realty Executives Sudbury | Careers",
  description:
    "Grow your real estate career with mentorship, marketing tools, and leadership support at Realty Executives Sudbury.",
};

export default function JoinExecutivesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Realty Executives Careers
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Build your real estate career{" "}
              <span className="text-rose-600">with the right support.</span>
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Join a full-service brokerage built for ambitious agents. We pair
              modern tools, marketing support, and mentorship so you can grow
              faster and close with confidence.
            </p>
            <p className="text-sm text-slate-500">
              Email us directly at{" "}
              <span className="font-semibold text-rose-600">
                sudburybroker@gmail.com
              </span>{" "}
              for a{" "}
              <span className="font-semibold uppercase text-slate-700">
                confidential
              </span>{" "}
              conversation.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700"
              >
                Apply now
                <span aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
              >
                See how it works
              </button>
            </div>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Realty Executives"
                className="h-10 w-auto"
              />
              <p className="text-sm font-semibold text-slate-700">
                Celebrating 50 Years of Excellence
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 left-6 h-20 w-20 rounded-full bg-rose-100 blur-2xl" />
            <div className="absolute -bottom-8 right-8 h-24 w-24 rounded-full bg-emerald-100 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-100 bg-white p-5 shadow-xl">
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero.png"
                  alt="Featured listing"
                  className="h-52 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Featured Listing
                  </p>
                  <p className="mt-2 text-base font-semibold text-slate-900">
                    4-bed modern home · Sudbury
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Open house bookings up 28% this week.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-xs text-slate-600">
                  <p className="font-semibold text-slate-700">
                    New buyer leads
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    36
                  </p>
                  <p className="mt-1">This month</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-xs text-slate-600">
                  <p className="font-semibold text-slate-700">
                    Listing exposure
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    4.9k
                  </p>
                  <p className="mt-1">Local impressions</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 text-xs text-slate-600">
                <p className="font-semibold text-slate-700">
                  Client follow-ups today
                </p>
                <p className="mt-2">5 calls · 4 emails</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 rounded-3xl border border-slate-200 bg-white p-6  sm:p-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-slate-900">
              Let&apos;s Talk About Your Next Move
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Share a few details and our leadership team will reach out.
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="fullName"
                >
                  Full Name *
                </label>
                <input
                  className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  id="fullName"
                  name="fullName"
                  placeholder="Jordan Smith"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="email"
                >
                  Email *
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
                  Phone *
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
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-slate-700"
                htmlFor="message"
              >
                Enter your questions or comments below
              </label>
              <textarea
                className="min-h-[160px] rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                id="message"
                name="message"
                placeholder="Tell us about your goals, experience, and what you need in a brokerage."
              />
            </div>
            <div className="flex justify-center">
              <button
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 cursor-pointer"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
