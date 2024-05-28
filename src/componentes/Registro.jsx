import React, {useRef, useState } from 'react';
import "./registro.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logotipo from "./imagenes/foto1.png"
import Swal from 'sweetalert2'


function Registro() { 
  
  let URL=process.env.REACT_APP_ENVIRONMENT
 
  const [nomError, setNomError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailErrorVacio, setErrorEmailVacio] = useState(false)
  const [telefonoError, setTelefonoError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false)
  const [passComparacion, setPassComparacion] = useState(false)

  const form = useRef()

  
  function nombreError() { //Esta función setea a false la variable "nomError" para que el mensaje de error desaparezca cuando hacen click en el campo del nombre.
      setNomError(false)
  }
  
  function errorEmail() {
      setEmailError(false) //Para cuando no escriban una dirección de correo válida en su estructura.
      setErrorEmailVacio(false) //Para cuan do dejen vacío el campo email
  }
  
  function telError() {
      setTelefonoError(false)
  }
  
  function passError() {
      setPasswordError(false)
  }
  function passRepeat() {
      //setPasswordErrorRepeat(false)
      setPassComparacion(false)
      setPasswordErrorRepeat(false)
  }

  const [values, setValues]= useState({
    nombres:"",
    email:"",
    telefono:"",
    password:"",
    passRepeat:""
  });
  const handleChange=(e)=>{
    const {name, value}=e.target 
    const newValues={
      ...values,
      [name]:value,
    }
    setValues(newValues)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    let validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/  //Expersión regular para: Mínimo 8 caracteres de longitud. Almenos una letra mayúscula. Almenos una letra minúscula. Almenos un número. Almenos un caracter especial. https://uibakery.io/regex-library/password
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; //Expresión regular para validar email, es decir, que el email ingresado tenga el formato correcto de una dirección de correo electrónico

    if (values.nombres.length < 3 || values.nombres.length === 0) { //El método trim( ) elimina los espacios en blanco en ambos extremos del string.        
        setNomError(true)
        return
    }
   
    else if (values.email.length === 0) {
        setErrorEmailVacio(true)
        return
    }

    else if (!validEmail.test(values.email)) {
        setEmailError(true)
        return
    }
    
    else if (values.telefono.length < 10 || values.telefono.length > 10) {
        setTelefonoError(true)
        return
    }
    
    else if (!validPassword.test(values.password)) {
        setPasswordError(true)
        return
    }
    else if (values.passRepeat.length === 0) {
        setPasswordErrorRepeat(true)
        return
    }
    else if (values.password !== values.passRepeat) {
        setPassComparacion(true)
        return
    }
 /*
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Select</title>
</head>
<body>
    <label for="firstSelect">Select 1:</label>
    <select id="firstSelect">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>

    <label for="secondSelect">Select 2:</label>
    <select id="secondSelect">
        <!-- Options will be dynamically added here -->
    </select>

    <script>
        const firstSelect = document.getElementById('firstSelect');
        const secondSelect = document.getElementById('secondSelect');

        // Define options for the second select based on the option selected in the first select
        const optionsByFirstSelect = {
            option1: ['Sub-option 1.1', 'Sub-option 1.2', 'Sub-option 1.3'],
            option2: ['Sub-option 2.1', 'Sub-option 2.2', 'Sub-option 2.3']
        };

        // Function to populate the second select based on the selected option in the first select
        function populateSecondSelect() {
            const selectedOption = firstSelect.value;
            const options = optionsByFirstSelect[selectedOption];
            
            // Clear existing options
            secondSelect.innerHTML = '';

            // Add new options
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                secondSelect.appendChild(optionElement);
            });
        }

        // Call populateSecondSelect initially
        populateSecondSelect();

        // Add event listener to first select to trigger population of second select
        firstSelect.addEventListener('change', populateSecondSelect);
    </script>
</body>
</html>

 */
   
  
   await fetch('http://localhost:3001/registro-usuario', {
        method: 'POST',
        headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
        body: JSON.stringify(values)
    })
    /*
    console.log(URL);
     await fetch(`${URL}/registro-usuario`, {
        method: 'POST',
        headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
        body: JSON.stringify(values)
    })
    */
        .then(response => {
            if (response.status === 200) {
                // alert("Usuario creado con éxito")
                Swal.fire({
                    title: "Usuario creado con éxito",
                    icon: "success"
                })
                form.current.reset()
                window.location.hash = '/login'

            }
            if (response.status === 400) {
                //alert(" + response.status)
                Swal.fire({
                    title: "No fue posible crear el usuario porque ya existe el correo ingresado " + values.email,
                    icon: "warning"
                })

            }
        })
        .catch((error) => {
            //alert("No fue posible finalizar el proceso de registro por un error " + error)
            Swal.fire({
                title: "No fue posible finalizar el proceso de registro por un error interno del servidor ",
                icon: "error"
            })
        })
}

const handleLocationRequest = async () => {
  // Solicitar la ubicación al navegador
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      console.log('Ubicación del usuario:', latitude, longitude);

      // Obtener información de la ubicación utilizando la API de OpenStreetMap Nominatim
      obtenerCiudadPais(latitude, longitude)
        .then(({ ciudad, barrio, departamento, pais }) => {
          if (ciudad && pais) {
            console.log(`Ciudad: ${ciudad}, Barrio: ${barrio|| 'Desconocido'}, Departamento: ${departamento || 'Desconocido'}, País: ${pais}`);
          } else {
            console.log('No se pudo obtener la información de la ubicación.');
          }
        })
        .catch(error => {
          console.error('Error al obtener la información de la ubicación:', error);
        });

      // Aquí puedes enviar la ubicación a tu backend para su procesamiento
    }, (error) => {
      console.error('Error al obtener la ubicación:', error.message);
    });
  } else {
    alert('Tu navegador no soporta la geolocalización.');
  }
};

