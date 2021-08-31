import { createContext, useContext, useState, useEffect } from "react";
import { getNameByCode, getInfoByCode } from "../services/api";
import { useParams } from "react-router-dom";
import { useGlobal } from "./globalContext";
import { useDescriptionTypes } from "../interfaces/Description.interface";

const descriptionContext: any = createContext(null);

export function DescriptionProvider(props: any) {
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
    borders: [],
  });

  const { prefix }: { prefix: string } = useParams();

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
      country.borders.forEach(async (code: string) => {
        const name: string = await getNameByCode(code);
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
      setBorders(() => []);
    }
  }, [country.borders, setBorders]);

  return <descriptionContext.Provider value={{ country }} {...props} />;
}

export function useDescription() {
  const context: useDescriptionTypes = useContext(descriptionContext);
  if (!context) {
    throw new Error("useDescription call is not inside a DescriptionProvider");
  }
  return context;
}
