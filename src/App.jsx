import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Input from "./components/Input";
import LocationAndTime from "./components/LocationAndTime";
import SunriseSunset from "./components/SunriseSunset";
import ForecastPanel from "./components/ForecastPanel";
import { getWeatherByCity, getForecastByCity } from "./services/weatherApi";
import { formatForecast } from "./utils/forecastUtils";
import { getDayPhase } from "./utils/dayNightUtils";
import EmptyState from "./components/EmptyState";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setError("");
      const weatherData = await getWeatherByCity(city);
      const forecastData = await getForecastByCity(city);

      setWeather(weatherData);
      setForecast(formatForecast(forecastData.list, weatherData.timezone));
    } catch (err) {
      setError(err.message);
    }
  };

  const dayPhase = getDayPhase(weather); // "day" | "night"

  return (
    <div className="relative min-h-screen w-full font-primary">
      {/* Night background */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
          bg-linear-to-b from-black via-slate-950 to-indigo-950
          ${dayPhase === "night" ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Day background */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
          bg-linear-to-b from-indigo-500 via-sky-300 to-blue-200
          ${dayPhase === "day" ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* App content */}
      <div className="relative z-10 flex flex-col min-h-screen pt-6 md:pt-10 justify-between">
        {/* Search */}
        <div className="px-4 sm:px-6 lg:px-12">
          <Input onSearch={handleSearch} />
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>

        {/* Placeholder if no weather yet */}
        {!weather && !error && (
          <div className="flex-1 items-start px-4 sm:px-6">
            <EmptyState />
          </div>
        )}


        {/* Weather Info */}
        {weather && (
          <div
            className="
              flex flex-col lg:flex-row
              justify-center lg:justify-between
              items-center lg:items-stretch
              gap-6 px-4 sm:px-6 lg:px-12 mt-6
              mb-10 md:mb-16 lg:mb-0
            "
          >
            {/* WeatherCard */}
            <div className="w-full max-w-md md:max-w-xl min-h-full">
              <WeatherCard weather={weather} />
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-full max-w-md flex-1 lg:justify-between gap-6 md:max-w-xl">
              <LocationAndTime weather={weather} />
              <SunriseSunset weather={weather} />
            </div>
          </div>
        )}

        {/* Forecast */}
        {forecast.length > 0 && (
          <div className="px-4 sm:px-6 lg:px-12">
            <ForecastPanel forecast={forecast} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
