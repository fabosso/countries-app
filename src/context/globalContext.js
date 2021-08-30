import { createContext, useContext, useState, useEffect } from "react";
import { palletes } from "../utils/palletes";
import {
  getLocalValue,
  setLocalValue,
  removeLocalValue,
} from "../utils/localStorage";
const globalContext = createContext();

export function GlobalProvider(props) {
  const themeLocalStorage = getLocalValue("theme");
  const lastVisitedLocalStorage = getLocalValue("lastVisited");
  const [lastVisited, setLastVisited] = useState(lastVisitedLocalStorage);
  const [theme, setTheme] = useState(themeLocalStorage);
  const [transitions, setTransitions] = useState(false);
  const [borders, setBorders] = useState(null);

  useEffect(() => {
    const properties = theme ? palletes[theme] : palletes["light"];
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

  return (
    <globalContext.Provider
      value={{
        darkModeHandler,
        setTransitions,
        lastVisited,
        setLastVisited,
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
