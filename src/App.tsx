import Form from "./components/Form";
import WeatherDetail from "./components/WeatherDetail";
import useWeather from "./hooks/useWeather";
import "./index.css";

function App() {
  const { fetchWeather, weather, hasWeatherData } = useWeather();

  return (
    <>
      <div className="bg-[url('/public/bg-on-clima.gif')] bg-no-repeat bg-cover h-lvh  ">
        <h1 className=" stroke-text text-center text-4xl text-black uppercase py-10 mb-10 font-bold ">
          Buscador De Clima
        </h1>
        <div className="w-11/12 max-w-screen-lg m-auto text-white mt-10 md:grid md:grid-cols-2 md:items-center md:gap-20 md:mt-6">
          <Form fetchWeather={fetchWeather} />
          {hasWeatherData && <WeatherDetail weather={weather} />}
        </div>
      </div>
    </>
  );
}

export default App;
