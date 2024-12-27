export default function Hero() {
  return (
    <>
      <div className="relative bg-bordofondo overflow-hidden">
        {/* Hero Section */}
      </div>
      <div className="relative bg-bordofondo overflow-hidden">
        {/* Mobile design */}
        <div className="lg:hidden">
          <div className="relative h-screen">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2]"
              autoPlay
              loop
              muted
              playsInline
              src="/cartosys.webm"
            />
            {/* Filtro de color "bordoclaro" */}
            <div className="absolute inset-0 bg-bordoclaro opacity-60"></div>
            <div className="relative z-10 pt-12 pb-8 px-4 sm:px-6 flex flex-col justify-center h-full">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-blanco sm:text-5xl md:text-6xl">
                  <span className="block">Cartografía precisa para</span>
                  <span className="block text-verde mt-2">
                    localidades inteligentes
                  </span>
                </h1>
                <div className="w-20 h-1 bg-verde my-4 mx-auto"></div>
                <p className="mt-3 text-base text-blanco sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Expertos en relevamiento catastral urbano, suburbano y rural,
                  ofrecemos soluciones cartográficas avanzadas para la gestión
                  eficiente de localidades.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <a
                      href="#servicios"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blanco bg-bordoclaro hover:bg-verde transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                    >
                      Nuestros servicios
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#contacto"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blanco bg-verde hover:bg-bordoclaro transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                    >
                      Contáctanos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop design */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-bordofondo sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-bordofondo transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-blanco sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                      Cartografía precisa para
                    </span>{" "}
                    <span className="block text-verde xl:inline">
                      ciudades inteligentes
                    </span>
                  </h1>
                  <div className="w-20 h-1 bg-verde my-4 mx-auto lg:mx-0"></div>
                  <p className="mt-3 text-base text-blanco sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Expertos en relevamiento urbano y catastral, ofrecemos
                    soluciones cartográficas avanzadas para la gestión eficiente
                    de localidades.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#servicios"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blanco bg-bordoclaro hover:bg-verde transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                      >
                        Nuestros servicios
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#contacto"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blanco bg-verde hover:bg-bordoclaro transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                      >
                        Contáctanos
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="./cartosys.webm"
            />
            <div className="absolute inset-0 bg-bordoclaro opacity-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}
