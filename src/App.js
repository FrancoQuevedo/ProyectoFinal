import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footerr from './componentes/Footer/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacto from './componentes/Contacto/Contacto';
import Navbar from './componentes/Navbar/Navbar';
import Home from './componentes/Header/Header';
import Ejemplo from './componentes/Ejemplo/Ejemplo';
import Habitaciones from './componentes/Habitaciones/Habitaciones';
import Gastronomia from './componentes/Gastronomia/Gastronomia';


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Switch>
        <Route exact path="/Habitaciones">
          <Habitaciones />
        </Route>


        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/contacto1" >
          <Contacto />
        </Route>

        <Route exact path="/Gastronomia">
          <Gastronomia />
        </Route>

        <Route exact path="/Ejemplo">
          <Ejemplo />

        </Route>


      </Switch>


      <div className="App">

        <Footerr />
      </div>


    </BrowserRouter>

  )
};



export default App;
