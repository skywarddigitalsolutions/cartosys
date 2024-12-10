import Image from "next/image";
import Link from "next/link";
import { Linkedin, MapPin, Book, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const teamMembers = [
  {
    name: "Horacio Belloni",
    title: "Agrimensor especializado en SIG",
    image: "/horaciobelloni.jpg",
    description:
      "Agrimensor especializado en Sistemas de Información geográfica y procesamiento de imágenes aplicadas a la gestión de datos del territorio. Experto en procesos de tasaciones y expropiación de inmuebles.",
    achievements: [
      "Maestría en gestión del ambiente, el patrimonio y el paisaje y socio ambiental",
      "Estudios de Postgrado en Sistemas de Información Geográfica",
      "Desarrollo de plataforma informática para tasaciones de inmuebles y análisis de contingencias",
      "Liderazgo en proyectos de expropiación de inmuebles para obras públicas",
      "Experiencia en proyectos de aprovechamiento del Río Paraná",
    ],
    linkedin: "https://www.linkedin.com/in/horacio-francisco-belloni-3a030a4/",
  },
  {
    name: "Omar Marcelo Belloni",
    title: "Ingeniero en Sistemas de Información",
    image: "/omarbelloni.jpg",
    description:
      "Ingeniero en Sistemas de Información con una sólida trayectoria en la gestión integral de servicios de TI. Especializado en alinear tecnología, operaciones y negocio para impulsar la innovación y la eficiencia.",
    achievements: [
      "Dos maestrías en áreas relacionadas con sistemas de información",
      "Experiencia en entornos dinámicos y desafiantes",
      "Pasión por la innovación tecnológica y la mejora continua",
      "Habilidad para optimizar procesos y sistemas",
      "Enfoque en generar impacto tangible y duradero en las organizaciones",
    ],
    linkedin: "https://www.linkedin.com/in/omar-marcelo-belloni-89a32549/",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-verdeoscuro text-blanco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-blanco sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-xl text-blanco max-w-2xl mx-auto">
            Conoce a los expertos detrás de CartoSYS, líderes en cartografía y
            sistemas de información geográfica.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="bg-negro text-blanco overflow-hidden"
            >
              <CardContent className="p-0">
                <div
                  className={`flex flex-col lg:flex-row ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="lg:w-1/3">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-2/3 p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-verde mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg font-semibold mb-4">{member.title}</p>
                    <p className="mb-4">{member.description}</p>
                    <h4 className="text-lg font-semibold text-verde mb-2">
                      Logros destacados:
                    </h4>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      {member.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#0e76a8] to-[#005582] text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                      <Linkedin className="w-5 h-5 mr-2 text-white" />
                      Ver perfil de LinkedIn
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-negro rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-verde mb-4">
            ¿Por qué elegir nuestro equipo?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <MapPin className="w-8 h-8 text-verde mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Experiencia Comprobada
                </h4>
                <p>
                  Años de experiencia en proyectos de cartografía y SIG a nivel
                  nacional e internacional.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Book className="w-8 h-8 text-verde mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Formación Académica
                </h4>
                <p>
                  Nuestro equipo cuenta con múltiples maestrías y estudios de
                  postgrado en áreas relevantes.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Award className="w-8 h-8 text-verde mr-4 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Innovación Constante
                </h4>
                <p>
                  Comprometidos con la mejora continua y la aplicación de las
                  últimas tecnologías en nuestro campo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
