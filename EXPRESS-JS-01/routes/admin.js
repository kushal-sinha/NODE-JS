const express = require('express');
const path = require('path');
// const rootDir = require('../util/path')
// importing the router from express works same as app.use , get , post 
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("another Middleware");
    // res.send('<h1>Add different Products!</h1>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});
router.post('/add-product', (req, res, next) => {
    console.log(req.body);  // Now it will print the form data
    console.log("Hello");  // Now it will print the form data
    res.redirect('/');
});

module.exports = router;