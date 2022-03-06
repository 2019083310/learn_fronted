let express=require('express')
let app=express()
app.get('/students',(req,res)=>{
    console.log(req.query)
})
app.listen(8000,()=>{
    console.log('8000端口启动完毕')
})