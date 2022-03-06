var express = require("express");

var app = express();

app.get("/home", (request, response) => {
    response.sendFile(__dirname + "/01同源策略.html");
});
app.get("/data", (request, response) => {
    response.send("同源策略");
})
app.listen(9000, () => {
    console.log("服务正在启动，9000端口启动完毕!")
})