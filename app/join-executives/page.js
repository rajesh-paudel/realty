export const metadata = {
  title: "Join Realty Executives Sudbury | Careers",
  description:
    "Grow your real estate career with mentorship, marketing tools, and leadership support at Realty Executives Sudbury.",
};

export default function JoinExecutivesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Become an Executive with Realty Executives of Sudbury
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Simply email me direct at{" "}
              <span className="font-semibold text-rose-600">
                sudburybroker@gmail.com
              </span>{" "}
              for a{" "}
              <span className="font-semibold uppercase text-slate-900">
                confidential
              </span>{" "}
              discussion about your career objectives.
            </p>
            <p className="text-xs text-slate-600 sm:text-sm">
              We are a full service Brokerage with over 3500 Sq feet of modern
              office space. Realty Executives founded in 1965 and located in 27
              Countries, we offer all the tools for your marketing needs,
              Contact Management System, Social Media Tools, Promotional Banners
              for all advertising mediums. All your artwork at your fingertips
              wherever you are. Agent Websites connected to your listings
              instantly, Mobile Marketing System where listings can be accessed
              via text codes, Lead management system. We have what you need to
              grow your business professionally.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                Full-service marketing support
              </span>
              <span className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                Mentorship + training
              </span>
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

          <div className="relative lg:pt-2">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-rose-100 blur-2xl" />
            <div className="absolute -bottom-6 right-6 h-24 w-24 rounded-full bg-slate-100 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">
              <div className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/join-executives.png"
                  alt="Join Executives"
                  className="h-[360px] w-full object-cover sm:h-[420px] "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-100 bg-white p-6 shadow-lg sm:p-8">
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
