"use client";
import React, { useState, ChangeEvent } from "react";
import citiesData from "../../cities.json";
import { CityCard } from "@/components/CityCard/CityCard";
import { CityCardDisplay } from "@/components/CityCardDisplay/CityCardDisplay";
import SelectCityButton from "@/components/SelectCityButton/SelectCityButton";
/* style */
import styles from "./styles.module.css";

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
  const [selectedCity, setSelectedCIty] = useState(cities[0].nome);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<CityProps[]>([]);

  const handleChangeCityCard = (name: string) => {
    const cardName: CityProps[] = cities.filter((city) => name === city.nome);
    const selectedName = cardName[0].nome;
    setSelectedCIty(selectedName);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    const filteredCities = cities.filter(
      (city) =>
        city.nome.toLowerCase().includes(inputValue.toLowerCase()) &&
        /^[a-zA-Z]+$/.test(inputValue) // Check if input contains only letters
    );

    setSuggestions(filteredCities);
  };

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <div className={styles.search}>
          <input
            className={styles.input}
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleInputChange}
          />

          {suggestions.length > 0 && (
            <div className={styles.suggestions}>
              <ul className={styles.suggestionsList}>
                {suggestions.map((city) => (
                  <li
                    className={styles.suggestionsItem}
                    key={city.id}
                    onClick={() => handleChangeCityCard(city.nome)}
                  >
                    {city.nome}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.selected}>
          <CityCardDisplay title={selectedCity} />
        </div>
      </section>
      <section className={styles.list}>
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
