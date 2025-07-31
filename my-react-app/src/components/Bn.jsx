import '../css/Bn.css';
import { Link } from "react-router-dom";
import imageIcon from '../assets/Frame21.png';



function Bn(){
          return(
                    
                    <div class="insidediv">
                                        <button  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} class="insideAn">Go up</button>
                                        <Link to="/" className="insideAn">Home</Link>
                                        <Link to="/about" className="insideAn">About</Link>
                                        <Link to="/services" className="insideAn">Services</Link>
                                        <a class="insideAn" href="#" style={{marginRight:'6px',padding:'11.5px'}}>
                                                  <img src={imageIcon} width="75px"></img></a>
                              </div>
                    
          )

}
export default Bn;
