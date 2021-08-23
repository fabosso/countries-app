import styles from "./styles.module.scss";
import { useState } from "react";

export const FilterBySelector = ({ select, resetSearchValue }) => {
  const [clicked, setClicked] = useState(false);
  const onClick = (event) => {
    resetSearchValue();
    select.onChange(event);
    setClicked(!clicked);
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.item_selected}
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <p>
          {" "}
          {select.selectedValue
            ? select.selectedValue
            : "Filter by Region"}{" "}
        </p>

        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      <div
        className={styles.select_list}
        style={{ display: clicked && "block" }}
      >
        <ul className={styles.select_list__content}>
          {select.values.map((data, index) => (
            <li
              className={styles.list}
              key={index}
              onClick={() => onClick({ target: { value: data } })}
            >{`${data}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
