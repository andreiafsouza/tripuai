import type { Metadata } from "next";
import { Baloo_2, Open_Sans } from "next/font/google";
import "./globals.css";

const open = Open_Sans({ subsets: ["latin"] });
const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "TripUai Jogo de Cartas",
  description: "TripUai é o Jogo de Cartas das cidades de Minas Gerais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  );
}
