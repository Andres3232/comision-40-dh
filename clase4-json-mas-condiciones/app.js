
const fs = require('fs');

let jsonDeNotas = fs.readFileSync('./notas.json', 'utf-8'); 
let arrayDeNotas = JSON.parse(jsonDeNotas);

let nuevaNota = {
    titulo: 'Nueva nota',
    descripcion : 'Nueva nota de prueba',
    estado: 'pendiente'
}

arrayDeNotas.push(nuevaNota);

let jsonFinal = JSON.stringify(arrayDeNotas, null, 4 );


const argumento = process.argv[2];

console.log(argumento);

fs.writeFileSync('./notas.json', jsonFinal);









