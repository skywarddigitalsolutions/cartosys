import { Globe, Target } from 'lucide-react'

export default function Objetivos() {
  return (
    <section className="py-16 bg-negro text-blanco relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#6C9A8B" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 bg-[#4A7856] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4">
              <Globe className="w-10 h-10 text-verde" />
              <h2 className="text-3xl font-extrabold text-verde">Nuestra Misión</h2>
            </div>
            <div className="w-20 h-1 bg-bordo"></div>
            <p className="text-lg">
              Crear una experiencia simple, científica y eficiente para una gestión territorial actualizada y precisa. Resolvemos problemas en tiempo real con tecnología avanzada de mapeo y análisis espacial, facilitando la generación, recopilación, análisis, procesamiento, almacenamiento y distribución de información cartográfica esencial.
            </p>
          </div>
          <div className="space-y-6 bg-[#4A7856] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4">
              <Target className="w-10 h-10 text-verde" />
              <h2 className="text-3xl font-extrabold text-verde">Nuestra Visión</h2>
            </div>
            <div className="w-20 h-1 bg-bordo"></div>
            <p className="text-lg">
              Liderar las operaciones de mapeo, gestión territorial y sistemas de información geográfica con excelencia. Impulsados por el conocimiento y la inteligencia, buscamos acelerar la transformación digital y mejorar las experiencias que nuestros clientes ofrecen, aspirando a ser el socio estratégico en la ejecución con innovación, seguridad y eficiencia en un mundo cada vez más digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
