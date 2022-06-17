//const chalk = require("chalk");
var validator = require("validator");

//console.log(chalk.blue("Hello node"));
var res = validator.isEmail('foo@bar.com');
console.log(res);
