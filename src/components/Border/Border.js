import styles from "./Border.module.scss";
import { useHistory } from "react-router-dom";

const Border = (props) => {
  const { border } = props;
  const history = useHistory();

  const handleClick = () => {
    // TODO: route into another country page
    // algo como: history.push(`description/${border.code}`);
  };

  return (
    <button className={styles.button} key={border.name} onClick={handleClick}>
      {border.name}
    </button>
  );
};

export default Border;
