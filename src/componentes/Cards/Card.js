import React from "react";
import "./Card.css";


function CardC ({title,imagSrc,text}){
  return (
    <div className="card text-center ">
    <img src={imagSrc} alt="img"/> 

    <div className="card-body text-black ">
    <h4 className="card-title">{title}</h4>
    <p className="card-text text-secondary">{text}   </p>
       
 

    </div>
 </div>




  )
}

export default CardC;






