const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

//Create a JWT Token for authentication
//SECRET is the key used by the server for hashing the token.
//expiresIn sets the amount of time the user is logged in for to 5 days. After that, he is logged out.
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '5d'})
}

//GET all users
const getUsers = async (req, res) => {
    const user = await User.find({}).sort({createdAt: -1})

    res.status(200).json(user)
}

//GET single user
const getUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid()) {
        return res.status(404).json({error: 'User not found'})
    }
    
    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: 'User not found'})
    }

    res.status(200).json(user)
}

//Login a user
const loginUser = async (req, res) => {
    const {username, password} = req.body

    //Try to login using the username and password from the req.body
    try {
        const user = await User.login(username, password)

        //Create a token using the user object that was just made
        const token = createToken(user._id)

        res.status(200).json({username, token})
    } 
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Singup a user/ Create user
const signupUser = async (req, res) => {
    const {username, password} = req.body
    try{
        const user = await User.signup(username, password) //Call the static method from userModel.js

        //Create a token using the user object that was just made
        const token = createToken(user._id)

        res.status(200).json({username, token}) //Return the username and token of user we're creating account for.
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}




//DELETE user
const deleteUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'User could not be found'})
    }

    const user = await User.findOneAndDelete({_id: id})
    
    if (!user) {
        return res.status(400).json({error: 'User could not be found'})
    }

    res.status(200).json(User)
}



//UPDATE user
/*const updateUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'User could not be found'})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user) {
        return res.status(400).json({error: 'User could not be found'})
    }

    res.status(200).json(user)
} */


module.exports = {getUsers, getUser, loginUser, signupUser, deleteUser}