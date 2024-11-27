const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');


const app = express();
app.use(bodyparser.urlencoded({ extended: false }));

const adminRouter = require('./routes/admin');
const shoprouter = require('./routes/shop');

app.use('/admin', adminRouter);
app.use(shoprouter);
app.use(express.static(path.join(__dirname, 'public')));
// sending a 404  not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(3000);