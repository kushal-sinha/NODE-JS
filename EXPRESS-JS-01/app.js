const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));

//another middleware
app.use('/add-product', (req, res, next) => {
    console.log("another Middleware");
    // res.send('<h1>Add different Products!</h1>');
    res.send('<form action = "/product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add Product</button></form>')

});
app.post('/product', (req, res, next) => {
    console.log(req.body);  // Now it will print the form data
    console.log("Hello");  // Now it will print the form data
    res.redirect('/');
});


app.use('/', (req, res, next) => {
    console.log("another Middleware");
    res.send('<h1>Hello from EXpress!</h1>');

    next();
});

app.listen(3000);