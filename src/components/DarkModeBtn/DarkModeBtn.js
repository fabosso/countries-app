import styles from "./DarkModeBtn.module.scss";

const DarkModeBtn = (props) => {
  const { darkModeHandler } = props;
  return (
    <span className={styles.button} onClick={darkModeHandler}>
      <ion-icon name="moon-outline"></ion-icon>
      &nbsp; Dark Mode
    </span>
  );
};

export default DarkModeBtn;
