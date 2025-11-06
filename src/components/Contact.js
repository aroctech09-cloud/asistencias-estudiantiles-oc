import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Calendar, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    message: '',
    visitDate: ''
  });
  
  // 🔄 Degradados consistentes
  const yellowOrangeGradient = "bg-gradient-to-br from-yellow-600 to-orange-800"; // Fondo de la sección
  // 🟢 Nuevo/Modificado: Degradado Verde para el botón de envío
  const greenGradient = "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800";
  const bluePurpleGradient = "bg-gradient-to-r from-blue-500 to-purple-600"; // Sin uso aquí, pero definido

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `
Hola! Solicito información sobre habitaciones:
👤 *Nombre:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.phone}
🏠 *Tipo de habitación:* ${formData.roomType}
📅 *Fecha de visita:* ${formData.visitDate}
💬 *Mensaje:*
${formData.message}
    `.trim();
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/8442401981?text=${encodedMessage}`, '_blank');
  };

  const roomTypes = [
    'Habitación Individual',
    'Habitación Compartida',
  ];

  return (
    <section id="contact" className={`py-20 ${yellowOrangeGradient} text-white`}>
      <div className="container mx-auto px-4">
        {/* ... (Contenido superior y sección ¿Por qué elegirnos? se mantiene sin cambios) ... */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¡Reserva tu Lugar!
          </h2>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible 
            para agendar una visita o resolver tus dudas.
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
            {/* ... (Bloque ¿Por qué elegirnos? se mantiene) ... */}
            <div>
              <h3 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
              <div className="space-y-4">
                {[
                  'Ubicación perfecta cerca de universidades',
                  'Todos los servicios incluidos',
                  'Ambiente seguro y estudioso',
                  'Precios accesibles para estudiantes',
                  'Atención personalizada 24/7'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div> 
                    <span className="text-white/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Bloque de Información de Contacto */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Información de Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-300" /> 
                  <span>info@asistenciasestudiantiles.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-yellow-300" />
                  <span>+54 844 240 1981</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-yellow-300" />
                  <span>Lun-Dom: 8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
            
            {/* Banner Contacto Directo (se mantiene degradado verde) */}
            <motion.div
              className={`${greenGradient} rounded-2xl p-6`}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-bold mb-2">¿Prefieres contacto directo?</h4>
              <p className="mb-4 opacity-90">Escríbenos directamente por WhatsApp</p>
              <motion.a
                href="https://wa.me/8442401981"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Abrir WhatsApp
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              {/* ... (Campos de formulario se mantienen) ... */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300" 
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    placeholder="+54 9 123 456 789"
                  />
                </div>
                <div>
                  <label htmlFor="visitDate" className="block text-sm font-medium mb-2">
                    Fecha de visita preferida
                  </label>
                  <input
                    type="date"
                    id="visitDate"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="roomType" className="block text-sm font-medium mb-2">
                  Tipo de habitación de interés
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  <option value="" className="text-gray-900">Selecciona una opción</option>
                  {roomTypes.map((room, index) => (
                    <option key={index} value={room} className="text-gray-900">
                      {room}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
                  placeholder="Cuéntanos más sobre lo que buscas..."
                ></textarea>
              </div>
              
              {/* 🟢 CAMBIO CLAVE: Aplicamos el degradado verde al botón de envío del formulario */}
              <motion.button
                type="submit"
                className={`w-full ${greenGradient} text-white py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;