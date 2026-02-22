import { Search } from "lucide-react";
import { useState } from "react";

const Input = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
        onSearch(city);
        setCity("");
    };

    return (
        <form role="search" onSubmit={handleSubmit} className="flex justify-center">
            <div className="flex w-full max-w-md items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-amber-50 shrink-0" />

                <input
                    type="text"
                    placeholder="Search city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="flex-1 bg-transparent text-sm sm:text-base text-gray-200 placeholder-gray-500 focus:outline-none min-w-0"
                />

                <button
                    type="submit"
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl cursor-pointer text-sm sm:text-base bg-indigo-500 text-white hover:bg-indigo-600 active:scale-95 transition shrink-0"
                >
                    Go
                </button>
            </div>

        </form>
    );
};

export default Input;
