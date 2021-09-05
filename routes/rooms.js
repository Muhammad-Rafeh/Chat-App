const express = require('express');
const router = express.Router();
const url =  require('url');
// const UserSchema = require('../models/User');
const Room = require('../models/Room');

//const MessageImport = require('.models/Message.js');
// Message = MessageImport.Message;

//get all rooms
router.get('/all',(req,res)=>{
    Room.find({})
    .then(aquiredRoom => res.json(aquiredRoom));
})

//get all rooms a single user is in

router.get('/inRooms/:id',(req,res)=>{

    //Room.find({"users" : { user_id : "6069dc96bebaf70af89ee54d" }}).then(aquiredRooms => res.json(aquiredRooms)).catch(err=>res.json(err));
    Room.find({ "users.user_id": req.params.id },
    (error , success) => {
        if(error){
            res.json(error);
        }else{
            res.json(success);
            //console.log(success);
        }
    })
})

//get a Room
router.get('/:id',(req,res)=>{
    Room.findById({_id:req.params.id})
    .then(aquiredRoom => res.json(aquiredRoom));
})

//create A new Room
router.post('/new',(req,res)=>{
    const newRoom = new Room({
        name: req.body.name,
        topic: req.body.topic,
        users: [{user_id:req.body.firstUser},{user_id:req.body.newChatUser}],
        //messages: [],
        created_at: Date.now(),
        updated_at: Date.now()
    });
    newRoom.save().then(rooms => res.json(rooms)).catch(err => res.json(err));
})


//add user to room
router.post('/adduser/:id',(req,res)=>{

    const userToBeAdded ={
        user_id : req.body.user_id
    }
   
    Room.findOneAndUpdate({ _id : req.params.id } , { $push : { users : userToBeAdded } },
        (error , success) => {
            if(error){
                res.json(error);
            }else{
                res.json(success);
            }
        } )
})

//add new message to room 

router.post('/addmessage/:id',(req,res)=>{
    //let requiredRoom = Room.findById({_id:req.query.idOfRoom});

    const messageToBeAdded = {
        room:req.params.id,// req.params.id,
        user_id : req.body.user_id,
        message_line: req.body.message_line,
        created_at: Date.now()
    }
    console.log("sadd")
    // requiredRoom.messages.push(messageToBeAdded);
    // requiredRoom.save();
 
    Room.findByIdAndUpdate({_id: req.params.id}, { $push : { messages : messageToBeAdded } },
        (error , success) => {
            if(error){
                res.json(error);
                console.log(error);
            }else{
                res.json(success);
            }
        }
    )
})



router.delete('/',(req,res)=>{
    Room.deleteMany({}).then(del=>res.json(del)).catch(err => res.json(err));
})

router.delete('/:id',(req,res)=>{
    Room.deleteMany({_id:req.params.id}).then(del=>res.json(del)).catch(err => res.json(err));
})

// router.get('/',(req,res)=>{

//     //let idOfUser = req.query.idOfUser;
//     //  Room.find({idOfUser: req.query.idOfUser})
//     Room.find({ idOfUser: '5ff89d587ea70016d4583156'})
//     .sort({date:-1 })
//     .then(rooms=>res.json(rooms))
// })

// router.post('/',(req,res)=>{           //?idOfUser
//     const newRoom = new Room({
//          idOfUser: req.body.idOfUser,
//          rooms:[{
//              nameOfChatter:req.body.nameOfChatter,
//              idOfChatter: req.body.idOfChatter,
//              date: Date.now()
//          }]
//     })
//     newRoom.save().then(rooms => res.json(rooms));
// })

// router.put('/update',(req,res)=>{
//     roomi = {
//         nameOfChatter:req.body.nameOfChatter,
//         idOfChatter: req.body.idOfChatter,
//         date: Date.now()
//     }

    

//     Room.findOneAndUpdate({idOfUser: req.query.idOfUser}
//                             ,{rooms:roomi},{ "new": true, "upsert": true },                   //,
//                             function (error, success) {
//                                 if (error) {
//                                     console.log(error);
//                                 } else {
//                                     console.log(success);
//                                 }
//                             }).then(rooms => res.json(rooms))

//     // Room.find({idOfUser: req.query.idOfUser}).findOneAndUpdate({rooms:[{idOfChatter:req.body.idOfChatter}]}
//     //     ,{rooms:roomi},{new:true,
//     //             upsert:true}).then(rooms => res.json(rooms))
// // })
// // router.post('/:id',(req,res)=>{
// //     const newRoom = new Room({
// //         nameOfChatter : req.body.nameOfChatter,
// //         idOfChatter : req.body.idOfChatter
// //     })
// //     newRoom.save().then(room=>res.json(room))

//  })

//  router.post('/update',(req,res)=>{
//     roomi = {
//         nameOfChatter:req.body.nameOfChatter,
//         idOfChatter: req.body.idOfChatter,
//         date: Date.now()
//     }
//     Room.find({idOfUser: req.query.idOfUser}).findOneAndUpdate({rooms:[{idOfChatter:req.body.idOfChatter}]}
//         ,{rooms:roomi},{new:true,
//                 upsert:true}).then(rooms => res.json(rooms))

// })

// router.delete('/',(req,res)=>{
//     let stringOfUserId = "5ff89d587ea70016d4583156"
//     Room.deleteMany({idOfUser:stringOfUserId}).then(del=>res.json(del)).catch(err => res.json(err)); //.deleteMany({idOfUser:"5ff89d587ea70016d4583156"})
// })

module.exports = router;