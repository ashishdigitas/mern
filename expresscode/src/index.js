const express = require("express");
const path = require("path");
const app = express();
const port = 6000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");

//To set view engine 
app.set('view engine', 'hbs');
app.set('views', templatePath);
//app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index", {
        userName: "Ashish"
    });

});

app.get("/about", (req, res) => {
    res.render("about");
});
app.get("*", (req, res) => {
    res.render("hello from express server");
});
app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});