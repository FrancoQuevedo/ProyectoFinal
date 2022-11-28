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
              <li>342-420-6969</li>
              <li>Argentina,Rio Negro</li>
              <li> 123 Calle siempre Viva</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
          <h4>Encontranos</h4>
            <div className="list-unstyled" >
              <NavLink   to='https://www.youtube.com/watch?v=K0a3NIxABFA' target="_blank" className="list-unstyled"  style={{fontSize:"1.2rem"  ,margin:"5px", background:"rgba(0, 0, 0, 0.500)"}}> <img  src= {Whats} alt="logo" width='32'/></NavLink>

              <NavLink   className="list-unstyled" style={{fontSize:"1.2rem"  ,margin:"5px", background:"rgba(0, 0, 0, 0.500)"}}to='/'><img src= {Face} alt="logo" width='32' /></NavLink>

             <NavLink  className="list-unstyled" style={{fontSize:"1.22rem"  ,margin:"5px",background:"rgba(0, 0, 0, 0.500)"}} to='/'><img src= {Insta} alt="logo" width='32' /></NavLink>
            </div>
          
          </div>
          {/* Column3 */}
          <div className="col">
          <h4>Autor</h4>
            <ul className="list-unstyled">
              <li>Franco Quevedo</li>
              <li>francojq.93@gmailcom</li>
              <li>  </li>
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
            &copy;{new Date().getFullYear()} 'Los Andes B. Hotel ' | Some rights reserved | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}



export default Footerr;