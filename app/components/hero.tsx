import Image from 'next/image'
import Link from 'next/link'
import FotoPrueba from "@/public/fotoprueba.webp"
export default function Hero() {
  return (
    <div className="relative pt-12 bg-negro overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-negro sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-negro transform translate-x-1/2"
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
                <span className="block xl:inline">Cartografía precisa para</span>{' '}
                <span className="block text-verde xl:inline">ciudades inteligentes</span>
              </h1>
              <div className="w-20 h-1 bg-bordo my-4 mx-auto lg:mx-0"></div>
              <p className="mt-3 text-base text-blanco sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Expertos en relevamiento urbano y catastral, ofrecemos soluciones cartográficas avanzadas para la gestión eficiente de localidades.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/servicios" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blanco bg-[#4A7856] hover:bg-verde transition-colors duration-300 md:py-4 md:text-lg md:px-10">
                    Nuestros servicios
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/contacto" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blanco bg-verde hover:bg-[#4A7856] transition-colors duration-300 md:py-4 md:text-lg md:px-10">
                    Contáctanos
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={FotoPrueba}
          alt="Mapa de ciudad"
          width={800}
          height={600}
        />
      </div>
    </div>
  )
}

