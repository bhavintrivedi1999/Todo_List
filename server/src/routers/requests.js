const express = require("express");
const {userList,taskList} = require("../mongoose/models/requests");
let user;

//setting up the request router
const router = express.Router();
// const users = ['Bhavin','Ronak','Mayank'];
// const tasklist = [{task:'Running',user:'Mayank',state:'ToDo'},
// {task:'Singing',user:'Bhavin',state:'ToDo'},
// {task:'GYM',user:'Ronak',state:'ToDo'},
// {task:'Coding',user:'Mayank',state:'InProgress'},
// {task:'Learning',user:'Bhavin',state:'InProgress'},
// {task:'Reading',user:'Ronak',state:'InProgress'},
// {task:'Skipping',user:'Mayank',state:'Done'},
// {task:'Lunch',user:'Bhavin',state:'Done'},
// {task:'Walking',user:'Ronak',state:'Done'}];
// Middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
    if (user) {
        console.log('did not fail');
      next();
    } else {
      console.log('inside fail authentication');
      res.status(403).send({msg:'auth fail'});
    //   res.redirect('/signin'); // Redirect to the login page if not authenticated
    }
  };

router.post('/getData',(req,res)=>{
    const {userName} = req.body;
    let todo,InProgress,done;
    //user's todo data
    //user's in-progres data
    //user's done data
    
    res.send({todo,InProgress,done});
});

router.get('/home',authenticateUser,async(req,res)=>{
    try {
        res.send('inside home...');
    } catch (error) {
        res.status(400).send('error while fetching home...');
    }
});

router.get('/peers',authenticateUser,async(req,res)=>{
    try {
        res.send('inside peers...');
    } catch (error) {
        res.status(400).send('error while fetching home...');
    }
});

router.post('/signup',async(req,res)=>{
    try {
        await userList.create(req.body);
        res.send('user created');
    } catch (error) {
        res.status(400).send({error:error.message});
    }
});

router.post('/signin',async(req,res)=>{
    try {
        const data = await userList.findOne({email:req.body.email});
        if(data && data.password===req.body.password){
            user=data.name;
            res.send('User login successfully...');
        }else{
            throw({message:'invalid credentials'});
        }
    } catch (error) {
        res.status(400).send({error:error.message});
    }
});

router.post('/logout',async(req,res)=>{
    try {
        user=false;
        res.status(200).send('logout successfully');
    } catch (error) {
        res.status(400).send('error');
    }
});
router.get('/session-test',async(req,res)=>{
    try {
        req.session={user:'mayank',password:'mayank123'}
        console.log({session:req.session});
        res.send('inside session');
    } catch (error) {
        res.send({error:error.message});
    }
})

router.get('/getUsers',async(req,res)=>{
    try {
        const data = await userList.find();
        res.status(200).send(data);
    } catch (error) {
        res.send({error:error.message});
    }
});

router.post('/addUser',async(req,res)=>{
    try {
        await userList.create({name:'Mayank',email:'mayank@email.com',password:'mayank123'});
        await userList.create({name:'Bhavin',email:'bhavin@email.com',password:'bhavin123'});
        await userList.create({name:'Ronak',email:'ronak@email.com',password:'ronak123'});
        res.send('users has created successfully');
    } catch (error) {
        res.status(400).send({error:error.message});
    }
});

router.post('/addTask',async(req,res)=>{
    try {
        await taskList.create({task:'Running',user:'Mayank',state:'ToDo'});
        await taskList.create({task:'Coding',user:'Mayank',state:'InProgress'});
        await taskList.create({task:'Reading',user:'Mayank',state:'Done'});
        res.status(200).send('task added');
    } catch (error) {
        res.send({error:error.message});
    }
});
router.get('/getTask',async(req,res)=>{
    try {
        const data = await taskList.find();
        res.send(data);
    } catch (error) {
        res.status(400).send({error:error.message});
    }
});
module.exports = router;
