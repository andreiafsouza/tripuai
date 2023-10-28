import { ButtonProps } from "types/global";
import styles from "./styles.module.css";

const OutlinedBtn = ({ text, size }: ButtonProps) => {
  return (
    <button className={`${styles.outlined} ${styles.button}`}>
      <p className={`${size ? styles[size] : ""} ${styles.outlinedText}`}>
        {text}
      </p>
    </button>
  );
};

export default OutlinedBtn;
