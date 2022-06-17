const express = require("express");
const path = require("path");
const app = express();
const port = 9000;

const static_path = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");
app.set('view engine', 'hbs');
app.set('views', templatePath);
//app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
});