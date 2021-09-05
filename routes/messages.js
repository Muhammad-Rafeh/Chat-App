const express = require('express');
const router = express.Router();

const MessageImport = require('../models/Message');
const Message = MessageImport.Message ;



router.post('/',(req,res)=>{
    const newMessage = new Message({
        room : req.body.room,
        user_id : req.body.user_id,
        message_line : req.body.message_line,
        created_at : Date.now()
    })

    newMessage.save().then( message => res.json(message)).catch(err => res.json(err));

}) 

router.get('/all',(req,res)=>{
    Message.find({}).then(messages => res.json(messages));
})

router.get('/:id',(req,res)=>{
    Message.find({room:req.params.id}).then(messages => res.json(messages)).catch(err => res.json(err));
})

router.delete('/',(req,res)=>{
    Message.find({}).then( resp => res.json(resp));
})


module.exports = router ;