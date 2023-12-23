const mongoose = require("mongoose");

//setting up the schema

const users = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    }
})
const tasklist = mongoose.Schema({
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
const userList = mongoose.model("userList",users);
const taskList = mongoose.model("taskList", tasklist);

module.exports = {
    userList,taskList
};
