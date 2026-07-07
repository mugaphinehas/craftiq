import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Values from "./sections/Values"
import Work from "./sections/Work"
import CallToAction from "./sections/CallToAction"
export default function Home(){

  return(
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Values/>
      <Work/>
      <Values/>
      <CallToAction/>
    </main>
  )
}