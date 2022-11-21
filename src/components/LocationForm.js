import React, { useState } from "react";
import { getWeatherByCity, getWeatherByUserLocation } from "../utils/api";
import Button from "./common/Button";

function LocationForm({ onFormSubmit }) {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("")

  const onChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const getDeviceLocationHandler = async () => {
    const weatherByCurrentLocation = await getWeatherByUserLocation();
    if(!weatherByCurrentLocation.error){
      onFormSubmit(weatherByCurrentLocation);
    }
    setError(weatherByCurrentLocation.error.message);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const weatherByCity = await getWeatherByCity(location);
console.log("weatherByCity",weatherByCity);
      if(weatherByCity.response.status != 404){
        onFormSubmit(weatherByCity);
      }
      setError(weatherByCity.response.data.message)
    }
  };
  return (
    <section className="input-part ">
      {error && <p className="info-txt error">{error}</p>}
      <div className="content">
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={onChangeHandler}
          onKeyDown={handleKeyDown}
          required
        />
        <div className="separator"></div>
        <Button onClick={getDeviceLocationHandler} text="Get Device Location" />
      </div>
    </section>
  );
}

export default LocationForm;
