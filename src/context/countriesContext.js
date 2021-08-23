import { createContext, useContext, useState, useEffect } from "react";
import { getNameByCode, getInfoByCode } from "../services/api";

const countriesContext = createContext();

export function CountriesProvider(props) {
  const [borders, setBorders] = useState([]);
  const [country, setCountry] = useState({
    currencies: [],
    languages: [],
    flag: "",
    name: "",
    nativeName: "",
    topLevelDomain: [],
    capital: "",
    region: "",
    subregion: "",
    population: 0,
    borders: [""],
  });

  useEffect(() => {
    async function fetchCountry() {
      const newCountry = await getInfoByCode("bel");
      if (newCountry) {
        setCountry(newCountry);
      }
    }
    fetchCountry();
  }, []);

  useEffect(() => {
    country.borders.forEach(async (code) => {
      const name = await getNameByCode(code);
      if (name) {
        setBorders((prev) => [...prev, { name: name, code: code }]);
      }
    });
  }, [country.borders]);

  return <countriesContext.Provider value={{ borders, country }} {...props} />;
}

export function useCountries() {
  const context = useContext(countriesContext);
  if (!context) {
    throw new Error("useCountries call is not inside a CountriesProvider");
  }
  return context;
}
