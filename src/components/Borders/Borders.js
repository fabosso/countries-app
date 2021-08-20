import styles from "./Borders.module.scss";

const Borders = (props) => {
  const { borders } = props;
  return (
    <div className={styles.container}>
      <strong>Border Countries: </strong>
      <div className={styles.wrapper}>
        {borders.map((actualName) => (
          <button className={styles.button} key={actualName}>
            {actualName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Borders;
