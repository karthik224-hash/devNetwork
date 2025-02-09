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
});

//Get user by email
app.get("/user", async (req, res) => {
	const userEmail = req.body.emailId;
	try {
		const user = await User.findOne({ emailId: userEmail });
		if (user.length === 0) {
			res.status(404).send("User not found");
		} else {
			res.send(user);
		}
	} catch (err) {
		res.status(400).send("Something went wrong");
	}
});

// Feed API - GET / feed - get all the users from the database
app.get("/feed", async (req, res) => {
	try {
		const users = await User.find({});
		if (users.length === 0) {
			res.status(404).send("User not found");
		} else {
			res.send(users);
		}
	} catch (err) {
		res.status(400).send("Something went wrong");
	}
});

// Delete a user from the database
app.delete("/user", async (req, res) => {
	const userId = req.body.userId;
	try {
		//const user = await User.findByIdAndDelete({_id: userId});
		const user = await User.findByIdAndDelete(userId);
		res.send("User deleted successfully");
	} catch (err) {
		res.status(400).send("Something went wrong");
	}
});

// Update data of the user
app.patch("/user", async (req, res) => {
	const userId = req.body.userId;
	const data = req.body;
	try {
		const user = await User.findByIdAndUpdate({_id: userId}, data, {
			returnDocument: "after",
			runValidators: true,
		});
		console.log(user);
		res.send("User updated successfully");
	} catch (err) {
		res.status(400).send("UPDATE FAILED: " + err.message);
	}
});

connectDB()
	.then(() => {
		console.log("Database connection is established...");
		app.listen(7777, () => {
			console.log("Server is successfully running on the port 7777...");
		});
	}).catch((err) => {
		console.error("Database cannot be connected!!");
	});


