import React from 'react';
import './Intro.css';
/* import Portada from './portada.jpg'; */
import CustomButton from '../Button/CustomButton';






const Intro = ({ titulo, backgroundcolor}) => {
    return(
     
     <div className='conteinerIntro'>

    
    {/* <img  src={Portada} className="icon" alt="Foto portada "/> */}
   
   
{/*    <h1> {titulo} </h1> */}

   <h1> ' Los Andes Boutique Hotel '</h1>
   <div className='textoConteiner'>
         <p> Los Andes es el hotel más emblemático del Chaltén. Su ubicación estratégica en la zona más elevada del pueblo, permite obtener vistas únicas del Valle del Río de las Vueltas. A su vez, se encuentra a pocos metros de los puntos de inicio de los principales senderos y recorridos.
Las habitaciones y áreas públicas son espaciosas y están decoradas de manera clásica, en sintonía con el increíble entorno natural y sus impactantes paisajes.
En cuanto al servicio, Los Cerros se destaca por su atención personalizada y un ambiente elegante pero relajado.

Cada vez son más los que eligen Los Cerros como destino vacacional. Verlos volver en cada temporada nos llena de satisfacción.¡Muchas gracias por elegirnos! </p></div>

    </div>
)
}

export default Intro;