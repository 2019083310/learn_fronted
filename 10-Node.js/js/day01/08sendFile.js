let fs = require('fs');
let http = require('http');
let server = http.createServer();
server.on('request', (req, res) => {
    let url = req.url;
    if (url === '/') {
        fs.readFile('../source/index.html', (error, data) => {
            if (error) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('读取文件失败!');
            } else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                res.end(data);
            }
        });
    } else if (url === '/a') {
        fs.readFile('../source/ab2.jpg', (error, data) => {
            if (error) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('读取文件失败!');
            } else {
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        });
    }
});
server.listen(8000, () => {
    console.log('8000端口服务启动完毕!');
})