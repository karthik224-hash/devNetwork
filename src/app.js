const express = require('express');

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
	console.log(req.params);
	res.send({firstName: "Karthik", lastName: "Poojari"});
});

app.listen(7777, () => {
	console.log("Server is successfully running on the port 7777...");
});