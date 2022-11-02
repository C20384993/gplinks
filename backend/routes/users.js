const express = require('express')
const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')

//Create an instance of the Express router
const router = express.Router()

//Routes

//GET all users
router.get('/', getUsers)

//GET single user
router.get('/:id', getUser)

//POST new user
router.post('/', createUser)

//DELETE user
router.delete('/:id', deleteUser)

//UPDATE user
router.patch('/:id', updateUser)

//Export the router with all of its routes.
module.exports = router