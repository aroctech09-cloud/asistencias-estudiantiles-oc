import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // 🔄 Definir el degradado amarillo/naranja (para el logo)
  const yellowOrangeGradient = "bg-gradient-to-r from-yellow-500 to-orange-600";
  // 🟢 Definir el degradado verde para los botones de WhatsApp
  const greenGradient = "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800";

  const navItems = [
    { name: 'Inicio', href: '#home', icon: Home },
    { name: 'Habitaciones', href: '#rooms', icon: User },
    { name: 'Servicios', href: '#services', icon: User },
    { name: 'Galería', href: '#gallery', icon: User },
    { name: 'Ubicación', href: '#location', icon: User },
    { name: 'Contacto', href: '#contact', icon: User }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            {/* Logo con degradado amarillo/naranja */}
            <div className={`w-10 h-10 ${yellowOrangeGradient} rounded-lg flex items-center justify-center`}>
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Asistencias Estudiantiles Oc</h1>
              <p className="text-xs text-gray-500"></p>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            {/* 🟢 CAMBIO 1: Botón de WhatsApp Desktop */}
            <motion.a
              href="https://wa.me/8442401981"
              target="_blank"
              rel="noopener noreferrer"
              className={`${greenGradient} text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp
            </motion.a>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <motion.div
            className="md:hidden pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.name}
                </motion.button>
              ))}
              {/* 🟢 CAMBIO 2: Botón de WhatsApp Móvil */}
              <motion.a
                href="https://wa.me/5491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center ${greenGradient} text-white px-4 py-2 rounded-lg font-semibold transition-colors`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;