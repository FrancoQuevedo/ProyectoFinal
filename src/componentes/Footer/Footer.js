import React from "react";
import './Footer.css';
import {NavLink, Link } from "react-router-dom";
import Face from './face.jpg'
import Whats from './whats.jpg'
import Insta from './insta.jpg'
import CustomButton from "../Button/CustomButton";

const Footerr = () => {
    return(
 
<div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Estamos Ubicados</h4>
            <h1 className="list-unstyled">
          
              <li>Argentina,Rio Negro</li>
              <li> 123 Calle siempre Viva</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
          <h4>Encontranos</h4>
            <div className="list-unstyled" >
              <NavLink   to= "https://www.tvpublica.com.ar/vivo/"  target="_blank"  className="list-unstyled"  style={{fontSize:"0.9rem"  ,margin:"5px"}}  > <img  src= {Whats} alt="logo" width='32'/></NavLink>

              <NavLink   className="list-unstyled" style={{fontSize:"0.9rem"  ,margin:"5px"}}to='/'><img src= {Face} alt="logo" width='32' /></NavLink>

             <NavLink  className="list-unstyled" style={{fontSize:"0.9rem"  ,margin:"5px",}} to='/'><img src= {Insta} alt="logo" width='32' /></NavLink>
            </div>
          
          </div>
          {/* Column3 */}
          <div className="col">
          <h4>Reservas</h4>
            <ul className="list-unstyled">
              <li>+549115842585</li>
              <li>delosAndes@gmailcom</li>
       
            </ul>
        
          </div>

           {/* Column4 */}
           <div className="col">
       
        <CustomButton/>
    
          </div>
        </div>
        <hr />

        <div className="row">
          <p className="col-sm">
   
            &copy;{new Date().getFullYear()} ' Los Andes Hotel ' | Some rights reserved | Terms of Service | Privacy
          </p>
          
        </div>
      </div>
    </div>
  );
}



export default Footerr;