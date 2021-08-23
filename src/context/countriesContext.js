import { createContext, useContext, useState, useEffect } from "react";
import { getNameByCode, getInfoByCode } from "../services/api";
import { useParams } from "react-router-dom";

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
  const { id } = useParams();

  useEffect(() => {
    async function fetchCountryInfo() {
      const code = id ? id : "bel";
      // ToDo: replace with const code = useParams(); or sth like that
      const newCountry = await getInfoByCode(code);
      if (newCountry) {
        setCountry(newCountry);
      }
    }
    fetchCountryInfo();
  }, [id]);

  useEffect(() => {
    country.borders.forEach(async (code) => {
      const name = await getNameByCode(code);
      if (name) {
        setBorders((prev) => [...prev, { name: name, code: code }]);
      }
    });
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
