import { Header, Hero, Footer } from "~/components"

export const App = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 h-screen flex flex-col justify-between">
      <Header />
      <div>
        <Hero />
      </div>
      <Footer />
    </div>
  )
}
