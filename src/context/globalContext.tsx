import { createContext, useContext, useState, useEffect } from "react";
import { palletes } from "../utils/palletes";
import {
  getLocalValue,
  setLocalValue,
  removeLocalValue,
  reformLastVisited,
} from "../utils/localStorage";
import { ProviderProps } from "../types/ProviderProps.type";
import { ThemeInterface } from "../interfaces/Theme.interface";
import {
  updateLastVisitedType,
  useGlobalTypes,
} from "../interfaces/Global.interface";

const globalContext = createContext<useGlobalTypes>(null!);

export function GlobalProvider({ children }: ProviderProps) {
  const themeLocalStorage: string = getLocalValue("theme")
    ? getLocalValue("theme")!
    : "light";
  const lastVisitedLocalStorage: string[] = getLocalValue("lastVisited")
    ? getLocalValue("lastVisited")!
    : [];
  const [lastVisited, setLastVisited] = useState(lastVisitedLocalStorage);
  const [theme, setTheme] = useState(themeLocalStorage);
  const [transitions, setTransitions] = useState(false);
  const [borders, setBorders] = useState(null);

  useEffect(() => {
    const properties: ThemeInterface = palletes[theme];
    for (const [key, value] of Object.entries(properties)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, [theme]);

  useEffect(() => {
    if (transitions) {
      document.documentElement.style.setProperty(
        "--transitions-duration",
        "1s"
      );
    }
  }, [transitions]);

  const darkModeHandler = () => {
    const _theme = theme === "light" ? "dark" : "light";
    setTheme(_theme);
    removeLocalValue("theme");
    setLocalValue("theme", _theme);
  };

  const updateLastVisited: updateLastVisitedType = (code, history) => {
    const _lastVisited = reformLastVisited(code);
    setLastVisited((prev) => [..._lastVisited]);
    removeLocalValue("lastVisited");
    setLocalValue("lastVisited", _lastVisited);
    setBorders(null); // null signalizes a temporal lack of downloaded data, NOT a lack of borders
    history.push(`/description/${code}`);
  };

  return (
    <globalContext.Provider
      value={{
        darkModeHandler,
        setTransitions,
        lastVisited,
        updateLastVisited,
        borders,
        setBorders,
        theme,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export function useGlobal() {
  const context: useGlobalTypes = useContext(globalContext)!;
  if (!context) {
    throw new Error("useGlobal call is not inside a GlobalProvider");
  }
  return context;
}
