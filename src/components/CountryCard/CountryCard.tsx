import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import { CountryCardLoader } from "./CountryCardLoader";
import Skeleton from "react-loading-skeleton";
import { useGlobal } from "../../context/globalContext";
import { useState } from "react";
import { CountryCardType } from "../../types/CountryCard.type";

export const CountryCard = ({ country }: { country: CountryCardType }) => {
  const { updateLastVisited } = useGlobal();
  const [imageLoaded, setImageLoaded] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    updateLastVisited(country.alpha3Code, history);
  };
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (!country) return <CountryCardLoader />;

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.wrapper__img}>
        {!imageLoaded && (
          <Skeleton className={styles.country_img} height={160} />
        )}
        <img
          className={styles.country_img}
          src={country.flag}
          alt={country.capital}
          onLoad={handleImageLoad}
          style={imageLoaded ? { display: "initial" } : { display: "none" }}
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
