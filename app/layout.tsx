import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Belleza, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const belleza = Belleza({
  subsets: ["latin"],
  variable: "--font-fancy",
  weight: "400",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-clean",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mizu Izakaya",
  description: "Denver's premier Izakaya experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${belleza.variable} ${dmSans.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
