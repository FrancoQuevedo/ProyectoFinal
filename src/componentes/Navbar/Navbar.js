import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './logo2.jpg'


const Menu = () => {

  return (
    <header >

      <Navbar className="navbarEdit" expand="lg"  >
        <Container className="contaninerEdit">
          <Navbar.Brand className="logoEdit">
            <div className="logoEdit">
              <img src={logo} alt="logo" expand="medium" width='80' height='44' />
            </div>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href='Contacto1' >Contacto</Nav.Link>
              <Nav.Link href='/Habitaciones' > Habitaciones </Nav.Link>
              <Nav.Link href="/Gastronomia">Gastronomia</Nav.Link>
              <Nav.Link href="https://www.google.com.ar/maps/place/Centro+C%C3%ADvico+Bariloche/@-41.1334919,-71.312401,17z/data=!4m12!1m6!3m5!1s0x961a7b72dbb708e1:0xd91b7e92f820aa94!2sCentro+C%C3%ADvico+Bariloche!8m2!3d-41.133496!4d-71.3102123!3m4!1s0x961a7b72dbb708e1:0xd91b7e92f820aa94!8m2!3d-41.133496!4d-71.3102123" target="_blank">Ubicacion</Nav.Link>
              <Nav.Link href="https://www.clima.com/argentina?gclid=Cj0KCQjwj7CZBhDHARIsAPPWv3ffgD1ZkGq6eftQY7iYkzzhN7E8fGQdGteWR_egArTdbs3PbIkWJj8aAnrfEALw_wcB" target="_blank"> Clima</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );

};

export default Menu;