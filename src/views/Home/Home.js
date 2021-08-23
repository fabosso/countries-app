import dataJSON from "../../data.json";
import { Search } from "../../components/Search/Search";
import { useField } from "../../hooks/useField";
import { FlagGrid } from "../../components/FlagGrid/FlagGrid";
import { FilterBySelector } from "../../components/FilterBySelector/FilterBySelector";
import { useSelect } from "../../hooks/useSelect";
import styles from "./styles.module.scss";
import "../../assets/styles/Globals.scss";

const regions = ["Americas", "Asia", "Africa", "Europe", "Oceania"];
export const Home = () => {
  const { resetSearchValue, ...search } = useField("text");
  const { resetSelectValue, ...select } = useSelect({ initialState: regions });
  return (
    <>
      <div className={styles.nav}></div>
      <div className={styles.container}>
        <div className={styles.search_bar}>
          <Search search={search} resetSelectValue={resetSelectValue} />
          <FilterBySelector
            select={select}
            resetSearchValue={resetSearchValue}
          />
        </div>
        <FlagGrid
          countries={dataJSON}
          wordSearch={search.value}
          region={select.selectedValue}
        />
      </div>
    </>
  );
};
