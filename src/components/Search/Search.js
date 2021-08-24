import styles from "./styles.module.scss";
export const Search = ({ search, resetSelectValue }) => {
  const onChange = (event) => {
    resetSelectValue();
    search.onChange(event);
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <input
        placeholder="Search for a country..."
        className={styles.search}
        {...{ ...search, onChange }}
      />
    </div>
  );
};
