const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const btnEnviarContacto = document.getElementById("btnEnviarContacto");
const APIURL = 'https://jsonplaceholder.typicode.com/posts';

btnEnviarContacto.addEventListener("click", verInfo);

function verInfo(e) {
    e.preventDefault();

    $.ajax({
        method: "POST",
        url: APIURL,
        data: JSON.stringify({ nombre: nombre.value, email: mail.value, teléfono: telefono.value, mensaje: mensaje.value }),
        success: function(data) {

            console.log(data);

            if ((document.getElementById("nombre").value === "") || (document.getElementById("telefono").value === "") || (document.getElementById("mail").value === "") || (document.getElementById("mensaje").value === "")) {
                let inputNombreIncompleto = document.createElement("div")
                inputNombreIncompleto.innerHTML = ` <p class="inputIncompleto"> INGRESA CORRECTAMENTE TUS DATOS </p>`
                contenedorFormulario.appendChild(inputNombreIncompleto);

            }


            if (document.getElementById("nombre").value && document.getElementById("telefono").value && document.getElementById("mail").value && document.getElementById("mensaje").value) {
                let inputCompleto = document.createElement("div");
                inputCompleto.innerHTML = `<div class="contenedorInput"> <h3 class="h3Form">  A la brevedad te contactaremos! </br> Información Enviada: </h3>
          <p class="parrafoForm">  Nombre: ${nombre.value} </p>
          <p class="parrafoForm">  E-mail: ${mail.value} </p>
          <p class="parrafoForm">  Teléfono: ${telefono.value} </p>
          <p class="parrafoForm">  Mensaje: ${mensaje.value} </p> </div>`
                contenedorFormulario.appendChild(inputCompleto);
            }
        }
    });

    localStorage.setItem("Nombre", nombre.value);
    localStorage.setItem("Mail", mail.value);
    localStorage.setItem("Telefono", telefono.value);
    localStorage.setItem("Mensaje", mensaje.value);


}

//const data = getStorageFormData();



// const verNombreBla = localStorage.getItem("Nombre");
// const verMailBla = localStorage.getItem("Mail");
// const verTelefonoBla = localStorage.getItem("Telefono");
// const verMensajeBla = localStorage.getItem("mensaje");