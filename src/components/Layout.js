import React,{useState} from "react";
import LocationForm from "./LocationForm";
import WeatherList from "./WeatherList";

const Layout = () => {

    const [show, setShow] = useState(false)
    const [data, setData] = useState(null)

    const onFormSubmit = (data) => {
        setData(data)
        setShow(true)
    }
  return (
    <>
      <header>Weather App</header>
      {!show? <LocationForm onFormSubmit={onFormSubmit} /> : <WeatherList data={data} />}      
    </>
  );
};

export default Layout;
