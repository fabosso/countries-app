import { createContext, useContext, useState, useEffect } from "react";
import { palletes } from "../utils/palletes";
import { getLocalValue, setLocalValue, removeLocalValue } from "../utils/localStorage";
const themeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const themeLocalStorage = getLocalValue("theme");
    const properties = palletes[themeLocalStorage] || palletes[theme];
    for (const [key, value] of Object.entries(properties)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, [theme]);

  const darkModeHandler = () => {
    const _theme = theme === "light" ? "dark" : "light"
    setTheme(_theme);
    removeLocalValue("theme");
    setLocalValue("theme", _theme);
  };

  return <themeContext.Provider value={{ darkModeHandler }} {...props} />;
}

export function useTheme() {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme call is not inside a ThemeProvider");
  }
  return context;
}
