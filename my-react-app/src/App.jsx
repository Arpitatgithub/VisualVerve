import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Bn from './components/Bn';
import Footer from './components/Footer';

import Home from './pages/Home';
import PixelCard from './components/PixelCard';
import About from './pages/About';
import Services from './pages/Services';
import TextPressure from './components/TextPressure';
import './App.css';
import TextType from './components/TextType';
import { Sugar } from 'react-preloaders';

function App() {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Sugar background="#ffffff" color="#000000" />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>

          <div style={{ position: 'relative' }}>
            <TextPressure
              text="visualverve.studios"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#000000ff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>

          <Bn />
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
