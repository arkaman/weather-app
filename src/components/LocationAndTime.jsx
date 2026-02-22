import { MapPin } from "lucide-react";
import { useLocalTime } from "../hooks/useLocalTime";

const LocationAndTime = ({ weather }) => {
    const cityDate = useLocalTime(weather?.timezone);
    if (weather?.timezone == null || !cityDate) return null;

    const timeString = cityDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    const weekday = cityDate.toLocaleDateString("en-US", { weekday: "short" });
    const dateString = cityDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });

    const city = weather?.name;
    const country = weather?.sys?.country;

    return (
        <section className="w-full rounded-3xl shadow-xl overflow-hidden text-white bg-white/10 backdrop-blur-md px-4 py-4 sm:px-6 sm:py-6 lg:min-h-65 flex flex-col lg:justify-between">
            {/* Time */}
            <time
                dateTime={cityDate.toISOString()}
                className="text-3xl sm:text-4xl font-light tracking-tight text-right"
            >
                {timeString}
            </time>

            {/* Date & Location */}
            <div className="flex flex-col items-end text-right mt-2 space-y-1 sm:space-y-2">
                <p className="uppercase tracking-wider text-xs sm:text-sm opacity-90">
                    {weekday}
                </p>
                <p className="text-base sm:text-lg font-medium">{dateString}</p>

                {(city || country) && (
                    <p className="flex items-center gap-1 text-base sm:text-lg font-semibold">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                        {city}
                        {city && country ? ", " : ""}
                        {country}
                    </p>
                )}
            </div>
        </section>
    );
};

export default LocationAndTime;
