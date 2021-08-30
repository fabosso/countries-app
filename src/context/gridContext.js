import { createContext, useContext } from "react";
import { getAll } from "../services/api";
import { useFetch } from "../hooks/useFetch";
import { useGlobal } from "./globalContext";
import { regions } from "../views/Home/Home.constants";
import { useSelect } from "../hooks/useSelect";
import { useField } from "../hooks/useField";
import { useEffect } from "react";

const gridContext = createContext();

export function GridProvider(props) {
  const { resetSearchValue, ...search } = useField("text");
  const { resetSelectValue, ...select } = useSelect({ initialState: regions });
  const { value: countries, doFetch: getCountries } = useFetch({
    fetch: getAll,
  });
  const { setTransitions } = useGlobal();

  useEffect(() => {
    getCountries();
    setTransitions(true);
  }, [getCountries, setTransitions]);

  return (
    <gridContext.Provider
      value={{
        countries,
        search,
        select,
        resetSearchValue,
        resetSelectValue,
      }}
      {...props}
    />
  );
}

export function useGrid() {
  const context = useContext(gridContext);
  if (!context) {
    throw new Error("useGrid call is not inside a GridProvider");
  }
  return context;
}
