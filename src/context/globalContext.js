import { createContext, useContext, useState, useEffect } from "react";
import { palletes } from "../utils/palletes";
import {
  getLocalValue,
  setLocalValue,
  removeLocalValue,
  reformLastVisited,
} from "../utils/localStorage";
const globalContext = createContext();

export function GlobalProvider(props) {
  const themeLocalStorage = getLocalValue("theme")
    ? getLocalValue("theme")
    : "light";
  const lastVisitedLocalStorage = getLocalValue("lastVisited")
    ? getLocalValue("lastVisited")
    : [];
  const [lastVisited, setLastVisited] = useState(lastVisitedLocalStorage);
  const [theme, setTheme] = useState(themeLocalStorage);
  const [transitions, setTransitions] = useState(false);
  const [borders, setBorders] = useState(null);

  useEffect(() => {
    const properties = palletes[theme];
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

  const updateLastVisited = (code, history) => {
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
      {...props}
    />
  );
}

export function useGlobal() {
  const context = useContext(globalContext);
  if (!context) {
    throw new Error("useGlobal call is not inside a GlobalProvider");
  }
  return context;
}
