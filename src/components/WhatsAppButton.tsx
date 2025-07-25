import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show tooltip after 3 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Auto-hide tooltip after 5 seconds
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola Carlos, estoy interesado en solicitar un presupuesto para un proyecto metalúrgico. ¿Podrías contactarme?"
    );
    window.open(`https://wa.me/542645053813?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg border border-gray-700 whitespace-nowrap animate-bounce">
          <div className="flex items-center space-x-2">
            <span className="text-sm">¿Necesitás un presupuesto?</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 border-r border-b border-gray-700"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-pulse"
        title="Contactar por WhatsApp"
      >
        <MessageCircle size={24} />
      </button>

      {/* Floating animation ring */}
      <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping"></div>
    </div>
  );
};

export default WhatsAppButton;