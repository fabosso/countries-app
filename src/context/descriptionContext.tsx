import { createContext, useContext, useState, useEffect } from "react";
import { getNameByCode, getInfoByCode } from "../services/api";
import { useParams } from "react-router-dom";
import { useGlobal } from "./globalContext";
import {
  useDescriptionTypes,
  CountryDescType,
} from "../interfaces/Description.interface";
import { alpha3Codes } from "../utils/alpha3Codes";
import { ProviderProps } from "../types/ProviderProps.type";

const emptyCountryDesc: CountryDescType = {
  currencies: null,
  languages: null,
  flag: "",
  name: "",
  nativeName: null,
  topLevelDomain: null,
  capital: null,
  region: null,
  subregion: null,
  population: null,
  borders: null,
};

const descriptionContext = createContext<useDescriptionTypes>(null!);

export function DescriptionProvider({ children }: ProviderProps) {
  const { setBorders, setTransitions } = useGlobal();

  const [country, setCountry] = useState(emptyCountryDesc);

  let { prefix }: { prefix: string } = useParams();
  const countryFound = alpha3Codes.includes(prefix.toUpperCase());

  useEffect(() => {
    async function fetchCountryInfo() {
      if (countryFound) {
        const newCountry = await getInfoByCode(prefix);
        if (newCountry) {
          setCountry(newCountry);
        }
      }
    }
    fetchCountryInfo();
    setTransitions(true);
  }, [prefix, countryFound, setTransitions]);

  useEffect(() => {
    // early check:
    if (!country.borders) {
      setBorders(null);
      return;
    }

    const codeBorders: string[] = country.borders!;

    if (codeBorders.length !== 0) {
      codeBorders.forEach(async (code: string) => {
        const name: string = await getNameByCode(code);
        if (name) {
          setBorders((prev: any) => {
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

  return (
    <descriptionContext.Provider value={{ country, countryFound }}>
      {children}
    </descriptionContext.Provider>
  );
}

export function useDescription() {
  const context: useDescriptionTypes = useContext(descriptionContext);
  if (!context) {
    throw new Error("useDescription call is not inside a DescriptionProvider");
  }
  return context;
}
