import { Header, Hero, ProjectsList, Footer } from "~/components"

export const App = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 h-screen flex flex-col justify-between">
      <Header />
      <div className="flex flex-col gap-12 mt-24 mb-12">
        <Hero />
        <ProjectsList />
      </div>
      <Footer />
    </div>
  )
}
