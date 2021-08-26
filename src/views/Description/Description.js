import BackBtn from "../../components/BackBtn/BackBtn";
import Borders from "../../components/Borders/Borders";
import Details from "../../components/Details/Details";
import "../../assets/styles/Globals.scss";
import styles from "./styles.module.scss";
import { useCountries } from "../../context/countriesContext";
import { useHistory } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useTheme } from "../../context/themeContext";
import { palletes } from "../../utils/palletes";
import { getLocalValue } from "../../utils/localStorage";

export const Description = (props) => {
  const {
    country: { flag, name },
  } = useCountries();
  const history = useHistory();
  const backHandler = () => {
    history.push("/");
  };

  const { theme } = useTheme();
  const themeLS = getLocalValue("theme");
  const properties = themeLS ? palletes[themeLS] : palletes[theme];
  return (
    <>
      <div className={styles.container}>
        <BackBtn backHandler={backHandler} />
        <div className={styles.wrapper}>
          {name ? (
            <img src={flag} alt={name} />
          ) : (
            <div className={styles.imgSkeleton}></div>
          )}
          <div className={styles.info}>
            <SkeletonTheme
              color={properties["--skeleton-color"]}
              highlightColor={properties["--shine-color"]}
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
