"use client";

const testimonials = [
  {
    quote:
      "Carl and his team at Realty Executives were amazing to work with! We were searching for our first home for quite some time and he made the process so easy and enjoyable! We battled some issues along the way but Carl was there through every step of it with helpful advice and insight. I have and will continue to highly recommend Carl and his team to anyone looking to buy or sell a home! Thank you again Carl and Realty Executives for getting us into our FIRST HOME!!",
    name: "Michelle & Kevin",
    rating: 5,
  },
  {
    quote:
      "When we decided that we were going to sell our house, we interviewed several realtors to sell our home of close to 20 years. By far, Gary came out on top for his professionalism, knowledge and down to earth approach. Immediately, we felt that we had made the right decision which made selling our home an easy task. Gary had it sold within 48 hours of being on the market! I would highly recommend him to anyone selling or buying a home without hesitation.",
    name: "Nicole",
    rating: 4.5,
  },
  {
    quote:
      "I was introduced to Carl Young through a friend when I was looking to purchase a home. I found Carl to be very knowledgeable and well versed in all aspects of the business. There is were no high pressure sales pitches, just honest one to one discussions with any concerns I may have had. I really appreciate the honesty and professionalism which he possessed I would recommend Carl to anyone who is in the market Respectfully.",
    name: "Tim",
    rating: 5,
  },
  {
    quote:
      "Carla Bussolaro has restored my faith in real estate agents. She was able to find a buyer for my home the day it was listed. I appreciate her drive and approach in closing our sale. She is a wonderful agent and will be dealing with her again. Thank you again Carla for making this stress free.",
    name: "Shelly Deneka",
    rating: 4.5,
  },
  {
    quote:
      "Michelle, as we settle into our new home, we wanted to take a minute to thank you for assisting us in fulfilling our dream. It was a pleasure to work with someone who listened to what we wanted in a house and not what they thought we should have. It was equally reassuring to have your experience on our side at closing when the sellers changed their minds once or twice. You made it happen! Come the day another move is in our future, we look forward to working with you again. Thank you Michelle Villeneuve.",
    name: "Eric & Nicole Dowling",
    rating: 5,
  },
  {
    quote:
      "After working with many realtors and receiving months of automated emails from MLS, I was introduced to Steve and Michelle who changed my perception on realtors. No more automated emails, but actual emails and texts from MY agents with houses they knew were in MY budget, MY locations, and were what I was actually looking for. Steve's experience as a handyman allows him to see through cosmetic blemishes and really understand the value of a home. The Caswell team's persistence and hard work was a welcome and refreshing experience. There are no other realtors I have met who compare to Steve and Michelle, they go above and beyond.",
    name: "From Jeff S.",
    rating: 4.5,
  },
];

const getInitials = (name) =>
  name
    .replace("From ", "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const truncateText = (text, maxLength = 240) =>
  text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl font-serif">
            What clients are saying
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Honest experiences from clients across Sudbury and beyond.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700">
                    {getInitials(item.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">Local guide</p>
                  </div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg
                    viewBox="0 0 48 48"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.12 1.53 7.52 2.8l5.14-5.14C33.19 4.09 28.93 2 24 2 14.72 2 6.76 7.3 3.13 15.01l6.12 4.76C11.09 13.06 17.06 9.5 24 9.5z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M46 24.5c0-1.55-.14-2.73-.44-3.95H24v7.49h12.66c-.26 2.01-1.66 5.04-4.76 7.07l6.25 4.86C42.34 35.81 46 30.9 46 24.5z"
                    />
                    <path
                      fill="#34A853"
                      d="M9.25 28.23A14.5 14.5 0 0 1 8.5 24c0-1.47.26-2.88.73-4.23l-6.12-4.76A23.9 23.9 0 0 0 2 24c0 3.87.93 7.52 2.57 10.77l6.68-6.54z"
                    />
                    <path
                      fill="#4285F4"
                      d="M24 46c6.48 0 11.92-2.13 15.9-5.77l-6.25-4.86c-1.68 1.16-3.93 1.97-9.65 1.97-6.94 0-12.82-3.56-14.86-8.61l-6.68 6.54C6.72 41.7 14.72 46 24 46z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, index) => {
                  const fullStars = Math.floor(item.rating);
                  const isHalf = item.rating === 4.5 && index === 4;
                  const isFull = index < fullStars;
                  if (isHalf) {
                    return (
                      <svg
                        key={index}
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="h-4 w-4"
                      >
                        <defs>
                          <linearGradient id={`half-${item.name}`}>
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="#e5e7eb" />
                          </linearGradient>
                        </defs>
                        <path
                          fill={`url(#half-${item.name})`}
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.449a1 1 0 00-1.176 0l-3.37 2.449c-.783.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.175 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.956z"
                        />
                      </svg>
                    );
                  }
                  return (
                    <svg
                      key={index}
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className={`h-4 w-4 ${
                        isFull ? "fill-current" : "fill-slate-200"
                      }`}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.449a1 1 0 00-1.176 0l-3.37 2.449c-.783.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.175 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.956z" />
                    </svg>
                  );
                })}
                <span className="ml-1 text-xs font-semibold text-slate-500">
                  {item.rating.toFixed(1)}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-700">
                {truncateText(item.quote)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
