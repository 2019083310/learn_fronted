let fs=require('fs');
fs.readdir('D:/wamp/www',(error,files)=>{
    if(error){
        console.log('404');
    }else{
        console.log(files);
        console.log(typeof files);
    }
})