import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import { useGlobal } from "../../context/globalContext";
import { BorderItem } from "../../interfaces/Global.interface";

const Border = ({ border }: { border: BorderItem }) => {
  const { updateLastVisited } = useGlobal();
  const history = useHistory();

  const handleClick = () => {
    updateLastVisited(border.code, history);
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
