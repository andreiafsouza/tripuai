import { CardProps } from "types/global";
import styles from "./styles.module.css";
import { CityProps } from "types/global";

export const CityCard = ({
  id,
  nome,
  top,
  right,
  left,
  bottom,
  bioma,
}: CityProps) => {
  return (
    <section className={styles.container} title={nome}>
      <div className={styles.content}>
        <div className={styles.topScore}>
          <h1>{top}</h1>
        </div>
        <div className={styles.middleScore}>
          <h1>{left}</h1>
          <h1>{nome}</h1>
          <h1>{right}</h1>
        </div>
        <div className={styles.bottomScore}>
          <h1>{bottom}</h1>
        </div>
      </div>
    </section>
  );
};
