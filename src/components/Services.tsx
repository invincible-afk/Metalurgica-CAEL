import React from 'react';
import { Wrench, Shield, Building, Home, Factory, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Soldadura Especializada",
      description: "Soldadura MIG, TIG y por arco eléctrico. Trabajo con acero, aluminio, acero inoxidable y otros metales.",
      features: ["Soldadura estructural", "Reparaciones industriales", "Uniones críticas", "Certificación de calidad"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Puertas y Rejas",
      description: "Fabricación de puertas, rejas, cerramientos y elementos de seguridad personalizados.",
      features: ["Diseños personalizados", "Herrajes de calidad", "Tratamiento anticorrosivo", "Instalación incluida"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Estructuras Metálicas",
      description: "Construcción de estructuras, escaleras, barandas, techos y elementos arquitectónicos.",
      features: ["Cálculo estructural", "Escaleras industriales", "Techos metálicos", "Barandas de seguridad"]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Soluciones Residenciales",
      description: "Trabajos metálicos para el hogar: parrillas, muebles, decoración y funcionalidad.",
      features: ["Parrillas a medida", "Muebles metálicos", "Decoración única", "Reparaciones domésticas"]
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Servicios Industriales",
      description: "Reparaciones, mantenimiento y fabricación de componentes para la industria.",
      features: ["Mantenimiento preventivo", "Reparaciones urgentes", "Componentes industriales", "Servicio 24/7"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Corte y Mecanizado",
      description: "Corte de precisión con plasma, oxicorte y herramientas especializadas.",
      features: ["Corte plasma CNC", "Oxicorte manual", "Mecanizado básico", "Acabados precisos"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Servicios Especializados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrezco una amplia gama de servicios metalúrgicos con la más alta calidad y profesionalismo. 
            Cada proyecto es único y recibe atención personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-orange-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-orange-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button className="text-orange-500 font-medium hover:text-orange-400 transition-colors">
                  Solicitar información →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            ¿No encontrás lo que necesitás? Consultame por trabajos personalizados.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Consultar Trabajo Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;