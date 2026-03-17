import { Calculator, CheckCircle2, FileText, ShieldCheck } from "lucide-react";

const highlights = [
  "Compare rates from trusted lenders.",
  "Get pre-approved faster with expert guidance.",
  "Understand monthly payments before you buy.",
  "Lock in confidence with a clear mortgage plan.",
];

export default function MortgageSection() {
  return (
    <section className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
            Mortgages
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl font-serif">
            Straightforward mortgage planning, built around your numbers
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            We compare options, explain the details, and help you choose a plan
            you can feel good about.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              What working with us looks like
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              A clear path from first conversation to closing day.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600/10 text-rose-600">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Pre-approval and budget
                  </p>
                  <p className="text-xs text-slate-600">
                    Get clear on monthly costs, down payment, and price range.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600/10 text-rose-600">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Rate strategy
                  </p>
                  <p className="text-xs text-slate-600">
                    Compare fixed and variable options with no guesswork.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600/10 text-rose-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Closing support
                  </p>
                  <p className="text-xs text-slate-600">
                    Final review, paperwork, and lender coordination handled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Mortgage highlights
            </h3>
            <div className="mt-5 space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-rose-600" />
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <p className="text-2xl font-semibold text-slate-900">4.9 / 5</p>
              <p className="mt-1 text-xs text-slate-600">
                average client satisfaction
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                Get pre-approved
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-300"
              >
                Ask about rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
