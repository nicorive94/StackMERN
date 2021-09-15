const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    userName: {type: String, required: true, trim: true, unique: true}
}, {
    timestamps: true
})

//esto crea una nueva colección en la DB

module.exports = model('User', userSchema);
