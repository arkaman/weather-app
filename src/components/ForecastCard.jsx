const ForecastCard = ({ day, icon, minTemp, maxTemp, unit = '°C' }) => {
    if (!icon || minTemp == null || maxTemp == null) return null;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <article className="flex flex-col items-center justify-between bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg text-white min-w-22.5 sm:min-w-25">
            <p className="text-sm uppercase opacity-90">{day}</p>
            <img src={iconUrl} alt={`Weather forecast for ${day}`} className="w-12 h-12 my-2" />
            <p className="text-sm">
                <span className="font-medium">{minTemp}{unit}</span> / <span className="font-semibold">{maxTemp}°C</span>
            </p>
        </article>
    );
};

export default ForecastCard;
