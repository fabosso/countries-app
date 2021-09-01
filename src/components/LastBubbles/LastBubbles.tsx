import { useGlobal } from "../../context/globalContext";
import Bubble from "../Bubble/Bubble";
import styles from "./styles.module.scss";

const LastBubbles = () => {
  const { lastVisited } = useGlobal();

  return (
    <div className={styles.container}>
      {lastVisited.map((country: string) => (
        <Bubble countryCode={country} key={country} />
      ))}
    </div>
  );
};

export default LastBubbles;
