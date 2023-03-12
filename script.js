let weather = {
	apiKey: "a3bfe1fd138d43c4981221505231203",
	fetchWeather: function (city) {
		fetch(
			"http://api.weatherapi.com/v1/current.json?key=" +
				this.apiKey +
				"&q=" +
				city +
				"&aqi=no"
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data));
	},
	displayWeather: function (data) {
		const { name } = data.location;
		const { icon } = data.current;
		const { temp_c, humidity, wind_kph } = data.current;
		console.log(name, icon, temp_c, humidity, wind_kph);
		document.querySelector(".city").innerHTML = "Weather in " + name;
		document.querySelector(".icon").src = icon;
		document.querySelector(".temp").innerHTML = temp_c + "°C";
	},
};
