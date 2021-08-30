import { Search } from "../../components/Search/Search";
import { FlagGrid } from "../../components/FlagGrid/FlagGrid";
import { FilterBySelector } from "../../components/FilterBySelector/FilterBySelector";
import styles from "./styles.module.scss";
import "../../assets/styles/Globals.scss";
import { useGrid } from "../../context/gridContext";

export const Home = () => {
  const { countries, search, select, resetSearchValue, resetSelectValue } =
    useGrid();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.search_bar}>
          <Search search={search} resetSelectValue={resetSelectValue} />
          <FilterBySelector
            select={select}
            resetSearchValue={resetSearchValue}
            resetSelectValue={resetSelectValue}
          />
        </div>
        {!countries?.length ? (
          <div className={styles.spinner_content}>
          <div className={styles.spinner}></div>
          </div>
        ) : (
          <FlagGrid
            countries={countries}
            wordSearch={search.value}
            region={select.selectedValue}
          />
        )}
      </div>
    </>
  );
};
