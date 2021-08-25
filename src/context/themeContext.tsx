import { createContext, useContext, useState, useEffect } from "react";
import { palletes } from "../utils/palletes";
import {
  getLocalValue,
  setLocalValue,
  removeLocalValue,
} from "../utils/localStorage";
import { ThemeInterface } from "../interfaces/Theme.interface";

const themeContext: any = createContext(null);

export function ThemeProvider(props: any) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const themeLocalStorage: string = getLocalValue("theme");
    const properties: ThemeInterface =
      palletes[themeLocalStorage] || palletes[theme];
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

  return <themeContext.Provider value={{ darkModeHandler }} {...props} />;
}

export function useTheme() {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme call is not inside a ThemeProvider");
  }
  return context;
}
