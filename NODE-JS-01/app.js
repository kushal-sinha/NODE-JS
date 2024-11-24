const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action = "/message" method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/message' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();

    }
    console.log(req.url, req.method, req.headers);
    console.log("hello from server");
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My first page </title></head>')
    res.write('<body><h1>Hello from my node server</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(3000, () => {
    console.log("server is running");
});