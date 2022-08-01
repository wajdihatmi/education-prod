const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    FirstName: String,
    lastName: String,
    email: String,
    pwd: String,
    cin: { type: String, unique: true },
    tel: Number,
});
userSchema.plugin(uniqueValidator);
const user = mongoose.model('User', userSchema);
module.exports = user;