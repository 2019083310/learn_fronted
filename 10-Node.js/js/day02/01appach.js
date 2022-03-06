let http = require('http');
let fs = require('fs');
let server = http.createServer();
let wwwDir = '../day02';
server.on('request', (req, res) => {
    let url = req.url;
    let filePath = '/index.html';
    if (url !== '/') {
        filePath = url;
    }
    fs.readFile(wwwDir + filePath, (error, data) => {
        if (error) {
            return res.end('404 Not Found');
        }
        res.end(data);
    })
});
server.listen(8000, () => {
    console.log('8000端口服务启动完毕!')
});