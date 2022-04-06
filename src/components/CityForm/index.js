import { useState } from "react";
import { getCurrentWeatherData, getOneCallData } from "../../utils/weatherApi";
import dateBuilder from "../../utils/dateBuilder";

const CityForm = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [oneCallData, setOneCallData] = useState([]);
  const [inputText, setInputText] = useState([""]);

  const currentWeatherDisplay = () => {
    return (
      <section className="lint rounded text-center">
        <h2 id="cityName" className="lint text-center">
          {currentWeather.city.name} {dateBuilder(0)}
        </h2>
        <img
          src={`http://openweathermap.org/img/wn/${oneCallData.current.weather[0].icon}.png`}
          alt="weather icon"
        ></img>
        <div id="current-temp" className="lint">
          Current Temp: {oneCallData.current.temp} °F
        </div>
        <div id="current-wind" className="lint">
          Wind: {oneCallData.current.wind_speed} MPH
        </div>
        <div id="current-humidity" className="lint">
          Humidity: {oneCallData.current.humidity}%
        </div>
        <span id="current-uvi" className="">
          UV Index: {oneCallData.current.uvi}
        </span>
        <span id="uvi-color"></span>
      </section>
    );
  };

  const fiveDayForecast = () => {
    const fiveDays = [];

    for (let i = 0; i <= 5; i++) {
      fiveDays.push(
        <div
          key={i}
          className="
      col-11 col-sm-4 col-md-5 col-lg col-xl
      rounded
      baby-blue
      m-2
    "
        >
          <div>{dateBuilder(i + 1)}</div>
          <img
            src={`http://openweathermap.org/img/wn/${
              oneCallData.daily[i + 1].weather[0].icon
            }.png`}
            alt="weather icon"
          ></img>
          <div>Temp: {Math.round(oneCallData.daily[i + 1].temp.day)} °F</div>
          <div>Wind: {Math.round(oneCallData.daily[i + 1].wind_speed)} MPH</div>
          <div>Humidity: {Math.round(oneCallData.daily[i + 1].humidity)}%</div>
        </div>
      );
    }

    return fiveDays;
  };

  const handleSearch = async (event) => {
    try {
      // const data = await getCurrentWeatherData("minneapolis");
      const data = await getCurrentWeatherData(inputText);
      setCurrentWeather(data);

      const secondApiCall = await getOneCallData(
        data.city.coord.lat,
        data.city.coord.lon
      );
      setOneCallData(secondApiCall);
      console.log("oneCallData", oneCallData);
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <main className="row">
      {/* Left Side */}
      <div id="left-side" className="col-12 col-md-4 col-lg-3 mt-3 p-1">
        <form
          id="cityForm"
          action=""
          method="get"
          className="citySearch p-3 lint"j
          onSubmit={handleChange}
        >
          {/* <!-- Search for City  --> */}
          <div className="citySearch lint">
            <label htmlFor="search" className="lint">
              <h2 className="lint">Search for City</h2>
            </label>
            <input
              className="col-12 lint"
              type="text"
              name="name"
              id="name"
              required
              // placeholder="Minneapolis"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <div className="citySearch">
            <input
              className="col-12 baby-blue"
              type="submit"
              value="Search City"
              onClick={() => {
                handleSearch();
              }}
            />
          </div>
        </form>
        {/* <!-- Recent Search Buttons --> */}
        <div id="recent-searches" className="p-3">
          <p></p>
        </div>
      </div>

      {/* Right side */}
      {/* Check that both APIs have data before rendering */}
      {!currentWeather.city || !oneCallData.lat ? (
        <div>Nothing yet</div>
      ) : (
        <div className="col-12 col-md-8 col-lg-9 mt-3">
          {/* <button
            onClick={() => {
              testHandle();
            }}
          >
            Test OneCall
          </button> */}
          {currentWeatherDisplay()}
          {/* 5 day forecast */}
          <section className="container-fluid rounded">
            <div className="row mt-3 lint">
              <h2 id="" className="lint mx-auto">
                5 Day Forecast
              </h2>
              {fiveDayForecast()}
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default CityForm;
