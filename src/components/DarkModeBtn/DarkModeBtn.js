import { useTheme } from "../../context/themeContext";
import styles from "./styles.module.scss";
import { MoonOutline } from "react-ionicons";

const DarkModeBtn = (props) => {
  const { darkModeHandler } = useTheme();
  return (
    <span className={styles.button} onClick={darkModeHandler}>
      <span>
        <MoonOutline height="16px" width="16px" color="inherit" />
        &nbsp; Dark Mode
      </span>
    </span>
  );
};

export default DarkModeBtn;
