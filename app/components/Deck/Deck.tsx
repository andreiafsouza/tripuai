"use client";

import { useState } from "react";
import { CityCard } from "../CityCard/CityCard";
import { CityProps } from "types/global";
/* style */
import styles from "./styles.module.css";

const Deck = () => {
  const [cityCards, setCityCards] = useState<CityProps[]>([]);

  return (
    <section className={styles.deckContainer}>
      {cityCards.map((city) => (
        <CityCard
          nome={city.nome}
          id={city.id}
          top={city.top}
          right={city.right}
          left={city.left}
          bottom={city.bottom}
          bioma={city.bioma}
        />
      ))}
    </section>
  );
};

export default Deck;
