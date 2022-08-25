let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();

        //Micro desafío 1
        //Modificar la funcionalidad de listar tareas. Deberemos utilizar el método forEach.
        tareas.forEach((tarea, index) => {
            console.log((index + 1) +'. ' + tarea.titulo + ' - ' + tarea.estado);
        });
        console.log()
        break;

    // Micro desafío 2 - c
    // -------------------
    // Escribir el caso de crear tarea
    // Tener en cuenta que va a llegar el nombre de la tarea como segundo argumento
    // Tener en cuenta que la tarea se crea en esto "pendiente"
    case 'crear':
        console.log();    
        console.log('Nueva tarea creada');
        console.log('------------------');

        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: 'pendiente'
        }

        archivoTareas.guardarTarea(tarea);

        console.log(tarea.titulo + ' -> ' + tarea.estado);
        console.log()
        break;  

    // Micro desafío 3
    case 'filtrar':
        let estado = process.argv[3];
        console.log();
        console.log('Tareas ' + estado);
        console.log('------------------');
        let filtradas = archivoTareas.filtrarPorEstado(estado);
        filtradas.forEach((tarea, index) => {
            console.log((index + 1) +'. ' + tarea.titulo);
        });
        console.log('');
        break;      
    
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
