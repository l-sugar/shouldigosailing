let getAverageFromSources = sourcesArray => {
	if (sourcesArray.length == 1) {
		return sourcesArray[0].value;
	} else if (sourcesArray.length == 0) {
		throw "sources Array empty";
	} else {
		let sum = 0;
		sourcesArray.forEach(element => {
			sum += element.value;
		});
		let avg = sum / sourcesArray.length;
		return avg;
	}
};

module.exports = {
	getAverage: getAverageFromSources
};
