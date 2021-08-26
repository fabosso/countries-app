import { createContext, useContext, useState, useEffect } from "react";
import { getNameByCode, getInfoByCode } from "../services/api";
import { useParams } from "react-router-dom";

const countriesContext = createContext();

export function CountriesProvider(props) {
  const [borders, setBorders] = useState(null);
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
    population: null,
    borders: [""],
  });
  const { prefix } = useParams();

  useEffect(() => {
    async function fetchCountryInfo() {
      const code = prefix ? prefix : "bel";
      const newCountry = await getInfoByCode(code);
      if (newCountry) {
        setCountry(newCountry);
      }
    }
    fetchCountryInfo();
  }, [prefix]);

  useEffect(() => {
    if (country.borders.length !== 0) {
      country.borders.forEach(async (code) => {
        const name = await getNameByCode(code);
        if (name) {
          setBorders((prev) => {
            if (!prev) {
              return [{ name: name, code: code }];
            } else {
              return [...prev, { name: name, code: code }];
            }
          });
        }
      });
    } else {
      // setting borders to [] means that the country is resolved to have no borders.
      setBorders([]);
    }
  }, [country.borders]);

  return (
    <countriesContext.Provider
      value={{ borders, country, setBorders }}
      {...props}
    />
  );
}

export function useCountries() {
  const context = useContext(countriesContext);
  if (!context) {
    throw new Error("useCountries call is not inside a CountriesProvider");
  }
  return context;
}
