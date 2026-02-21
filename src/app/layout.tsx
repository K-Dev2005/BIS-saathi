import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIS Saathi | Compliance Verification Portal",
  description: "Verify BIS certifications, report non-compliant products, and earn rewards for participation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-saffron/30`}
      >
        <Navbar />
        {children}
        <footer className="bg-navy text-white py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-white/40 font-bold uppercase tracking-widest mb-2">Developed for National Quality Mission</p>
            <p className="text-2xl font-black text-white">BIS Saathi</p>
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 gap-4">
              <p>© 2026 Bureau of Indian Standards (Mock Portal).</p>
              <div className="flex space-x-6">
                 <a href="#" className="hover:text-saffron transition">Privacy Policy</a>
                 <a href="#" className="hover:text-saffron transition">Terms of Service</a>
                 <a href="#" className="hover:text-saffron transition">Contact Us</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
