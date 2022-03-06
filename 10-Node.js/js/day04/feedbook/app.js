let express=require('express');
let bodyParser=require('body-parser');
let app=express();
app.engine('html',require('express-art-template'));
app.use('/public/', express.static('./public/'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
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
]
app.get('/',(req,res)=>{
    res.render('index.html',{
        comments:comments
    });
});
app.get('/post',(req,res)=>{
    res.render('post.html');
});
// app.get('/pinglun',(req,res)=>{
//     let comment=req.query;
//     comment.dateTime = '2017-11-5 10:58:51';
//     comments.unshift(comment);
//     res.redirect('/');
// })
app.post('/post',(req,res)=>{
    let comment=req.body;
    comment.dataTime='2015-10-16';
    comments.unshift(comment);
    res.redirect('/');
})
app.listen(8000,()=>{
    console.log('8000端口服务启动完毕')
})