import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext =
  createContext<ThemeContextType | null>(null);

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] =
        useState<Theme>(() => {
            const savedTheme =
            localStorage.getItem("theme");

            return savedTheme === "dark"
            ? "dark"
            : "light";
        });

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    const root =
      window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;