import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Rooms />
        <Services />
        <Gallery />
        <Location />
        <Contact />
        <WhatsAppFloat />
      </div>
    </Router>
  );
};

export default App;