const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const { title } = require('process');
// importing the router from express works same as app.use , get , post 
const router = express.Router();

//for storing data creating a new variable and then storing the data in it

const products = [];

router.get('/add-product', (req, res, next) => {
    console.log("another Middleware");
    // res.send('<h1>Add different Products!</h1>');
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });

});
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });  // Now it will print the form data
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
