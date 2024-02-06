import React from "react";
import Weather from "./Weather";

const App = () => {
	return (
		<div>
			<Weather />
			<br></br>
			<br></br>
			<footer>
				This project was coded by{" "}
				<a
					rel="noreferrer"
					href="https://github.com/AngelaLynnSmith"
					target="_blank">
					Angela Lynn Smith,
				</a>{" "}
				is open-sourced on{" "}
				<a
					rel="noreferrer"
					href="https://github.com/AngelaLynnSmith/react-weather-search-app"
					target="_blank">
					GitHub,
				</a>{" "}
				and is hosted on{" "}
				<a
					rel="noreferrer"
					href="https://react-weather-search-app-2024.netlify.app/"
					target="_blank">
					{" "}
					Netlify.
				</a>
			</footer>
		</div>
	);
};

export default App;
