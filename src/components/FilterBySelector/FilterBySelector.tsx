import styles from "./styles.module.scss";
import { useState } from "react";
import { getKeyByValue } from "../../utils/getKeyByValue";
import { ChevronDownOutline } from "react-ionicons";
import { SelectType } from "../../types/Select.type";

type FilterBySelectorProps = {
  select: SelectType;
  resetSelectValue: () => void;
  resetSearchValue: () => void;
};

export const FilterBySelector = ({
  select,
  resetSelectValue,
  resetSearchValue,
}: FilterBySelectorProps) => {
  const [clicked, setClicked] = useState(false);
  const { values: regions, selectedValue } = select;
  const handleClick = (regionName: string): void => {
    select.onChangeFilter(regionName);
    setClicked(!clicked);
  };
  const resetValues = (): void => {
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
          {selectedValue
            ? getKeyByValue(regions, selectedValue)
            : "Filter by Region"}
        </p>
        <ChevronDownOutline height="16px" width="16px" color="inherit" />
      </div>
      <div
        className={styles.select_list}
        style={{ display: clicked ? "block" : "none" }}
      >
        <ul className={styles.select_list__content}>
          {Object.keys(regions).map((name: string) => (
            <li
              className={styles.list}
              key={name}
              onClick={() => handleClick(regions[name])}
            >
              {name}
            </li>
          ))}
          <li className={styles.select_all} onClick={resetValues}>
            <p>All</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
