$('#weather-btn').click(function() {
	// Get the value from #city-in
	const city = $('#city-in').val();

	$.getJSON('http://api.openweathermap.org/data/2.5/weather', 
	{
		appid: '84bee75ccc48d73cd18de3a8c2d85c8e',
		q: city,
		// zip: '07306,us',
		units: 'imperial',
	},
	function(data) {
		console.log(data);

		// The main weather (i.e. "Drizzle")
		console.log(data.weather[0].main);
		$('#weather-out').text(data.weather[0].main);

		// The temperature (in Fahrenheit or Celsius)
		console.log(data.main.temp);
		$('#temp-out').text(data.main.temp);

		// The humidity
		console.log(data.main.humidity);
		$('#humidity-out').text(data.main.humidity);

		// The wind speed
		console.log(data.wind.speed);
		$('#wind-out').text(data.wind.speed);

		// Get the icon code from the data
		// Turn into a URL
		// Replace the icon src
		$('#icon').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
	});
});


