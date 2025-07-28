import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import BottomNav from './components/BottomNavbar';
import Bn from './components/Bn';
import Footer from './components/Footer';
// import GlassSurface from './components/GlassSurface';
import Home from './pages/Home';
import PixelCard from './components/PixelCard';
import About from './pages/About';
import Services from './pages/Services';
import TextPressure from './components/TextPressure';
import './App.css';
import TextType from './components/TextType';



function App() {
  return (
    <Router>
      <Header />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

      </Routes>


      {/* <GlassSurface 
  width={300} 
  height={200}
  borderRadius={24}
  className="my-custom-class"
>

</GlassSurface>
<GlassSurface
  displace={15}
  distortionScale={-150}
  redOffset={5}
  greenOffset={15}
  blueOffset={25}
  brightness={60}
  opacity={0.8}
  mixBlendMode="screen"
>
  <span>Advanced Glass Distortion</span>
</GlassSurface> */}




      <div style={{position: 'relative',}}>
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

      {/* <footer className="footer">
        <p>© 2025 MyWebsite. All rights reserved.</p>
      </footer>*/}
      {/* <BottomNav/> */}
      <Bn/>
      <Footer/>
    </Router>
  ); 
}

export default App;
