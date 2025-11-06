import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Star, Users, Home } from 'lucide-react';

const Hero = () => {
  const scrollToRooms = () => {
    document.querySelector('#rooms').scrollIntoView({ behavior: 'smooth' });
  };

  // 🔄 Degradado Amarillo/Naranja para la palabra "perfecto" y el botón principal
  const yellowGradient = "bg-gradient-to-r from-yellow-600 to-orange-700";
  const buttonGradient = "bg-gradient-to-r from-yellow-500 to-orange-600";
  
  // 🟢 Definir el degradado verde para el botón de WhatsApp
  const greenGradient = "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo Degradado Amarillo Suave (el fondo general) */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-100 to-amber-200"></div>
      
      <div className="absolute inset-0 bg-white/50"></div>
      
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tu hogar estudiantil
            <span className={`block text-transparent ${yellowGradient} bg-clip-text`}>
              perfecto
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Habitaciones cómodas, seguras y completamente equipadas para estudiantes. 
            Con todos los servicios incluidos y la mejor ubicación.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Botón "Ver Habitaciones" con degradado AMARILLO/NARANJA */}
            <motion.button
              onClick={scrollToRooms}
              className={`${buttonGradient} text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Habitaciones
            </motion.button>
            
            {/* Botón "Contactar Ahora" con el degradado VERDE */}
            <motion.a
              href="https://wa.me/8442401981"
              target="_blank"
              rel="noopener noreferrer"
              className={`${greenGradient} text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar Ahora
            </motion.a>
          </motion.div>

          {/* 🟢 BLOQUE DE ESTADÍSTICAS RESTAURADO */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Calificación */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100/70 rounded-full flex items-center justify-center mb-2 shadow-md">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-sm text-gray-600">Calificación</span>
            </div>
            
            {/* Estudiantes */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100/70 rounded-full flex items-center justify-center mb-2 shadow-md">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-2xl font-bold">20+</span>
              <span className="text-sm text-gray-600">Estudiantes</span>
            </div>
            
            {/* Habitaciones */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100/70 rounded-full flex items-center justify-center mb-2 shadow-md">
                <Home className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-2xl font-bold">20+</span>
              <span className="text-sm text-gray-600">Habitaciones</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToRooms}
            className="text-gray-700/70 hover:text-gray-900 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;