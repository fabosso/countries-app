import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
export const CountryCard = ({ country }) => {
  console.log(country)
  return (
    <Link to={`description/${country.alpha3Code}`}>
    <div className={styles.container}>
      <div className={styles.wrapper__img}>
        <img
          className={styles.country_img}
          src={country.flag}
          alt={country.capital}
        />
      </div>
      <div className={styles.content__text}>
        <h2>{country.name}</h2>
        <p className={styles.paragraph}>
          <strong>Population: </strong>
          {country.population.toLocaleString("en")}
        </p>
        <p className={styles.paragraph}>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p className={styles.paragraph}>
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>
    </Link>
  );
};
