import { ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "How to prepare your Sudbury home for a fast sale",
    excerpt:
      "A step-by-step checklist for staging, pricing, and timing your listing for maximum attention.",
    date: "Mar 12, 2025",
    readTime: "5 min read",
    tag: "Selling",
    image: "/hero.png",
    slug: "prepare-your-sudbury-home-for-sale",
  },
  {
    title: "First-time buyer mistakes to avoid",
    excerpt:
      "From pre-approval to final walk-through, here are the most common pitfalls and how to avoid them.",
    date: "Feb 28, 2025",
    readTime: "6 min read",
    tag: "Buying",
    image: "/join-executives.png",
    slug: "first-time-buyer-mistakes-to-avoid",
  },
  {
    title: "What rising rates mean for Northern Ontario buyers",
    excerpt:
      "A quick guide to budgeting, lender options, and making offers with confidence.",
    date: "Feb 10, 2025",
    readTime: "4 min read",
    tag: "Market",
    image: "/hero.png",
    slug: "rising-rates-northern-ontario-buyers",
  },
];

export default function LatestBlogs() {
  return (
    <section className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl ">
            Our Blogs &amp; Insight
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            We dive into local market moves, buying tips, and selling strategies
            that help our clients make confident real estate decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white "
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover "
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                  {post.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 px-5 pb-6 pt-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {post.date} {"\u00b7"} {post.readTime}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-rose-600 transition hover:text-rose-700"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
