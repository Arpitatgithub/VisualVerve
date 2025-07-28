import PixelCard from '../components/PixelCard';
import TextType from '../components/TextType';
import Noise from '../components/Noise';
import FluidGlass from '../components/FluidGlass';

function Home() {
  return (
    <div className="page" >

     
      <div style={{display: 'flex', justifyContent:'center'}}>
      <PixelCard variant="pink">
        // your card content (use position: absolute)
      </PixelCard>

      <PixelCard variant="pink">
        // your card content (use position: absolute)
      </PixelCard></div>
      <TextType 
  text={["WELCOME to visualverve.studios", "fetch some great UI?UX designs!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
      <diV style={{width:'100%', height:'500px', backgroundColor:'black'}}></diV>


      <div style={{width: '100%', height: '300px', position: 'relative', overflow: 'hidden',display:'flex',alignItems:'center', justifyContent:'center'}}>
  <Noise
    patternSize={250}
    patternScaleX={1}
    patternScaleY={1}
    patternRefreshInterval={2}
    patternAlpha={30}
  /><h1 style={{color:'gray',fontSize:'100px', fontFamily:'trap'}}>EXPERIENCE the UI</h1>
</div>
      <div>
        <h3>Web UI Designs</h3> 
      </div>
      

      

    </div>
    
  );
}

export default Home;