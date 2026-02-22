export const formatForecast = (list) => {
    if (!Array.isArray(list)) return [];

    const dailyMap = {};

    list.forEach(item => {
        const dt = item.dt;
        if (!dt) return;

        const dateKey = new Date(dt * 1000)
            .toISOString()
            .split("T")[0];

        if (!dailyMap[dateKey]) {
            dailyMap[dateKey] = {
                temps: [],
                icon: item.weather?.[0]?.icon || "01d",
                dt,
            };
        }

        if (item.main?.temp != null) {
            dailyMap[dateKey].temps.push(item.main.temp);
        }
    });

    return Object.values(dailyMap)
        .slice(0, 5)
        .map(data => ({
            day: new Date(data.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
            }),
            icon: data.icon,
            minTemp: Math.round(Math.min(...data.temps)),
            maxTemp: Math.round(Math.max(...data.temps)),
        }));
};
