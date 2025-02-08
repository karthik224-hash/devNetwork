const mongoose = require('mongoose');

const connectDB = async() => {
	await mongoose.connect(
		"mongodb+srv://DevNetwork:Karthik%40327@nodejs.m35io.mongodb.net/devNetwork"
	);
};

module.exports = connectDB;