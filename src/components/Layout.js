import React,{useState} from "react";
import LocationForm from "./LocationForm";
import WeatherList from "./WeatherList";

const Layout = () => {

    const [isShow, setIsShow] = useState(false)
    const [data, setData] = useState(null)

    const onFormSubmit = (data) => {
        setData(data)
        setIsShow(true)
    }
  return (
    <>
      <header>Weather App</header>
      {!isShow? <LocationForm onFormSubmit={onFormSubmit} />:<WeatherList data={data} />}      
    </>
  );
};

export default Layout;
