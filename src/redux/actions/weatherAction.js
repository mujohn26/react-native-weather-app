import axios from "axios";

export const GET_WEATHER_DATA_SUCCESS = "GET_WEATHER_DATA_SUCCESS";
export const GET_WEATHER_DATA_FAILURE = "GET_WEATHER_DATA_SUCCESS";
import * as Location from 'expo-location';
import { API_KEY } from "@env";
import { isSameDay, format } from "date-fns";



// fetch api with axios
const url = "https://api.openweathermap.org/data/2.5";

const callAPI = axios.create({
  baseURL: url,
  timeout: 1000,
});
export const getWeather = () => async (dispatch) => {
  try {
    Location.requestPermissionsAsync();
    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    const lat= location.coords.latitude;
    const lng = location.coords.longitude 
    const endpoint = `/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`;
    const res = await callAPI.get(endpoint);
    const data = filterData(res.data);
    const currentWeather = data.list.filter((day) => {
      const now = new Date().getTime() + Math.abs(data.timezone * 1000);
      const currentDate = new Date(day.dt * 1000);
      return isSameDay(now, currentDate);  
  });
  dispatch(getWeatherSuccess({data:data,weather:currentWeather[0]}));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getWeatherFailure(errorMessage));
  }
};


export function getWeatherSuccess({data,weather}) {
  return {
    type: GET_WEATHER_DATA_SUCCESS,
    payload: data,
    weather: weather

  };
}
export function getWeatherFailure(data) {
  return {
    type: GET_WEATHER_DATA_FAILURE,
    successMessage: data,
  };
}

const filterData = (rawData) => {
  return {
    id: rawData.city.id,
    name: rawData.city.name,
    country: rawData.city.country,
    timezone: rawData.city.timezone,
    coord: {
      lat: rawData.city.coord.lat,
      lon: rawData.city.coord.lon,
    },
    list: rawData.list,
  };
};