// Función para obtener la ciudad, departamento y país correspondientes a unas coordenadas geográficas
async function obtenerCiudadPais(latitud, longitud) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitud}&lon=${longitud}`);
    const data = await response.json();

    if (data && data.address) {
      const ciudad = data.address.city || data.address.town || data.address.village || data.address.hamlet || '';
      const barrio = data.address.neighbourhood || '';
      const departamento = data.address.state || '';
      const pais = data.address.country || '';
      
      return { ciudad, barrio, departamento, pais };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error al obtener la información de la ubicación:', error);
    return null;
  }
}

// Ejemplo de uso para obtener la información de la ubicación actual del usuario
handleLocationRequest();


    return (
      <div className='container'>
         
        <section className="vh-100 " >
          
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" >
                <div className="card-body p-md-8 ">
                  <div className="row justify-content-center ">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 color">
      
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrate</p>
      
                      <form className="mx-1 mx-md-4"  onSubmit={handleSubmit} ref={form}>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="nombres">Tu nombre completo</label>
                          <input type="text" id="nombres" name="nombres"  onChange={handleChange} onClick={nombreError} autoComplete="name" className="form-control" />
                          {nomError ? <p>El nombre debe contener mínimo 3 caracteres</p> : ""}
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          
                            <label className="form-label" htmlFor="email">Tu Email</label>
                            <input type="email" id="email" name="email"  onChange={handleChange}  onClick={errorEmail} autoComplete="email" className="form-control" />
                            {emailError ? <p>El email debe tener la estructura de una dirección de correo electrónico. Verbigracia: alguien@gmail.com</p> : ""}
                            {emailErrorVacio ? <p>Debe introducir una dirección de correo electrónico.</p> : ""}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="telefono">Teléfono</label>
                            <input type="number" id="telefono" name="telefono"  onChange={handleChange} onClick={telError} autoComplete="tel" className="form-control" />
                            {telefonoError ? <p>El teléfono debe ser de 10 números</p> : ""}
                          </div>
                        </div>

      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password"  onChange={handleChange}  onClick={passError} autoComplete="new-password" className="form-control" />
                            {passwordError ? <p>La contraseña no cumple con los requisitos mínimos solicitados(Mínimo 8 caracteres de longitud. Almenos una letra mayúscula. Almenos una letra minúscula. Almenos un número. Almenos un caracter especial).</p> : ""}
                            
                          </div>
                        </div>
                        
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="passRepeat">Repite tu contraseña</label>
                            <input type="password" id="passRepeat" name="passRepeat"  onChange={handleChange} onClick={passRepeat} autoComplete="current-password" className="form-control" />
                            
                            {passComparacion ? <p>Las contraseñas ingresadas no coinciden</p> : ""}
                            {passwordErrorRepeat ? <p>Este campo no puede quedar vacío.</p> : ""}
                          </div>
                        </div>
                        
                        <button type="button" className="btn btn-primary" onClick={handleLocationRequest}>Obtener Ubicación</button>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>
      
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Registar</button>
                        </div>
                       
                      </form>
      
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src={logotipo}
                        className="img-fluid" alt="Sample image"/>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </div>
    )
}
export default Registro;