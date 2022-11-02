const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Create a new schema, pass in an object that defines the schema
//Schema defines the structure of a document,
//Model applies the schema to a particular model and then the model is
//used to interact with a collection of that name.
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)