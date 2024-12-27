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
import Head from "next/head";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);  
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (!loaded) return <Loader />;
  

  return (
    <>
      <Head>
        <title>CartoSYS - Soluciones Cartográficas Inteligentes</title>
        <meta
          name="description"
          content="Expertos en relevamiento catastral urbano, suburbano y rural. Soluciones avanzadas para la gestión eficiente de localidades."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="cartografía, relevamiento catastral, soluciones urbanas, gestión inteligente, mapa, mundo, zona, zonas, urbano, rural, mapas, cartógrafo, localidad, localidades" />
        <meta property="og:title" content="Cartosys - Soluciones Cartográficas Inteligentes" />
        <meta property="og:description" content="Expertos en relevamiento catastral urbano, suburbano y rural. Soluciones avanzadas para la gestión eficiente de localidades." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://cartosys.com.ar" />
      </Head>

      
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
