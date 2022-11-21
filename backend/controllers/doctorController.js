const Doctor = require('../models/doctorModel')
const mongoose = require('mongoose')

//GET all doctors
const getDoctors = async (req, res) => {
    const user_id = req.user._id

    const doctors = await Doctor.find({ user_id }).sort({createdAt: -1})

    res.status(200).json(doctors)
}



//GET single doctor
const getDoctor = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid()) {
        return res.status(404).json({error: 'Doctor not found'})
    }
    
    const doctor = await Doctor.findById(id)

    if (!doctor) {
        return res.status(404).json({error: 'Doctor not found'})
    }

    res.status(200).json(doctor)
}

//POST/Create new doctor
const createDoctor = async (req, res) => {
    const {doctorName, practice, doctorQualification} = req.body

    let emptyFields = []

    if(!doctorName) {
        emptyFields.push('doctorName')
    }
    if(!practice) {
        emptyFields.push('practice')
    }
    if(!doctorQualification) {
        emptyFields.push('doctorQualification')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'All fields must be filled', emptyFields })
    }

    try {
        const user_id = req.user._id
        const doctor = await Doctor.create({doctorName, practice, doctorQualification, user_id}) //const doctor stores the created document and id.
        res.status(200).json(doctor) //Return status 200 to indicate no errors.
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//DELETE doctor
const deleteDoctor = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Doctor could not be found'})
    }

    const doctor = await Doctor.findOneAndDelete({_id: id})
    
    if (!doctor) {
        return res.status(400).json({error: 'Doctor could not be found'})
    }

    res.status(200).json(Doctor)
}



//UPDATE doctor
const updateDoctor = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Doctor could not be found'})
    }

    const doctor = await Doctor.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!doctor) {
        return res.status(400).json({error: 'Doctor could not be found'})
    }

    res.status(200).json(doctor)
}


module.exports = {
    getDoctors,
    getDoctor,
    createDoctor,
    deleteDoctor,
    updateDoctor
}