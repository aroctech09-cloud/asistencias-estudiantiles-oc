import React from 'react';
import { motion } from 'framer-motion';
// ⚠️ IMPORTANTE: Ajusta la ruta a tu imagen de logo
import LogoImage from '../img/logo_asistencias.jpg'; 


const Loader = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}    
      transition={{ duration: 0.7, ease: "easeOut" }} 
    >
      <motion.div className="flex flex-col items-center">
        {/* Contenedor del Logo con TAMAÑO AUMENTADO */}
        <div className={`
          w-40 h-40            // 🚀 Aumentado de w-24 h-24
          md:w-56 md:h-56        // 🚀 Aumentado de md:w-32 md:h-32
          flex items-center justify-center
        `}>
          <img 
            src={LogoImage} 
            alt="Logo de Asistencias Estudiantiles OC" 
            // Las clases 'max-w-full max-h-full' aseguran que la imagen crezca al tamaño del div contenedor
            className="max-w-full max-h-full object-contain rounded-xl" 
          />
        </div>
        
        {/* Texto de Carga */}
        <motion.p
          className="mt-4 text-lg font-semibold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Cargando Asistencias Estudiantiles...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;