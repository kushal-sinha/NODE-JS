const express = require('express');
const app = express();

//creating middleware / handler for each request

app.use("/users", (req, res, next) => {
    console.log("Welcome to the User Section");
    console.log({
        url: req.url,
        isFavicon: req.url.includes('favicon.ico'),
        accept: req.headers.accept
    });
    res.send('<h1>Hello user , Welcome to Express!</h1>');
});
// app.use("/users", (req, res, next) => {
//     console.log("Welcome to the User Section");
//     console.log({
//         url: req.url,
//         isFavicon: req.url.includes('favicon.ico'),
//         accept: req.headers.accept
//     });
// });
// res.send('<h1>Hello user , Welcome to Express!</h1>');
// app.use('/', (req, res, next) => {
// //     console.log("This is the  root page");
// //     res.send("<h1>Welcome to the home Page</h1>");
// // })

app.listen(3000, () => {
    console.log("Server Started");
});