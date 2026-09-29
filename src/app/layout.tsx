import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Criterio Media",
  description: "Forjamos criterio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${manrope.variable}`}>
      <body className="font-sans bg-[#0D0D0D]">{children}</body>
    </html>
  );
}
