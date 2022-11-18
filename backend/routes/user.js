const express = require('express')
const { getUsers, loginUser, signupUser } = require('../controllers/userController')

//Create an instance of the Express router
const router = express.Router()

//Routes

router.get('/all', getUsers)

//Login user
router.post('/login', loginUser)

//Signup new user
router.post('/signup', signupUser)

//Export the router with all of its routes.
module.exports = router