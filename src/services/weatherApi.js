const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export const getWeatherByCity = async (city) => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
        throw new Error("City not found");
    }
    return res.json();
}

export const getForecastByCity = async (city) => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
        throw new Error("Forecast not found");
    }

    return res.json();
};
