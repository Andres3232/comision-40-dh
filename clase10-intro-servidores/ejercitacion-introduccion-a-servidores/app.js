// Require de Express
const express = require('express');

// Ejecución de Express
const app = express();

// Requiere path
const path = require('path');

// Usando recursos estáticos.
app.use(express.static('public'));

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

/*
    ** RUTAS A LOS RECURSOS **
*/


// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
	console.log(__dirname);
	res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

// Ruta a Babbage
app.get('/babbage', (req, res) => {
	res.sendFile(path.resolve('./views/babbage.html'))
})
// Ruta a Berners-Lee
app.get('/berners-lee', (req, res) => {
	res.sendFile(path.resolve('./views/berners-lee.html'))
})
// Ruta a Clarke
app.get('/clarke', (req, res) => {
	res.sendFile(path.resolve('./views/clarke.html'))
})
// Ruta a Hamilton
app.get('/hamilton', (req, res) => {
	res.sendFile(path.resolve('./views/hamilton.html'))
})
// Ruta a Hopper
app.get('/hopper', (req, res) => {
	res.sendFile(path.resolve('./views/hopper.html'))
})
// Ruta a Lovelace
app.get('/lovelace', (req, res) => {
	res.sendFile(path.resolve('./views/lovelace.html'))
})
// Ruta a Turing
app.get('/turing', (req, res) => {
	res.sendFile(path.resolve('./views/turing.html'))
})



// Ruta Créditos
app.get('/creditos', (req, res) => {
	res.send('Creditos de las y los developers.');
});

// Ruta 404 ¿?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});