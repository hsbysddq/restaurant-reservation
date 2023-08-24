import Footer from "@/components/Footer/page"
import Navbar from "@/components/Navbar/page"
import Hero from "./hero/page"
import Menu from "./menu/page"
import Reservation from "./reservasion/page"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <Reservation />
      <Footer />
    </main>
  )
}
