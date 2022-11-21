const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const reqAuth = async (req, res, next) => {
    
    //Get authorisation headers
    const { authorization } = req.headers //Used to verify authentication

    if(!authorization) {
        return res.status(401).json({error: 'Token for authorisation is required.'})
    }

    //Get the token from the authorisation header using the split method.
    const token = authorization.split(' ')[1]

    //Get the id from the token.
    try{
        //Verify the token, pass it in, and return the _id.
        const {_id} = jwt.verify(token, process.env.SECRET)

        //Find the user in the database using the id found from the token.
        req.user = await User.findOne({ _id }).select('_id')
        //User is found so now it will go to the called function.
        next()

    } catch (error) {
        //If the token could not be verified.
        console.log(error)
        res.status(401).json({error: 'Request not authorised'})

    }
} 

module.exports = reqAuth