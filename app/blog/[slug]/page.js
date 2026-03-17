import Link from "next/link";

const posts = [
  {
    slug: "prepare-your-sudbury-home-for-sale",
    title: "How to prepare your Sudbury home for a fast sale",
    date: "Mar 12, 2025",
    readTime: "5 min read",
    tag: "Selling",
    image: "/hero.png",
    excerpt:
      "A practical checklist to help your home show well, price right, and attract serious buyers quickly.",
    sections: [
      {
        heading: "1) Set a pricing strategy before you list",
        body:
          "A strong first week drives the best offers. We review recent Sudbury sales, current inventory, and buyer demand to land on a price that brings traffic and protects your bottom line.",
      },
      {
        heading: "2) Make the first impression feel effortless",
        body:
          "Declutter counters, brighten rooms, and keep walkways open. Buyers should notice the space, not distractions. A clean, neutral look helps them imagine their life in the home.",
      },
      {
        heading: "3) Fix the small stuff that adds up",
        body:
          "Tighten handles, touch up scuffs, and replace burnt bulbs. Small repairs reduce objections and keep negotiations focused on value.",
      },
      {
        heading: "4) Stage with purpose, not excess",
        body:
          "Highlight the best use of each room: a calm primary bedroom, a welcoming living area, and a tidy kitchen. The goal is simple: make the space feel easy to live in.",
      },
      {
        heading: "5) Launch with professional marketing",
        body:
          "Great photos and a clear listing story matter. Combine that with flexible showings and targeted promotion for maximum early momentum.",
      },
    ],
    tips: [
      "Book photos after a light clean and window wipe-down.",
      "Open blinds and replace warm bulbs for a brighter look.",
      "Remove oversized furniture that makes rooms feel smaller.",
    ],
  },
  {
    slug: "first-time-buyer-mistakes-to-avoid",
    title: "First-time buyer mistakes to avoid",
    date: "Feb 28, 2025",
    readTime: "6 min read",
    tag: "Buying",
    image: "/join-executives.png",
    excerpt:
      "From financing to final walk-through, avoid the common traps that slow buyers down.",
    sections: [
      {
        heading: "1) Skipping the pre-approval step",
        body:
          "Pre-approval gives you a real budget and makes your offer stronger. It also helps you move quickly when the right home appears.",
      },
      {
        heading: "2) Focusing only on the list price",
        body:
          "Monthly costs include taxes, utilities, and insurance. We help you understand the true cost of ownership before you commit.",
      },
      {
        heading: "3) Underestimating neighborhood fit",
        body:
          "Commute time, schools, and amenities affect daily life. A great home only works if the location matches your routine.",
      },
      {
        heading: "4) Ignoring inspection details",
        body:
          "Inspections reveal issues you can plan for or negotiate. We help you separate minor fixes from real red flags.",
      },
      {
        heading: "5) Rushing the final walk-through",
        body:
          "This is your last check that repairs are complete and the home is in agreed condition. It protects you before possession day.",
      },
    ],
    tips: [
      "Keep a short list of must-haves and nice-to-haves.",
      "Budget for closing costs and moving expenses early.",
      "Ask for a simple timeline so every step feels clear.",
    ],
  },
  {
    slug: "rising-rates-northern-ontario-buyers",
    title: "What rising rates mean for Northern Ontario buyers",
    date: "Feb 10, 2025",
    readTime: "4 min read",
    tag: "Market",
    image: "/hero.png",
    excerpt:
      "A straightforward guide to budgeting, rate options, and offer strategy in today’s market.",
    sections: [
      {
        heading: "1) Anchor decisions to your monthly comfort zone",
        body:
          "Rates change, but your budget should stay steady. We help you build a plan around a payment you’re comfortable with.",
      },
      {
        heading: "2) Compare fixed and variable with context",
        body:
          "Fixed rates offer predictability, while variable rates can be lower depending on timing. We’ll help you weigh the trade-offs based on your timeline.",
      },
      {
        heading: "3) Strengthen your offer without overreaching",
        body:
          "In higher-rate markets, flexible terms and strong financing help you compete without stretching your budget too far.",
      },
      {
        heading: "4) Stay ready when the right home appears",
        body:
          "Inventory moves quickly. A clear plan and pre-approval keep you ready to act without stress.",
      },
    ],
    tips: [
      "Ask for rate holds to protect against short-term increases.",
      "Keep a buffer in your budget for utilities and taxes.",
      "Review mortgage terms in plain language before signing.",
    ],
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const rawSlug = Array.isArray(resolvedParams?.slug)
    ? resolvedParams.slug[0]
    : resolvedParams?.slug;
  const slug = rawSlug
    ? decodeURIComponent(rawSlug)
        .toLowerCase()
        .replace(/\/+$/, "")
        .split("?")[0]
    : "";
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">
            Article not found
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            The article you&apos;re looking for isn&apos;t available.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-800"
          >
            Back to blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            {post.tag}
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl font-serif">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            {post.date} {"\u00b7"} {post.readTime}
          </p>
          <p className="mt-4 text-base text-slate-600">{post.excerpt}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          <img
            src={post.image}
            alt={post.title}
            className="h-72 w-full object-cover sm:h-96"
          />
        </div>

        <div className="mt-10 space-y-8">
          {post.sections.map((section) => (
            <article key={section.heading} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {section.heading}
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Quick tips to remember
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {post.tips.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rose-600" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <img
              src="/join-executives.png"
              alt="Sudbury neighborhood"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-center sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            Want local guidance on your next move?
          </h3>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Talk with a Realty Executives advisor about pricing, financing, and
            the Sudbury market.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
            >
              Contact our team
            </Link>
            <Link
              href="/listings-in-sudbury"
              className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-300"
            >
              Browse listings
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 transition hover:text-rose-700"
          >
            Back to all articles
          </Link>
        </div>
      </section>
    </main>
  );
}
