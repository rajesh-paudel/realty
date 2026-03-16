"use client";
import React from "react";

export default function GoSeeThisHome() {
  return (
    <div className="w-full bg-[#f7f7f7] rounded-xl p-2 md:p-5 border border-gray-100 shadow-sm font-sans">
      <div className="mb-3 px-1">
        <h3 className="text-xl font-semibold text-slate-900">
          Request information
        </h3>
        <p className="text-xs text-gray-600">
          Share a few details and we will follow up shortly.
        </p>
      </div>
      {/* Form Fields */}
      <form className="space-y-2.5">
        <div>
          <input
            type="text"
            placeholder="Full name"
            className="w-full h-12 px-3 rounded-lg border border-gray-300 bg-white text-base outline-none focus:ring-2 focus:ring-[#004d4d] transition-all placeholder:text-gray-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-3 rounded-lg border border-gray-300 bg-white text-base outline-none focus:ring-2 focus:ring-[#004d4d] transition-all placeholder:text-gray-500"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full h-12 px-3 rounded-lg border border-gray-300 bg-white text-base outline-none focus:ring-2 focus:ring-[#004d4d] transition-all placeholder:text-gray-500"
          />
        </div>
        <div>
          <textarea
            rows={4}
            defaultValue="I would like more information about this property. Thank you."
            className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm outline-none focus:ring-2 focus:ring-[#004d4d] transition-all resize-none text-gray-700"
          />
        </div>

        {/* Marketing Consent */}
        <div className="flex items-start gap-2 mt-2 px-1">
          <input
            type="checkbox"
            id="marketing"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#004d4d] focus:ring-[#004d4d] cursor-pointer"
          />
          <label
            htmlFor="marketing"
            className="text-xs text-gray-700 leading-snug cursor-pointer"
          >
            I consent to receive marketing and promotional messages by phone,
            text message, and email from realty executives Sudbury.
          </label>
        </div>

        {/* Primary Action */}
        <button
          type="submit"
          className="w-full cursor-pointer text-white text-base font-bold py-3 rounded-full mt-2 transition-colors duration-200 bg-rose-500 hover:bg-rose-700"
        >
          Send request
        </button>
      </form>
    </div>
  );
}
