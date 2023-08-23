"use client";
import { useTheme } from "next-themes";
import { Sun } from "@/components/svg/Sun/Sun";
import { Moon } from "@/components/svg/Moon/Moon";
import { useEffect, useState } from "react";
import { ArrowClockwise } from "@/components/svg/ArrowClockwise/ArrowClockwise";

export const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return <ArrowClockwise className="animate-spin font-lg" />;
  return (
    <button
      className="p-2"
      name="theme-switcher"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};
