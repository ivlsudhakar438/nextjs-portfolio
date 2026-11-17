"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  }

  return (
    <button className="theme" type="button" onClick={toggle}>
      {dark ? "Light" : "Dark"}
    </button>
  );
}
