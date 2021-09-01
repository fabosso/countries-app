import { createContext, useContext } from "react";
import { getAll } from "../services/api";
import { useFetch } from "../hooks/useFetch";
import { useGlobal } from "./globalContext";
import { regions } from "../views/Home/Home.constants";
import { useSelect } from "../hooks/useSelect";
import { useField } from "../hooks/useField";
import { useEffect } from "react";
import { useGridTypes } from "../interfaces/Grid.interface";
import { ProviderProps } from "../types/ProviderProps.type";

const gridContext = createContext<useGridTypes>(null!);

export function GridProvider({ children }: ProviderProps) {
  const { resetSearchValue, ...search } = useField({ type: "text" });
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
    >
      {children}
    </gridContext.Provider>
  );
}

export function useGrid() {
  const context: useGridTypes = useContext(gridContext);
  if (!context) {
    throw new Error("useGrid call is not inside a GridProvider");
  }
  return context;
}
