import axios from "axios";
import { SearchType, Weather } from "../types";
import { useMemo, useState } from "react";

export default function useWeather() {
  const [weather, setWeather] = useState<Weather>({
    name: "",
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
  });

  const [loading, setLoading] = useState(false);

  const fetchWeather = async (search: SearchType) => {
    const addId = import.meta.env.VITE_API_KEY;
    setLoading(true);
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${addId}`;
      const { data } = await axios(geoUrl);

      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${addId}`;
      const { data: weatherResult } = await axios<Weather>(weatherUrl);
      setWeather(weatherResult);

      console.log(lat);
      console.log(lon);
      console.log(weatherResult);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const hasWeatherData = useMemo(() => weather.name, [weather]);

  return {
    weather,
    loading,
    fetchWeather,
    hasWeatherData,
  };
}
