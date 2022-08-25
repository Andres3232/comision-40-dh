// Microdesafio - Paso I

// Requerimos los modulos propios
let lucianoPerez = require("./luciano_perez");
let marcosPerez = require("./marcos_perez");
let marianaPerez = require("./mariana_perez");

// console.log("Soy " + lucianoPerez[0] + ", disfruto  de " + lucianoPerez[1] + " y soy de  " + lucianoPerez[2]);

function presentacion(persona) {
  return "Soy " + persona[0] + ", disfruto  de " + persona[1] + " y soy de  " + persona[2]
}

//prueba de nuestra función
console.log(presentacion(lucianoPerez));
console.log(presentacion(marcosPerez));
console.log(presentacion(marianaPerez));


// MicroDesafio - Paso II 

// Requerimos el modulo nativo FileSystem
const fs = require("fs");
// Leemos el archivo de texto y lo guardamos en una variable
let archivo = fs.readFileSync("./mensaje.txt", "utf-8");
// Prueba de lectura del archivo
console.log(archivo);
