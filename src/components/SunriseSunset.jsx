import { toCityDate } from "../utils/time";
import { Sunrise, Sunset } from "lucide-react";

const SunriseSunset = ({ weather }) => {
    const { sys, timezone } = weather || {};
    if (!sys?.sunrise || !sys?.sunset || timezone == null) return null;

    const sunrise = toCityDate(sys.sunrise, timezone);
    const sunset = toCityDate(sys.sunset, timezone);

    const format = (date) =>
        date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

    return (
        <section className="w-full h-32 rounded-3xl shadow-xl overflow-hidden text-white relative">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex justify-between items-center px-6">
                <div className="flex flex-col space-y-1">
                    <p className="flex items-center gap-2 uppercase tracking-wider text-xs opacity-80 leading-none">
                        <Sunrise aria-hidden className="w-4 h-4 sm:w-5 sm:h-5" /> Sunrise
                    </p>
                    <time dateTime={sunrise.toISOString()} className="text-2xl font-light">
                        {format(sunrise)}
                    </time>
                </div>

                <div className="w-px h-10 bg-white/20" />

                <div className="flex flex-col items-end space-y-1 text-right">
                    <p className="flex items-center gap-2 uppercase tracking-wider text-xs opacity-80 leading-none">
                        <Sunset aria-hidden className="w-4 h-4 sm:w-5 sm:h-5" /> Sunset
                    </p>
                    <time dateTime={sunset.toISOString()} className="text-2xl font-light">
                        {format(sunset)}
                    </time>
                </div>
            </div>
        </section>
    );
};

export default SunriseSunset;
