import { useHistory } from "react-router";
import { BASE_URL } from "../../services/api";
import styles from "./styles.module.scss";
import { reformLastVisited } from "../../utils/localStorage";
import { useGlobal } from "../../context/globalContext";

const Bubble = (props) => {
  const { country } = props;
  const { setBorders, setLastVisited } = useGlobal();
  const history = useHistory();
  const handleClick = () => {
    const _lastVisited = reformLastVisited(country);
    setLastVisited((prev) => [..._lastVisited]);
    const nextRoute = `/description/${country}`;
    if (history.location.pathname !== nextRoute) {
      setBorders(null);
      history.push(nextRoute);
    }
  };

  return (
    <img
      className={styles.bubble}
      src={`${BASE_URL}/data/${country.toLowerCase()}.svg`}
      alt="bubble"
      onClick={handleClick}
    />
  );
};

export default Bubble;
