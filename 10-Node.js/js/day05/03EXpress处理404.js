// Express 对于没有设定的请求路径，默认会返回 Cat not get xxx
// 如果你想要定制这个 404
// 需要通过中间件来配置
// 咱们讲中间件的时候说一下如何处理

// 只需要在自己的路由之后增加一个
app.use(function (req, res) {
    // 所有未处理的请求路径都会跑到这里
    // 404
})