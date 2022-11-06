const formulario = document.querySelector('#formulario');
const inputs = document.querySelectorAll('#formulario input');

const correo =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const validarFormulario = (e) => {
   switch(e.target.name) {
    case "nombre":
        if( e.target.value == "") {
            document.getElementById('nombre').classList.add('input-error-activo');
            document.getElementById('icono-nombre').classList.add('icon-error-activo');
            document.getElementById('mensaje-nombre').classList.add('mensaje-error-activo');
        } else {
            document.getElementById('nombre').classList.remove('input-error-activo');
            document.getElementById('icono-nombre').classList.remove('icon-error-activo');
            document.getElementById('mensaje-nombre').classList.remove('mensaje-error-activo');
        }
    break;
    case "apellido":
        if( e.target.value == "" ) {
            document.getElementById('apellido').classList.add('input-error-activo');
            document.getElementById('icono-apellido').classList.add('icon-error-activo');
            document.getElementById('mensaje-apellido').classList.add('mensaje-error-activo');
        } else {
            document.getElementById('apellido').classList.remove('input-error-activo');
            document.getElementById('icono-apellido').classList.remove('icon-error-activo');
            document.getElementById('mensaje-apellido').classList.remove('mensaje-error-activo');
        }
    break;
    case "email":
        if ( correo.test(e.target.value) ){
            document.getElementById('email').classList.remove('input-error-activo');
            document.getElementById('icono-email').classList.remove('icon-error-activo');
            document.getElementById('mensaje-email').classList.remove('mensaje-error-activo');
        } else {
            document.getElementById('email').classList.add('input-error-activo');
            document.getElementById('icono-email').classList.add('icon-error-activo');
            document.getElementById('mensaje-email').classList.add('mensaje-error-activo');
        }
    break;
    case "password":
        if(  e.target.value == "" ) {
            document.getElementById('password').classList.add('input-error-activo');
            document.getElementById('icono-password').classList.add('icon-error-activo');
            document.getElementById('mensaje-password').classList.add('mensaje-error-activo');
        } else {
            document.getElementById('password').classList.remove('input-error-activo');
            document.getElementById('icono-password').classList.remove('icon-error-activo');
            document.getElementById('mensaje-password').classList.remove('mensaje-error-activo');
        }
    break;
   }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener("submit", (event) => {
    let nuevoContacto = localStorage.getItem("respuestas");

    let arrayContactos;

    if (nuevoContacto == undefined) {
        arrayContactos = [];
    } else {
        arrayContactos = JSON.parse(nuevoContacto);
    }

    event.preventDefault();

    let nuevaRespuesta = {
        nombre: event.target.nombre.value,
        apellido: event.target.apellido.value,
        email: event.target.email.value,
        password: event.target.password.value
    }

    arrayContactos.push(nuevaRespuesta);

    let respuestasJSON = JSON.stringify(arrayContactos);

    localStorage.setItem("respuestas", respuestasJSON);

    formulario.reset();
    location.reload();
})

let respuestasJson = localStorage.getItem("respuestas");
let respuestas = JSON.parse(respuestasJson);

console.log(respuestas);