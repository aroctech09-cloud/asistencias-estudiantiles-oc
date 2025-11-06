import React from 'react';
import { motion } from 'framer-motion';
import { Check, User, Home } from 'lucide-react';
import { rooms } from '../data/rooms';

const Rooms = () => {
  const handleWhatsApp = (roomName, price) => {
    const message = `Hola! Me interesa la ${roomName} por $${price.toLocaleString()}. ¿Podrían darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/8442401981?text=${encodedMessage}`, '_blank');
  };

  // 🔄 Nuevo Degradado Verde para el botón disponible
  const greenGradient = 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800';

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestras Habitaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra el espacio perfecto para tu vida estudiantil. Cada habitación incluye 
            todos los servicios básicos para tu comodidad.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    room.available 
                      ? 'bg-green-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}>
                    {room.available ? 'Disponible' : 'Ocupada'}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">{room.size}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">
                      ${room.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">por mes</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {room.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.05 }}
                    >
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => handleWhatsApp(room.name, room.price)}
                    disabled={!room.available}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      room.available
                        // 🔄 Aplicamos el degradado verde si está disponible
                        ? `${greenGradient} text-white` 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    whileHover={room.available ? { scale: 1.02 } : {}}
                    whileTap={room.available ? { scale: 0.98 } : {}}
                  >
                    {room.available ? 'Consultar por WhatsApp' : 'No Disponible'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;