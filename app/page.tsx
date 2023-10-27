import Link from "next/link";
import Logo from "@/components/Logo/Logo";

export default function Home() {
  return (
    <main>
      <Logo />
      <h1>HELLO WORLD</h1>
      <Link href="/cartas">Cartas</Link>
    </main>
  );
}
