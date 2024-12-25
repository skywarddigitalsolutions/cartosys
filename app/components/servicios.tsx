import { Map, Satellite, BarChart3, Users, GraduationCap, Building2, CreditCard, Server, ShieldCheck, BarChart, AlertCircle, Book } from 'lucide-react'

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
    description: "Revalúo de la capacidad contributiva mediante determinación de zonas beneficiadas por obras públicas y planes de contribución de mejoras."
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
  },
  {
    icon: <Server className="w-8 h-8 text-verde" />,
    title: "Gestión integral de las aplicaciones críticas",
    description: "Operamos y aseguramos el rendimiento y disponibilidad de aplicaciones críticas en entornos cloud y on-premise, integrando sistemas y herramientas con mejores prácticas de TI."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-verde" />,
    title: "Garantía de Servicios de TI",
    description: "Aseguramos la prestación eficiente de servicios TI, atendiendo solicitudes, resolviendo fallas y gestionando tareas operativas."
  },
  {
    icon: <BarChart className="w-8 h-8 text-verde" />,
    title: "Operación Inteligente",
    description: "Ofrecemos tableros de gestión basados en datos para facilitar la toma de decisiones informadas."
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-verde" />,
    title: "Gestión de Desastres e Incidentes",
    description: "Atendemos incidentes y demandas con warrooms y metodologías ITIL para la gestión de cambios, problemas e incidentes."
  },
  {
    icon: <Book className="w-8 h-8 text-verde" />,
    title: "Gestión del Conocimiento",
    description: "Clasificamos, protegemos y compartimos el capital intelectual de los clientes para su óptimo uso y actualización."
  }
]
export default function   Servicios() { 
  return (
    <section className="py-16 bg-bordofondo text-blanco" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
            <h2 className="text-base text-verde font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blanco sm:text-4xl">
            Servicios personalizados para una gestión territorial más eficiente.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-blanco lg:mx-auto">Ofrecemos soluciones integrales en cartografía y sistemas de información geográfica para optimizar la gestión urbana y catastral.</p>
        </div>
      

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-bordoclaro hover:bg-verde rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-bordofondo rounded-full">
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

