const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');

const app = express();

app.get("/getUserData", (req, res) => {
	// Logic of DB call and get the user data
	throw new Error("dbkiisb");
	res.send("User Data Sent");
});

app.use("/", (err, req, res, next) => {
	if (err) {
		res.status(500).send("something went wrong");
	}
	/**
	 Use try and catch block also
	*/
});

app.listen(7777, () => {
	console.log("Server is successfully running on the port 7777...");
});