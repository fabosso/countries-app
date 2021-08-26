import styles from "./styles.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useTheme } from "../../context/themeContext";
import { palletes } from "../../utils/palletes";
import { getLocalValue } from "../../utils/localStorage";

export const CountryCardLoader = ({ country }) => {
  const { theme } = useTheme();
  const themeLS = getLocalValue("theme");
  const properties = themeLS ? palletes[themeLS] : palletes[theme];

  return (
    <div className={styles.container}>
      <SkeletonTheme
        color={properties["--skeleton-color"]}
        highlightColor={properties["--shine-color"]}
      >
        <div className={styles.wrapper__img}>
          <Skeleton className={styles.country_img} height={160} />
        </div>
        <div className={styles.content}>
          <div className={styles.content__text}>
            <h2>
              <Skeleton />
            </h2>
            <p className={styles.paragraph}>
              <Skeleton />
            </p>
            <p className={styles.paragraph}>
              <Skeleton />
            </p>
            <p className={styles.paragraph}>
              <Skeleton />
            </p>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};
