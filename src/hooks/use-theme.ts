import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem("theme") as Theme : "light";
    return storedTheme || "light";
  });
  
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the previous theme class
    root.classList.remove("light", "dark");
    
    // If theme is system, check user preference
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }
    
    // Otherwise, add the selected theme class
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  return { theme, setTheme };
}
