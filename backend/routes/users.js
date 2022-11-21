const express = require('express')
const { getUsers, loginUser, signupUser, deleteUser } = require('../controllers/userController')

//Create an instance of the Express router
const router = express.Router()

//Routes

router.get('/', getUsers)

//Login user
router.post('/login', loginUser)

//Signup new user
router.post('/signup', signupUser)

//DELETE user
router.delete('/:id', deleteUser)

//Export the router with all of its routes.
module.exports = router