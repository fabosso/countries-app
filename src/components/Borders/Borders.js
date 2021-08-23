import Border from "../Border/Border";
import styles from "./Borders.module.scss";

const Borders = (props) => {
  const { borders } = props;
  return (
    <div className={styles.container}>
      <strong>Border Countries: </strong>
      <div className={styles.wrapper}>
        {borders.map((border) => (
          <Border border={border} key={border.code} />
        ))}
      </div>
    </div>
  );
};

export default Borders;
