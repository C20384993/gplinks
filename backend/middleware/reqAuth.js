const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const reqAuth = async (req, res, next) => {
    
    const { authorization } = req.headers //Used to verify authentication

    if(!authorization) {
        return res.status(401).json({error: 'Token for authorisation is required.'})
    }

    const token = authorization.split(' ')[1]

    try{
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id }).select('_id')
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request not authorised'})

    }
} 

module.exports = reqAuth