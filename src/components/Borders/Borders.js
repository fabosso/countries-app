import { useCountries } from "../../context/countriesContext";
import Border from "../Border/Border";
import styles from "./styles.module.scss";

const Borders = (props) => {
  const { borders } = useCountries();
  return (
    <div className={styles.container}>
      <strong>Border Countries: </strong>
      <div className={styles.wrapper}>
        {borders.map((border) => (
          <Border border={border} key={border.code} />
        ))}
      </div>
    </div>
  );
};

export default Borders;
