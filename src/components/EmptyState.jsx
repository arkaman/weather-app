import { Search } from "lucide-react";

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center
                    w-full max-w-xl mx-auto mt-16 px-6 py-12
                    rounded-3xl bg-white/10 backdrop-blur-md
                    border border-white/10 shadow-xl text-white">

            <Search className="w-10 h-10 mb-4 opacity-70" strokeWidth={2.5} />

            <h2 className="text-xl sm:text-2xl font-light tracking-wide">
                Search a city to explore the weather
            </h2>

            <p className="text-sm opacity-70 mt-2">
                Get current conditions, sunrise & sunset times, and forecasts.
            </p>
        </div>
    );
};

export default EmptyState;
