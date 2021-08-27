import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import { CountryCardLoader } from "./CountryCardLoader";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useState } from "react";
import { useTheme } from "../../context/themeContext";
import { palletes } from "../../utils/palletes";

export const CountryCard = ({ country }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`description/${country.alpha3Code}`);
  };
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (!country)
    return (
      <SkeletonTheme
        color={palletes[theme]["--skeleton-color"]}
        highlightColor={palletes[theme]["--shine-color"]}
      >
        <CountryCardLoader />
      </SkeletonTheme>
    );

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.wrapper__img}>
        {!imageLoaded && (
          <SkeletonTheme
            color={palletes[theme]["--skeleton-color"]}
            highlightColor={palletes[theme]["--shine-color"]}
          >
            <Skeleton className={styles.country_img} height={160} />
          </SkeletonTheme>
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
