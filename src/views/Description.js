import React, { useState, useEffect } from "react";
import { palletes } from "../utils/palletes";
import { getNameByCode, getInfoByCode } from "../services/api";
import Borders from "../components/Borders/Borders";
import Details from "../components/Details/Details";
import Header from "../components/Header/Header";
import "../assets/styles/Colors.scss";
import "../assets/styles/Globals.scss";
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
      if (newCountry) {
        setCountry(newCountry);
      }
    }
    fetchCountry();
  }, []);

  const darkModeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    country.borders.forEach(async (code) => {
      const name = await getNameByCode(code);
      if (name) {
        setBorders((prev) => [...prev, { name: name, code: code }]);
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
      <Header darkModeHandler={darkModeHandler} />
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
