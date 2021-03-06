import styles from "./styles.module.scss";
import { ArrowBackSharp } from "react-ionicons";

const BackBtn = ({ backHandler }: { backHandler: () => void }) => {
  return (
    <button className={styles.button} onClick={backHandler}>
      <span>
        <ArrowBackSharp height="16px" width="16px" color="inherit" />
        <span>Back</span>
      </span>
    </button>
  );
};

export default BackBtn;
