import { useHistory } from "react-router";
import { BASE_URL } from "../../services/api";
import styles from "./styles.module.scss";
import { useGlobal } from "../../context/globalContext";

const Bubble = (props) => {
  const { countryCode } = props;
  const { updateLastVisited } = useGlobal();
  const history = useHistory();
  const handleClick = () => {
    if (history.location.pathname !== `/description/${countryCode}`) {
      updateLastVisited(countryCode, history);
    }
  };

  return (
    <img
      className={styles.bubble}
      src={`${BASE_URL}/data/${countryCode.toLowerCase()}.svg`}
      alt="bubble"
      onClick={handleClick}
    />
  );
};

export default Bubble;
