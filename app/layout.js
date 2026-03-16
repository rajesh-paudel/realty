import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import Footer2 from "@/components/Footer2";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Realty Executives Sudbury | Homes for Sale & Local Experts",
  description:
    "Discover Sudbury homes for sale, expert agents, and local market insights from Realty Executives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <NextTopLoader
          color="#29D"
          height={3}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <Navbar />
        {children}
        <Footer />
        <Footer2 />
      </body>
    </html>
  );
}
