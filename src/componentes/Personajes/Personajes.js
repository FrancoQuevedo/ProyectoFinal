import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Postre = () => {
    const [postre, setPostre] = useState([]);
    useEffect(() => {
        fetch( 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
         .then((response) => response.json()) 
        .then((postre) => setPostre(postre))
        }/*  */
    );
    return(
        <>
            <h2>Postres</h2>
            <Container>
                {postre?
                <Row>
                    {postre.map((postre, index) => (
                    <Col sm={2} key={index}>
                   <img style={{width:"80%", height:"70%"}} src={postre.drinks} alt={postre}/> 
               {/*          <h3>{postre.species}</h3>  */}
                      {/*   <p>{postre.house}</p>
                        <p>{postre.dateOfBirth}</p>   */}
                    </Col>
                    ))}
                </Row>
                :<div> Cargando personajes</div> }
            </Container>
        </>
    )
}
export default Postre;

