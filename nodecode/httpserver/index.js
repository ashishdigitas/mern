const http = require("http");

const server = http.createServer((req, res) =>{
 //console.log(req.url);
 if(req.url == "/")
 {
    res.end('Hello from home responce');
 }else if(req.url == "/contact"){
    res.end('Hello from contact responce');
 }
 
});
server.listen(8000,"127.0.0.1", () =>{
    console.log("listening to the port");
});