import React, { useState } from 'react';
import { Send, Upload, Calculator, CheckCircle } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    dimensions: '',
    materials: '',
    deadline: '',
    budget: '',
    location: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form Data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="presupuesto" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-900/50 rounded-lg p-12 border border-gray-700">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                ¡Solicitud Enviada!
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Gracias por tu interés. He recibido tu solicitud de presupuesto y te contactaré 
                dentro de las próximas 24 horas para discutir los detalles de tu proyecto.
              </p>
              <div className="bg-orange-500/20 border border-orange-500 rounded-lg p-4 mb-6">
                <p className="text-orange-400 font-medium">
                  Mientras tanto, podés contactarme directamente por WhatsApp para consultas urgentes.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Enviar Otra Solicitud
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="presupuesto" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solicitar Presupuesto
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Completá el formulario con los detalles de tu proyecto para recibir un presupuesto personalizado. 
              Cuanta más información proporciones, más preciso será el presupuesto.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Teléfono/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="+54 9 264 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Ubicación *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="Barrio, San Juan"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Tipo de proyecto *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  >
                    <option value="">Seleccionar tipo</option>
                    <option value="soldadura">Soldadura</option>
                    <option value="puerta">Puerta</option>
                    <option value="reja">Reja</option>
                    <option value="escalera">Escalera</option>
                    <option value="estructura">Estructura metálica</option>
                    <option value="parrilla">Parrilla</option>
                    <option value="industrial">Trabajo industrial</option>
                    <option value="reparacion">Reparación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Presupuesto estimado
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  >
                    <option value="">Seleccionar rango</option>
                    <option value="0-50000">$0 - $50.000</option>
                    <option value="50000-100000">$50.000 - $100.000</option>
                    <option value="100000-200000">$100.000 - $200.000</option>
                    <option value="200000-500000">$200.000 - $500.000</option>
                    <option value="500000+">Más de $500.000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Descripción del proyecto *
                </label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Describe tu proyecto en detalle. Incluye el uso previsto, estilo deseado, y cualquier requisito especial."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Dimensiones aproximadas
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="Ej: 2m x 1.5m x 0.8m"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Materiales preferidos
                  </label>
                  <input
                    type="text"
                    name="materials"
                    value={formData.materials}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="Ej: Acero, Hierro, Aluminio, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Plazo deseado
                </label>
                <input
                  type="text"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  placeholder="Ej: 2 semanas, 1 mes, urgente"
                />
              </div>

              {/* File Upload Placeholder */}
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 mb-2">
                  ¿Tenés fotos, planos o referencias del proyecto?
                </p>
                <p className="text-gray-500 text-sm">
                  Podés enviarlas por WhatsApp o email después de enviar este formulario
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-2 text-lg"
                >
                  <Calculator size={20} />
                  <span>Enviar Solicitud de Presupuesto</span>
                  <Send size={20} />
                </button>
                
                <p className="text-gray-400 text-sm mt-4">
                  Te contactaré dentro de las próximas 24 horas para discutir tu proyecto.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;