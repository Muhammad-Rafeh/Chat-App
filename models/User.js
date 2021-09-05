const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema of Single User
 const UserSchema = new Schema({
            username: { type: String, lowercase: true, unique: true },
            email: { type: String, lowercase: true, unique: true },
            password: {type: String},
            is_active: { type: Boolean, default: false }
        })

        User = mongoose.model('user' , UserSchema);

module.exports = {
    User: User,
    UserSchema: UserSchema
}