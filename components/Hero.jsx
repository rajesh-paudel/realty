"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import nProgress from "nprogress";
export default function Hero() {
  const router = useRouter();
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedCity = city.trim();
    if (!trimmedCity) return;

    const citySlug = trimmedCity.toLowerCase().replace(/\s+/g, "-");
    nProgress.start();
    router.push(`city/${citySlug}`);
  };

  return (
    <section className="relative min-h-[560px] overflow-hidden mb-10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center" />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[560px] max-w-5xl flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Find the home that fits your life
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Search by MLS number, address, or start with a city.
          </p>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-2xl items-center gap-3 rounded-full bg-white px-5 py-3 shadow-xl"
        >
          <Search className="h-5 w-5 text-slate-500" />

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search by city, MLS number or address"
            className="flex-1 bg-transparent text-base outline-none placeholder:text-slate-400"
          />

          <button
            type="submit"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white transition hover:bg-rose-700 cursor-pointer"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
