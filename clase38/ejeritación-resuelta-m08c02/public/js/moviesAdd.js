window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  titulo.onmouseover = ()=>{
    
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    titulo.style.backgroundColor = '#' + randomColor;
    
  }
  // titulo.addEventListener("mouseover", function () {
  //   titulo.style.color = "red";
  // });

  titulo.onmouseout = () =>{
    titulo.style.color = "black";

  }
  // titulo.addEventListener("mouseout", function () {
  //   titulo.style.color = "black";
  // });

  let inputTitle = document.getElementById("titulo");
  let estadoSecreto = 0;

  inputTitle.onkeypress = (e) => {
    if (e.key == 's' && estadoSecreto == 0) {
      estadoSecreto++
      console.log(estadoSecreto);
    }else if (e.key == 'e' && estadoSecreto == 1) {
      estadoSecreto++
      console.log(estadoSecreto);
  
    }else if (e.key == 'c' && estadoSecreto == 2) {
      estadoSecreto++
      console.log(estadoSecreto);
  
    }else if (e.key == 'r' && estadoSecreto == 3) {
      estadoSecreto++
      console.log(estadoSecreto);
  
    }else if (e.key == 'e' && estadoSecreto == 4) {
      estadoSecreto++
      console.log(estadoSecreto);
  
    }else if (e.key == 't' && estadoSecreto == 5) {
      console.log(estadoSecreto);
      alert("SECRETO MAGICO");
      estadoSecreto = 0;
    }else{
      estadoSecreto = 0
      console.log(estadoSecreto);
    }

  }


  // inputTitle.onkeypress = (e) => {
  //     switch (estadoSecreto) {
  //         case 0:
  //           e.key == "s" ? estadoSecreto++ : (estadoSecreto = 0);
  //           break;
  //         case 1:
  //           e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
  //           break;
  //         case 2:
  //           e.key == "c" ? estadoSecreto++ : (estadoSecreto = 0);
  //           break;
  //         case 3:
  //           e.key == "r" ? estadoSecreto++ : (estadoSecreto = 0);
  //           break;
  //         case 4:
  //           e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
  //           break;
  //         case 5:
  //           e.key == "t" ? estadoSecreto++ : (estadoSecreto = 0);
  //           break;
  //         case 6:
  //           if (e.key == "o") {
  //               alert("SECRETO MAGICO");
  //             }
  //             estadoSecreto = 0;
  //             break;
  //         }
  //         console.log(estadoSecreto);
  //       };
        
      }
      
     