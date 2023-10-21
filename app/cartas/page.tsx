"use client";
import React, { useState } from "react";
import citiesData from "../../cities.json";
import { CityCard } from "@/components/CityCard/CityCard";
import { CityCardDisplay } from "@/components/CityCardDisplay/CityCardDisplay";
/* style */
import styles from "./styles.module.css";
import SelectCityButton from "@/components/SelectCityButton/SelectCityButton";

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
  const cities = citiesData;
  const [selectedCity, setSelectedCIty] = useState(cities[0].nome);

  const handleChangeCityCard = (name: string) => {
    const cardName: CityProps[] = cities.filter((city) => name === city.nome);
    const selectedName = cardName[0].nome;
    setSelectedCIty(selectedName);
  };

  return (
    <main className={styles.container}>
      <section className={styles.cardDisplay}>
        <CityCardDisplay title={selectedCity} />
      </section>
      <section className={styles.cardsList}>
        {cities.map((city) => (
          <SelectCityButton
            key={city.id}
            title={city.nome}
            selectCity={handleChangeCityCard}
          >
            <CityCard title={city.nome} />
          </SelectCityButton>
        ))}
      </section>
    </main>
  );
};

export default CitiesCardListPage;
