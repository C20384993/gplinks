const express = require('express')
const {
    getDoctors,
    getDoctor,
    createDoctor,
    deleteDoctor,
    updateDoctor
} = require('../controllers/doctorController')

//Create an instance of the Express router
const router = express.Router()

//Routes

//GET all doctors
router.get('/', getDoctors)

//GET single doctor
router.get('/:id', getDoctor)

//POST doctor
router.post('/', createDoctor)

//DELETE doctor
router.delete('/:id', deleteDoctor)

//UPDATE doctor
router.patch('/:id', updateDoctor)

//Export the router with all of its routes.
module.exports = router