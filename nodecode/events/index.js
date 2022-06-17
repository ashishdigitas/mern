//Events in node js

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("myFirstName", () => {
    console.log("Your first name is Ashish");
});
event.on("myFirstName", () => {
    console.log("Your middle name is Dhar");
});
event.on("myFirstName", () => {
    console.log("Your last name is Tripathi");
});
event.emit("myFirstName");