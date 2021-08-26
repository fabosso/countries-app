import { ChevronDownOutline } from "react-ionicons";
import styles from "./styles.module.scss";
import { useState } from "react";
import { getKeyByValue } from "../../utils/getKeyByValue";

export const FilterBySelector = ({ select, resetSearchValue }) => {
  const [clicked, setClicked] = useState(false);
  const { values: regions, selectedValue } = select;
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
          {selectedValue
            ? getKeyByValue(regions, selectedValue)
            : "Filter by Region"}{" "}
        </p>

        <ChevronDownOutline
          color="inherit"
          height="16px"
          width="16px"
          className={styles.arrow}
        />
      </div>
      <div
        className={styles.select_list}
        style={{ display: clicked && "block" }}
      >
        <ul className={styles.select_list__content}>
          {Object.keys(regions).map((name, index) => (
            <li
              className={styles.list}
              key={index}
              onClick={() => onClick({ target: { value: regions[name] } })}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
