import axios from "axios";
import { SearchType, Weather } from "../types";
import { useState } from "react";

export default function useWeather() {
  const [weather, setWeather] = useState<Weather>({
    name: "",
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
  });
  const fetchWeather = async (search: SearchType) => {
    const addId = import.meta.env.VITE_API_KEY;
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${addId}`;
      const { data } = await axios(geoUrl);

      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${addId}`;
      const { data: weatherResult } = await axios<Weather>(weatherUrl);
      setWeather({
        name: weatherResult.name,
        main: {
          temp: weatherResult.main.temp,
          temp_max: weatherResult.main.temp_max,
          temp_min: weatherResult.main.temp_min,
        },
      });

      console.log(lat);
      console.log(lon);
    } catch (error) {}
  };
  return {
    weather,
    fetchWeather,
  };
}
