import Link from "next/link";
import Image from "next/image";
import logoBg from "../public/logo-bg.svg";
import teste from "../public/title-teste-ii.svg";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.wrapper}>
        <Image
          className={styles.logo}
          src={teste}
          alt=""
          //width={558}
          //height={152}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <Image
          className={styles.logoBg}
          src={logoBg}
          alt=""
          //width={558}
          //height={152}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>

      <h1>HELLO WORLD</h1>
      <Link href="/cartas">Cartas</Link>
    </main>
  );
}
