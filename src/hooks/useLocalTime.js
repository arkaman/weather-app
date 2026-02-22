import { useEffect, useState } from "react";

export const useLocalTime = (timezone) => {
    const getCityNow = (tz) => {
        if (tz == null) return null;

        const now = Date.now();
        const utc = now + new Date().getTimezoneOffset() * 60 * 1000;
        return new Date(utc + tz * 1000);
    };

    const [date, setDate] = useState(() => getCityNow(timezone));

    useEffect(() => {
        if (timezone == null) {
            setDate(null);
            return;
        }

        setDate(getCityNow(timezone));

        const interval = setInterval(() => {
            setDate(getCityNow(timezone));
        }, 1000);

        return () => clearInterval(interval);
    }, [timezone]);

    return date;
};
