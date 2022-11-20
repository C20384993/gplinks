Frontend npm installs:
npm install express
npm install mongoose
npm install bcrypt
npm install validator
npm install bootstrap

Backend npm installs:
npm install express
npm install mongoose
npm install react-router-dom
npm install -g nodemon
npm install dotenv

npm install jsonwebtoken


Technologies used:
Node
Express (npm install express)

MongoDB: No SQL database.

MongoDB Atlas: Sets up a MongoDB online with all configurations done and hosts it.
(Username: Admin, Password: gplinks2022, 
Connection string: mongodb+srv://Admin:<password>@gplinksproject.v9r6nb7.mongodb.net/?retryWrites=true&w=majority)

Mongoose: ODM(Object Data Modeling), acts as a frontend to MongoDB by allowing methods to be used on the database. Also allows
stricter controls to be placed on the DB with models and schemas. Provides more structure than MongoDB would have by itself.
(npm install mongoose)

React:
React Packages:
npm install react-router-dom: Allows different pages to be added to the react app.

POSTman (for checking POST, DELETE routes and requests, https://www.postman.com/downloads/)

nodemon (npm install -g nodemon, nodemon filename.js, re-runs the file for you if you make changes)

dotenv  (npm install dotenv, used to load environment variables from the .env file into the process.env object)

npm run dev: run this from /backend to start up the server.

node.js filename: run a file
backend/server.js: Entry file for backend application. Where the Express is registered.
backend/package.json: Keeps track of dependencies and registers custom scripts.
backend/.env: Used to store environment variables. Environment variables allow sensitive info, such as connections, to remain hidden
	      even if the project is uploaded to Github. It's used for security. The .env file will be added to gitignore.
	      Use this command: npm install dotenv

backend/routes: holds .js files that contain routes for interacting with the database.
backend/routes/users.js: Contains the route functions for dealing with user info in the database 
			 (e.g. ADD, GET, UPDATE, DELETE users), All user routes go in this file.
			 This file uses the express router.

backend/models: stores the .js model files. These are the how data/documents will be stored and structured in the database.
backend/models/userModel.js: The schema for users on the website.

backend/controllers/userController.js: Stores the functionality for route handling in users.js. users.js will call the functions
					from userController.js. For clarity and management.


frontend/src/pages: stores all page components for the website.
frontend/src/components: stores all react components.






AUTHENTICATION
npm install bcrypt: backend, used to hash user passwords
npm install validator: backend, provides standard checks/validations instead of having to write them out.

JWT Web tokens: The authentication method used for this project.
npm install jsonwebtoken (from backend)

TO GET DOCTORS TO SHOW FOR INDIVIDUAL USERS:
add this line to the doctors/prescriptions/etc routes
workouts.js T 14, 11:50
} = require('../controllers/workoutController')
const reqAuth = require('../middleware/reqAuth') *** THIS LINE

const router = express.Router()

router.use(reqAuth) *** AND THIS LINE