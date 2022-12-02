import React from 'react';
import { Carousel } from 'react-bootstrap';
import  portada  from './img/principal.jpg';
import  prueba1  from './img/prueba1.jpg';
import  prueba2  from './img/prueba3';
import './Carousel.css' 

export default function Carousell() {
  return (

    <div className='contenedorCarousel'>
      <Carousel variant="dark">
        <Carousel.Item> 
          <img className="d-block w-100 "  src={portada} alt=" PRIMER NIVEL"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={prueba1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>' Los Andes Hotel '</h5>
            <p>Multiples complejos full categoria con accesos libres al "Lago Escondido" </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={prueba2}
            alt="Third slide"
          />
          <Carousel.Caption >
            
            <h5>Actividades, Aventuras y Desafios</h5>
             <p>Kayak en el Lago del Desierto-  </p>
           {/*  <p>
            Una excursión de día, super completa para remar en este fantástico lago de aguas turquesas rodeado de un bosque nativo y maravillosas vistas de los cerros y glaciares.  </p> */}
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


