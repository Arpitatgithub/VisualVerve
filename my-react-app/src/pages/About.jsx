import CircularGallery from '../components/CircularGallery';


function About() {
  return (
    <div className="page">
      <div style={{ height: '800px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#000000ff" borderRadius={0.05} scrollEase={0.02}/>
</div>
    </div>
    
  );
  
}

export default About;
