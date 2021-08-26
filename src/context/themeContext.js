import { createContext, useContext, useState, useEffect } from "react";
import { palletes } from "../utils/palletes";
import {
  getLocalValue,
  setLocalValue,
  removeLocalValue,
} from "../utils/localStorage";
const themeContext = createContext();

export function ThemeProvider(props) {
  const themeLocalStorage = getLocalValue("theme");
  const [theme, setTheme] = useState(themeLocalStorage);
  const [transitions, setTransitions] = useState(false);

  useEffect(() => {
    if (transitions) {
      document.documentElement.style.setProperty(
        "--transitions-duration",
        "1s"
      );
    }
  }, [transitions]);

  useEffect(() => {
    const properties = theme ? palletes[theme] : palletes["light"];
    for (const [key, value] of Object.entries(properties)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, [theme]);

  const darkModeHandler = () => {
    const _theme = theme === "light" ? "dark" : "light";
    setTheme(_theme);
    removeLocalValue("theme");
    setLocalValue("theme", _theme);
  };

  return (
    <themeContext.Provider
      value={{ darkModeHandler, setTransitions, theme }}
      {...props}
    />
  );
}

export function useTheme() {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme call is not inside a ThemeProvider");
  }
  return context;
}
