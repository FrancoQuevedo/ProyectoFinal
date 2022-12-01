import React from 'react';
import CardC from './Card';
import image1 from '../Cards/img/image1.jpg';
import image2 from '../Cards/img/standar2.jpg';
import image3 from '../Cards/img/superior1.jpg';
import image4 from '../Cards/img/superior2.jpg';
import image5 from '../Cards/img/medium1.jpg';
import image6 from '../Cards/img/medium2.jpg';
import image7 from '../Cards/img/premium1.jpg';
import image8 from '../Cards/img/premium2.jpg';
const cards = [
    {
      id: 1,
      title:"Standard con vista al valle.",
      image: image1,
      text:
     " Cálidas habitaciones equipadas y ambientadas para garantizar una estadía inolvidable cuentan con baño con hidromasaje.. + iva ev adicionales de ropa blanca."
  
       
 
    },
    {
      id: 2,
      title: "Standard con vista a la montaña.",    
      image: image2,
      text: "Cálidas habitaciones equipadas y ambientadas para garantizar una estadía inolvidable.Cuentan con baño con hidromasaje. Ademas con gran VISTA AL VALLE. " ,
 
    },
    {
      id: 3,
      title: "Superior con vista al valle",
      image: image3,
      text: "Destacadas habitaciones con vistas privilegiadas, baño completo con hidromasaje elevado, ducha separada para garantizar una estadía inolvidable.*Posibilidad de agregar una cuna o cama.",
     
    },
    {
        id: 4,
        title:"Superior vista a la montaña",
        image: image4,
        text: "Destacadas habitaciones con vistas privilegiadas, baño completo con hidromasaje elevado, ducha separada para garantizar una estadía inolvidable.*Posibilidad de agregar una cuna o cama.",
       
      },

      {
        id: 5,
        title: "Medium con vista al valle",
        image: image5,
        text: "Espaciosas habitaciones con baño completo con hidromasaje elevado y ducha separada.",
       
      },
      {
        id: 6,
        title:  "Medium con vista a la montaña",
        image: image6,
        text: "Espaciosas habitaciones con baño completo con hidromasaje elevado y ducha separada.",
       
      },
      {
        id: 7,
        title: "Premium con vista al valle",
        image: image7,
        text: "Destacadas habitaciones con vistas privilegiadas, baño completo con hidromasaje elevado, ducha separada para garantizar una estadía inolvidable.*Posibilidad de agregar una cuna o cama.",
       
      },
      {
        id: 8,
        title:"Premium con vista a la montaña",
        image: image8,
        text: "Destacadas habitaciones con vistas privilegiadas, baño completo con hidromasaje elevado, ducha separada para garantizar una estadía inolvidable.*Posibilidad de agregar una cuna o cama.",
       
      },
  ];

function Cards() {
  return (

    <div className="container "   >
        <div className='row'  >
        {
        cards.map((card) => (
          <div className="col-md-6" key={card.id}>
            <CardC imagSrc={card.image} title={card.title}text={card.text}  />
          </div>
        ))}
         






</div>
    </div>
  )
}

export default Cards;


