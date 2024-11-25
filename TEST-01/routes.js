const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>")
        res.write("<head><title>Test</title></head>")
        res.write('<body><form action = "/create-users" method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>')
        res.write("</html>")
        return res.end();
    }
    if (url === "/users") {
        res.write("<html>")
        res.write("<head><title>Users</title></head>")
        res.write('<body><form action = "/create-users" method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>')
        res.write("</html>")
        return res.end();
    } if (url === "/create-users" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            console.log(parsedbody);
            return res.end();
        });
    }
}
module.exports = requestHandler;