/***************************/
/* Ejercicios con el DOM: */
/**************************/
/*
- Crear tabla que contenga solo usuarios que tengan correo de Academlo (podemos usar método [endsWith](https://www.w3schools.com/jsref/jsref_endswith.asp))
- Crear una tabla que muestre a las personas en rango de 20 y 40 años
- Crear una tabla que contenga la información de todos los usuarios incluyendo sus redes sociales
*/

const usuarios = [
    {
        nombre: "Erik",
        edad: 29,
        correo: "erik@academlo.com",
        social: [
            { nombre: "facebook", url: "facebook/erik" },
            { nombre: "twitter", url: "twitter/erik" },
        ],
        genero: "Male",
    },
    {
        nombre: "Georg",
        edad: 33,
        correo: "georg@academlo.com",
        social: [
            { nombre: "facebook", url: "facebook/georg" },
            { nombre: "twitter", url: "twitter/georg" },
        ],
        genero: "Male",
    },
    {
        nombre: "Andrea",
        edad: 42,
        correo: "andrea@hotmail.com",
        social: [
            { nombre: "facebook", url: "facebook/andrea" },
            { nombre: "twitter", url: "twitter/andrea" },
        ],
        genero: "Female",
    },
    {
        nombre: "Oscar",
        edad: 31,
        correo: "oscar@academlo.com",
        social: [
            { nombre: "facebook", url: "facebook/oscar" },
            { nombre: "twitter", url: "twiter/oscar" },
        ],
        genero: "Male",
    },
    {
        nombre: "Daniela",
        edad: 22,
        correo: "daniela@uaq.mx",
        social: [
            { nombre: "facebook", url: "facebook/daniela" },
            { nombre: "twitter", url: "twitter/daniela" },
        ],
        genero: "Female",
    },
];

const ejercicioUno = document.querySelector('.ejercicio__1')
const ejercicioDos = document.querySelector('.ejercicio__2')
const ejercicioTres = document.querySelector('.ejercicio__3')

const users = document.querySelector(".users");

let email = '';

for(i of usuarios){

    if(i.correo.includes('@academlo.com')){
        email += `
        <table border="1">
            <thead>
                <th colspan="2">User</th>
            </thead>
            <tbody>
                <tr>
                    <td>Nombre</td>
                    <td>${i.nombre}</td>
                </tr>
                <tr>
                    <td>Edad</td>
                    <td>${i.edad}</td>
                </tr>
                <tr>
                    <td>Correo</td>
                    <td>${i.correo}</td>
                </tr>
                <tr>
                    <td>Género</td>
                    <td>${i.genero}</td>
                </tr>
            </tbody>
        </table>
        `
    }
}

ejercicioUno.innerHTML = email;

// -----------------------------------------

let rangeAge = '';

for(i of usuarios){

    if(i.edad <= 40 && i.edad >= 20){
        rangeAge += `
        <table border="1">
            <thead>
                <th colspan="2">User</th>
            </thead>
            <tbody>
                <tr>
                    <td>Nombre</td>
                    <td>${i.nombre}</td>
                </tr>
                <tr>
                    <td>Edad</td>
                    <td>${i.edad}</td>
                </tr>
                <tr>
                    <td>Correo</td>
                    <td>${i.correo}</td>
                </tr>
                <tr>
                    <td>Género</td>
                    <td>${i.genero}</td>
                </tr>
            </tbody>
        </table>
        `
    }
}

ejercicioDos.innerHTML = rangeAge;

// -----------------------------------------

{
  // allInfo += `
  //     <table border="1">
  //         <thead>
  //             <th colspan="2">User</th>
  //         </thead>
  //         <tbody>
  //             <tr>
  //                 <td>Nombre</td>
  //                 <td>${i.nombre}</td>
  //             </tr>
  //             <tr>
  //                 <td>Edad</td>
  //                 <td>${i.edad}</td>
  //             </tr>
  //             <tr>
  //                 <td>Correo</td>
  //                 <td>${i.correo}</td>
  //             </tr>
  //             <tr>
  //                 <td>Género</td>
  //                 <td>${i.genero}</td>
  //             </tr>
  //             <tr colspan="2">
  //                 <td>Social</td>
  //                 <td>${social[j]}</td>
  //             </tr>
  //         </tbody>
  //     </table>
  //     `
}

let allInfo = '';
let obj = {};

for(i of usuarios){
       allInfo += `
      <table border="1">
          <thead>
              <th colspan="2">User</th>
          </thead>
          <tbody>
              <tr>
                  <td>Nombre</td>
                  <td>${i.nombre}</td>
              </tr>
              <tr>
                  <td>Edad</td>
                  <td>${i.edad}</td>
              </tr>
              <tr>
                  <td>Correo</td>
                  <td>${i.correo}</td>
              </tr>
              <tr>
                  <td>Género</td>
                  <td>${i.genero}</td>
              </tr>
              <tr colspan="2">
                  <td>Social</td>
                  <td>${i.social[0].url} ${i.social[1].url}</td>
              </tr>
          </tbody>
      </table>
      `
}



ejercicioTres.innerHTML = allInfo;