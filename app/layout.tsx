import type { Metadata } from "next";
import "./globals.css";
import { Anton, Radio_Canada_Big } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
