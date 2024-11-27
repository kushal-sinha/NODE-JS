const express = require('express');

const app = express();


//another middleware
app.use('/products', (req, res, next) => {
    console.log("another Middleware");
    res.send('<h1>Add different Products!</h1>');
});
app.use('/', (req, res, next) => {
    console.log("another Middleware");
    res.send('<h1>Hello from EXpress!</h1>');

    next();
});

app.listen(3000);