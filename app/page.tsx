import Link from "next/link";
import Image from "next/image";
import tripUai from "../public/tripuai-logo.svg";
import style from "./styles.module.css";

export default function Home() {
  return (
    <main>
      <Image
        src={tripUai}
        alt=""
        //width={558}
        //height={152}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <h1>HELLO WORLD</h1>
      <Link href="/cartas">Cartas</Link>
    </main>
  );
}
