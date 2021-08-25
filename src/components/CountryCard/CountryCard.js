import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import { CountryCardLoader } from "./CountryCardLoader";
export const CountryCard = ({ country }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`description/${country.alpha3Code}`);
  };

  if (!country) return <CountryCardLoader />;

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.wrapper__img}>
        <img
          className={styles.country_img}
          src={country.flag}
          alt={country.capital}
        />
      </div>
      <div className={styles.content}>
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
    </div>
  );
};
