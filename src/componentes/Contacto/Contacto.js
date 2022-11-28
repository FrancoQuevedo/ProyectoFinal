import React from "react";
import { useForm } from "react-hook-form";
import "./Contacto.css";

const Contacto1 = () => {
const { register, formState:{ errors}, watch ,handleSubmit } = useForm("");
const onSubmit = (data) =>{ 
  console.log(data);
}

  return ( 


<div className="formularioContainer"> 
<div className="titleContainer">
                    <h1>Consultas /Reservas</h1>
                    </div>
                    <main className="main">
<form  className="formRegister"onSubmit={handleSubmit(onSubmit)} >
<div className="editCampos">Nombre: {watch ('nombre')}</div>

  
    <label> Nombre </label>
    <input type="text" {...register('nombre', {
      required:true,
      maxLength:10
    })} />

    {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
    }
    {errors.nombre?.type ==='maxlength' && <p> El campo nombre debe tener menos de 10 caracteres</p>
    }
    

 

  <div>
  <div className="editCampos">Apellido: {watch ('apellido')}</div>

    <label> Apellido </label>
    <input type="text" {...register('apellido',{ required:true
    
    })} />
  </div>


  <div>
  <div className="editCampos"> Ingrese su Mail: {watch ('apellido')}</div>

    <label> Email </label>
    <input type="text" {...register('email', {
      pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    })} />

{errors.email?.type === 'pattern' && <p> El formato es incorrecto </p>
    }
  </div>


  <div>
    <label> Seleccione Habitacion </label>
    <select {...register('sabor')}>
      <option value="st"> Standar</option>
      <option value="md"> Medium </option>
      <option value="pm"> Premium </option>

    </select>
  </div>
  <input type="submit" value="Enviar"  className="submit" />


  <div className="textContainerform">
                    <p> ¿ Ya reservaste? <a href="#">No dudes en Consultarnos.</a></p>
                    <p class="errorText">Si se produce un error al completar el formulario aparecera un mensaje aqui.</p>
                    
                    </div>
  

</form>


</main>
</div>


);
};

export default Contacto1;