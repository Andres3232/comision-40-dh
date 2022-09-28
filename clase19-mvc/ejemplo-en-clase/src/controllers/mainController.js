

const mainController = {

   index: ( req, res ) => {
        res.send( 'Hola desde el modulo del controlador' );
   },
   nosotros: ( req, res ) => {
        res.send( 'NOSOTROS' );
   }    

}

module.exports = mainController;