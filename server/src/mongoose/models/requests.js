const mongoose = require("mongoose");

//setting up the schema

const usersSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
})
const tasklistSchema = mongoose.Schema({
    task:{
        type:String,
        require:true,
        trim:true,
    },
    user:{
        type:String,
        require:true,
        trim:true,
    },
    state:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
})
//setting up the model
const userList = mongoose.model("users",usersSchema);
const taskList = mongoose.model("tasklists", tasklistSchema);

module.exports = {
    userList,taskList
};
