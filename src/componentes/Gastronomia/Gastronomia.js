import React from 'react';
import CarouselGastronomia from '../GastronomiaCarousel/GastrnomiaCarousel';
/* import Portada from './img/portadaN.jpg'; */
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import menu from './img/menu.jpg';
import './Gastronomia.css';


const Gastronomia = () => {
    return (
        <header>
            <div className='conteinerGastronomia' >
                <div className="imagenPortada">
                    <img src={'https://images.unsplash.com/photo-1529060532150-a0c935a6d6e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhYmElMjBkZSUyMHZpbm9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}/* {Portada} */alt="Foto portada " />
                </div>
                <h1> Gastronomia El Viento </h1>

                <div className='textConteiner'>
                    <p> Cocina contemporánea de autor con productos patagónicos, respetuosa del entorno y la materia prima que se utiliza en la elaboración de cada plato.

                        Carta creada por Agustín Vazquez</p>

                    <Button className='buttonEdit bg-white ' >
                        <NavLink to={menu} style={{ textDecoration: "none", color: " rgba(0, 0, 0, 0.589)" }} target="_blank"> M E N U</NavLink> </Button>

                </div>

                <div className="conteinerHeader">
                    <CarouselGastronomia />
                </div>


                <article className="bordesVinos">


                    <div className="tituloCava">
                        <h2> Nuestra Cava </h2>
                    </div>
                    <div className='textCava'>

                        <p> Disponemos de una cava con temperatura y humedad controladas para preservar los vinos. Más de 120 etiquetas de los mejores exponentes de cada terruño, seleccionados por nuestro sommelier.  </p>

                        <img src={'https://images.unsplash.com/photo-1529060532150-a0c935a6d6e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhYmElMjBkZSUyMHZpbm9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="Foto portada " />

                    </div>
                </article>


                <article className="bordesVinos">


                    <div className="tituloCava">
                        <h2> Freak Roy </h2>
                    </div>
                    <div className='textCava'>

                        <img src={'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29jdGVsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'} alt="Foto portada " />
                        <p> Cocktails clásicos y de autor sumados a nuestra gran selección de maltas, gins y bebidas espirituosas para terminar el día de la mejor manera: entre amigos, con un trago en la mano y una vista privilegiada.</p>
                    </div>
                </article>
            </div>




        </header>
    );
}


export default Gastronomia;
