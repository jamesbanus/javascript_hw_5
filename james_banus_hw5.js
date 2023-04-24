// Use axios to get weather data from the API I showed at the start of the lesson
// Wrap the axios call in an async function
// Use await before the axios call
// Destructure the response to get the { data } part of the response
// Console.log the weather data (this will show you completed the above)

const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=51.56&lon=0.59&appid=00a0e24c382d99a4f8f0ff918ab98b3e";

async function weather() {
  const { data } = await axios.get(apiURL);
  console.log(data);
}

weather();
