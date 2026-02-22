import { Droplet, Eye, Thermometer, Wind } from "lucide-react";

const WeatherCard = ({ weather }) => {
    if (!weather?.main || !weather?.weather?.[0]) return null;

    const { main, weather: weatherInfo, wind, visibility } = weather;

    const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

    return (
        <section className="w-full max-w-md md:max-w-xl rounded-3xl shadow-xl overflow-hidden text-white bg-white/10 backdrop-blur-md p-4 sm:p-6 flex flex-col items-center md:items-start h-full">
            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-5xl md:text-6xl font-light">
                    {Math.round(main.temp)}
                    <span className="text-2xl md:text-3xl align-top">°C</span>
                </h1>

                <img
                    src={iconUrl}
                    alt={weatherInfo[0].description}
                    className="w-20 h-20 md:w-24 md:h-24 my-2"
                />

                <p className="text-2xl md:text-3xl capitalize text-center md:text-left">
                    {weatherInfo[0].description}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 w-full">
                <div>
                    <p className="flex items-center gap-1 text-sm sm:text-base">
                        <Thermometer aria-hidden className="w-4 h-4 sm:w-5 sm:h-5" />
                        Feels Like
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl">
                        {Math.round(main.feels_like)}°C
                    </p>

                    <p className="flex items-center gap-1 mt-2 text-sm sm:text-base">
                        <Wind aria-hidden className="w-4 h-4 sm:w-5 sm:h-5" />
                        Wind
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl">{Math.round(wind.speed)} m/s</p>
                </div>

                <div>
                    <p className="flex items-center gap-1 text-sm sm:text-base">
                        <Droplet aria-hidden className="w-4 h-4 sm:w-5 sm:h-5" />
                        Humidity
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl">{main.humidity}%</p>

                    <p className="flex items-center gap-1 mt-2 text-sm sm:text-base">
                        <Eye aria-hidden className="w-4 h-4 sm:w-5 sm:h-5" />
                        Visibility
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl">
                        {(visibility / 1000).toFixed(1)} km
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WeatherCard;
