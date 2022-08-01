const mongoose = require('mongoose');
const eventeSchema = mongoose.Schema({


    name: String,
    description: String,
    date: String,


    place: String,
    prix: String,
})
const evente = mongoose.model('Evente', eventeSchema);
module.exports = evente;