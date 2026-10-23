"use client";
import { useSyncExternalStore, useState, useEffect } from "react";

export default function ThemeToggle() {
const [theme, setTheme] = useState<"light" | "dark">(() =>
  typeof window === "undefined"
    ? "light"
    : localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light",
);
const mounted = useSyncExternalStore(
  () => () => {},
  () => true,
  () => false,
);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) {
    return <button className="border rounded px-2 py-1">Theme</button>;
  }

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button onClick={toggle} className="border rounded px-2 py-1">
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
