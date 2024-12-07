import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { Card, CardContent } from "@/app/components/card"

const teamMembers = [
  {
    name: "Horacio Belloni",
    title: "Agrimensor especializado en SIG",
    image: "/persona.jpg",
    description: "Experto en Sistemas de Información Geográfica y procesamiento de imágenes para la gestión de datos territoriales. Máster en gestión ambiental y patrimonial, con amplia experiencia en tasaciones y expropiación de inmuebles.",
    linkedin: "https://www.linkedin.com/in/horacio-francisco-belloni-3a030a4/"
  },
  {
    name: "Omar Marcelo Belloni",
    title: "Ingeniero en Sistemas de Información",
    image: "/persona.jpg",
    description: "Especialista en gestión integral de servicios de TI con dos maestrías. Destaca por su capacidad para alinear tecnología, operaciones y negocio, impulsando la innovación y la eficiencia en entornos dinámicos.",
    linkedin: "https://www.linkedin.com/in/omar-marcelo-belloni-89a32549/"
  }
]

export default function Nosotros() {
  return (
    <section className="py-16 bg-[#4A7856] text-blanco relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="topo" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 10 Q 5 0 10 10 M 10 10 Q 15 20 20 10 M 0 20 Q 5 10 10 20 M 10 0 Q 15 10 20 0" fill="none" stroke="#6C9A8B" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#topo)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-negro mb-12">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-negro text-blanco overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <Image
                      className="h-48 w-full object-cover rounded-br-xl md:w-48"
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-verde font-semibold">{member.title}</div>
                    <h3 className="mt-1 text-lg leading-tight font-medium text-blanco">{member.name}</h3>
                    <p className="mt-2 text-blanco">{member.description}</p>
                    <Link href={member.linkedin} className="inline-flex items-center mt-4 text-verde hover:text-bordo transition-colors duration-300">
                      <Linkedin className="w-5 h-5 mr-2" />
                      Ver perfil de LinkedIn
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

