import { ThemeToggle } from "~/components"
import { ReactComponent as LogoAp } from "~/assets/logo-ap.svg"
import { ReactComponent as LogoFcc } from "~/assets/logo-fcc.svg"

export const Header = () => {
  return (
    <header className="pt-12 flex justify-between">
      <div className="flex gap-6 items-center">
        <LogoAp className="h-9 w-auto fill-rose-500 dark:fill-sky-500" />
        <span className="uppercase">x</span>
        <LogoFcc className="h-9 w-auto fill-current" />
      </div>
      <ThemeToggle />
    </header>
  )
}
