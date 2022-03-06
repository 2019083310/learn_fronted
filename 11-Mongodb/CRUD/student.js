let mongoose = require('mongoose')
//连接数据库
mongoose.connect('mongodb://localhost:27017/test2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//规范模型结构和约束
let Schema=mongoose.Schema

let stuSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    hobbies:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:[0,1],
        default:0
    }
})

//创建模型并引入规范
module.exports=mongoose.model('Student',stuSchema)