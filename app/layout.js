import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Aurora from "@/components/aurora";
import Providers from "@/components/providors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Cooked",
  description: "Get roasted based on your Spotify listening habits. Made with Next.js, Tailwind CSS, Spotify API, and Gemini AI.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-black">
        {/* Aurora as full-page background */}
        <div className="fixed inset-0 -z-40">
          <Aurora />
        </div>

        <Providers>
          {/* Content layer */}
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}