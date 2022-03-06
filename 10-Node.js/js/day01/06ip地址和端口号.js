let http = require('http');
let server = http.createServer();
server.on('request', (req, res) => {
    console.log('接收到客户端请求!');
    console.log('请求我的客户端的地址是：', req.socket.remoteAddress, req.socket.remotePort);
    res.end('node');
});
server.listen(7000, () => {
    console.log('8000端口启动完毕!')
})