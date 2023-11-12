import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [switchTheme, setSwitchTheme] = useState(true);

  function handleSwitchTheme() {
    setSwitchTheme((theme) => !theme);
  }

  useEffect(() => {
    if (switchTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [switchTheme]);
  return (
    <button
      className="fixed right-10 top-10 text-[3rem]"
      onClick={handleSwitchTheme}
    >{`${switchTheme === "light" ? "🌒" : "☀️"}`}</button>
  );
};

export default ThemeSwitcher;
