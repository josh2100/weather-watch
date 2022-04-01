const getCurrentWeatherData = async (cityQuery) => {
  let cityApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityQuery}&appid=cdda6b75856c86ce1bea221c999009fa&units=imperial`;
  let latitude;
  let longitude;

  // Make a request to the url
  //   fetch(cityApi)
  //     .then(function (response) {
  //       // If request was successful
  //       if (response.ok) {
  //         response.json().then(function (data) {
  //           // Set latitude
  //           latitude = data.city.coord.lat;
  //           // Set longitude
  //           longitude = data.city.coord.lon;
  //           // Update city name and today's date
  //           // cityNameEl.textContent = `${data.city.name} ${buildDate(0)}`;
  //           // Save successful search
  //           // saveRecentSearches();
  //           // displayRecentSearches();
  //           // getOneCallData();
  //           console.log("latitude",latitude);
  //           return latitude;
  //         });
  //       } else {
  //         alert("Error: " + response.statusText);
  //       }
  //     })
  //     .catch(function () {
  //       alert("Unable to connect");
  //     });
  ///////////////////

  try {
    const currentWeather = await fetch(cityApi);
    const jsonCurrentWeather = await currentWeather.json();
    console.log(jsonCurrentWeather);
    return jsonCurrentWeather;
  } catch (error) {
    throw error;
  }
};

export default getCurrentWeatherData;
