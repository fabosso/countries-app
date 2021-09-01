import { SearchOutline } from "react-ionicons";
import { InputEvent } from "../../types/EventTypes.type";
import styles from "./styles.module.scss";
import { SearchType } from "../../types/Search.type";

type searchProps = {
  search: SearchType;
};

export const Search = ({ search }: searchProps) => {
  const handleChange = (event: InputEvent) => {
    search.handleChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <SearchOutline height="16px" width="16px" color="inherit" />
      </div>
      <input
        placeholder="Search for a country..."
        className={styles.search}
        onChange={handleChange}
        type={search.type}
        value={search.value}
      />
    </div>
  );
};
