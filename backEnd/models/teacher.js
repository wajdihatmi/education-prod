const mongoose = require('mongoose');
const teacherSchema = mongoose.Schema({


    name: String,
    age: String,
    matiere: String,
    img: String

})
const teacher = mongoose.model('Teacher', teacherSchema);
module.exports = teacher;