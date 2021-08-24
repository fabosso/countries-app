import BackBtn from "../../components/BackBtn/BackBtn";
import Borders from "../../components/Borders/Borders";
import Details from "../../components/Details/Details";
import "../../assets/styles/Colors.scss";
import "../../assets/styles/Globals.scss";
import styles from "./styles.module.scss";
import { useCountries } from "../../context/countriesContext";
import { useHistory } from "react-router-dom";

export const Description = (props) => {
  const {
    country: { flag, name },
  } = useCountries();

  const history = useHistory();

  const backHandler = () => {
    // TODO: replace with history.push('/')
    history.push("/");
  };

  return (
    <>
      <div className={styles.container}>
        <BackBtn backHandler={backHandler} />
        <div className={styles.wrapper}>
          <img src={flag} alt={name} />
          <div className={styles.info}>
            <h2>{name}</h2>
            <Details />
            <Borders />
          </div>
        </div>
      </div>
    </>
  );
};
