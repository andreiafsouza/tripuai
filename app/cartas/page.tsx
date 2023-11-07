import React from "react";
import citiesData from "../../cities.json";
import { CityProps } from "types/global";
/* style */
import styles from "./styles.module.css";
import CityCardList from "@/components/CityCardList/CityCardList";

const CitiesCardListPage = () => {
  const cities: CityProps[] = citiesData;

  return (
    <main className={styles.container}>
      <CityCardList cities={cities} />
    </main>
  );
};

export default CitiesCardListPage;
