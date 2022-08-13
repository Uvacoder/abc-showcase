import { Header, Hero, ProjectsList, Footer } from "~/components"
import { ReactComponent as BlobTopRight } from "~/assets/blob-top-right.svg"
import { ReactComponent as BlobBottomLeft } from "~/assets/blob-bottom-left.svg"

export const App = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 h-full flex flex-col justify-between">
      <BlobTopRight className="h-[300px] w-auto absolute top-0 right-0 text-rose-500 dark:text-sky-500" />
      <Header />
      <div className="flex flex-col gap-12 mt-24 mb-12">
        <Hero />
        <ProjectsList />
      </div>
      <Footer />
      <BlobBottomLeft className="h-[300px] w-auto absolute bottom-0 left-0 text-rose-500 dark:text-sky-500" />
    </div>
  )
}
