let express = require('express')
let mongoose = require('mongoose')
//创建数据库
mongoose.connect('mongodb://localhost:27017/test_1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//定义集合
// let Cat = mongoose.model('Cat', {
//     name: String
// });
//添加数据
// let kitty = new Cat({
//     name: 'liu',
//     age:50
// });
//保存成功提示
// kitty.save().then(() => {
//     console.log('meow')
// });
//引用架构对象
let Schema = mongoose.Schema;
//设计集合结构以及约束
let catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type:Number,
        required:true
    }
})
//创建集合并引用集合结构和约束
let Cat=mongoose.model('Cat',catSchema);

//添加数据
// let kitty2=new Cat({name:'yang',age:22});
// kitty2.save();

//修改数据
Cat.findByIdAndUpdate({_id:'6154267c9256f94680f3cf1a'},{name:'liuyang',gender:'男'},(err,ret)=>{
    if(err){
        console.log('数据修改失败');
    }else{
        console.log(ret);
    }
})
Cat.findByIdAndUpdate({_id:'6154279ea4bb8c9c4bcc7293'},{name:'liuyang',gender:'男'},(err,ret)=>{
    if(err){
        console.log('数据修改失败');
    }else{
        console.log(ret);
    }
})
