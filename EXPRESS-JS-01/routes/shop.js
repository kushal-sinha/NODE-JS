const path = require('path');
const express = require('express');
const rootDir = require('../util/path')
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    const name = adminData.getName();
    console.log("Product is", products);
    console.log("Name is", name);
    res.render('shop', { prods: products, docTitle: 'Shop', Name: name });

});

module.exports = router;