/**
 * Get today's forecast entries based on city timezone
 */
export function getTodayForecast(list, timezoneOffsetSeconds) {
    if (!list?.length) return [];

    const now = new Date();

    const localTime = new Date(now.getTime() + timezoneOffsetSeconds * 1000);
    const today = localTime.toISOString().split("T")[0]; // YYYY-MM-DD

    return list.filter(item => item.dt_txt?.startsWith(today));
}