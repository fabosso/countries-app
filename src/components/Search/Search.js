import { SearchOutline } from "react-ionicons";
import styles from "./styles.module.scss";
export const Search = ({ search, resetSelectValue }) => {
  const onChange = (event) => {
    resetSelectValue();
    search.onChange(event);
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <SearchOutline
          color="inherit"
          height="16px"
          width="16px"
          className={styles.iconSpan}
        />
      </div>
      <input
        placeholder="Search for a country..."
        className={styles.search}
        {...{ ...search, onChange }}
      />
    </div>
  );
};
