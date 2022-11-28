import React from "react";
import "./button.css";
/* import Home from './componentes/Header/Header'; */
import { Button } from 'react-bootstrap'


const CustomButton = ({ texto }) =>{
    return(

<Button className="customButton" style={{ backgroundColor:"WHITE"}}>
 <a href='/'  style={{ textDecoration:"none", color:" rgba(0, 0, 0, 0.589)"}}  >{ texto=" Ir  Arriba"  } </a> 
  </Button>

    )
}

export default CustomButton;