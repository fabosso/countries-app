import styles from "./styles.module.scss";

export const CountryCard = ({ country }) => {
  return (
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
        <p className={styles.paragrahp}>
          <strong>Population: </strong>
          {country.population}
        </p>
        <p className={styles.paragrahp}>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p className={styles.paragrahp}>
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>
  );
};
