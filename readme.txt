									      GP-Links	
							
								            Pair Project

							        Web Development and Deployment, CMPU 3047,

							                      Creators:
								     Ciaran MacDermott, C20384993
								     Mykolas Kubilius, C20321456
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Introduction
************

GP-Links is our submission for the Web Development and Deployment Pair project. The website's purpose is to allow the user to sign-up and add doctors and GPs to 
a personal area, and to also allow all users of the website to search through a list of doctors with a search bar. Doctors added to the database through this 
personal area will only appear for the user that added them. This allows the user to keep track of all his different GPs and to quickly see information about each one.
The personal area is only available for logged in users.

The website makes full use of the MERN stack. It uses:
. MongoDB as its database for storing user and doctor information.
. Express.js for creating the API and server of the website.
. React for a clean and fast frontend interface.
. Node.js for deploying the server and its API services.

The website also has a working login and authentication system through the use of JSON Web Tokens. It also includes the CRUD operations for each account. 
User's can:
. Create accounts.
. Read information about the account from the "My Profile" page.
. Update their password.
. Delete their account from the "My Profile" page.

The website also makes use of Bootstrap for various parts, such as the navbar and carousel image displays.

Our github for the project is linked here:

https://github.com/C20384993/gplinks






Requirements
*************

Frontend npm installs:
----------------------
npm install express 
Installs the express package

npm install mongoose
Used to create models for the Mongo Database. It acts as a frontend to MongoDB.

npm install bootstrap
Allows pre-made CSS and HTML elements to be used in our website.



Backend npm installs
---------------------
npm install express
Installs the express package

npm install react-router-dom
Allows different pages to be added to the React app.

npm install -g nodemon
Tool for the development of Node.js applications. It automatically restarts node applications when file changes are made.

npm install dotenv
Used to load variables from the .env file.

npm install bcrypt
Used to encrypt the passwords on the website so they aren't stored as plain text.

npm install validator
Used to ensure input is correct. Provides standard checks/validations instead of having to write them out.

npm install jsonwebtoken
Installs JSON Web Tokens (JWT). This is the method we used for authentication and checking the current user that is logged in.








Technologies used
*****************
MERN stack (MongoDB, Express.js, React, Node.js)

MongoDB Atlas: Sets up a Mongo Database online with all configurations done and hosts it.
(Username: Admin, Password: gplinks2022, Connection string: mongodb+srv://Admin:<password>@gplinksproject.v9r6nb7.mongodb.net/?retryWrites=true&w=majority)

Mongoose: ODM(Object Data Modeling), acts as a frontend to MongoDB by allowing methods to be used on the database. Also allows
stricter controls to be placed on the DB with models and schemas. Provides more structure than MongoDB would have by itself.

POSTman: Used for checking routes and requests outside of the application.

Visual Studio Code: Our code editor of choice for this project.





Deployment Instructions
***********************

Starting the backend server
---------------------------

1.) Change directory (cd) into the backend folder.

2.) If the node_modules folder is not present, run this command: "npm install"

3.) Run this command: "npm run dev" 
    "dev" is configured in the package.json to run the command "nodemon server.js"

4.) If the server starts up successfully, the terminal will display this message: "Connected, listening on port 4000"




Starting the React app
----------------------

1.) Change directory (cd) into the frontend folder.

2.) If the node_modules folder is not present, run this command: "npm install"

3.) Run this command: "npm start"
    This will start the React application.





 

Important Files
***************
backend/server.js: Entry file for backend application. Where the Express is registered.

backend/package.json: Keeps track of dependencies and registers custom scripts.

backend/.env: Used to store environment variables. Environment variables allow sensitive info, such as connections, to remain hidden
	      even if the project is uploaded to Github. It's used for security. The .env file will be added to gitignore.

backend/routes: holds .js files that contain routes for interacting with the database.

backend/routes/users.js: Contains the route functions for dealing with user info in the database
			 (e.g. ADD, GET, UPDATE, DELETE users), All user routes go in this file.
			 This file uses the express router.


backend/models: stores the .js model files. These are the how data/documents will be stored and structured in the database.

backend/models/userModel.js: The schema for users on the website.

backend/controllers/userController.js: Stores the functionality for route handling in users.js. The users.js file will call the functions
					from userController.js. For clarity and management.


frontend/src/pages: stores all page components for the website.

frontend/src/components: stores all react components.

