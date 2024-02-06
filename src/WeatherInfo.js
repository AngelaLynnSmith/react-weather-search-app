import React from "react";
import "./App.css";
import "./index.css";


const WeatherInfo = ({ weatherData }) => {
	return (
		<div>
			<h2>{weatherData.name}</h2>
			<p>Temperature: {Math.round(weatherData.main.temp)}°F</p>
			<p>Humidity: {weatherData.main.humidity}%</p>
			<p>Wind: {Math.round(weatherData.wind.speed)} mph</p>
		</div>
	);
};
export default WeatherInfo;