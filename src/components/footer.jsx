import { ReactComponent as Heart } from "~/assets/icon-heart.svg"

export const Footer = () => {
  return (
    <footer className="pb-12 flex gap-4 text-sm items-center">
      <span>Made with</span>
      <Heart className="text-rose-500 dark:text-sky-500 animate-beat" />{" "}
      <span>
        by{" "}
        <a
          href="https://alexperronnet.dev"
          className="hover:text-rose-500 dark:hover:text-sky-500 hover:underline underline-offset-8"
        >
          @alexperronnet
        </a>
      </span>
    </footer>
  )
}
