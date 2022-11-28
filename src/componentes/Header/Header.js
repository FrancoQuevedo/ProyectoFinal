import React from "react";
import Intro from "../Intro/Intro";
import "./Header.css";
 import  Carousell  from '../Bienvenida/CarouselBootstrap';
 
const Home = () => {

    return(
    <header>
     
        <div className="conteinerHeader">
          
        <Intro/>        

      <Carousell/> 
</div>
    </header>
);

}


export default Home;