import http from "http";

import fs from "fs";

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('index.html', function(err, data){
        if (err)
        {
            res.writeHead(404);
            res.write('error occurred');
        }
        else
        {
            res.write(data);
        }
        res.end()
    });
});


server.listen(port, hostname);