import Logo from "../Logo/Logo";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Logo width={172} />
      </div>
    </header>
  );
};

export default Header;
