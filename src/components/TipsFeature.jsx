import { useState } from "react";
import TipsDrawer from "./TipsDrawer";
import { getTodayForecast } from "../utils/tipsUtils";
import tipsIcon from "../assets/ai-tips.svg";

export default function TipsFeature({ weather, forecast }) {
    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(false);
    const API_URL = import.meta.env.VITE_API_BASE_URL;

    const openDrawer = () => {
        const drawer = document.getElementById("tips-drawer");
        if (drawer) drawer.checked = true;
    };

    const fetchTips = async () => {
        if (!weather || !forecast?.length) return;

        openDrawer();
        setLoading(true);

        try {
            const todayList = getTodayForecast(forecast, weather.timezone);

            if (!todayList?.length) {
                setTips(["No forecast data available for today."]);
                return;
            }

            const payload = {
                list: todayList.map(item => ({
                    dt_txt: item.dt_txt,
                    main: {
                        temp: item.main.temp,
                        humidity: item.main.humidity
                    },
                    weather: [
                        { description: item.weather?.[0]?.description || "Unknown" }
                    ],
                    wind: {
                        speed: item.wind?.speed ?? 0
                    }
                }))
            };

            const res = await fetch(`${API_URL}/api/weather/advice`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                let message = "Failed to fetch tips";
                try {
                    const err = await res.json();
                    message = err.error || message;
                } catch {
                    // backend sent non-JSON
                }
                throw new Error(message);
            }

            const data = await res.json();

            if (data.advice) {
                const formatted = data.advice
                    .split("\n")
                    .map(t => t.replace(/^- /, "").trim())
                    .filter(Boolean);

                setTips(formatted);
            } else {
                setTips(["No advice available right now."]);
            }

        } catch (err) {
            console.error(err);
            setTips([err.message || "Something broke. Even the AI gave up."]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <div className="tooltip tooltip-left" data-tip="Get AI-powered tips">
                    <button
                        className="btn btn-circle btn-primary shadow-lg"
                        onClick={fetchTips}
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="loading loading-spinner"></span>
                        ) : (
                            <img
                                src={tipsIcon}
                                alt="Tips"
                                className="w-6 h-6 object-contain"
                            />
                        )}
                    </button>
                </div>
            </div>

            <TipsDrawer tips={tips} loading={loading} />
        </>
    );
}