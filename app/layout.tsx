import type { Metadata } from "next";
import "./globals.css";
import { Anton, Radio_Canada_Big, Playfair_Display } from "next/font/google";
import Navigation from "@/Components/Navigation";

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
        className={`${anton.variable} ${radioCanadaBig.variable} ${playfair.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}