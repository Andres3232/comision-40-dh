const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter');

app.use('/', mainRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});