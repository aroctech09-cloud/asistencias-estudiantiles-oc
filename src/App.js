import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// 1. ⚛️ Importar AnimatePresence y motion
import { AnimatePresence, motion } from 'framer-motion'; 
import Loader from './components/Loader'; 

import Navigation from './components/Navigation';
// ... el resto de tus imports ...
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    // 2. 🧱 Envolver con AnimatePresence para manejar las salidas
    <AnimatePresence mode="wait">
      {isLoading ? (
        // 3. Loader: Se anima usando las propiedades 'exit' definidas en Loader.js
        <Loader key="loader" /> 
      ) : (
        // 4. Contenido Principal: Aparece con un fade-in y un ligero slide-up
        <motion.div
          key="main-content"
          initial={{ opacity: 0, y: 20 }} // Inicia abajo y transparente
          animate={{ opacity: 1, y: 0 }}   // Termina visible y en posición
          transition={{ duration: 0.8, ease: "easeOut" }} // Transición para la entrada del contenido
          className="min-h-screen" 
        >
          <Router>
            <Navigation />
            <Hero />
            <Rooms />
            <Services />
            <Gallery />
            <Location />
            <Contact />
            <WhatsAppFloat />
          </Router>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;