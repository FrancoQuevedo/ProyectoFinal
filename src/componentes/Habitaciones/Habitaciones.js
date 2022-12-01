import React from 'react';
import Cards from '../Cards/Cards';
import './Habitaciones.css';


const HabitacionesS = () => {
    return (
        <div className='conteinerHabitacion'>

            <h1> Nuestras habitaciones </h1>

            <div className='textConteiner'>
                <p> Contamos con 3 tipos de habitaciones: Premium, Superior y Standard, desarrolladas en dos alas, que determinan las visuales:

                    Vista al Valle del Rio de las Vueltas o Vista a la Montaña.</p>
            </div>
            <div className='cardsConteiner'>
                <Cards />
            </div>
        </div>


    )
};


export default HabitacionesS;