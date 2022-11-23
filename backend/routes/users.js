const express = require('express')
const { getUsers, getUser, loginUser, signupUser, deleteUser } = require('../controllers/userController')

//Create an instance of the Express router
const router = express.Router()

//Routes

router.get('/', getUsers)

router.get('/:id', getUser)

//Login user
router.post('/login', loginUser)

//Signup new user
router.post('/signup', signupUser)

//DELETE user
router.delete('/del/:id', deleteUser)

//Export the router with all of its routes.
module.exports = router