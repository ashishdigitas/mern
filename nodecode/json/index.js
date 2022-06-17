const fs = require('fs');
const bioData = {
    name : "Ashish",
    age : 34,
    post : "Software Developer",
};
const jsonData = JSON.stringify(bioData);

//console.log(jsonData); convert object to JSON
// const objData = JSON.parse(jsonData);
// console.log(objData); converted JSON to object
//fs.writeFile('myjson.json', jsonData, (err) =>{
  //  console.log("done");
//});

fs.readFile("myjson.json","utf-8",(err, data) =>{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})
