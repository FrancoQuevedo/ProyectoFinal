import React from 'react';
import { Carousel } from 'react-bootstrap';
import gastro1 from './img/gastro1.jpg';
import gastro2 from './img/gastro2.jpg';
import gastro3 from './img/gastro3.jpg';


export default function CarouselGastronomia() {
    return (

        <div className='contenedorCarousel'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100 " src={gastro1} alt=" PRIMER NIVEL" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gastro2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>' Los Andes Boutique Hotel '</h5>
                        <p>Platos del Dia </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gastro3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='imgEdit'>

                        <h6>Comida Gourmet </h6>
                       
                        <p>
                            Una excursión de día,</p> 

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}