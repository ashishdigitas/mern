const fs = require("fs");
//fs.writeFile('asyn.txt',"Today is awesome",
//(err) =>{
//console.log("File is created");
//});
fs.readFile("asyn.txt","UTF-8",(err ,data) =>{
console.log(data);
});
