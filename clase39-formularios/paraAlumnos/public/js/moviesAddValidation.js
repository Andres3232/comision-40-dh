window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

 // 1- atrapar el form



 // 2- hacer foco en el title del form


 //3-hacer el addEventListener del form con el eveto submit y adentro del callback meter toda la logica de validaciones
 //nota: hacer una variable errors con el valor de un array vacio, para un pusheando todos los mensajes de errores





 //4- evaluar si el array errores esta vacio, sino lo esta iterarlo y mostrar los errores en el ul q tiene la clase
 // errores (mirar la vsta moviesAdd). Si esta vacio mandar una alerta y hacer el submit del form
 //nota: usar el prevetDefault() para prevenir el posteo del formulario antes de q se realicen las validaciones


}