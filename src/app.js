const express = require('express');

const app = express();

app.use(
	"/user", 
	(req, res, next) => {
	//Route Handler
		console.log("Handling the route user!!");
		next();
		// res.send("Response!!");
	},
	(req, res, next) => {
		console.log("Handling the route user 2!!");
		// res.send("2nd Response!!");
		next();
	},
	(req, res, next) => {
		console.log("Handling the route user 3!!");
		next();
	},
	(req, res, next) => {
		console.log("Handling the route user 4!!");
		next();
	},
	(req, res, next) => {
		console.log("Handling the route user 5!!");
		res.send("5th Response!!");
	}
);

app.listen(7777, () => {
	console.log("Server is successfully running on the port 7777...");
});