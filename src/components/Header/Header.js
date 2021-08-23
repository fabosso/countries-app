import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import styles from "./Header.module.scss";

export const Header = ({ children }) => {
  return (
    <>
      <div className={styles.header}>
        <h3>Where in the world?</h3>
        <DarkModeBtn />
      </div>
      {children}
    </>
  );
};
