import Image from 'next/image'
import { Globe, Target, Map, Users, Zap, Award } from 'lucide-react'

const features = [
  {
    name: 'Experiencia Comprobada',
    description: 'Más de 20 años de experiencia en cartografía y sistemas de información geográfica.',
    icon: Award,
  },
  {
    name: 'Tecnología de Vanguardia',
    description: 'Utilizamos las últimas tecnologías en mapeo y análisis espacial para ofrecer soluciones precisas y eficientes.',
    icon: Zap,
  },
  {
    name: 'Equipo Especializado',
    description: 'Nuestro equipo está compuesto por expertos en agrimensura, ingeniería y sistemas de información.',
    icon: Users,
  },
  {
    name: 'Cobertura Nacional',
    description: 'Ofrecemos servicios en todo el territorio nacional, adaptándonos a las necesidades específicas de cada región.',
    icon: Map,
  },
]

export default function Objetivos() {
  return (
    <section id="objetivos" className="py-24 bg-negro text-blanco">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-verde font-semibold tracking-wide uppercase">Sobre Nosotros</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blanco sm:text-4xl">
            Innovación en Cartografía y Gestión Territorial
          </p>
          <p className="mt-4 max-w-2xl text-xl text-blanco lg:mx-auto">
            En CartoSYS, combinamos experiencia, tecnología y pasión para transformar la gestión territorial y urbana.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-verdeoscuro text-blanco">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-verde">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-blanco">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>


        <div className="mt-20 lg:mt-24 flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-extrabold text-blanco tracking-tight sm:text-3xl">
              Nuestra Misión
            </h3>
            <p className="mt-3 text-lg text-blanco">
              Crear una experiencia simple, científica y eficiente para una gestión territorial actualizada y precisa. Resolvemos problemas en tiempo real con tecnología avanzada de mapeo y análisis espacial, facilitando la generación, recopilación, análisis, procesamiento, almacenamiento y distribución de información cartográfica esencial.
            </p>

            <dl className="mt-10 space-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-verdeoscuro text-blanco">
                    <Globe className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-verde">Alcance Global</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-blanco">
                  Nuestras soluciones se adaptan a proyectos de cualquier escala, desde pequeñas localidades hasta grandes urbes.
                </dd>
              </div>
            </dl>
          </div>

          <div className="order-1 lg:order-2 mb-8 lg:mb-0">
            <Image
              className="relative mx-auto rounded-lg shadow-lg"
              src="/fotoprueba2.webp"
              alt="Mapa de ejemplo"
              width={500}
              height={500}
            />
          </div>
        </div>


        <div className="mt-20 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              className="relative mx-auto rounded-lg shadow-lg"
              src="/fotoprueba2.webp"
              alt="Equipo trabajando"
              width={500}
              height={500}
            />
          </div>

          <div className="relative order-1 lg:order-2 mt-8 lg:mt-0">
            <h3 className="text-2xl font-extrabold text-blanco tracking-tight sm:text-3xl">
              Nuestra Visión
            </h3>
            <p className="mt-3 text-lg text-blanco">
              Liderar las operaciones de mapeo, gestión territorial y sistemas de información geográfica con excelencia. Impulsados por el conocimiento y la inteligencia, buscamos acelerar la transformación digital y mejorar las experiencias que nuestros clientes ofrecen, aspirando a ser el socio estratégico en la ejecución con innovación, seguridad y eficiencia en un mundo cada vez más digital.
            </p>

            <dl className="mt-10 space-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-verdeoscuro text-blanco">
                    <Target className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-verde">Innovación Constante</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-blanco">
                  Nos mantenemos a la vanguardia de las tecnologías geoespaciales para ofrecer soluciones innovadoras y eficientes.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

