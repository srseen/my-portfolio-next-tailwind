import { useEffect, useState } from "react";
import SunIcon from "@public/Theme/sun.svg";
import MoonIcon from "@public/Theme/moon.svg";
import Icon from "./Icon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div onClick={toggleTheme}>
      <Icon src={theme === "light" ? SunIcon : MoonIcon} alt="Theme Toggle" />
    </div>
  );
}
