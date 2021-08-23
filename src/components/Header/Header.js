import { ThemeProvider } from "../../context/themeContext";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h3>Where in the world?</h3>
      <ThemeProvider>
        <DarkModeBtn />
      </ThemeProvider>
    </div>
  );
};

export default Header;
