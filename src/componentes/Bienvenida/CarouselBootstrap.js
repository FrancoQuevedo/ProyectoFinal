import React from 'react';
import { Carousel } from 'react-bootstrap';
import  portada  from './img/portada2.jpg';
import  portada1  from './img/portada1.jpg';
import  portada2  from './img/portada2.jpg';
import './Carousel.css'

export default function Carousell() {
  return (

    <div className='contenedorCarousel'>
      <Carousel variant="dark">
        <Carousel.Item> 
          <img className="d-block w-100 "  src={portada} alt=" PRIMER NIVEL"/>

          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={portada1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={portada2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


