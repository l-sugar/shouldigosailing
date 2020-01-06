const axios = require("axios");
const config = require("../../config");

const testParams = {
	lat: 9.675016,
	lng: 53.566708,
	params:
		"gust,precipitation,seaLevel,waterTemperature,waveDirection,waveHeight,windDirection,windSpeed",
	start: "2019-09-28T08:00:00+0000",
	end: "2019-09-29T18:00:00+0000"
};

const stormglassParams = {
	lat: this.lat,
	lng: this.lng,
	params:
		"gust,precipitation,seaLevel,waterTemperature,waveDirection,waveHeight,windDirection,windSpeed",
	start: this.start,
	end: this.end
};

let getWeather = async (lat, lng) => {
	try {
		// STORMGLASS_BASE_URL expects following params: lat, lng, params (which fields to include), start, end
		let data = await axios.get(config.STORMGLASS_BASE_URL_TEST, {
			params: testParams,
			headers: {
				Authorization: process.env.STORMGLASS_API_KEY
			}
		});
		return data;
	} catch (err) {
		console.error(err);
	}
};

module.exports = {
	getWeather: getWeather
};
