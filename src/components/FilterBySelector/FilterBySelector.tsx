import styles from "./styles.module.scss";
import React, { useState } from "react";
import { getKeyByValue } from "../../utils/getKeyByValue";

export const FilterBySelector = ({
  select,
  resetSearchValue,
  resetSelectValue,
}: any): JSX.Element => {
  const [clicked, setClicked] = useState<Boolean>(false);
  const { values: regions, selectedValue } = select;
  const onClick = (event: any): void => {
    select.onChange(event);
    setClicked(!clicked);
  };

  const resetValues = (): void => {
    resetSearchValue();
    resetSelectValue();
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

        {/*  <ion-icon name="chevron-down-outline"></ion-icon> */}
      </div>
      <div
        className={styles.select_list}
        style={{ display: clicked && "block" }}
      >
        <ul className={styles.select_list__content}>
          {Object.keys(regions).map((name: string, index: number) => (
            <li
              className={styles.list}
              key={index}
              onClick={() => onClick({ target: { value: regions[name] } })}
            >
              {name}
            </li>
          ))}
          <li className={styles.select_all} onClick={resetValues}>
            <p>All countries</p>
          </li>
        </ul>
      </div>
    </div>
  );
};