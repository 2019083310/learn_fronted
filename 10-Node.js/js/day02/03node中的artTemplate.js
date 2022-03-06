let template=require('art-template');
let fs=require('fs');
fs.readFile('./05tpl.html',(error,data)=>{
    if(error){
        console.log('读取失败');
    }else{
        let ret=template.render(data.toString(),{
            name:'liuyang',
            age:21,
            province:'河北省',
            hobbies:['打代码','唱歌','打游戏']
        });
        console.log(ret);
    }
})