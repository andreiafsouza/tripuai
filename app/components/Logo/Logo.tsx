import Image from "next/image";
import styles from "./styles.module.css";
import logoBg from "@/public/logo-bg.svg";
import logo from "@/public/logo.svg";

type LogoProps = {
  width?: number;
  height?: number;
};

const Logo = ({ width, height }: LogoProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={!width && !height ? styles.logo : styles.logoSmall}
        src={logo}
        alt="Logo tripUAI"
        width={width && width}
        height={height && height}
      />
      {!width && !height ? (
        <Image className={styles.logoBg} src={logoBg} alt="" />
      ) : null}
    </div>
  );
};

export default Logo;
