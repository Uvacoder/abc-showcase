import { Header, Hero, ProjectsList, Footer } from "~/components"
import { ReactComponent as BlobTopRight } from "~/assets/blob-top-right.svg"
import { ReactComponent as BlobBottomLeft } from "~/assets/blob-bottom-left.svg"

export const App = () => {
  return (
    <div className="max-w-3xl mx-auto ">
      <BlobTopRight className="h-[300px] w-auto absolute top-0 right-0 text-rose-500 dark:text-indigo-500 xl:h-[200px] lg:opacity-20" />
      <div className="relative z-10 min-h-screen h-full px-6 flex flex-col justify-between gap-24 md:gap-20">
        <Header />
        <div className="flex flex-col gap-12">
          <Hero />
          <ProjectsList />
        </div>
        <Footer />
      </div>
      <BlobBottomLeft className="h-[300px] w-auto absolute bottom-0 left-0 text-rose-500 dark:text-indigo-500 xl:h-[200px] lg:opacity-20" />
    </div>
  )
}
