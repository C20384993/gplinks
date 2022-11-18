const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Create a new schema, pass in an object that defines the schema
//Schema defines the structure of a document,
//Model applies the schema to a particular model and then the model is
//used to interact with a collection of that name.
const doctorSchema = new Schema({
    doctorName: {
        type: String,
        required: true,
        unique: true
    },
    practice: {
        type: String,
        required: true
    },
    doctorQualification: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Doctor', doctorSchema)