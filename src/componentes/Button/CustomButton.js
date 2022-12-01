import React from "react";
import "./button.css";
import { Button } from 'react-bootstrap'


const CustomButton = ({ texto }) =>{
    return(

<Button className="customButtonn " style={{ backgroundColor:"white"}}>
 <a href='/'  style={{ textDecoration:"none", color:" rgba(0, 0, 0, 0.589)"}}  >{ texto="Ir al Inicio"  } </a> 
  </Button>

    )
}

export default CustomButton;