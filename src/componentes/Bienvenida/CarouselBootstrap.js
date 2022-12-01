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
            <h5>' Los Andes Boutique Hotel '</h5>
            <p>Multiples complejos full categoria con accesos libres al "Lago Escondido" </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={prueba2}
            alt="Third slide"
          />
          <Carousel.Caption className='imgEdit'>
            
            <h6>Actividades, Aventuras y Desafios
             -Kayak en el Lago del Desierto-  </h6>
           {/*  <p>
            Una excursión de día, super completa para remar en este fantástico lago de aguas turquesas rodeado de un bosque nativo y maravillosas vistas de los cerros y glaciares.  </p> */}
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


/* 
const  =()=> {

  return (
  <header >
  
  <Navbar className="navbarEdit"    expand="lg" >
        <Container className="contaninerEdit">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href= "/https://www.google.com.ar/maps" target= "_blank">Link</Nav.Link>
              <Nav.Link href="Contacto1">Contacto</Nav.Link>
              <Nav.Link href="Ejemplo">Ejemplo</Nav.Link> 
              <Nav.Link href="/Personajes">Personajes</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      </header>
    );
  
  };


 */
