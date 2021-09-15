const { Schema, model } = require('mongoose')

const noteSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
},  {
    timeStamps: true
})

//esto crea una nueva colección en la DB

module.exports = model('Note', noteSchema);







