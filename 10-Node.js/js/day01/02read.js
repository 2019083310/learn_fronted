let fs = require('fs');
fs.readFile('../source/hello.md', (error, data) => {
    if (error) {
        console.log('文件读取失败!');
    } else {
        console.log(data.toString());
    }
});
fs.writeFile('../source/write.md', '我是markdown', (error) => {
    if (error) {
        console.log('文件写入不成功!');
    } else {
        console.log('写入成功!');
    }
});
