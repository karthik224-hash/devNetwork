Ep-03:
- Create repo
- Initialize the repo
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependencies.
- What is the use of "-g" while npm install
- Difference between (^ vs ~)

Ep-04:
- Initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Why should we push lock-json and .json also?
- Play with routes and route extensions ex: '/hello', '/', 'hello/2'
- Order of the routes matters a lot.
- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PUT, DELETE API Calls and test them on Postman
- Explore routing and use of ?, +, (), * in routes.
- Use of regex in routes /a/ /.*fly$/
- Reading the query params in the routes.
- Reading the dynamic routes.

Ep-05:
- Multiple Route Handlers - Play with Code.
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3], rH4, rH5)
- What is middlewares? Why do we need it?
- How express JS bascially handles requests behind the scenes.
- Difference between app.use and app.all
- Write a dummy auth middleware for admin
- Wrie a dummy auth middleware for all user routes, expect /user/login
- Error Handling using app.use("/", (err, req, res, next))

Ep-06:
- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install mongoose library
- Connect your application to the database "Connection-url"/devNetwork
- Call the connectDB function and connect to database before starting application on 7777
- Create a userSchema & user Model
- Create /signup API to add data to database
- Push few documents using API calls from postman
- Error handling using try catch block

Ep-07:
- JS object vs JSON (Difference)
- Add the express.json middleware to your app
- Make sure signup API dynamic to receive data from the end user.
- User.findOne with duplicate email ids, which object returned.
- API - Get user by email
- API - Feed API - Get /feed - get all the users from the database
- API - Get user by ID
- Create a delete user API
- Difference between PATCH and PUT
- API - Update a user 
- Explore the Mongoose Documentation for Model methods
- What are options in a Model.findOneAndUpdate method, explore more about it.
- API - Update the user with email ID

Ep-08:
- Explore schema type options from the documentation
- Explore required, unique, lowercase, min, minLength, trim
- Add default
- Create a custom validate function for gender,
- Improve the DB schema - PUT all appropriate validations on each field in schema
- Add timestamps to the user schema
- Add API level validations on Patch request and Signup post API
- DATA Sanitizing - Add API validation for each field
- Install validator
- Explore validator library functions and use validator funcs for password, email
- Never Trust req.body

Ep-09
- Validate data in Signup API
- Install bcrypt package.
- Create a passwordHash using bcrypt.hash and save the user is encrypted password.
- Create login API
- Compare passwords and throw errors if email or password is invalid.

Ep-10
- install cookie-parser
- just send a dummy cookie to user
- create GET /profile API and check if you get the cookie back
- install jsonwebtoken
- In Login API, after email and password validation, create a JWT token and send it to user in cookie
- Read the cookie inside your profile API and find the logged in user.
- userAuth Middleware
- Add userAuth middleware in profile API and new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days.
- Create userSchema method to getJWT()
- Create userSchema method to comparepassword(passwordInputByUser)

Ep-11
- Explore tinder APIs
- Create a lists of all APIs you can think of in devNetwork.
- Group multiple routes under respective routers.
- Read documentation for express.router.
- Create Routes folder for managing auth, profile, request routers
- Create authRouter, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/passoword API => forgot password API
- Make you validate all the data in every POST, PATCH apis