//VARIABLES (var,let, const)

var nombre = 'Andres';
var apellido = 'Gonzalez';

let nombre1 = 'Andres';
const apellido1 = 'Murgo';

//tipos de datos (string, number, boolean, object, array, undefined, null,NaN)

let unNumero = 10;
let unString = 'Hola';
let unBoolean = true;
let unArray = [10,`Hola`,true,[10,20,30],{nombre:'Andres'},function(){console.log('Object');
},123];
let unObject = {
    nombre:'Andres',
    apellido:'Murgo',
    edad: 30,
    grupoSanguineo:'A',
    saludar: function(){
        console.log('Hola');
    },
    telefonos:[1234567,13546541],
    alumnos:[{alumno2:'Andres'},{alumno2:'Juan'}],
    direccion: {
        calle:'Calle',
        numero:123,
    }

};

//funciones
//declarada
function saludar(parametros){
   return console.log('Hola');
}

//expresada
const saludar = (parametros) => {
    console.log('Hola');
}

const saludar = () => console.log('hola');



//metodos de los arrays
let nombres = ['Andres','Juan','Pedro'];

//indexOf
nombres.indexOf('Andres'); // 0

//push agrega un elemento al final del array
nombres.push('Maria'); 

//pop elimina el utlimo elemento del array
nombres.pop();

//shift elimina el primer elemento del array
nombres.shift();

//unshift agrega un elemento al principio del array
nombres.unshift('Andres');

//length devuelve el numero de elementos del array
nombres.length;

//lastIndexOf devuelve el ultimo elemento del array
nombres.lastIndexOf('Andres');

//join separa los elementos del array por una cadena
nombres.join('-');

//toString convierte el array en un string
nombres.toString();

//find devuelve el primer elemento que cumpla la condicion
nombres.find(nombre => nombre === 'Andres'); //'Andres'  sino lo encuentra undefinded

//filter devuelve un array con los elementos que cumplen la condicion
nombres.filter(nombre => nombre === 'Andres'); //['Andres'] sino encuentra nada undefinded












