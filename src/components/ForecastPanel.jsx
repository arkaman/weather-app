import ForecastCard from "./ForecastCard";

const ForecastPanel = ({ forecast }) => {
    if (!forecast || forecast.length === 0) return null;

    return (
        <section className="flex flex-col items-center">
            <h2 className="text-white text-lg font-semibold mb-4 text-center">
                5-Day Forecast
            </h2>

            <div className="overflow-x-auto w-full pb-6">
                <div className="flex justify-center gap-4 px-2 sm:px-4 w-full">
                    {forecast.map((item) => (
                        <ForecastCard
                            key={`${item.day}-${item.icon}`}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForecastPanel;
