import axios from "axios";
import { SearchType } from "../types";

export default function useWeather() {
  const fetchWeather = async (search: SearchType) => {
    const addId = "0f0baaf1c4aaa36f590394a9fb1cabe5";
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${addId}`;

      const { data } = await axios(geoUrl);
      console.log(data);
    } catch (error) {}
  };
  return {
    fetchWeather,
  };
}
