const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path')

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'user.html'));

})
module.exports = router;

