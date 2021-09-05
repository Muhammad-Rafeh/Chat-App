const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const UserSchema = require('./User.js');

//const MessageSchema = require('./Message.js');

//Schema for all the Chats a single user is having 

const RoomSchema = new Schema({
    name: { type: String, lowercase: true},//, unique: true 
    topic: {type:String},
    users: [{user_id:{type:String,sparse:true}}],
   // messages:{type: [MessageSchema.MessageSchema],sparse:true},//[MessageSchema.MessageSchema,{sparse:true}],
    created_at: {type: Date},
    updated_at: { type: Date, default: Date.now }
    
})

module.exports = Room = mongoose.model('room' , RoomSchema);