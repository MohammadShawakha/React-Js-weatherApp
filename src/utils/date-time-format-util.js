function getformattedTime(dtTimeStamp) {
  const date = new Date(dtTimeStamp * 1000);

  const options = { timeStyle: "short", hour12: true };
  const timeString = date.toLocaleTimeString("en-US", options);

  return timeString;
}
export { getformattedTime };
