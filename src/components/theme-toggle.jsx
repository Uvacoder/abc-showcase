import { useState, useEffect } from "react"
import { ReactComponent as Sun } from "~/assets/icon-sun.svg"
import { ReactComponent as Moon } from "~/assets/icon-moon.svg"

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.theme)

  const colorTheme = theme === "dark" ? "light" : "dark"

  const handleTheme = () => {
    setTheme(colorTheme)
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)

    localStorage.setItem("theme", theme)
  }, [theme, colorTheme])

  return (
    <button
      onClick={handleTheme}
      className="hover:text-rose-500 dark:hover:text-indigo-500"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  )
}
