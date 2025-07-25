import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Escalera Metálica Industrial para Acceso a Planta Alta",
      category: "residential",
      image: "/escalera2.jpeg",
      description: "Escalera metálica estructural para acceso a planta alta. Peldaños de rejilla metálica antideslizante y barandas laterales con pasamanos."
    },
    {
      id: 2,
      title: "Puerta de Seguridad",
      category: "residential",
      image: "/reja-puerta.jpeg",
      description: "Puerta metálica reforzada con diseño de reja vertical, fabricada en hierro. Ideal para brindar seguridad sin comprometer la ventilación ni la visibilidad. Esta instalación combina funcionalidad, protección y un toque moderno para entradas residenciales."
    },
    {
      id: 3,
      title: "Estructura de Techo",
      category: "structural",
      image: "/estructura-techo.jpeg",
      description: "Estructura metálica para techo residencial con vigas de acero soldadas."
    },
    {
      id: 4,
      title: "Reja Decorativa y Porton Residencial",
      category: "residential",
      image: "/porton-rejas.jpeg",
      description: "Reja decorativa y Porton con diseño artístico para casa residencial."
    },
    {
      id: 5,
      title: "Parrilla Personalizada",
      category: "residential",
      image: "/Parrilla.jpeg",
      description: "Parrilla de con detalles artísticos."
    },
    {
      id: 6,
      title: "Ventana Residencial",
      category: "residential",
      image: "/estructura-ventana.jpeg",
      description: "Estructura y Marco de Ventana Residencial Personalizada."
    },
    {
      id: 7,
      title: "Porton de SeguridadResidencial",
      category: "residential",
      image: "/porton-residencial.jpeg",
      description: "Porton para casa residencial con sistema de seguridad."
    },
    {
      id: 8,
      title: "Puertas Reja de Seguridad",
      category: "structural",
      image: "/puertas-rejas.jpeg",
      description: "Estructura y Marco de Puerta de Seguridad con Rejas."
    },
    {
      id: 9,
      title: "Estructuras sólidas para Construcción de Planta Alta.",
      category: "structural",
      image: "/estructura-residencial.jpeg",
      description: "Estructura metálica para planta alta con vigas de acero soldadas."

    },
    {
      id: 10,
      title: "Puerta Interior con Doble Apertura",
      category: "structural",
      image: "/puerta.jpeg",
      description: "Puerta metálica de tipo vaivén. Incluye manija tubular roja de alta visibilidad y sistema de apertura, ideal para control de acceso parcial."
    },
     {
      id: 11,
      title: "Rejas de Seguridad Duales para Accesos",
      category: "structural",
      image: "/rejas-duales.jpeg",
      description: "Puertas de rejas metálicas diseñadas a medida. Construidas con caño estructural rectangular y barrotes de refuerzo verticales y horizontales, garantizando resistencia y seguridad."
    },
    {
      id: 12,
      title: "Mesa Industrial con Cadena Decorativa",
      category: "residential",
      image: "/mesa.jpeg",
      description: "Mesa de diseño industrial compuesta por una base metálica con patas en forma de “X” soldadas y uniones con cadena estructural que aportan firmeza y carácter. Ideal para ambientes modernos con personalidad o espacios exteriores techados."
    },
     {
      id: 13,
      title: "Máquina de Remo T-Bar para Gimnasio",
      category: "structural",
      image: "/maquina-gym.jpeg",
      description: "Estructura metálica de alta resistencia diseñada para ejercicios de remo tipo T-Bar. Fabricada en caño estructural reforzado, con múltiples soportes de seguridad para discos."
    },
    {
      id: 14,
      title: "Estufa Rocket con Disco de Arado Integrado",
      category: "residential",
      image: "/disco-estufa.jpeg",
      description: "Construida en acero estructural con una cámara de combustión vertical y alimentador inclinado para optimizar el flujo de aire. En la parte superior, se integra un disco de arado ideal para preparar alimentos al calor directo."
    },
    {
      id: 15,
      title: "Escultura Metálica Pulpo",
      category: "escultura",
      image: "/pulpo.jpeg",
      description: "Escultura artesanal de un pulpo metálico realizada íntegramente con tuercas. Ideal como pieza decorativa industrial o artística."
    },
    {
      id: 16,
      title: "Águila Metálica en Picada",
      category: "escultura",
      image: "/Aguila.jpeg",
      description: "Escultura de un águila. Las alas extendidas muestran un trabajo detallado de solapado de piezas metálicas que simulan plumas. El cuerpo fue modelado con soldadura y metal trabajado a mano transmitiendo fuerza y precisión."
    },
     {
      id: 17,
      title: "Soportes Metálicos para Gimnasio – Rack de Entrenamiento",
      category: "structural",
      image: "/soporte.jpeg",
      description: "Par de estructuras metálicas diseñadas específicamente para su uso en gimnasios o espacios de entrenamiento funcional. Fabricadas en caño estructural de alta resistencia, estas bases ofrecen estabilidad y seguridad como soporte para barras olímpicas."
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'residential', name: 'Residencial' },
    { id: 'structural', name: 'Estructural' },
    { id: 'escultura', name: 'Escultura' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="portafolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trabajos Realizados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada proyecto es único y refleja mi compromiso con la calidad y la precisión. 
            Explorá algunos de mis trabajos más destacados.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentImage(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Main Image Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
            <img
              src={filteredProjects[currentImage]?.image}
              alt={filteredProjects[currentImage]?.title}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {filteredProjects[currentImage]?.title}
              </h3>
              <p className="text-gray-300">
                {filteredProjects[currentImage]?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setCurrentImage(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentImage
                  ? 'ring-2 ring-orange-500 scale-105'
                  : 'hover:scale-105'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors flex items-center justify-center">
                <Eye className="text-white opacity-0 hover:opacity-100 transition-opacity" size={20} />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            ¿Te gustó lo que viste? Contactame para discutir tu proyecto.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-2">
            <span>Ver Más Trabajos</span>
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;