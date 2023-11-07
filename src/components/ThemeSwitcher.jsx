import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [switchTheme, setSwitchTheme] = useState(true);
  console.log(switchTheme);

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
      className="fixed top-10 right-10 text-[3rem]"
      onClick={handleSwitchTheme}
    >{`${switchTheme === "light" ? "🌒" : "☀️"}`}</button>
  );
};

export default ThemeSwitcher;
