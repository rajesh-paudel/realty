import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#04213f] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="space-y-3">
            <img
              src="/footerLogo.png"
              alt="Realty logo"
              className="h-20 w-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-red-400">Contact Info</h3>
          <p className="text-sm text-white/90">Office: 705-586-3334</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="text-white/90 hover:text-white" href="#privacy">
              Privacy Policy
            </Link>
            <Link className="text-white/90 hover:text-white" href="#terms">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-red-400">
            Office Location
          </h3>
          <p className="text-sm text-white/90">
            765 Barrydowne Rd Unit #101 Sudbury, ON P3A-3T6
          </p>
          <div className="flex gap-3 text-sm">
            <Link className="text-white/90 hover:text-white" href="#facebook">
              Facebook
            </Link>
            <Link className="text-white/90 hover:text-white" href="#instagram">
              Instagram
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
