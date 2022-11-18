const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

//Create a new schema, pass in an object that defines the schema
//Schema defines the structure of a document,
//Model applies the schema to a particular model and then the model is
//used to interact with a collection of that name.
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//Static method, signs up the user and hashes their password
//Cannot use arrow function because "this" keyword is used.
userSchema.statics.signup = async function(username, password) {

    //Check that all fields are filled.
    if(!username || !password) {
        throw Error('Please fill out all fields.')
    }

    const exists = await this.findOne({ username }) //Additional check to see if username is taken.

    if(exists) {
        throw Error('This username is taken')
    }

    //Hash passwords so they aren't stored as plaintext.
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ username, password: hash}) //Create the user.

    return user
}

//Static method, Logs the user into his account
//Must be a regular function, not an arrow function, in order to reference the model itself.
userSchema.statics.login = async function(username, password) {
    //Check all fields have actually been filled out.
    if(!username || !password) {
        throw Error('Please fill all fields.')
    }

    //Find the user based on the username entered
    const user = await this.findOne({ username })

    if(!user) {
        throw Error('Invalid username')
    }

    //Compares the hashed password(user.password) to the entered plain text one(password) 
    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Invalid password entered')
    }

    //If user details are entered correctly, return that user.
    return user
}

module.exports = mongoose.model('User', userSchema)