const adminAuth = (req, res, next) => {
	const token = "xyzabdcd";
	const isAdminAuthorized = token === "xyzabdcd";
	if (!isAdminAuthorized) {
		res.status(401).send("Unathorized request");
	} else {
		next();
	}
};

const userAuth = (req, res, next) => {
	const token = "xyzabdcd";
	const isAdminAuthorized = token === "xyzabdcd";
	if (!isAdminAuthorized) {
		res.status(401).send("Unathorized request");
	} else {
		next();
	}
};

module.exports = {
	adminAuth,
	userAuth
};