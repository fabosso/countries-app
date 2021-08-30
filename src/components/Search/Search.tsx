import { SearchOutline } from "react-ionicons";
import { InputEvent } from "../../types/EventTypes";
import styles from "./styles.module.scss";

export const Search = ({ search, resetSelectValue }: any): JSX.Element => {
  const onChange = (event: InputEvent) => {
    search.onChange(event);
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <SearchOutline height="16px" width="16px" color="inherit" />
      </div>
      <input
        placeholder="Search for a country..."
        className={styles.search}
        {...{ ...search, onChange }}
      />
    </div>
  );
};
