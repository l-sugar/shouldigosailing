const express = require("express");
const _ = require("lodash");

const weatherService = require("../src/services/weatherService.js");
const sourcesAvg = require("../src/utils/getAverageValueFromMultipleSources.js");

const router = express.Router();

const lat = "53.5824";
const lng = "9.7137";

router.get("/weather", (req, res, next) => {
	weatherService
		.getWeather(lat, lng)
		.then(data => {
			let cleanData = {};
			console.log(data, typeof data);
			data.data.hours.forEach(element => {
				console.log(Object.entries(element));
			});
			let averageData = data.data.hours.forEach(element => {
				return sourcesAvg.getAverage(Object.values(element));
			});

			res.send(averageData);
		})
		.catch(err => console.error(err));
});

module.exports = router;
