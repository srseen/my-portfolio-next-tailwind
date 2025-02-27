import { useEffect, useState } from "react";
import SunIcon from "../../public/Theme/sun.svg";
import MoonIcon from "../../public/Theme/moon.svg";
import Image from "next/image";

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
    <Image
      src={theme === "light" ? SunIcon : MoonIcon}
      alt="Theme Toggle"
      width={40}
      height={40}
      onClick={toggleTheme}
      className="bg-icon cursor-pointer"
    ></Image>
  );
}
