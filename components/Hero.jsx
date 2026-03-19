"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import nProgress from "nprogress";
export default function Hero() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const quickLinks = ["Toronto", "Richmond Hill", "Markham", "Bradford"];

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedCity = city.trim();
    if (!trimmedCity) return;

    const citySlug = trimmedCity.toLowerCase().replace(/\s+/g, "-");
    nProgress.start();
    router.push(`city/${citySlug}`);
  };

  return (
    <section className="relative -mt-px overflow-hidden bg-[#e6f3ff]">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 160"
          className="h-20 w-full sm:h-24 lg:h-28"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,96 C240,160 480,160 720,112 C960,64 1200,0 1440,16 L1440,160 L0,160 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col items-center gap-8 px-6 pb-16 pt-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="w-full md:w-1/2 md:max-w-none md:pr-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            Explore listings across Canada
          </div>
          <h1 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Find the home that fits your life.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Search by MLS&#174; number, address, or start with a city.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-4 flex w-full items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-xl sm:gap-3 sm:px-5 sm:py-3"
          >
            <Search className="h-4 w-4 shrink-0 text-slate-500 sm:h-5 sm:w-5" />

            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search by MLS® Number or Address"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 sm:text-base"
            />

            <button
              type="submit"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white transition hover:bg-rose-700 sm:h-10 sm:w-10 cursor-pointer"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {quickLinks.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  const citySlug = label.toLowerCase().replace(/\s+/g, "-");
                  nProgress.start();
                  router.push(`city/${citySlug}`);
                }}
                className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 md:max-w-none md:pl-2">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-2xl ring-1 ring-black/5">
            <img
              src="/join-executives.png"
              alt="Featured listing"
              className="aspect-[16/9] w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
