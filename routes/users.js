const express = require('express');
const router = express.Router();

const UserImport = require('../models/User');
const User = UserImport.User

router.get('/all',(req,res)=>{
    User.find()
    .sort({date:-1})
    .then(users=>res.json(users))
})

router.get('/email/',(req,res)=>{
    User.findOne({email : req.query.email})
    .then(user=>res.json(user))
})

//to get user from username
router.get('/',(req,res)=>{
    User.findOne({username : req.query.username})
    .then(user=>res.json(user))
})



router.post('/',(req,res)=>{
    const newUser = new User({
        username : req.body.username,
        email: req.body.email,
        password: req.body.password,
        is_active: req.body.is_active
    })
    newUser.save().then(users=>res.json(users))
})



module.exports = router ;