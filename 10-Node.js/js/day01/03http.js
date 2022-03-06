let http = require('http');
let server = http.createServer();
server.on('request', (req, res) => {
    console.log('收到客户端请求，请求路径是：' + req.url);
    //res.write('hello');
    //告诉客户端，我的话说完了，你可以呈递给用户了
    let url = req.url;
    if (url == '/') {
        res.end('index page');
    } else if (url === '/login') {
        res.end('login page');
    } else if (url === '/products') {
        let products = [{
                name: '苹果 X',
                price: 8888
            },
            {
                name: '菠萝 X',
                price: 5000
            },
            {
                name: '小辣椒 X',
                price: 1999
            }
        ];
        res.end(JSON.stringify(products));
    } else {
        res.end('404 Not Found');
    }
});
server.listen(8000, () => {
    console.log("8000端口服务启动完毕!");
})