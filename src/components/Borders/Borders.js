import { useCountries } from "../../context/countriesContext";
import Border from "../Border/Border";
import styles from "./styles.module.scss";

const Borders = (props) => {
  const { borders } = useCountries();
  return (
    <div className={styles.container}>
      <strong>Border Countries: </strong>
      <div className={styles.wrapper}>
        {borders.length !== 0
          ? borders.map((border) => (
              <Border border={border} key={border.code} />
            ))
          : "this country has no borders."}
      </div>
    </div>
  );
};

export default Borders;
