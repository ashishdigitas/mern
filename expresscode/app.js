const express = require('express');

const app = express();
app.get("/", (req, res) => {
    res.send("Hello welcome to express");
});
app.get("/about", (req, res) => {
    res.send("Hello welcome from about page");
});
app.get("/info", (req, res) => {
    res.send({
        id: 1,
        name: "ashish",
    });
});
app.listen(5000, () => {
    console.log("Listing the post at 5000");
});