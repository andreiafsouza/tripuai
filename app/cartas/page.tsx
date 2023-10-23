import React from "react";
import citiesData from "../../cities.json";
/* style */
import styles from "./styles.module.css";
import CityCardList from "@/components/CityCardList/CityCardList";

export type CityProps = {
  id: number;
  nome: string;
  top: number;
  right: number;
  left: number;
  bottom: number;
  bioma: string;
};

const CitiesCardListPage = () => {
  const cities: CityProps[] = citiesData;

  return (
    <main className={styles.container}>
      <CityCardList cities={cities} />
    </main>
  );
};

export default CitiesCardListPage;
