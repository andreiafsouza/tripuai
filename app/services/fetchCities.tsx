import axios from "axios";

const fetchCities = axios.create({
  baseURL:
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados/mg/municipios",
  headers: {
    "Content-Type": "application/json",
  },
});

export default fetchCities;
