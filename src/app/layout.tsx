import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "GermanAI | AI bilan nemis tili ta'limi",
  description:
    "GermanAI.uz – sun'iy intellekt yordamida nemis tili imtihonlariga tayyorlaning. Kurslar, testlar va konsalting bir joyda."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-brand-black via-[#0A0A0A] to-brand-black text-brand-white">
        {children}
      </body>
    </html>
  );
}
