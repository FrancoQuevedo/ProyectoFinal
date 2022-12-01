import React from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import "./Contacto.css";

const Contacto1 = () => {
  const { register, formState: { errors }, watch, handleSubmit } = useForm("");

  const onSubmit = (data) => {
    console.log(data);

  }

  const sendEmail = (event) => {
    event.preventDefault();


    emailjs.sendForm('service_hb24zes', 'template_a26aqba', event.target, 'sBBzunJBkHnHKHahI')
      .then(response => alert("Consulta Enviada con Exito!! En breve nos comunicaremos. Gracias")(response))
      /*   .catch(error => alert("No enviado")(error)) */

      .catch(error => console.log(error))


    event.target.reset()
  }
  return (


    <div className="formularioContainer" >
      <div className="titleContainer"  >
        <h1>Consultas /Reservas</h1>
      </div>
      <main className="main">
        <form className="formRegister" onSubmit={sendEmail}/* {handleSubmit(onSubmit)} */ >
          <div className="editCampos">Nombre: {watch('nombre')}</div>

          <label> Nombre </label>
          <input type="text" name='user_name'{...register('nombre', {
            required: true,
            maxLength: 10
          })} />

          {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
          }
          {errors.nombre?.type === 'maxlength' && <p> El campo nombre debe tener menos de 10 caracteres</p>
          }




          <div>
            <div className="editCampos">Apellido: {watch('apellido')}</div>

            <label> Apellido </label>
            <input type="text" name='user_name' {...register('apellido', {
              required: true

            })} />
          </div>


          <div>
            <div className="editCampos"> Ingrese: {watch('apellido')}</div>

            <label> Email </label>
            <input type="text" name='user_email' {...register('email', {
              pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
            })} />
            <div className="editCampos">Email: {watch('email')}</div>


            {errors.email?.type === 'pattern' && <p> El formato es incorrecto </p>
            }
          </div>

          <div>
            <label>Mobile number</label>
            <input
              type="tel"
              {...register("MobileNumber", {
                required: true,
                maxLength: 11,
                minLength: 8
              })}
            />
          </div>
          <div>
            <label className="opcionPersonas">Personas</label>
            <select className="opcionPersonas" {...register("ageGroup")}>
              <option value="0" >1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
            
              
            </select>
          </div>


          <div className="opcionHabitacion">
            <label>Seleccione Habitacion </label>
            <select  {...register('sabor')} className="opcionHabitacion">
              <option value="st"> Standard</option>
              <option value="st"> Superior</option>
              <option value="md"> Medium </option>
              <option value="pm"> Premium </option>

            </select>
          </div>
          <div className="editText" >
            <label>Deje su Consulta: </label>

            <textarea className="editTextArea"  name="user_message"
              cols="42" rows="7"  aria-invalid="false"{...register('consulta', {
                required: true,
                maxLength: 90



              })} />

            {errors.nombre?.type === 'required' && <p> Este campo es obligatorio </p>
            }
            {errors.nombre?.type === 'maxlength' && <p> El campo  debe tener menos 20 caracteres</p>
            }

          </div>



          <input type="submit" value="Enviar" className="submit" />


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

/* 
 const Contacto1 = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_hb24zes', 'template_a26aqba',event.target ,'sBBzunJBkHnHKHahI')
    .then(response => console.log(response))
    
    .catch(error => console.log(error))
  }

  return (
    <div className='div-form'>
      <h1 className='title-form'>Contact Us</h1>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name' />
        <hr />

        <label>Email</label>
        <input type="email" name='user_email' />
        <hr />

        <label>Message</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Send</button>
      </form>
    </div>
  )
}
export default Contacto1; */