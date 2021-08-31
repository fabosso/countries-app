import { createContext, useContext, useState, useEffect } from "react";
import { getNameByCode, getInfoByCode } from "../services/api";
import { useParams } from "react-router-dom";
import { useGlobal } from "./globalContext";
import { useDescriptionTypes } from "../interfaces/Description.interface";
import { alpha3Codes } from "../utils/alpha3Codes";

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
    borders: null,
  });

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
  }, [prefix, countryFound]);

  useEffect(() => {
    const codeBorders: any = country.borders;
    // early check:
    if (codeBorders === null) {
      setBorders(null);
      return;
    }

    if (codeBorders.length !== 0) {
      codeBorders.forEach(async (code: string) => {
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
      setBorders([]);
    }
  }, [country.borders, setBorders]);

  return (
    <descriptionContext.Provider value={{ country, countryFound }} {...props} />
  );
}

export function useDescription() {
  const context: useDescriptionTypes = useContext(descriptionContext);
  if (!context) {
    throw new Error("useDescription call is not inside a DescriptionProvider");
  }
  return context;
}
