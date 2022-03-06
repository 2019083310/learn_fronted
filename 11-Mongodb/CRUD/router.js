let express = require('express')
let router = express.Router()
let fs = require('fs')
let Student = require('./student')

//渲染首页
router.get('/', (req, res) => {
    Student.find((error, students) => {
        if (error) {
            return res.status(500).send('Server error')
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: students
        })
    })
})
//渲染添加学生页面
router.get('/students', (req, res) => {
    res.render('new.html')
})
//处理添加学生页面
router.post('/students', (req, res) => {
    new Student(req.body).save((error) => {
        if (error) {
            return res.status(500).send('Server error')
        }
        res.redirect('/')
    })
})
//渲染编辑页面
router.get('/edit', (req, res) => {
    // 1. 在客户端的列表页中处理链接问题（需要有 id 参数）
    // 2. 获取要编辑的学生 id
    // 
    // 3. 渲染编辑页面
    //    根据 id 把学生信息查出来
    //    使用模板引擎渲染页面

    // replace
    //    字符串模式
    //      简单，但是不支持全局和忽略大小写问题
    //    正则表达式模式
    //      强大，支持全局和忽略大小写
    Student.findById(req.query.id.replace(/"/g, ''), function (err, student) {
        if (err) {
            console.log(err)
            return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
            student: student
        })
    })
})
//处理编辑请求
router.post('/edit', (req, res) => {
    // 1. 获取表单数据
    //    req.body
    // 2. 更新
    //    Student.updateById()
    // 3. 发送响应
    var id = req.body.id.replace(/"/g, '')
    Student.findByIdAndUpdate(id, req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
})
//处理删除请求
router.get('/delete', (req, res) => {
    let id=req.query.id.replace(/"/g,"");
    Student.findByIdAndRemove(id,(error)=>{
        if(error){
            return res.status(500).send('Server error')
        }
        res.redirect('/')
    })
})

//导出router
module.exports = router