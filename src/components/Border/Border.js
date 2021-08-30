import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import { useGlobal } from "../../context/globalContext";

const Border = (props) => {
  const { border } = props;
  const { setBorders } = useGlobal();
  const history = useHistory();

  const handleClick = () => {
    history.push(`${border.code}`);
    setBorders(null); // null signalizes a temporal lack of downloaded data, NOT a lack of borders
  };

  return (
    <button className={styles.button} key={border.name} onClick={handleClick}>
      <div className={styles.text} title={border.name}>
        {border.name}
      </div>
    </button>
  );
};

export default Border;
