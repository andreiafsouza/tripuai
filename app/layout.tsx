import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"], weight: "500" });

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
      <body className={noto.className}>{children}</body>
    </html>
  );
}
