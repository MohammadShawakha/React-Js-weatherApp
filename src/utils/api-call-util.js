const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?";
const apiKey = import.meta.env.ENV_API_KEY;

async function apiCall(coords) {
  const res = await fetch(
    `${baseUrl}lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${apiKey}`
  );

  return res.json();
}

export { apiCall };

/*   setLocation(jsonData.city);

        setDays(
          Map.groupBy(jsonData.list, (stamp) => {
            return new Date(stamp.dt * 1000).getDate();
          })
        );*/
