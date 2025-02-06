const express = require('express');

const app = express();

app.use("/user", (req, res) => {
	res.send("HAHAHAHA");
});

app.get("/user", (req, res) => {
	res.send({firstName: "Karthik", lastName: "Poojari"});
});

app.use("/hello", (req, res) => {
	res.send("Hello hello hello!");
});

app.post("/user", (req, res) => {
	res.send("Data saved successfully");
});

app.delete("/user", (req, res) => {
	res.send("User data is deleted successfully");
})

app.use("/", (req, res) => {
	res.send("Namaste from the dashboard!");
});

app.use("/test", (req, res) => {
	res.send("Hello from the test!");
});

app.listen(7777, () => {
	console.log("Server is successfully running on the port 7777...");
});