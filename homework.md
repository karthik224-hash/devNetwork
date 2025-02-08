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

