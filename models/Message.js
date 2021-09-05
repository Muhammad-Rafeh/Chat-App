const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const UserSchema = require('./User.js');

  const MessageSchema = new Schema({
            room : {type:String},
            user_id: {type : String},
            message_line: {type:String},
            created_at: { type: Date, default: Date.now }
        });

Message = mongoose.model('message' , MessageSchema);

module.exports = {
  Message : Message ,
  MessageSchema : MessageSchema
}
// module.exports = Message = 