import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="h-8 w-8" />, value: "20+", label: "Años de Experiencia" },
    { icon: <Users className="h-8 w-8" />, value: "500+", label: "Clientes Satisfechos" },
    { icon: <Clock className="h-8 w-8" />, value: "1000+", label: "Proyectos Completados" },
    { icon: <CheckCircle className="h-8 w-8" />, value: "100%", label: "Garantía de Calidad" }
  ];

  const certifications = [
    "Soldadura AWS D1.1 Estructural",
    "Certificación en Soldadura TIG",
    "Curso de Seguridad Industrial",
    "Manipulación de Materiales Peligrosos"
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sobre Mí
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Soy <strong className="text-white">Carlos Andres Echenique Landa</strong>, metalúrgico profesional con más de 20 años de experiencia 
                  transformando el metal en soluciones duraderas y funcionales para hogares, empresas e industrias 
                  en San Juan y alrededores.
                </p>
                
                <p className="leading-relaxed">
                  Mi pasión por la metalurgia comenzó siendo muy joven, cuando trabajaba junto a mi padre en su 
                  pequeño taller. Desde entonces, he perfeccionado mis habilidades, me he capacitado constantemente 
                  y he invertido en tecnología de vanguardia para ofrecer trabajos de la más alta calidad.
                </p>
                
                              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Soy <strong className="text-white">Carlos Andres Echenique Landa</strong>, metalúrgico profesional con más de 20 años de experiencia 
                  transformando el metal en soluciones duraderas y funcionales para hogares, empresas e industrias 
                  en San Juan y alrededores.
                </p>
                
                <p className="leading-relaxed">
                  Mi pasión por la metalurgia comenzó siendo muy joven, cuando trabajaba junto a mi padre en su 
                  pequeño taller. Desde entonces, he perfeccionado mis habilidades, me he capacitado constantemente 
                  y he invertido en tecnología de vanguardia para ofrecer trabajos de la más alta calidad.
                </p>
                
                <p className="leading-relaxed">
                  Mis habilidades me llevaron a trabajar en alta montaña en proyecto Veladero, allí me desempeñé como encargado y jefe de taller.
                </p>
                
              </div>
                <p className="leading-relaxed">
                  Cada proyecto que emprendo es único y recibe mi atención personalizada. Mi compromiso es entregar 
                  trabajos que no solo cumplan con las especificaciones técnicas, sino que superen las expectativas 
                  de mis clientes en términos de durabilidad, funcionalidad y estética.
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Certificaciones y Capacitaciones</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Image */}
            <div className="space-y-8">
              {/* Professional Photo Placeholder */}
              <div className="relative">
                <img
                  src="/soldador.jpg"
                  alt="Carlos Echenique - Metalúrgico Profesional"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-6 text-center border border-gray-700">
                    <div className="text-orange-500 flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 bg-gray-900/50 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Mi Compromiso</h3>
            <p className="text-gray-300 text-center text-lg max-w-4xl mx-auto leading-relaxed">
              "Mi objetivo es ser tu socio confiable en todos tus proyectos metalúrgicos. Trabajo con 
              materiales de primera calidad, utilizo técnicas probadas y mantengo los más altos estándares 
              de seguridad. Cada soldadura, cada corte, cada detalle recibe mi máxima atención porque 
              entiendo que mi trabajo forma parte de tu patrimonio y tu tranquilidad."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;