import { useDescription } from "../../context/descriptionContext";
import Detail from "../Detail/Detail";
import styles from "./styles.module.scss";
import { CountryDescType } from "../../interfaces/Description.interface";

const Details = () => {
  const { country }: { country: CountryDescType } = useDescription();

  const details = [
    {
      title: "Native name",
      content: country.nativeName,
    },
    {
      title: "Population",
      content: country.population?.toLocaleString("en"),
    },
    {
      title: "Region",
      content: country.region,
    },
    {
      title: "Sub Region",
      content: country.subregion,
    },
    {
      title: "Capital",
      content: country.capital,
    },
    {
      title: "Top Level Domain",
      content: country.topLevelDomain?.join(", "),
    },
    {
      title: "Currencies",
      content: country.currencies?.map((currency) => currency.name).join(", "),
    },
    {
      title: "Languages",
      content: country.languages?.map((language) => language.name).join(", "),
    },
  ];

  return (
    <div className={styles.grid}>
      <div>
        {details.slice(0, 5).map((detail) => (
          <Detail detail={detail} key={detail.title} />
        ))}
      </div>
      <div>
        {details.slice(5).map((detail) => (
          <Detail detail={detail} key={detail.title} />
        ))}
      </div>
    </div>
  );
};

export default Details;
