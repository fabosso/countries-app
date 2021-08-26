import { Search } from "../../components/Search/Search";
import { useField } from "../../hooks/useField";
import { FlagGrid } from "../../components/FlagGrid/FlagGrid";
import { FilterBySelector } from "../../components/FilterBySelector/FilterBySelector";
import { useSelect } from "../../hooks/useSelect";
import styles from "./styles.module.scss";
import "../../assets/styles/Globals.scss";
import { regions } from "./Home.constants";
import { getAll } from "../../services/api";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import { useTheme } from "../../context/themeContext";
export const Home = () => {
  const { resetSearchValue, ...search } = useField("text");
  const { resetSelectValue, ...select } = useSelect({ initialState: regions });
  const { value: countries, doFetch: getCountries } = useFetch({
    fetch: getAll,
  });
  const { setTransitions } = useTheme();

  useEffect(() => {
    getCountries();
    setTransitions(true);
  }, [getCountries, setTransitions]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.search_bar}>
          <Search search={search} resetSelectValue={resetSelectValue} />
          <FilterBySelector
            select={select}
            resetSearchValue={resetSearchValue}
          />
        </div>
        <FlagGrid
          countries={countries}
          wordSearch={search.value}
          region={select.selectedValue}
        />
      </div>
    </>
  );
};
