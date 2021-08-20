import React, { useState, useEffect } from "react";
import { palletes } from "../utils/palletes";
import { getNameByCode, getInfoByCode } from "../services/api";
import Borders from "../components/Borders/Borders";
import Details from "../components/Details/Details";
import "../assets/styles/Colors.scss";
import "../assets/styles/globals.scss";
import styles from "./Description.module.scss";

const Description = (props) => {
  const [theme, setTheme] = useState("light");
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
      setCountry(newCountry);
    }
    fetchCountry();
  }, []);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    country.borders.forEach(async (code) => {
      const name = await getNameByCode(code);
      if (typeof name === "string") {
        setBorders((prev) => [...prev, name]);
      }
    });
  }, [country.borders]);

  useEffect(() => {
    const properties = palletes[theme];
    for (const [key, value] of Object.entries(properties)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, [theme]);

  return (
    <>
      <div className={styles.header}>
        <h3>Where in the world?</h3>
        <span onClick={handleClick}>
          <ion-icon name="moon-outline"></ion-icon>
          &nbsp; Dark Mode
        </span>
      </div>
      <div className={styles.container}>
        <button className={styles.backButton}>
          <span>
            <ion-icon name="arrow-back-sharp"></ion-icon>
            &nbsp; Back
          </span>
        </button>
        <div className={styles.wrapper}>
          <img src={country.flag} alt={country.name} />
          <div className={styles.info}>
            <h2>{country.name}</h2>
            <Details country={country} />
            <Borders borders={borders} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
