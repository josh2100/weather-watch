export const getCurrentWeatherData = async (cityQuery) => {
  let cityApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityQuery}&appid=cdda6b75856c86ce1bea221c999009fa&units=imperial`;
  //           // Save successful search
  //           // saveRecentSearches();
  //           // displayRecentSearches();

  try {
    const data = await fetch(cityApi);
    const currentWeather = data.json();
    return currentWeather;
  } catch (error) {
    throw error;
  }
};

export const getOneCallData = async (latitude, longitude) => {
  let oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=cdda6b75856c86ce1bea221c999009fa`;

  try {
    const data = await fetch(oneCallApi);
    const oneCallWeather = data.json();
    console.log(oneCallWeather);
    return oneCallWeather;
  } catch (error) {
    throw error;
  }

  // Make a request to the url
  // fetch(oneCallApi)
  //   .then(function (response) {
  //     // Request was successful
  //     if (response.ok) {
  //       response.json().then(function (data) {
  //         // Insert Current Weather Data
  //         let currentIcon = data.current.weather[0].icon;
  //         currentWeatherIconEl.innerHTML = `<img src='http://openweathermap.org/img/wn/${currentIcon}.png'/>`;
  //         currentTempEl.textContent = `Current Temp: ${data.current.temp} °F`;
  //         currentWindEl.textContent = `Wind: ${data.current.wind_speed} MPH`;
  //         currentHumidityEl.textContent = `Humidity: ${data.current.humidity}%`;
  //         currentUviEl.textContent = `UV Index: ${data.current.uvi} `;

  //         // Clear previous color classes
  //         uviColor.classList.remove(
  //           "bg-success",
  //           "back-yellow",
  //           "back-orange",
  //           "bg-danger",
  //           "back-violet"
  //         );
  //         // Check UV severity and indicate with respective color
  //         if (data.current.uvi < 3) {
  //           uviColor.classList.add("bg-success");
  //           uviColor.textContent = "Low";
  //         } else if (data.current.uvi >= 3 && data.current.uvi < 6) {
  //           uviColor.classList.add("back-yellow");
  //           uviColor.textContent = "Moderate";
  //         } else if (data.current.uvi >= 6 && data.current.uvi < 8) {
  //           uviColor.classList.add("back-orange");
  //           uviColor.textContent = "High";
  //         } else if (data.current.uvi >= 8 && data.current.uvi < 11) {
  //           uviColor.classList.add("bg-danger");
  //           uviColor.textContent = "Very High";
  //         } else {
  //           uviColor.classList.add("back-violet");
  //           uviColor.textContent = "Extreme";
  //         }

  //         // Insert weather data for 5 day forecast
  //         for (let day = 0; day < 5; day++) {
  //           let icon = data.daily[day].weather[0].icon;

  //           document.querySelector(
  //             `#day${day} div:nth-child(2)`
  //           ).innerHTML = `<img src='http://openweathermap.org/img/wn/${icon}.png'/>`;

  //           document.querySelector(
  //             `#day${day} div:nth-child(3)`
  //           ).textContent = `Temp: ${Math.round(data.daily[day].temp.day)} °F`;

  //           document.querySelector(
  //             `#day${day} div:nth-child(4)`
  //           ).textContent = `Wind: ${Math.round(
  //             data.daily[day].wind_speed
  //           )} MPH`;

  //           document.querySelector(
  //             `#day${day} div:nth-child(5)`
  //           ).textContent = `Humidity: ${Math.round(
  //             data.daily[day].humidity
  //           )}%`;
  //         }
  //       });
  //     } else {
  //       alert("Error: " + response.statusText);
  //     }
  //   })
  //   .catch(function () {
  //     alert("Unable to connect");
  //   });
};
