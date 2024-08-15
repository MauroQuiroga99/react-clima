import { Weather } from "../types";
import { formatTemperature } from "../utils";
import "../index.css";

type WeatherDetailProps = {
  weather: Weather;
};

const WeatherDetail = ({ weather }: WeatherDetailProps) => {
  return (
    <div className=" bg-white text-center borde-2 rounded-md p-4 stroke-text-form text-2xl font-bold ">
      <h2 className="text-2xl font-bold mb-5 text-black ">
        {" "}
        Clima de: {weather.name}{" "}
      </h2>
      <p className="text-4xl m-0 mb-4">
        {" "}
        {formatTemperature(weather.main.temp)}&deg;C{" "}
      </p>
      <div className="flex beteen justify-center gap-20 ">
        <p className="text-black">
          Min :{""}{" "}
          <span className="text-white">
            {" "}
            {formatTemperature(weather.main.temp_min)}&deg;C{" "}
          </span>
        </p>
        <p className=" text-black">
          Max :{""}{" "}
          <span className="text-white">
            {formatTemperature(weather.main.temp_max)}&deg;C{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDetail;
