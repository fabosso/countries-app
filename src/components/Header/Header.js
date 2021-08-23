import styles from "./Header.module.scss";

const Header = (props) => {
  const { darkModeHandler } = props;

  return (
    <div className={styles.header}>
      <h3>Where in the world?</h3>
      <span onClick={darkModeHandler}>
        <ion-icon name="moon-outline"></ion-icon>
        &nbsp; Dark Mode
      </span>
    </div>
  );
};

export default Header;
