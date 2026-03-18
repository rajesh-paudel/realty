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
      <section className=" bg-white">
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

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">
                Local Expertise
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Our executives live and work in Sudbury, bringing trusted market
                insights to every client.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">
                Tailored Guidance
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                From first tours to closing day, we build a plan around your
                goals and timeline.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">
                Full-Service Support
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Marketing, negotiations, and local partnerships that help you
                move with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14 pt-6">
        <div className="grid justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredExecutives.map((exec) => (
            <article
              key={exec.id}
              className="flex h-full w-full max-w-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white "
            >
              <div className="relative overflow-hidden">
                <div className="relative mx-auto flex aspect-[4/5] w-full items-center justify-center bg-slate-50">
                  {exec.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={exec.image}
                      alt={exec.name}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-slate-200 bg-white text-3xl font-semibold text-rose-600 shadow-sm">
                      {getInitials(exec.name)}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {exec.name}
                  </h2>
                  <p className="text-sm text-slate-600">{exec.role}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-700">
                  <span className="font-semibold">{exec.phoneLabel}:</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
                    {exec.phone}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-auto inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 transition hover:border-slate-300"
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
