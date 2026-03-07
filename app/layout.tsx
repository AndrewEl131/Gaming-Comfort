import type { Metadata } from "next";
import "./globals.css";
import { Anton, Radio_Canada_Big, Playfair_Display, Cascadia_Mono } from "next/font/google";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const radioCanadaBig = Radio_Canada_Big({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-radio-canada-big",
});

const cascadiaMono = Cascadia_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-cascadia-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${radioCanadaBig.variable} ${playfair.variable} ${cascadiaMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}