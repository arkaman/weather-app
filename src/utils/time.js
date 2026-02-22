export const toCityDate = (unixSeconds, timezone) => {
    if (unixSeconds == null || timezone == null) return null;

    // Base date from API (UTC)
    const date = new Date(unixSeconds * 1000);

    // Removing browser local offset
    const localOffsetMs = date.getTimezoneOffset() * 60 * 1000;

    // Applying city timezone
    return new Date(date.getTime() + localOffsetMs + timezone * 1000);
};
