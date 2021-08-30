import { Search } from "../../components/Search/Search";
import { FlagGrid } from "../../components/FlagGrid/FlagGrid";
import { FilterBySelector } from "../../components/FilterBySelector/FilterBySelector";
import styles from "./styles.module.scss";
import "../../assets/styles/Globals.scss";
import { useGrid } from "../../context/gridContext";
import { palletes } from "../../utils/palletes";
import { SkeletonTheme } from "react-loading-skeleton";
import { useGlobal } from "../../context/globalContext";
export const Home = () => {
  const { countries, search, select, resetSearchValue, resetSelectValue } =
    useGrid();
  const { theme }: any = useGlobal();
  return (
    <>
      <SkeletonTheme
        color={palletes[theme]["--skeleton-color"]}
        highlightColor={palletes[theme]["--shine-color"]}
      >
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
            ""
          ) : (
            <FlagGrid
              countries={countries}
              wordSearch={search.value}
              region={select.selectedValue}
            />
          )}
        </div>
      </SkeletonTheme>
    </>
  );
};
