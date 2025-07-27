import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      details: "+54 9 264 505-3813",
      action: "tel:+542645053813"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      details: "+54 9 264 505-3813",
      action: "https://wa.me/542645053813"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "clanda119@gmail.com",
      action: "mailto:clanda119@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      details: "Santa Lucia - San Juan, Argentina",
      action: "#"
    }
  ];

  const workingHours = [
    { day: "Lunes - Viernes", hours: "8:00 - 21:00" },
    { day: "Sábados", hours: "8:00 - 21:00" },
    { day: "Domingos", hours: "Cerrado" },
    { day: "Emergencias", hours: "24/7" }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contacto
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ¿Estás listo para comenzar tu proyecto? Contactame por cualquiera de estos medios. 
              Respondo rápidamente y ofrezco presupuestos sin compromiso.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.action}
                      className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors border border-gray-700 hover:border-orange-500 group"
                    >
                      <div className="text-orange-500 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-white font-medium">{item.title}</div>
                        <div className="text-gray-300">{item.details}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-orange-500" />
                  <span>Horarios de Atención</span>
                </h3>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300">{schedule.day}</span>
                        <span className="text-white font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Zonas de Servicio</h3>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-gray-300">
                    <div>• Capital San Juan</div>
                    <div>• Rawson</div>
                    <div>• Chimbas</div>
                    <div>• Rivadavia</div>
                    <div>• Santa Lucía</div>
                    <div>• Pocito</div>
                    <div>• Zona Industrial</div>
                    <div>• Consultar otras zonas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map and Quick Contact */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Ubicación</h3>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <p className="text-gray-300 mb-2">Santa Lucia - San Juan, Argentina</p>
                    <p className="text-gray-400 text-sm">
                      Servicio a domicilio en toda la provincia
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Actions */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contacto Rápido</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/542645053813?text=Hola%20Carlos,%20estoy%20interesado%20en%20solicitar%20un%20presupuesto"
                    className="block bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <MessageCircle size={20} />
                      <span>Enviar WhatsApp</span>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+542645053813"
                    className="block bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Phone size={20} />
                      <span>Llamar Ahora</span>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:clanda119@gmail.com?subject=Consulta%20sobre%20servicios%20metalúrgicos"
                    className="block bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Mail size={20} />
                      <span>Enviar Email</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
                <h4 className="text-xl font-bold text-red-400 mb-3">Emergencias 24/7</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Para reparaciones industriales urgentes o emergencias, contactame en cualquier momento.
                </p>
                <a
                  href="tel:+542645053813"
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
                >
                  Llamar Emergencia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
