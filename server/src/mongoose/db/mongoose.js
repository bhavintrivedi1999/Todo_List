const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://root:Bhavin123@tasklistdb.godwenj.mongodb.net/?retryWrites=true&w=majority"
//connection to database
mongoose.connect('mongodb://localhost:27017/tasklistdb')
.then(()=>{
    console.log('connected to db');
});