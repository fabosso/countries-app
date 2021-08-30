import { createContext, useContext, useState, useEffect } from "react";
import { getNameByCode, getInfoByCode } from "../services/api";
import { useParams } from "react-router-dom";
import { useGlobal } from "./globalContext";

const descriptionContext = createContext();

export function DescriptionProvider(props) {
  const { setBorders } = useGlobal();

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
  }, [country.borders, setBorders]);

  return <descriptionContext.Provider value={{ country }} {...props} />;
}

export function useDescription() {
  const context = useContext(descriptionContext);
  if (!context) {
    throw new Error("useDescription call is not inside a DescriptionProvider");
  }
  return context;
}
