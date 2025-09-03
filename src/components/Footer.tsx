
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export const Footer = () => {
 
  return (
    <footer className="bg-cyan-700 text-white py-10 mt-1">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Información de la empresa */}
        <div>
          <h3 className="text-lg font-semibold">Aresle Construcciones SRL</h3>
          <p className="mt-2 text-gray-200">
            Más de 30 años brindando soluciones en construcción civil e industrial,
            con compromiso, innovación y calidad.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold">Contacto</h3>
          <p className="mt-2 flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope /> areslecomercial@outlook.com
          </p>
          <p className="mt-1 flex items-center justify-center md:justify-start gap-2">
            <FaPhone /> +54 9 299-5873256
          </p>
          <p className="mt-1 flex items-center justify-center md:justify-start gap-2">
            <FaPhone /> +54 9 298-4948914
          </p>
          <p className="mt-1 flex items-center justify-center md:justify-start gap-2">
            <FaPhone /> +54 9 298-4191407
          </p>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              href="https://www.linkedin.com/company/aresle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/aresle_srl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Mapa de ubicación */}
      <div className="max-w-4xl mx-auto mt-10 px-6">
        <h3 className="text-lg font-semibold text-center md:text-left">Ubicación</h3>
        <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d496.5602536969412!2d-67.8211111448779!3d-38.993631822030395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1756081883896!5m2!1ses-419!2sar"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Datos legales */}
      <div className="max-w-6xl mx-auto mt-10 px-6 text-center md:text-left text-sm text-gray-300">
        <p><strong>CUIT:</strong> 33-71602800-9</p>
        <p><strong>Dirección:</strong> Acceso Güemes y ruta 65, Allen, Provincia de Rio Negro, Argentina</p>
        <p><strong>IVA:</strong> Responsable Inscripto</p>
      </div>

      {/* Línea inferior */}
      <div className="text-center mt-6 border-t border-cyan-600 pt-4 text-sm text-gray-200">
        <p>&copy; {new Date().getFullYear()} Aresle Construcciones SRL. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
