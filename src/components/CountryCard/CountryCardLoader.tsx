import styles from "./styles.module.scss";
import Skeleton from "react-loading-skeleton";

export const CountryCardLoader = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};
