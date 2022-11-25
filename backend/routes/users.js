const express = require('express')
const { getUsers, getUser, loginUser, signupUser, deleteUser, updateUser } = require('../controllers/userController')

//Create an instance of the Express router
const router = express.Router()

//Routes

router.get('/', getUsers)

router.get('/:username', getUser)

//Login user
router.post('/login', loginUser)

//Signup new user
router.post('/signup', signupUser)

//DELETE user
router.delete('/del/:id', deleteUser)

//UPDATE user
router.patch('/update', updateUser)

//Export the router with all of its routes.
module.exports = router