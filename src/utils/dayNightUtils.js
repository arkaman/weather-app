export const getDayPhase = (weather) => {
    if (
        !weather?.sys?.sunrise ||
        !weather?.sys?.sunset ||
        weather.timezone == null
    ) {
        return "day";
    }

    const nowUtc = Math.floor(Date.now() / 1000);

    const cityNow = nowUtc + weather.timezone;
    const citySunrise = weather.sys.sunrise + weather.timezone;
    const citySunset = weather.sys.sunset + weather.timezone;

    return cityNow >= citySunrise && cityNow < citySunset
        ? "day"
        : "night";
};
