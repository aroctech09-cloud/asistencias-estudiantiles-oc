import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star } from 'lucide-react';

const Location = () => {
  // 🔄 Degradado Amarillo/Naranja (consistente con el resto del sitio)
  const yellowOrangeGradient = "bg-gradient-to-r from-yellow-500 to-orange-600";
  // Degradado Verde para el botón de WhatsApp (consistente con el componente Rooms)
  const greenGradient = 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800';

  // 📍 CAMBIO CLAVE: URL de Google Maps para la dirección proporcionada.
  const googleMapsUrl = 'https://maps.google.com/?cid=3962927907696467408&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ';

  const nearbyPlaces = [
    { name: 'Walmart', distance: '5 min caminando', type: 'Compras' },
    { name: 'Hospital general', distance: '15 min', type: 'Salud' },
    { name: 'Parada de Lobus', distance: '5 min caminando', type: 'Transporte' },
    { name: 'Campo redondo', distance: '10 min caminando', type: 'Universidad' },
    { name: 'Transporte público', distance: '5 min caminando', type: 'Transporte' },
    { name: 'Cuidad Deportiva', distance: '10 min caminando', type: 'Deporte' }
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ubicación Estratégica
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En el corazón de la zona universitaria, cerca de todo lo que necesitas 
            para tu vida estudiantil y personal.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Bloque de Dirección */}
            <div className={`${yellowOrangeGradient} rounded-2xl p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8" />
                <div>
                  <h3 className="text-2xl font-bold">Dirección</h3>
                  <p className="opacity-90">30 de Septiembre 1339, Provivienda, 25020 Saltillo, Coah.</p>
                </div>
              </div>
              <p className="text-lg opacity-90 leading-relaxed">
                Ubicados en la zona más conveniente para estudiantes, con acceso fácil 
                a universidades, transporte público y servicios esenciales.
              </p>
            </div>
            
            {/* ... Resto de Lugares Cercanos ... */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-600" />
                Lugares Cercanos
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nearbyPlaces.map((place, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{place.name}</h4>
                        <p className="text-sm text-gray-600">{place.type}</p>
                      </div>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-lg">
                        {place.distance}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            
            {/* 🗺️ Bloque de Mapa con Enlace a Google Maps */}
            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              // El efecto de expansión ha sido eliminado.
              whileTap={{ scale: 0.99 }}
            >
              <img 
                // ⚠️ IMPORTANTE: Debes reemplazar 'URL_DE_IMAGEN_DEL_MAPA' 
                // con la URL de una captura estática o imagen de mapa.
                src="https://resizer.glanacion.com/resizer/v2/compartir-la-ubicacion-con-otros-usuarios-en-2OQ3CYE7DRHNVIYOMZYKHP7YLM.jpg?auth=6c5cb1bf1438a38d3414df35593f8dd5685278c626255e647a3cf9c38109b5b9&width=1280&height=854&quality=70&smart=true" 
                alt="Mapa de la ubicación en Google Maps"
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                <MapPin className="w-10 h-10 text-white drop-shadow-md" />
              </div>
            </motion.a>
            
            {/* ... Estadísticas y Banner Agendar Visita se mantienen ... */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                className="bg-green-50 rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Ocupación</div>
              </motion.div>
              <motion.div
                className="bg-yellow-50 rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-600">4.9</div>
                <div className="text-sm text-gray-600">Calificación</div>
              </motion.div>
              <motion.div
                className="bg-blue-50 rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Seguridad</div>
              </motion.div>
            </div>
            
            {/* Banner Agendar Visita (usando el degradado verde) */}
            <motion.div
              className={`${greenGradient} rounded-2xl p-6 text-white text-center`}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-bold mb-2">¿Quieres conocer el lugar?</h4>
              <p className="mb-4 opacity-90">Agenda una visita para ver nuestras instalaciones</p>
              <motion.a
                href="https://wa.me/8442401981?text=Hola! Me gustaría agendar una visita para conocer las instalaciones."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Visita
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Location;