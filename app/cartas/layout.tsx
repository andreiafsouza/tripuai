import type { Metadata } from "next";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "TripUai Cartas",
  description:
    "Conheça as cartas do jogo TripUai, onde cada carta representa uma cidade de Minas Gerais",
};

export default function CardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
