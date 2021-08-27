import BackBtn from "../../components/BackBtn/BackBtn";
import Borders from "../../components/Borders/Borders";
import Details from "../../components/Details/Details";
import "../../assets/styles/Globals.scss";
import styles from "./styles.module.scss";
import { useCountries } from "../../context/countriesContext";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useTheme } from "../../context/themeContext";
import { palletes } from "../../utils/palletes";

export const Description = (props) => {
  const {
    country: { flag, name },
  } = useCountries();
  const history = useHistory();
  const backHandler = () => {
    history.push("/");
  };
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className={styles.container}>
        <BackBtn backHandler={backHandler} />
        <div className={styles.wrapper}>
          {!imageLoaded && <div className={styles.imgSkeleton}></div>}
          <img
            src={flag}
            alt={name}
            onLoad={handleImageLoad}
            style={imageLoaded ? { display: "initial" } : { display: "none" }}
          />
          <div className={styles.info}>
            <SkeletonTheme
              color={palletes[theme]["--skeleton-color"]}
              highlightColor={palletes[theme]["--shine-color"]}
            >
              <h2>{name || <Skeleton />}</h2>
              <Details />
              <Borders />
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </>
  );
};
