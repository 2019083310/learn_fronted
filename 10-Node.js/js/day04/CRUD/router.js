/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */
let express = require('express');
let fs = require('fs');
const {
    listeners
} = require('process');
let router = express.Router();
let Students = require('./student');

// 2. 把路由都挂载到 router 路由容器中
//渲染学生列表页面
router.get('/', (req, res) => {
    Students.find(function (error, students) {
        if (error) {
            return res.status(500).send('Server error');
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: students
        })
    });
    // fs.readFile('./views/index.html',(error,data)=>{
    //     if(error){
    //         res.send('404 Not Found');
    //     }else{
    //         res.render('index.html',{
    //             fruits:[
    //                 '苹果',
    //                 '香蕉',
    //                 '橘子'
    //             ]
    //         });
    //     }
    // })
});
//渲染添加学生页面
router.get('/students/new', (req, res) => {
    res.render('new.html');
});
//处理添加学生
router.post('/students/new', (req, res) => {
    Students.save(req.body, function (error) {
        if (error) {
            return res.status(500).send('Server error');
        }
        res.redirect('/');
    })
});
//渲染编辑学生页面
router.get('/students/edit', (req, res) => {
    // 1. 在客户端的列表页中处理链接问题（需要有 id 参数）
    // 2. 获取要编辑的学生 id
    // 
    // 3. 渲染编辑页面
    //    根据 id 把学生信息查出来
    //    使用模板引擎渲染页面

    Students.findById(parseInt(req.query.id),function(error,student){
        if(error){
            return res.status(500).send('Server error')
        }
        res.render('edit.html',{
            student:student
        })
    })
});
//处理编辑学生
router.post('/students/edit', (req, res) => {
    //1.获取表单数据
    //2.更新
    //3.发送响应
    Students.updateById(req.body,function(error){
        if(error){
            return res.status(500).send('Server error.')
        }
        res.redirect('/');
    })
});
//处理删除学生
router.get('/students/delete', (req, res) => {
    Students.deleteById(req.query.id,function(error){
        if(error){
            return res.status(500).send('Server error.')
        }
        res.redirect('/');
    })
});
//把router导出
module.exports = router;