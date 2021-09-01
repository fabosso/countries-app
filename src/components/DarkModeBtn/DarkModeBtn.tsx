import { useGlobal } from "../../context/globalContext";
import styles from "./styles.module.scss";
import { MoonOutline } from "react-ionicons";

const DarkModeBtn = () => {
  const { darkModeHandler } = useGlobal();
  return (
    <span className={styles.button} onClick={darkModeHandler}>
      <span>
        <MoonOutline height="16px" width="16px" color="inherit" />
        <span>Dark Mode</span>
      </span>
    </span>
  );
};

export default DarkModeBtn;
