import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/NavBar";
import Nosotros from "./components/nosotros";
import Objetivos from "./components/objetivos";
import Servicios from "./components/servicios";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Objetivos />
      <Nosotros />
      <Footer />
    </>
  );
}
