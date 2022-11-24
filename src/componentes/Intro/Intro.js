import React from 'react';
import './Intro.css';
/* import Portada from './portada.jpg'; */
import CustomButton from '../Button/CustomButton';
import  Carousell  from '../Bienvenida/CarouselBootstrap';





const Intro = ({ titulo, backgroundcolor}) => {
    return(
     
     <div className='conteinerIntro'>

     <Carousell />
    {/* <img  src={Portada} className="icon" alt="Foto portada "/> */}
   
   
{/*     <h1> {titulo} </h1> */}



    </div>
)
}

export default Intro;