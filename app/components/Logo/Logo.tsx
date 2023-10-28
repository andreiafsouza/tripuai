import Image from "next/image";
import styles from "./styles.module.css";
import logoBg from "@/public/logo-bg.svg";
import logo from "@/public/logo.svg";

type LogoProps = {
  size?: "small" | "default";
};

const Logo = ({ size }: LogoProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={!size || size === "default" ? styles.logo : styles.logoSmall}
        src={logo}
        alt="Logo tripUAI"
        width={size === "small" ? 208 : 573}
      />

      <Image
        className={!size || size === "default" ? styles.logoBg : styles.bgSmall}
        src={logoBg}
        alt=""
        width={size === "small" ? 248 : 685}
      />
    </div>
  );
};

export default Logo;
