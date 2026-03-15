export default function CityPage({ params }) {
  const cityName = params.city.replace(/-/g, " ");

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-900">
        Listings in {cityName}
      </h1>
      <p className="mt-3 text-base text-slate-600">
        Results will appear here for {cityName}.
      </p>
    </main>
  );
}
