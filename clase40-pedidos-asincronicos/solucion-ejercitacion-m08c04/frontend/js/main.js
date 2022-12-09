// Función que recibe el click de la estrella
function agregarFavorito(id) {
  //  Obtenemos los favoritos de localStorage (strings)
  let datos = localStorage.getItem("datos");
  if (datos !== null) {
    // Si contiene datos con split convertimos ese string en array para agregar la nueva película
    let arr = datos.split(",");
    arr.push(id);
    localStorage.setItem("datos", arr);
    console.log(localStorage.getItem("datos"));
  } else {
    // Si no contiene nada en localStorage seteamos la nueva película
    localStorage.setItem("datos", id);
    console.log(localStorage.getItem("datos"));
  }
}

window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Si contiene favoritos en localStorage imprime link a favoritas
  if (localStorage.getItem("datos") !== null) {
    const link = document.getElementById("favoritas");
    link.innerHTML = '<a class="button" href="favoritas.html">Favoritas</a>';
  }

  // Fetch a nuestro endpoint para obtener todas las peliculas
  fetch("http://localhost:3031/api/movies")
    .then(function (response) {
      return response.json();
    })
    .then(function (peliculas) {
      let data = peliculas.data;

      // iteramos por cada pelicula para imprimir tarjetas
      data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        container.appendChild(card);

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;
        card.appendChild(h1);

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;
        card.appendChild(p);

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;
        card.appendChild(duracion);

        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }

        // Agregamos la estrella de favoritos con un evento onclick que ejecuta la función agregarFavorito
        const favoritas = document.createElement("p");
        favoritas.innerHTML = `
        <div class="ec-stars-wrapper">
        <a href="#" onclick="agregarFavorito(${movie.id})">&#9733;</a>
        </div>
        `;
        card.appendChild(favoritas);
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};
