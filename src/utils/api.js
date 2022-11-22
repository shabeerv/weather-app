import axios from "axios";

const apiKey = "7f5e8d417a1d0e04f20ce63a795da51e";
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;

const getDeviceLocation = async () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  } else {
    alert("Your browser does not support geolocation api");
  }
};

export const getWeatherByCity = async (city) => {
  try{
    const res = await fetchWeather({ q: city });
    return res;
  } catch (error) {
      return {
        error:error.response.data.message
      }
  }
};

export const getWeatherByUserLocation = async () => {
 try {
  const query = await getDeviceLocation();
  const res = await fetchWeather({ lat: query.coords.latitude, lon: query.coords.longitude });
  return res;

 } catch (error) {
  return {
    error
  }
 }
};

const fetchWeather = async (query) => {
  try {
    const response = await axios.get(baseUrl, { params: query });
    return response.data;
  } catch (error) {
    return error;
  }
};
