"use client";

const testimonials = [
  {
    quote:
      "Carl and his team at Realty Executives were amazing to work with! We were searching for our first home for quite some time and he made the process so easy and enjoyable! We battled some issues along the way but Carl was there through every step of it with helpful advice and insight. I have and will continue to highly recommend Carl and his team to anyone looking to buy or sell a home! Thank you again Carl and Realty Executives for getting us into our FIRST HOME!!",
    name: "Michelle  ",
    rating: 5,
    date: "Aug 28, 2025",
  },
  {
    quote:
      "When we decided that we were going to sell our house, we interviewed several realtors to sell our home of close to 20 years. By far, Gary came out on top for his professionalism, knowledge and down to earth approach. Immediately, we felt that we had made the right decision which made selling our home an easy task. Gary had it sold within 48 hours of being on the market! I would highly recommend him to anyone selling or buying a home without hesitation.",
    name: "Nicole",
    rating: 4.5,
    date: "Jul 03, 2025",
  },
  {
    quote:
      "I was introduced to Carl Young through a friend when I was looking to purchase a home. I found Carl to be very knowledgeable and well versed in all aspects of the business. There is were no high pressure sales pitches, just honest one to one discussions with any concerns I may have had. I really appreciate the honesty and professionalism which he possessed I would recommend Carl to anyone who is in the market Respectfully.",
    name: "Tim",
    rating: 5,
    date: "Apr 10, 2025",
  },
  {
    quote:
      "Carla Bussolaro has restored my faith in real estate agents. She was able to find a buyer for my home the day it was listed. I appreciate her drive and approach in closing our sale. She is a wonderful agent and will be dealing with her again. Thank you again Carla for making this stress free.",
    name: "Shelly Deneka",
    rating: 4.5,
    date: "Aug 13, 2025",
  },
  {
    quote:
      "Michelle, as we settle into our new home, we wanted to take a minute to thank you for assisting us in fulfilling our dream. It was a pleasure to work with someone who listened to what we wanted in a house and not what they thought we should have. It was equally reassuring to have your experience on our side at closing when the sellers changed their minds once or twice. You made it happen! Come the day another move is in our future, we look forward to working with you again. Thank you Michelle Villeneuve.",
    name: " Nicole Dowling",
    rating: 5,
    date: "Jun 08, 2025",
  },
  {
    quote:
      "After working with many realtors and receiving months of automated emails from MLS, I was introduced to Steve and Michelle who changed my perception on realtors. No more automated emails, but actual emails and texts from MY agents with houses they knew were in MY budget, MY locations, and were what I was actually looking for. Steve's experience as a handyman allows him to see through cosmetic blemishes and really understand the value of a home. The Caswell team's persistence and hard work was a welcome and refreshing experience. There are no other realtors I have met who compare to Steve and Michelle, they go above and beyond.",
    name: "From Jeff S.",
    rating: 4.5,
    date: "Mar 17, 2025",
  },
];

const getInitials = (name) =>
  name
    .replace("From ", "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const truncateText = (text, maxLength = 220) =>
  text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
            Reviews
          </p>
          <div className="mt-1 flex items-center justify-center">
            <div className="isolate rounded bg-white px-3 py-2">
              <img
                src="/testimonial.png"
                alt="4.98 rating"
                className="h-16 w-auto mix-blend-darken contrast-125 brightness-95 sm:h-20"
              />
            </div>
          </div>
          <p className="mt-1 text-lg text-slate-600">
            We&apos;re proud to guide moves that clients consistently love.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 "
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-900">
                    {getInitials(item.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                  <span>{item.rating.toFixed(1)}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-4 w-4 fill-slate-900"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.449a1 1 0 00-1.176 0l-3.37 2.449c-.783.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.175 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.956z" />
                  </svg>
                </div>
              </div>

              <p className="text-sm leading-snug text-slate-700">
                {truncateText(item.quote)}
              </p>

              <p className="text-xs text-slate-400">{item.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
