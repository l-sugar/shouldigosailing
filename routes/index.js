const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
	res.send("Welcome Home");
	res.end();
});

router.get("/test-api", (req, res, next) => {
	let data =
		req.headers.authorization == "louis"
			? { result: "success" }
			: { result: "failure" };
	res.send(data);
});

module.exports = router;
