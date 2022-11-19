import React, {useState} from 'react'
import {getWeatherByCity,getWeatherByUserLocation} from '../utils/api'

function LocationForm({onFormSubmit}) {

    const[location, setLocation] = useState("")

    const onChangeHandler = (event) => {
        setLocation(event.target.value)
    }
sdfasfd
    const getDeviceLocationHandler = async() => {
      const weatherByCurrentLocation = await getWeatherByUserLocation();
      onFormSubmit(weatherByCurrentLocation)
    }


    const handleKeyDown = async(event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const weatherByCity = await getWeatherByCity(location);
        onFormSubmit(weatherByCity)
      }

    };
  return (
  
    <section className="input-part">
          <p className="info-txt"></p>
          <div className="content">
            <input 
            type="text" 
            placeholder="Enter city name"
            value={location}
            onChange={onChangeHandler}
            onKeyDown={handleKeyDown}
            required/>
            <div className="separator"></div>
            <button onClick={getDeviceLocationHandler}>Get Device Location</button>
          </div>
        </section>
  
  )
}

export default LocationForm