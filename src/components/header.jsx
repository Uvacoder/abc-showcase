import { ThemeToggle } from "~/components"
import { ReactComponent as LogoAp } from "~/assets/logo-ap.svg"

export const Header = () => {
  return (
    <header className="pt-12 flex justify-between">
      <LogoAp className="h-9 w-auto fill-rose-500 dark:fill-indigo-500 md:h-6" />
      <ThemeToggle />
    </header>
  )
}
