const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f4362ea57amsh266982efb35e195p16bb8ejsnb426c17d3e6a',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function fetchWeather() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

fetchWeather();
