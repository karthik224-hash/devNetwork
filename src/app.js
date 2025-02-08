const express = require('express');
const connectDB = require('./config/database');
const { adminAuth, userAuth } = require('./middlewares/auth');
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async(req, res) => {
	// Creating a new instance of the User Model.
	const user = new User(req.body);
	try {
		await user.save();
		res.send("User added successfully!");
	} catch(err) {
		res.status(400).send("Error saving the user:" + err.message);
	}
	
})


connectDB()
	.then(() => {
		console.log("Database connection is established...");
		app.listen(7777, () => {
			console.log("Server is successfully running on the port 7777...");
		});
	}).catch((err) => {
		console.error("Database cannot be connected!!");
	});


