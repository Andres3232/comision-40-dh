window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Obtenemos los datos de localStorage
  let str = localStorage.getItem("datos");
  // convertimos ese string en un array
  let arr = str.split(",");
  // Creamos una nueva instancia de arr y hacemos uso de Set para no colocar los elementos repetidos https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  let favoritas = Array.from(new Set(arr));

  // Realizamos un pedido a nuestra api de todas las peliculas
  fetch(`http://localhost:3031/api/movies/`)
    .then(function (response) {
      return response.json();
    })
    .then(function (peli) {
      let movies = peli.data;

      // filtramos las peliculas que coincidan con los id obtenidos de localstorage y lo guardamos en un nuevo array
      const filterMovies = movies.filter((movie) => {
        return favoritas.includes(String(movie.id));
      });

      console.log(filterMovies);
      // iteamos ese nuevo array con su respectiva tarjeta
      filterMovies.forEach((movie) => {
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
      });
    })
    .catch(function (error) {
      console.error(error);
    });
};
