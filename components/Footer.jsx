import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#04213f] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[1.1fr_1fr_1fr]">
        <div className="flex justify-center md:justify-start">
          <img
            src="/footerLogo.png"
            alt="Realty logo"
            className="h-20 w-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-rose-500">Contact Info</h3>
          <p className="text-sm text-white/90">Office: 705-586-3334</p>
          <p className="text-sm text-white/90">
            Email: sudburybroker@gmail.com
          </p>
          <div className="flex items-center gap-3 text-sm">
            <Link
              className="flex items-center gap-2 text-white/90 hover:text-white"
              href="https://www.facebook.com/realtyexecutivesofsudbury"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.13h3.13V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.505 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.576h-3.123V24h6.123C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
              </svg>
              Facebook
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-rose-500">
            Office Location
          </h3>
          <p className="text-sm text-white/90">
            765 Barrydowne Rd Unit #101 Sudbury, ON P3A-3T6
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link className="text-white/90 hover:text-white" href="#privacy">
              Privacy Policy
            </Link>
            <Link className="text-white/90 hover:text-white" href="#terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-white/80">
          <p>Powered by YOAPress.com</p>
          <p className="mt-2">
            MLS, REALTOR, REALTORS and the associated logos are trademarks of
            The Canadian Real Estate Association (CREA).
          </p>
        </div>
      </div>
    </footer>
  );
}
