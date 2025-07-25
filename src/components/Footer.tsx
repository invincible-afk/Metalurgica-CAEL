import { Wrench, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">Metalúrgica CAEL</span>
            </div>
            <p className="text-gray-400 mb-4">
              Metalúrgico profesional especializado en soldadura, estructuras metálicas y soluciones 
              industriales en San Juan, Argentina.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portafolio')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Portafolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre-mi')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonios')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Testimonios
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Soldadura Especializada</li>
              <li>Puertas y Rejas</li>
              <li>Estructuras Metálicas</li>
              <li>Soluciones Residenciales</li>
              <li>Servicios Industriales</li>
              <li>Corte y Mecanizado</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">Santa Lucia - San Juan, Argentina</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="tel:+542645053813" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +54 9 264 505-3813
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:clanda119@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  clanda119@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">Lun-Vie: 8:00-21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Metalurgica CAEL. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Garantías</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;