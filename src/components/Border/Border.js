import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import { useCountries } from "../../context/countriesContext";

const Border = (props) => {
  const { border } = props;
  const { setBorders } = useCountries();
  const history = useHistory();

  const handleClick = () => {
    history.push(`${border.code}`);
    setBorders([]);
  };

  return (
    <button className={styles.button} key={border.name} onClick={handleClick}>
      <div className={styles.text}>{border.name}</div>
    </button>
  );
};

export default Border;
