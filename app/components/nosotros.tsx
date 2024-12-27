"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Linkedin, ArrowRight } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
  achievements: string[];
  linkedin: string;
}

const teamMembers: TeamMember[] = [
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
    image: "/omarbelloni2.png",
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
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  return (
    <section id="nosotros" className="py-16 bg-bordofondo text-blanco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-verde font-semibold tracking-wide uppercase">Nuestro equipo </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blanco sm:text-4xl">
            Conocé los expertos detrás de CartoSYS
          </p>
          <p className="mt-4 max-w-2xl text-xl text-blanco lg:mx-auto">
            Un equipo apasionado, comprometidos con ofrecer soluciones innovadoras en cartografía y gestión territorial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center lg:flex lg:space-x-8 lg:items-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-bordoclaro rounded-lg shadow-lg max-w-sm overflow-hidden cursor-pointer lg:flex lg:flex-row lg:max-w-4xl"
              onClick={() => openModal(member)}
            >
              <div className="relative w-full h-96 lg:w-1/2 lg:h-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={480}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between lg:w-1/2 lg:p-8">
                <div>
                  <h3 className="text-xl font-bold text-verde mb-1">
                    {member.name}
                  </h3>
                  <p className="text-base font-medium text-blanco">
                    {member.title}
                  </p>
                </div>
                <div className="mt-4 flex">
                  <div
                    className="cursor-pointer bg-verde text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-verdeoscuro transition"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 px-2 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-bordoclaro text-blanco w-full max-w-5xl lg:flex rounded-lg overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white lg:text-bordo text-2xl font-bold z-10"
              >
                ✖
              </button>

              <div className="p-6 lg:p-12 flex-1">
                <h3 className="text-3xl font-bold text-verde mb-4">
                  {selectedMember.name}
                </h3>
                <p className="text-lg font-semibold mb-4">
                  {selectedMember.title}
                </p>
                <p className="mb-4">{selectedMember.description}</p>
                <h4 className="text-lg font-semibold text-verde mb-2">
                  Logros destacados:
                </h4>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  {selectedMember.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
                <Link
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-verde text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <Linkedin className="w-5 h-5 mr-2 text-white" />
                  Ver perfil de LinkedIn
                </Link>
              </div>

              <div className="hidden lg:block lg:w-1/2">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
