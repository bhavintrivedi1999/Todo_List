const express = require("express");
// const {userList,taskList} = require("../mongoose/models/requests.js");

//setting up the request router
const router = express.Router();
const users = ['Bhavin','Ronak','Mayank'];
const tasklist = [{task:'Running',user:'Mayank',state:'ToDo'},
{task:'Singing',user:'Bhavin',state:'ToDo'},
{task:'GYM',user:'Ronak',state:'ToDo'},
{task:'Coding',user:'Mayank',state:'InProgress'},
{task:'Learning',user:'Bhavin',state:'InProgress'},
{task:'Reading',user:'Ronak',state:'InProgress'},
{task:'Skipping',user:'Mayank',state:'Done'},
{task:'Lunch',user:'Bhavin',state:'Done'},
{task:'Walking',user:'Ronak',state:'Done'}];

router.post('/getData',(req,res)=>{
    const {userName} = req.body;
    let todo,InProgress,done;
    //user's todo data
    //user's in-progres data
    //user's done data
    
    res.send({todo,InProgress,done});
});

module.exports = router;
