const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

//Create a JWT Token for authentication
//SECRET is the key used by the server for hashing the token.
//expiresIn sets the amount of time the user is logged in for to 3 days. After that, he is logged out.
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

//GET all users
//Note: can change property to get specific results.
//e.g. .find({ username: "TestUser1" })
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}



//GET single user
const getUser = async (req, res) => {
    const { id } = await User.findById(id) //id is retrieved from the request object.

    //Check id value is valid.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'User not found.'})
    }

    //If user was not found.
    if (!workout) {
        return res.status(404).json({error: 'User not found.'})
    }

    res.status(200).json(user)
}

//Login a user
const loginUser = async (req, res) => {
    const {username, password} = req.body

    //Try to login using the username and password from the req.body
    try {
        const user = await User.loginUser(username, password)

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
        const user = await User.signupUser(username, password)

        //Create a token using the user object that was just made
        const token = createToken(user._id)

        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

/*
//POST/Create new user
const createUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.create({username, password}) //const user stores the created document and id.
        res.status(200).json(user) //Return status 200 to indicate no errors.
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
*/



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
const updateUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'User could not be found'})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({error: 'User could not be found'})
    }

    res.status(200).json(user)
}


module.exports = {
    getUsers,
    getUser,
    loginUser,
    signupUser,
    deleteUser,
    updateUser
}