const mongoose = require("mongoose");

//setting up the schema

const usersSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})
const tasklistSchema = mongoose.Schema({
    task:{
        type:String,
        require:true
    },
    user:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    }
})
//setting up the model
const userList = mongoose.model("users",usersSchema);
const taskList = mongoose.model("tasklists", tasklistSchema);

module.exports = {
    userList,taskList
};
