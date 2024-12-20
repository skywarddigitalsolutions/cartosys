"use client";
import { useEffect, useState } from "react";
import { Carrousel } from "./components/carrousel-section";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/NavBar";
import Nosotros from "./components/nosotros";
import Objetivos from "./components/objetivos";
import Servicios from "./components/servicios";
import Loader from "./components/ui/loader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 2000); // Adjust the loader duration as needed (2000ms = 2 seconds)

    return () => clearTimeout(timeout);
  }, []);

  if (!loaded) {
    return <Loader />; // Show loader when not loaded
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Objetivos />
      <Nosotros />
      <Carrousel />
      <Contacto />
      <Footer />
    </>
  );
}
