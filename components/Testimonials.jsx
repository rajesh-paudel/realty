"use client";

const testimonials = [
  {
    quote:
      "Carl and his team at Realty Executives were amazing to work with! We were searching for our first home for quite some time and he made the process so easy and enjoyable! We battled some issues along the way but Carl was there through every step of it with helpful advice and insight. I have and will continue to highly recommend Carl and his team to anyone looking to buy or sell a home! Thank you again Carl and Realty Executives for getting us into our FIRST HOME!!",
    name: "Michelle & Kevin",
  },
  {
    quote:
      "When we decided that we were going to sell our house, we interviewed several realtors to sell our home of close to 20 years. By far, Gary came out on top for his professionalism, knowledge and down to earth approach. Immediately, we felt that we had made the right decision which made selling our home an easy task. Gary had it sold within 48 hours of being on the market! I would highly recommend him to anyone selling or buying a home without hesitation.",
    name: "Nicole",
  },
  {
    quote:
      "I was introduced to Carl Young through a friend when I was looking to purchase a home. I found Carl to be very knowledgeable and well versed in all aspects of the business. There is were no high pressure sales pitches, just honest one to one discussions with any concerns I may have had. I really appreciate the honesty and professionalism which he possessed I would recommend Carl to anyone who is in the market Respectfully.",
    name: "Tim",
  },
  {
    quote:
      "Carla Bussolaro has restored my faith in real estate agents. She was able to find a buyer for my home the day it was listed. I appreciate her drive and approach in closing our sale. She is a wonderful agent and will be dealing with her again. Thank you again Carla for making this stress free.",
    name: "Shelly Deneka",
  },
  {
    quote:
      "Michelle, as we settle into our new home, we wanted to take a minute to thank you for assisting us in fulfilling our dream. It was a pleasure to work with someone who listened to what we wanted in a house and not what they thought we should have. It was equally reassuring to have your experience on our side at closing when the sellers changed their minds once or twice. You made it happen! Come the day another move is in our future, we look forward to working with you again. Thank you Michelle Villeneuve.",
    name: "Eric & Nicole Dowling",
  },
  {
    quote:
      "After working with many realtors and receiving months of automated emails from MLS, I was introduced to Steve and Michelle who changed my perception on realtors. No more automated emails, but actual emails and texts from MY agents with houses they knew were in MY budget, MY locations, and were what I was actually looking for. Steve's experience as a handyman allows him to see through cosmetic blemishes and really understand the value of a home. The Caswell team's persistence and hard work was a welcome and refreshing experience. There are no other realtors I have met who compare to Steve and Michelle, they go above and beyond.",
    name: "From Jeff S.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl font-serif">
            Stories from buyers and sellers
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Honest experiences from clients across Sudbury and beyond.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3 text-slate-800">
                <span className="text-3xl font-black leading-none">"</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Client note
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                {item.quote}
              </p>
              <div className="mt-6 text-sm font-semibold text-slate-900">
                {item.name}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
