import { createContext, useContext, useState, useEffect } from "react";
import { palletes } from "../utils/palletes";
const themeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const properties = palletes[theme];
    for (const [key, value] of Object.entries(properties)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, [theme]);

  const darkModeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
