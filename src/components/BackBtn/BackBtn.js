import styles from "./BackBtn.module.scss";

const BackBtn = (props) => {
  const { backHandler } = props;

  return (
    <button className={styles.button} onClick={backHandler}>
      <span>
        <ion-icon name="arrow-back-sharp"></ion-icon>
        &nbsp; Back
      </span>
    </button>
  );
};

export default BackBtn;
