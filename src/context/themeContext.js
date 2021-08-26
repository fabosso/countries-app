import {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { palletes } from "../utils/palletes";
import {
  getLocalValue,
  setLocalValue,
  removeLocalValue,
} from "../utils/localStorage";
const themeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(null);
  const [transitions, setTransitions] = useState(false);

  useEffect(() => {
    if (transitions) {
      document.documentElement.style.setProperty(
        "--transitions-duration",
        "1s"
      );
    }
  }, [transitions]);

  useLayoutEffect(() => {
    const themeLocalStorage = getLocalValue("theme");

    const properties = themeLocalStorage
      ? palletes[themeLocalStorage]
      : theme
      ? palletes[theme]
      : palletes["light"];
    for (const [key, value] of Object.entries(properties)) {
      document.documentElement.style.setProperty(key, value);
    }
    if (!theme) {
      setTheme("light");
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
