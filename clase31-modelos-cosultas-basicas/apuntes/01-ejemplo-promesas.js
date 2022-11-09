

const dividir = (dividendo, divisor) => {

    return new Promise ( (resolve, reject ) => {

        if( divisor === 0 ) {

            reject ('No se puede dividir por cero')

        } else{
            resolve ( dividendo / divisor )
        }

    } )

}

//CASO FELIZ RESOLVE
const funcionDividirCasoFeliz =  (dividendo, divisor) => {

   dividir(dividendo, divisor)
       .then( resultado => {
           console.log(`resultados: ${ resultado }`);     
       } )
       .catch( error => {
           console.log(`error:  ${error}`);
       } )
       

   }

funcionDividirCasoFeliz(10,5)

//CASO TRSITE, REJECT
const funcionDividirCasoTriste =  (dividendo, divisor) => {
            

   dividir(dividendo, divisor)
       .then( resultado => {
           console.log(`resultadosssss: ${ resultado }`);     
       } )
       .catch( error => {
           console.log(`error:  ${error}`);
       }) 
       


   }
funcionDividirCasoTriste(10,0)





 //caso feliz con async await

const funcionDividirCasoFelizAsync = async (dividendo, divisor) => {
            
    try {
        const resultado = await dividir(dividendo, divisor)

        console.log(`resultados: ${ resultado }`);
        
    } catch (error) {
       console.log(`error:  ${error}`);
       
    }

   }

   funcionDividirCasoFelizAsync(10,5)


//caso triste con async await
const funcionDividirCasoTristeAsync = async (dividendo, divisor) => {
            
    try {
        const resultado = await dividir(dividendo, divisor)
        console.log(`resultados: ${ resultado }`);     

       
    } catch (error) {
       console.log(`error:  ${error}`);
       
    }

   }

   funcionDividirCasoTristeAsync(10,0)
