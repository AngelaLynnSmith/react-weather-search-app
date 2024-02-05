import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

const Weather = () => {
	let [city, setCity] = useState("");
	let [weatherData, setWeatherData] = useState(null);

	const getWeather = async () => {
	    let key = `ca0db41e2e878c74a1dfc7ffece370d4`;  
		let response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
		);
		setWeatherData(response.data);
	};

	return (
		<div>
			<h1>Weather React Search Engine</h1>
			<input
				type="text"
				placeholder="Enter a city..."
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<button onClick={getWeather}>Search</button>

			{weatherData && <WeatherInfo weatherData={weatherData} />}
		</div>
	);
};

export default Weather;
