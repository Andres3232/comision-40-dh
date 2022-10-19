

const deRuta = (req, res, next) => {
    console.log('Soy un md de ruta');
    next()
}


module.exports = deRuta 