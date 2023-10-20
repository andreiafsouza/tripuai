import React from "react";
import citiesData from "@/cities.json";

const CitiesCardListPage = async () => {
  const cities = citiesData;

  return (
    <>
      <h1>CARTAS</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.nome}</li>
        ))}
      </ul>
    </>
  );
};

export default CitiesCardListPage;
