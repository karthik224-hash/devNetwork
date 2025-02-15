const express = require('express');
const connectDB = require('./config/database');
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require('./utils/validations');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { userAuth } = require('./middlewares/auth');

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
	try {
		validateSignUpData(req);

		const { firstName, lastName, emailId, password } = req.body;

		const passwordHash = await bcrypt.hash(password, 10);

		const user = new User({
			firstName,
			lastName,
			emailId,
			password: passwordHash,
		});
		await user.save();
		res.send("User added successfully!");
	} catch (err) {
		res.status(400).send("Error saving the user:" + err.message);
	}
});

app.post("/login", async (req, res) => {
	try {
		const { emailId, password } = req.body;

		const user = await User.findOne({ emailId: emailId });
		if (!user) {
			throw new Error("EmailID is not present in DB");
		}
		const isPasswordValid = await user.validatePassword(password);
		if (isPasswordValid) {
			const token = await user.getJWT();

			res.cookie("token", token, {
				expires: new Date(Date.now() + 8 * 3600000)
			});
			res.send("Login Successfull!!!");
		} else {
			throw new Error("Invalid credentials");
		}
	} catch (err) {
		res.status(400).send("ERROR: " + err.message);
	}
})

app.get("/profile", userAuth, async (req, res) => {
	try {
		const user = req.user;
		res.send(user);
	} catch (err) {
		res.status(400).send("ERROR: " + err.message);
	}
})

app.post("/sendConnectionRequest", userAuth, async (req, res) => {
	// Sending a connection request
	const user = req.user;
	console.log("Sending a connection request");
	res.send(user.firstName + " has sent connection request");
})

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
app.patch("/user/:userId", async (req, res) => {
	const userId = req.params?.userId;
	const data = req.body;
	try {
		const ALLOWED_UPDATES = [
			"userId",
			"photoUrl",
			"about",
			"gender",
			"age",
			"skills",
		];
		const isUpdateAllowed = Object.keys(data).every((k) =>
			ALLOWED_UPDATES.includes(k)
		);
		if (!isUpdateAllowed) {
			throw new Error("Update is not allowed");
		}
		const user = await User.findByIdAndUpdate({ _id: userId }, data, {
			returnDocument: "after",
			runValidators: true,
		});
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


