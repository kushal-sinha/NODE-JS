const express = require('express');
const app = express();
const path = require('path');

const userRouter = require('./routes/user');
const home = require('./routes/root');

app.use(userRouter);
app.use(home);
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => {
    console.log("Server Started");
})