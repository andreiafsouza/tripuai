import React from "react";
import citiesData from "@/cities.json";
import { CityCard } from "../components/CItyCard/CityCard";
import SelectCityButton from "../components/SelectCityButton/SelectCityButton";
/* style */
import cartas from "./cartas.module.css";

const CitiesCardListPage = async () => {
  const cities = citiesData;

  return (
    <main className={cartas.container}>
      <section>
        <h1>CARTAS</h1>
        <ul className={cartas.list}>
          {cities.map((city) => (
            <li key={city.id}>
              <SelectCityButton title={city.nome} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <CityCard />
      </section>
    </main>
  );
};

export default CitiesCardListPage;
