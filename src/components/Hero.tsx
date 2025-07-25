import { ArrowRight, Shield, Award, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,107,0,0.1),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_40%,_rgba(176,176,176,0.1)_50%,_transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Metalúrgico Profesional
            <span className="block text-orange-500">en San Juan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Especialista en soldadura, estructuras metálicas, puertas, rejas y soluciones industriales personalizadas. 
            <strong className="text-white"> Más de 20 años</strong> transformando metal en soluciones duraderas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('presupuesto')}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Solicitar Presupuesto Gratuito</span>
              <ArrowRight size={20} />
            </button>
            
            <button 
              onClick={() => scrollToSection('portafolio')}
              className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Ver Trabajos Realizados
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-gray-800/50 rounded-lg p-4">
              <Shield className="h-8 w-8 text-orange-500" />
              <div className="text-left">
                <div className="text-white font-semibold">Garantía</div>
                <div className="text-gray-400 text-sm">En todos los trabajos</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-gray-800/50 rounded-lg p-4">
              <Award className="h-8 w-8 text-orange-500" />
              <div className="text-left">
                <div className="text-white font-semibold">20+ Años</div>
                <div className="text-gray-400 text-sm">De experiencia</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-gray-800/50 rounded-lg p-4">
              <Clock className="h-8 w-8 text-orange-500" />
              <div className="text-left">
                <div className="text-white font-semibold">Respuesta</div>
                <div className="text-gray-400 text-sm">En 24 horas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;