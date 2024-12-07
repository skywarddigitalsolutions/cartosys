import { Map, Satellite, BarChart3, Users, GraduationCap, Building2, CreditCard } from 'lucide-react'

const services = [
  {
    icon: <Map className="w-8 h-8 text-verde" />,
    title: "Gestión de base cartográfica catastral",
    description: "Asesoramiento en creación, evolución, mantenimiento y depuración/archivado de bases cartográficas catastrales."
  },
  {
    icon: <Satellite className="w-8 h-8 text-verde" />,
    title: "Cartografía catastral de ejidos urbanos",
    description: "Detección de cambios y mejoras no declaradas mediante análisis de imágenes satelitales o fotografías aéreas."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-verde" />,
    title: "Determinación de capacidad contributiva",
    description: "Análisis de zonas beneficiadas por obras públicas para planes de contribución de mejoras."
  },
  {
    icon: <Users className="w-8 h-8 text-verde" />,
    title: "Análisis poblacional",
    description: "Estudio de áreas beneficiadas por rutas de transporte público y obras de infraestructura."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-verde" />,
    title: "Capacitación en GIS",
    description: "Formación en Sistemas de Información Geográficos (GIS)."
  },
  {
    icon: <Building2 className="w-8 h-8 text-verde" />,
    title: "Gestión de cobranzas TGI",
    description: "Simplificación de la gestión de cobranzas de la tasa general de inmuebles utilizando bases catastrales existentes."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-verde" />,
    title: "Canales de recaudación digitales",
    description: "Implementación de canales digitales e integraciones para reducir costos y seguimiento de cobranza."
  }
]

export default function Servicios() {
  return (
    <section className="py-16 bg-negro text-blanco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-verde sm:text-4xl">
            ¿Qué hacemos?
          </h2>
          <div className="w-20 h-1 bg-bordo my-4 mx-auto"></div>
          <p className="mt-4 max-w-2xl text-xl text-blanco lg:mx-auto">
            Ofrecemos soluciones integrales en cartografía y sistemas de información geográfica para optimizar la gestión urbana y catastral.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-verdeoscuro rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-negro rounded-full">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-blanco text-center">{service.title}</h3>
              <p className="mt-2 text-blanco text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

