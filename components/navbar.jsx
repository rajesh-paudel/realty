"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileOpen(false);
  const closePropertiesMenu = () => setIsPropertiesOpen(false);

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <nav className="mx-auto flex w-full items-center justify-between px-3 sm:px-8 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Realty logo" className="h-12 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-7 text-base font-semibold text-gray-700 lg:flex">
            <li>
              <Link className="transition-colors hover:text-blue-600" href="/">
                Home
              </Link>
            </li>
            <li
              className="relative after:absolute after:left-0 after:top-full after:h-3 after:w-full after:content-['']"
              onMouseEnter={() => setIsPropertiesOpen(true)}
              onMouseLeave={() => setIsPropertiesOpen(false)}
              onFocus={() => setIsPropertiesOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsPropertiesOpen(false);
                }
              }}
            >
              <div className="inline-flex items-center gap-2 transition-colors hover:text-blue-600">
                Real Estate Properties
                <span className="relative h-4 w-4">
                  <ChevronDown
                    className={`absolute inset-0 h-4 w-4 transition-opacity ${
                      isPropertiesOpen ? "opacity-0" : "opacity-100"
                    }`}
                    aria-hidden="true"
                  />
                  <ChevronUp
                    className={`absolute inset-0 h-4 w-4 transition-opacity ${
                      isPropertiesOpen ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div
                className={`absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-gray-100 bg-white p-3 shadow-lg transition duration-150 ${
                  isPropertiesOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <Link
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                  href="/listings-in-sudbury"
                  onClick={closePropertiesMenu}
                >
                  View Sudbury Listings
                </Link>
                <Link
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                  href="/listings-in-sudbury?homeType=Office&listingType=lease"
                  onClick={closePropertiesMenu}
                >
                  Office Properties
                </Link>

                <Link
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                  href={"#open-houses"}
                  onClick={closePropertiesMenu}
                >
                  Open Houses
                </Link>
              </div>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-blue-600"
                href="/our-executives"
              >
                Our Executives
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-blue-600"
                href="/#testimonials"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-blue-600"
                href="/join-executives"
              >
                Join Executives
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-blue-600"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="inline-flex items-center justify-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-blue-600 lg:hidden"
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-white p-6 shadow-xl transition-transform lg:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-gray-900">Menu</span>
          <button
            className="rounded-md border border-gray-200 px-2 py-1 text-sm font-semibold text-gray-700 transition-colors hover:text-blue-600"
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-4 text-base font-semibold text-gray-700">
          <Link
            className="hover:text-blue-600"
            href="/"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <div>
            <Link
              className="inline-flex items-center gap-2 hover:text-blue-600"
              href="#properties"
              onClick={closeMobileMenu}
            >
              Real Estate Properties
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="mt-3 flex flex-col gap-2 pl-3 text-sm font-medium text-gray-600">
              <Link
                className="hover:text-blue-600"
                href="/listings-in-sudbury"
                onClick={closeMobileMenu}
              >
                View Sudbury Listings
              </Link>
              <Link
                className="hover:text-blue-600"
                href="/listings-in-sudbury?homeType=Office&listingType=lease"
                onClick={closeMobileMenu}
              >
                Office Properties
              </Link>

              <Link
                className="hover:text-blue-600"
                href="#open-houses"
                onClick={closeMobileMenu}
              >
                Open Houses
              </Link>
            </div>
          </div>
          <Link
            className="hover:text-blue-600"
            href="/our-executives"
            onClick={closeMobileMenu}
          >
            Our Executives
          </Link>
          <Link
            className="hover:text-blue-600"
            href="/#testimonials"
            onClick={closeMobileMenu}
          >
            Testimonials
          </Link>
          <Link
            className="hover:text-blue-600"
            href="/join-executives"
            onClick={closeMobileMenu}
          >
            Join Executives
          </Link>
          <Link
            className="hover:text-blue-600"
            href="/contact"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </nav>
      </aside>
    </header>
  );
}
