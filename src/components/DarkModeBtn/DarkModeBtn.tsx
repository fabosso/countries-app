import { useGlobal } from "../../context/globalContext";
import styles from "./styles.module.scss";
import { MoonOutline, SunnyOutline } from "react-ionicons";

const DarkModeBtn = () => {
  const { darkModeHandler, theme } = useGlobal();
  return (
    <span className={styles.button} onClick={darkModeHandler}>
      {theme === "light" ? (
        <span>
          <MoonOutline height="16px" width="16px" color="inherit" />
          <span>Dark Mode</span>
        </span>
      ) : (
        <span>
          <SunnyOutline height="16px" width="16px" color="inherit" />
          <span>Light Mode</span>
        </span>
      )}
    </span>
  );
};

export default DarkModeBtn;
