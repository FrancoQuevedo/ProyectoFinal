import React from "react";
import Intro from "../Intro/Intro";
import "./Header.css";
/* import CustomButton from "../Button/customButton"; */
import  Carousell  from '../Bienvenida/CarouselBootstrap';

const Home = () => {

    return(
    <header>
        <Carousell/>
        <div className="conteinerHeader">
        <Intro/>        

    
</div>
    </header>
);

}


export default Home;