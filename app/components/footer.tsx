import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-negro text-blanco">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <MapPin className="h-10 w-10 text-verde" />
              <span className="ml-3 text-xl font-bold">Cartosys</span>
            </Link>
            <p className="text-blanco text-base">
              Soluciones cartográficas avanzadas para la gestión eficiente de localidades.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blanco hover:text-verde">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blanco hover:text-verde">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blanco hover:text-verde">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-verde tracking-wider uppercase">Servicios</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-blanco hover:text-verde">
                      Cartografía catastral
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-blanco hover:text-verde">
                      Análisis espacial
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-blanco hover:text-verde">
                      Gestión territorial
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-blanco hover:text-verde">
                      Capacitación GIS
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-verde tracking-wider uppercase">Empresa</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-blanco hover:text-verde">
                      Sobre nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-blanco hover:text-verde">
                      Equipo
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-blanco hover:text-verde">
                      Proyectos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-blanco hover:text-verde">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-verde tracking-wider uppercase">Contacto</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-verde mr-2" />
                    <span>Calle Ejemplo 123, Ciudad, País</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-verde mr-2" />
                    <span>+1 234 567 890</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-verde mr-2" />
                    <a href="mailto:info@cartosys.com" className="hover:text-verde">info@cartosys.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#4A7856] pt-8">
          <p className="text-base text-blanco xl:text-center">
            &copy; 2024 Cartosys. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
