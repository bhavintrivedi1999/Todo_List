const express = require("express");
// const {userList,taskList} = require("../mongoose/models/requests");

//setting up the request router
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('insid get');
});
router.post('/',(req,res)=>{
    res.send('inside post');
});
router.get('/home',(req,res)=>{
    res.send('insid home');
});
module.exports = router;
