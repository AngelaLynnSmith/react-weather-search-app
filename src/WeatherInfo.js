import React from "react";
import "./App.css";

const WeatherInfo = ({ weatherData }) => {
	return (
		<div>
			<h2>
				{weatherData.name}, {weatherData.sys.country}
			</h2>
			<p>Temperature: {weatherData.main.temp}°F</p>
			<p>Humidity: {weatherData.main.humidity}%</p>
			<p>Wind: {weatherData.wind.speed} m/s</p>
		</div>
	);
};

export default WeatherInfo;
