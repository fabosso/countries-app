import BackBtn from "../components/BackBtn/BackBtn";
import Borders from "../components/Borders/Borders";
import Details from "../components/Details/Details";
import Header from "../components/Header/Header";
import "../assets/styles/Colors.scss";
import "../assets/styles/Globals.scss";
import styles from "./Description.module.scss";
import { useCountries } from "../context/countriesContext";

const Description = (props) => {
  const {
    country: { flag, name },
  } = useCountries();

  const backHandler = () => {
    // TODO: go back to Cristian's page
    // console.log("you clicked back");
  };

  return (
    <>
      <Header />
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

export default Description;
