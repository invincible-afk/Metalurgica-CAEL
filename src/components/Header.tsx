import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-white">Metalurgica CAEL</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-orange-500 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-white hover:text-orange-500 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portafolio')} className="text-white hover:text-orange-500 transition-colors">
              Portafolio
            </button>
            <button onClick={() => scrollToSection('sobre-mi')} className="text-white hover:text-orange-500 transition-colors">
              Sobre mí
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="text-white hover:text-orange-500 transition-colors">
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('presupuesto')}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Solicitar Presupuesto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg shadow-xl">
            <div className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-orange-500 transition-colors text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-white hover:text-orange-500 transition-colors text-left">
                Servicios
              </button>
              <button onClick={() => scrollToSection('portafolio')} className="text-white hover:text-orange-500 transition-colors text-left">
                Portafolio
              </button>
              <button onClick={() => scrollToSection('sobre-mi')} className="text-white hover:text-orange-500 transition-colors text-left">
                Sobre mí
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-white hover:text-orange-500 transition-colors text-left">
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('presupuesto')}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-left"
              >
                Solicitar Presupuesto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;