import React from 'react';
import { motion } from 'framer-motion';
import { Home, Settings, Shield, Calendar, User, Bell } from 'lucide-react';
import { services } from '../data/rooms';

const Services = () => {
  const iconComponents = {
    Home,
    Settings,
    Shield,
    Calendar,
    User,
    Bell
  };

  // 🔄 Degradado Amarillo/Naranja (consistente con el Hero y la Navigation)
  const yellowOrangeGradient = "bg-gradient-to-r from-yellow-500 to-orange-600";
  // Este degradado ya no se usa en el banner, pero lo mantenemos por si se necesita
  const bluePurpleGradient = "bg-gradient-to-r from-blue-600 to-purple-600";

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servicios Incluidos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para una estadía cómoda y sin preocupaciones. 
            Todos los servicios están incluidos en el precio mensual.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            
            return (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  // Iconos con degradado amarillo/naranja
                  className={`w-16 h-16 ${yellowOrangeGradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
        {/* 🔄 CAMBIO CLAVE: Aplicamos el degradado amarillo/naranja al banner */}
        {/* El texto se mantiene blanco, y el color del botón se ajusta para contraste */}
        <motion.div
          className={`mt-16 ${yellowOrangeGradient} rounded-2xl p-8 text-center text-white`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Tienes alguna pregunta?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Nuestro equipo está disponible para ayudarte con cualquier consulta
          </p>
          <motion.a
            href="https://wa.me/8442401981"
            target="_blank"
            rel="noopener noreferrer"
            // El color del texto interior del botón se cambia a un color oscuro para que contraste con el fondo blanco
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;