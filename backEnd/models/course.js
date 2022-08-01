const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({


    name: String,

    description: String,
    prix: Number,
    place: Number,

})
const course = mongoose.model('Course', courseSchema);
module.exports = course;