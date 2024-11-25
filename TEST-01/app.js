// first let require the http 
const http = require('http');
const route = require("./routes");

// lets create the server
const server = http.createServer(route);

server.listen(3000, () => {
    console.log("Server is running");
})

