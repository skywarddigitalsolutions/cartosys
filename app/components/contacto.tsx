import { ContactForm } from "./ui/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative py-16 bg-bordofondo text-blanco overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-verde sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-blanco">
            Estamos aquí para responder tus preguntas y ayudarte con tus
            necesidades cartográficas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-verde mb-6">
              Información de contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-verde mr-4" />
                <span>cartosys@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-verde mr-4" />
                <span>+54 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-verde mr-4" />
                <span>Calle Ejemplo 123, Ciudad, Argentina</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-verde mb-6">
              Envíanos un mensaje
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
