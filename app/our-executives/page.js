"use client";

import { useMemo, useState } from "react";

const executives = [
  {
    id: "ellis-boucher",
    name: "Ellis Boucher",
    role: "Sales Representative",
    phoneLabel: "Cell",
    phone: "705-562-7622",
    image: "/executives/ellis-boucher.png",
  },
  {
    id: "neil-cameron",
    name: "Neil Cameron",
    role: "REALTOR",
    phoneLabel: "Cell",
    phone: "705-521-4875",
    image: "/executives/neil-cameron.png",
  },
  {
    id: "steve-caswell",
    name: "Steve Caswell",
    role: "Broker/Owner",
    phoneLabel: "Cell",
    phone: "705-561-8767",
    image: "/executives/steve-caswell.png",
  },
  {
    id: "lise-coulombe",
    name: "Lise Coulombe",
    role: "Sales Representative",
    phoneLabel: "Cell",
    phone: "705-698-4567",
    image: "/executives/lise-coulombe.png",
  },
  {
    id: "gary-doyle",
    name: "Gary Doyle",
    role: "Sales Representative",
    phoneLabel: "Cell",
    phone: "705-691-6166",
    image: "/executives/gary-doyle.png",
  },
  {
    id: "amanda-gervais",
    name: "Amanda Gervais",
    role: "Broker of Record",
    phoneLabel: "Tel",
    phone: "705-586-3334",
    image: "/executives/amanda-gervais.png",
  },
  {
    id: "gilles-girouard",
    name: "Gilles Girouard",
    role: "Broker",
    phoneLabel: "Cell",
    phone: "705-665-4139",
    image: "/executives/gilles-girouard.png",
  },
  {
    id: "ron-perreault",
    name: "Ron Perreault",
    role: "Sales Representative",
    phoneLabel: "Tel",
    phone: "705-586-3334",
    image: "/executives/ron-perreault.png",
  },
  {
    id: "bruno-tassone",
    name: "Bruno Tassone",
    role: "Sales Representative",
    phoneLabel: "Cell",
    phone: "705-691-0450",
    image: "/executives/bruno-tassone.png",
  },
  {
    id: "carl-young",
    name: "Carl Young",
    role: "Broker",
    phoneLabel: "Tel",
    phone: "705-586-3334",
    image: "/executives/carl-young.png",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function OurExecutivesPage() {
  const [query, setQuery] = useState("");

  const filteredExecutives = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return executives;
    return executives.filter((exec) =>
      [exec.name, exec.role].some((value) =>
        value.toLowerCase().includes(normalized),
      ),
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-[#eee6dc] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8">
          <div className="max-w-2xl">
            <h1 className="mt-3 text-4xl font-semibold text-[#1f1a17] sm:text-5xl">
              Our Executives
            </h1>
            <p className="mt-4 text-base text-[#5c524a] sm:text-lg">
              The people shaping our vision, guiding your next move, and
              delivering exceptional outcomes every day.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex w-full items-center gap-2 rounded-full border border-[#e6e0d6] bg-white px-4 py-2 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8c7a6a]">
                Search
              </span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Find agent by name"
                className="w-full border-0 bg-transparent text-sm text-[#2a2420] outline-none placeholder:text-[#b1a59a]"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Search
            </button>
          </div>

          <div className="text-sm font-semibold text-[#7a6d62]">
            {filteredExecutives.length} Realtors found
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExecutives.map((exec) => (
            <article
              key={exec.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#eee6dc] bg-white shadow-[0_18px_40px_-30px_rgba(17,12,5,0.25)] transition hover:-translate-y-1 hover:shadow-[0_28px_55px_-32px_rgba(17,12,5,0.35)]"
            >
              <div className="relative overflow-hidden">
                <div className="relative mx-auto flex h-60 w-40 items-center justify-center bg-white">
                  {exec.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={exec.image}
                      alt={exec.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#f0ebe2] bg-white text-3xl font-semibold text-rose-600 shadow-sm">
                      {getInitials(exec.name)}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-5">
                <div>
                  <h2 className="text-xl font-semibold text-[#1f1a17]">
                    {exec.name}
                  </h2>
                  <p className="text-sm text-[#8a7b6d]">{exec.role}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-[#40352c]">
                  <span className="font-semibold">{exec.phoneLabel}:</span>
                  <span className="rounded-full bg-[#f6f3ee] px-3 py-1 font-semibold">
                    {exec.phone}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 cursor-pointer"
                >
                  View Profile
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
