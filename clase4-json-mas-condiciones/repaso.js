//if ternario

// let superHeroe = "Batman";

// if (superHeroe === "Batman") {
//     console.log('soy Batman');
// } else {
//     console.log('soy otro super heroe');
// }

// superHeroe === "Batman"
//     ? console.log('soy Batman')
//     : console.log('soy otro super heroe');


//switch
// let dia = 'Miercoles';


// switch (dia) {

//     case 'Lunes':
//         //bloque de codigo
//         console.log('Hoy es Lunes');
//         break;
        
//     case 'Martes':
//     case 'Jueves':
//         //bloque de codigo
//         console.log('Hoy tenemos clases');
//         break;

//     default:
//         //bloque de codigo
//         console.log('No se q hacer');
             
// }

// ciclo for

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numeroPar = [];

// for (let i = 0; i < numeros.length; i++) {
   
//     if (numeros[i] % 2 === 0) {
//         numeroPar.push(numeros[i]);
//     }

// }

// console.log( numeroPar);

//JSON Y OBJETOS LITERALES

//objeto literal
let persona = {
    nombre: 'Andres',
    edad: 30
}

console.log(persona.nombre);

//JSON
let personaJSON = '{"nombre": "Andres", "edad": 30}';

//JSOON A OOBJETO LITERAL
let personaJSON2 = JSON.parse(personaJSON);
console.log(personaJSON2);

//OBJETO LITERAL A JSON
let personaJSON3 = JSON.stringify(personaJSON2);
console.log(personaJSON3);







