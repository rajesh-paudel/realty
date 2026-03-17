export default function ContactForm({
  title = "Tell us about your move",
  description = "Share a few details and our team will reach out with next steps.",
  submitLabel = "Send message",
  compact = false,
}) {
  return (
    <section className="bg-white">
      <div
        className={`mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 ${
          compact ? "py-8 sm:py-10" : "py-8 sm:py-12"
        }`}
      >
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-slate-100 bg-white p-3 shadow-lg sm:p-8">
          <div className="mb-6 text-center">
            <img
              src="/logo.png"
              alt="Realty logo"
              className="mx-auto mb-4 h-16 w-auto sm:h-20"
            />
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
          </div>

          <form className="space-y-5">
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
            {!compact && (
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
            )}
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
                className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
                type="submit"
              >
                {submitLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
