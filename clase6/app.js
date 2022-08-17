const peliculas = require("./movies");

let moviesDH = {
    listarPeliculas: () => {
        let listadoPeliculas = peliculas.map(pelicula => {
            return pelicula
        })
    },
    buscarPelicula: (id) =>{
        let peliculaDetalle =  peliculas.filter(pelicula =>{ 
            return pelicula.id === id
        })
        if(peliculaDetalle.length === 0){
            return "Película no registrada"
        }else{
            return peliculaDetalle;
        }    
    },
    buscarPorGenero: (genero)=> {
        let peliculasPorGenero =  peliculas.filter(pelicula =>{ 
            return pelicula.genre === genero
        })
        if(peliculasPorGenero.length === 0){
            return "No hay películas con ese género"
        }else{
            return peliculasPorGenero;
        }    
    },
    totalPrecio: () => {
        let totalPrecioPeliculas = peliculas.reduce(
            (acumulador, pelicula) => acumulador + pelicula.price,
            0)
        return totalPrecioPeliculas    
    },
    changeMovieGenre: (id, nuevoGenero) => {
        let peliculaCambiada = peliculas.map(pelicula => {
            if(pelicula.id === id){
                pelicula.genre = nuevoGenero
            }   
            return pelicula 
        })
        return peliculaCambiada
    }

}



//En este mismo archivo se verifican cada una de las funcionalidades creadas
//console.log(moviesDH.listarPeliculas());
//console.log(moviesDH.buscarPelicula(4));
//console.log(moviesDH.buscarPelicula(10));
//console.log(moviesDH.buscarPorGenero('Ciencia ficcion'));
//console.log(moviesDH.buscarPorGenero('Acción'));
console.log(moviesDH.totalPrecio());