import React from "react";
import clear from "../icons/clear.svg";
import storm from "../icons/storm.svg";
import snow from "../icons/snow.svg";
import haze from "../icons/haze.svg";
import cloud from "../icons/cloud.svg";
import rain from "../icons/rain.svg";

function WeatherList({ data }) {
    const city = data.name;
    const country = data.sys.country;
    const { description, id } = data.weather[0];
    const { temp, feels_like, humidity } = data.main;
    let logo;

    switch(true) {
      case id === 800:
        logo = clear
        break
      case id >= 200 && id <= 232:
        logo = storm;
        break;
      case id >= 600 && id <= 622:
        logo = snow;
        break;
      case id >= 701 && id <= 781:
        logo = haze;
        break;
      case id >= 801 && id <= 804:
        logo = cloud;
        break;
      case (id >= 500 && id <= 531) || (id >= 300 && id <= 321):
        logo = rain;
        break;
      default:
        console.log(id)
     }

  return (
    <>
      {data ? (
        <section className="weather-part">
          <img src={logo} alt="Weather Icon" />
          <div className="temp">
            <span className="numb">{Math.floor(temp)}</span>
            <span className="deg">°</span>C
          </div>
          <div className="weather">{description}</div>
          <div className="location">
            <i className="bx bx-map"></i>
            <span>{city}, {country}</span>
          </div>
          <div className="bottom-details">
            <div className="column feels">
              <i className="bx bxs-thermometer"></i>
              <div className="details">
                <div className="temp">
                  <span className="numb-2">{feels_like}</span>
                  <span className="deg">°</span>C
                </div>
                <p>Feels like</p>
              </div>
            </div>
            <div className="column humidity">
              <i className="bx bxs-droplet-half"></i>
              <div className="details">
                <span>{Math.floor(humidity)}%</span>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default WeatherList;
