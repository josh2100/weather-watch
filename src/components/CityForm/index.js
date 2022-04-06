import { useState } from "react";
import {
  getCurrentWeatherData,
  getOneCallData,
} from "../../utils/weatherApi";
import dateBuilder from "../../utils/dateBuilder";

const CityForm = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [oneCallData, setOneCallData] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);

  const currentWeatherDisplay = () => {
    return (
      // <div>
      //   <p>
      //     OneCallData temp:
      //     {oneCallData.current.temp}
      //   </p>
      // </div>
      <section className="lint rounded text-center">
      <h2 id="cityName" className="lint text-center">{currentWeather.city.name} {dateBuilder(0)}</h2>
      <div id="current-weather-icon"></div>
      <div id="current-temp" className="lint">Current Temp: {oneCallData.current.temp} °F</div>
      <div id="current-wind" className="lint">Wind: {oneCallData.current.wind_speed} MPH</div>
      <div id="current-humidity" className="lint"></div>
      <span id="current-uvi" className=""></span>
      <span id="uvi-color"></span>
    </section>
    );
  };

  const handleSearch = async () => {
    try {
      const data = await getCurrentWeatherData("minneapolis");
      setCurrentWeather(data);

      const secondApiCall = await getOneCallData(
        data.city.coord.lat,
        data.city.coord.lon
      );
      setOneCallData(secondApiCall);
      setLatitude(data.city.coord.lat);
      setLongitude(data.city.coord.lon);
      console.log("oneCallData", oneCallData);
    } catch (error) {
      throw error;
    }
  };

  const testHandle = async () => {
    console.log("testHandle");
    getOneCallData(latitude, longitude);
  };

  return (
    <main className="row">
      {/* Left Side */}
      <div id="left-side" className="col-12 col-md-4 col-lg-3 mt-3 p-1">
        <form
          id="cityForm"
          action=""
          method="get"
          className="citySearch p-3 lint"
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
              placeholder="Minneapolis"
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

          {/* <p>City {currentWeather.city.name}</p>
          <p>
            Latitude:
            {latitude}
          </p>
          <p>
            Longitude:
            {longitude}
          </p> */}
          {/* <p>
            OneCallData temp:
            {oneCallData.current.temp}
          </p> */}
          {/* <button
            onClick={() => {
              testHandle();
            }}
          >
            Test OneCall
          </button> */}
          {currentWeatherDisplay()}
        </div>
      )}
    </main>
  );
};

export default CityForm;
