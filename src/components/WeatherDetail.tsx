import { Weather } from "../types";

type WeatherDetailProps = {
  weather: Weather;
};

const WeatherDetail = ({ weather }: WeatherDetailProps) => {
  return (
    <div className="">
      <h2> Clima de: {weather.name} </h2>
      <p> Temperatura de:{weather.main.temp} </p>
    </div>
  );
};

export default WeatherDetail;
