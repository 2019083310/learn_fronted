let fs = require('fs');
let http = require('http');
let server = http.createServer();
let template = require('art-template');
let url=require('url');
let comments = [{
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
];
server.on('request', (req, res) => {
    let obj=url.parse(req.url,true);
    let passname=obj.pathname;
    if (passname === '/') {
        fs.readFile('./views/index.html', (error, data) => {
            if (error) {
                console.log('404 Not Found');
                return;
            } else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                let htmlstr = template.render(data.toString(), {
                    comments: comments
                });
                res.end(htmlstr);
            }
        });
    } else if (passname === '/post') {
        fs.readFile('./views/post.html', (error, data) => {
            if (error) {
                return res.end('404 Not Found');
            } else {
                res.end(data);
            }
        })
    } else if (passname.indexOf('/public') === 0) {
        http: //127.0.0.1:8000/10-Node.js/js/day02/留言本_files/bootstrap.css
            fs.readFile('.' + passname, (error, data) => {
                if (error) {
                    return res.end('404 Not Found');
                } else {
                    res.end(data);
                }
            })
        // console.log(url);
    }else if(passname==='/pinglun'){
        let com=obj.query;
        com.dateTime = '2017-11-2 17:11:22';
        comments.unshift(com);
        res.statusCode=302;
        res.setHeader('Location','/');
        res.end();
    }
    else {
        fs.readFile('./views/404.html', (error, data) => {
            if (error) {
                return res.end('404 Not Found');
            } else {
                res.end(data);
            }
        })
    }
});
server.listen(3000, () => {
    console.log('3000服务端口启动完毕!');
})