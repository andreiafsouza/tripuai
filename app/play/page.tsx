import Board from "@/components/Board/Board";
import Deck from "@/components/Deck/Deck";
import React from "react";
import { CityCard } from "@/components/CityCard/CityCard";
/* style */
import styles from "./styles.module.css";

const PlayGamePage = () => {
  return (
    <main className={styles.container}>
      <Deck />
      <Board />
      <Deck />
    </main>
  );
};

export default PlayGamePage;
