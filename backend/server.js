//Method for attaching environment variables to process.env
//process is a global object.
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose') //Can use mongoose object to connect to db.
const doctorRoutes = require('./routes/doctors') //Import the doctor routes.
const userRoutes = require('./routes/users') //Import the user routes
const parser = require('body-parser');
const urlencodedParser = parser.urlencoded({extended : false});


//Create the Express app
const app = express()

//Checks if any request that comes in has a body,
//and if it does passes and attaches it to the request object.
//This allows it to be accessed in the request handler.
//In the users.js routes: 
app.use(express.json())

//Log the requests coming in.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    next()
});

app.use(cors());
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(parser .json());
app.use(urlencodedParser)

//Route
//(route, const routes),
//When a request is sent to the route, the routes in the userRoutes file are used.
//e.g. route = /api/users, in users.js we have router.get('/hello', () => {})
//so when we go to '/api/users/hello', the '/hello' route in user.js runs.
app.use('/api/doctors', doctorRoutes)
app.use('/api/users', userRoutes)

app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
})

//Connect to the database using Mongoose
mongoose.connect(process.env.DB_URI)
    .then(() => {
        //Listen for requests on Port 4000 AFTER connecting to the db.
        app.listen(process.env.PORT, () => {
            console.log('Connected, listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

process.env