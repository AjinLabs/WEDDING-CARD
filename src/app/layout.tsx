import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAVYA & ARJUN — Wedding Celebration",
  description: "You are cordially invited to celebrate the union of Navya & Arjun. A cinematic Indian wedding experience.",
  keywords: ["Navya and Arjun Wedding", "Indian Wedding Invitation", "Navya Arjun Wedding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-[#1C0507] text-[#FAF6EE] antialiased selection:bg-[#D4AF37]/30 selection:text-[#FAF6EE] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
