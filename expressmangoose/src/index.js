const mongoose = require("mongoose");
//creating database 
mongoose.connect("mongodb://localhost:27017/techchanell").then(() => console.log("Connection successful")).catch((err) => console.log(err));

//creating schema for table
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

//creating model 
const Playlist = new mongoose.model("Playlist", playlistSchema);

//inserting data in table
const createDocument = async() => {
        try {
            const reactPlayList = new Playlist({
                name: "React JS",
                ctype: "Front End",
                videos: 60,
                author: "Ashis vns",
                active: true
            })
            const result = await reactPlayList.save(); //save single record
            //const result = await reactPlayList.insertMany([method name]);//
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }
    //Uncomment only when you want to insert records 
    //createDocument();
const getDocument = async() => {
    const result = await Playlist.find();
    console.log(result);
}
getDocument();