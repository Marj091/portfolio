import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marjolijn de Vries — Grafisch Vormgever",
  description:
    "Portfolio van Marjolijn de Vries, grafisch vormgever gespecialiseerd in visuele communicatie, huisstijl en creatieve automatisering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#F9F6F1] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}
