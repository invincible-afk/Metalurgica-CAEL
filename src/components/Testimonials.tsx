import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: "Barrio Rawson, San Juan",
      rating: 5,
      text: "Carlos hizo un trabajo espectacular en las rejas de mi casa. La calidad es excelente y la atención al detalle impresionante. Muy recomendable, cumple con los tiempos y el presupuesto acordado.",
      project: "Rejas de seguridad para ventanas"
    },
    {
      id: 2,
      name: "Roberto Sánchez",
      location: "Zona Industrial, San Juan",
      rating: 5,
      text: "Necesitaba urgente una reparación en mi planta y Carlos respondió inmediatamente. Su profesionalismo y conocimiento técnico solucionaron el problema rápidamente. Excelente servicio.",
      project: "Reparación de estructura industrial"
    },
    {
      id: 3,
      name: "Ana Martínez",
      location: "Capital, San Juan",
      rating: 5,
      text: "La escalera que me fabricó Carlos es una obra de arte. Combina funcionalidad con un diseño hermoso. Muy profesional en todo el proceso, desde el diseño hasta la instalación.",
      project: "Escalera metálica interior"
    },
    {
      id: 4,
      name: "Eduardo Fernández",
      location: "Chimbas, San Juan",
      rating: 5,
      text: "Carlos me hizo una parrilla personalizada que es la envidia de todos mis amigos. La calidad de los materiales y la soldadura es impecable. Definitivamente volvería a contratarlo.",
      project: "Parrilla de acero inoxidable"
    },
    {
      id: 5,
      name: "Patricia López",
      location: "Rivadavia, San Juan",
      rating: 5,
      text: "Contraté a Carlos para hacer la puerta principal de mi negocio. El resultado superó mis expectativas. Muy responsable, puntual y el precio fue muy justo para la calidad recibida.",
      project: "Puerta comercial de seguridad"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonios" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La satisfacción de mis clientes es mi mejor carta de presentación. 
            Leé lo que dicen sobre mi trabajo y profesionalismo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-gray-800/50 rounded-lg p-8 md:p-12 border border-gray-700">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-orange-500/30" />
            
            <div className="text-center">
              {/* Star Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Project Info */}
              <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
                <p className="text-orange-500 font-medium">
                  Proyecto: {testimonials[currentTestimonial].project}
                </p>
              </div>

              {/* Client Info */}
              <div>
                <h4 className="text-xl font-semibold text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-400">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? 'bg-orange-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Additional Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <div key={testimonial.id} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">
                  "{testimonial.text.slice(0, 150)}..."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.location}</p>
                  </div>
                  <button
                    onClick={() => setCurrentTestimonial(index)}
                    className="text-orange-500 text-xs hover:text-orange-400 transition-colors"
                  >
                    Leer completo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;