const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');


const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyparser.urlencoded({ extended: false }));

const adminRouter = require('./routes/admin');
const shoprouter = require('./routes/shop');

app.use('/admin', adminRouter.routes);
app.use(shoprouter);
app.use(express.static(path.join(__dirname, 'public')));
// sending a 404  not found
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: "Page not Found" });
})


app.listen(3000);