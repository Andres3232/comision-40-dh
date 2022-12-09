window.onload = ()=> {

    // Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'Your work has been saved',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })

    const ulProvincias = document.querySelector('#provincias');


    fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
        .then(response => response.json())
        .then(provincias => {

            console.log(ulProvincias);
            
            for (let i = 0; i < provincias.provincias.length; i++) {

               // ulProvincias.innerHTML += `<li>${provincias.provincias[i].nombre}</li>`
               ulProvincias.innerHTML += `<li><a class="dropdown-item" href="#">${provincias.provincias[i].nombre}</a></li>`
                
            }


        })



}