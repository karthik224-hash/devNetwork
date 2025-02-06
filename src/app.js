const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');

const app = express();

//Handle Auth Middleware for all GET, POST, .. requests
app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
	res.send("User logged in successfully!!");
})

app.use("/user", userAuth, (req, res) => {
	res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
	res.send("All Data Sent"); 
});

app.get("/admin/deleteAllData", (req, res) => {
	res.send("Deleted a user");
});

app.listen(7777, () => {
	console.log("Server is successfully running on the port 7777...");
});