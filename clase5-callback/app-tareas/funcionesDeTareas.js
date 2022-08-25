const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    // Micro desafío 2-a
    //Dentro de nuestro archivo funcionesDeTareas.js, vamos a crear una función llamada escribirJSON. 
    escribirJSON : function(tareas){
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
    },
    // Micro desafío 2-b - Escribir la tarea en el archivo JSON
    guardarTarea(tarea) {
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    // Micro desafío 3, aplicar filter para traer solo las tareas pendientes
    filtrarPorEstado(estado) {
        let tareas = this.leerArchivo();
        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado === estado;
        });  
        return tareasFiltradas;
    }
}
module.exports = archivoTareas;