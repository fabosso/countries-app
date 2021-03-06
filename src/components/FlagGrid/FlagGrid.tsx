import { filterCountryOrRegion } from "../../utils/filterCountryOrRegion";
import { CountryCard } from "../CountryCard/CountryCard";
import styles from "./styles.module.scss";
import { useEffect, useState, useCallback } from "react";
import { CountryCardType } from "../../types/CountryCard.type";

type FlagGridProps = {
  countries: CountryCardType[];
  wordSearch: string;
  region: string;
};

export const FlagGrid = ({ countries, wordSearch, region }: FlagGridProps) => {
  const [countriesList, setCountriesList] = useState(Array(20).fill(null));
  const filterCountries = useCallback(() => {
    setCountriesList(
      filterCountryOrRegion({
        countries,
        word: wordSearch,
        region: region,
      })
    );
  }, [countries, wordSearch, region, setCountriesList]);

  useEffect(() => filterCountries(), [filterCountries]);

  if (!countriesList.length) {
    return (
      <div className={styles.container}>
        <h1>Country not found</h1>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {countriesList.map((country, key) => (
        <CountryCard key={key} country={country} />
      ))}
    </div>
  );
};
