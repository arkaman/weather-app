const API_KEY = import.meta.env.VITE_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCity = async (city) => {
    const res = await fetch(
        `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
        throw new Error("City not found");
    }
    return res.json();
}

export const getForecastByCity = async (city) => {
    const res = await fetch(
        `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
        throw new Error("Forecast not found");
    }

    return res.json();
};

export const getWeatherByCoords = async (lat, lon) => {
    const res = await fetch(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
        throw new Error("Unable to fetch weather");
    }

    return res.json();
};

export const getForecastByCoords = async (lat, lon) => {
    const res = await fetch(
        `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
        throw new Error("Unable to fetch forecast");
    }

    return res.json();
};