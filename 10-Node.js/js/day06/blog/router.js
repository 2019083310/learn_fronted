let express = require('express')
let User = require('./models/user')
let md5 = require('blueimp-md5')

let router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html', {
        user:req.session.user
    })
})

router.get('/login', (req, res) => {
    res.render('login.html')
})

router.post('/login', (req, res) => {
    // 1. 获取表单数据
    // 2. 查询数据库用户名密码是否正确
    // 3. 发送响应数据
    let body = req.body;
    User.findOne({
        email: body.email,
        password: md5(md5(body.password))
    }), (error, user) => {
        if (error) {
            return res.status(500).json({
                err_code: 500,
                message: error.message
            })
        }
        // 如果邮箱和密码匹配，则 user 是查询到的用户对象，否则就是 null
        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or password is invalid'
            })
        }
        // 用户存在，登陆成功，通过 Session 记录登陆状态
        req.session.user = user

        res.status(200).json({
            err_code: 0,
            message: 'Ok'
        })
    }
})

router.get('/register', (req, res) => {
    res.render('register.html')
})

router.post('/register', (req, res) => {
    // 1. 获取表单提交的数据
    //    req.body
    // 2. 操作数据库
    //    判断改用户是否存在
    //    如果已存在，不允许注册
    //    如果不存在，注册新建用户
    // 3. 发送响应
    let body = req.body
    User.findOne({
        $or: [{
            email: body.email
        }, {
            nickname: body.nickname
        }]
    }), (error, data) => {
        if (error) {
            return res.status(500).json({
                success: false,
                message: '服务端错误'
            })
        }

        if (data) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or nickname aleady exits'
            })
        }
        // 对密码进行 md5 重复加密
        body.password = md5(md5(body.password))

        new User(body).save((error, user) => {
            if (error) {
                return res.status(500).json({
                    err_code: 500,
                    message: 'Internal error'
                })
            }

            // 注册成功，使用 Session 记录用户的登陆状态
            req.session.user = user

            // Express 提供了一个响应方法：json
            // 该方法接收一个对象作为参数，它会自动帮你把对象转为字符串再发送给浏览器
            //err_code 0代表成功 1代表失败
            res.status(200).json({
                err_code: 0,
                message: 'OK'
            })


            // 服务端重定向只针对同步请求才有效，异步请求无效
            // res.redirect('/')

        })
    }
})

router.get('/logout', function (req, res) {
    // 清除登陆状态
    req.session.user = null

    // 重定向到登录页
    res.redirect('/login')
})

module.exports = router;