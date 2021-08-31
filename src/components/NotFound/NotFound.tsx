import { useHistory } from "react-router";
import { useGlobal } from "../../context/globalContext";
import BackBtn from "../BackBtn/BackBtn";
import styles from "./styles.module.scss";
export const NotFound = (): JSX.Element => {
  const history = useHistory();
  const { setBorders } = useGlobal();
  const backHandler = () => {
    history.push("/");
    setBorders(null);
  };
  return (
    <div className={styles.container}>
      <BackBtn backHandler={backHandler} />
      <h1>Page not found!</h1>
    </div>
  );
};
