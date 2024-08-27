import { useEffect, useState } from "react";
import "./App.css";
import { apiCall } from "./utils/api-call-util";
import { getGeolocation } from "./utils/geo-util";
import { getformattedTime } from "./utils/date-time-format-util";

function App() {
  const [location, setLocation] = useState("");
  const [days, setDays] = useState([]);
  const [table, setTable] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    const appData = await apiCall(await getGeolocation());
    setLocation(appData.city);

    const d = new Map();
    appData.list.forEach((stamp) => {
      const date = new Date(stamp.dt * 1000);
      if (!d.has(date.getDate())) {
        d.set(date.getDate(), new Array(8).fill(""));
      }
      d.get(date.getDate())[date.getHours() / 3] = stamp;
    });

    const temp = [];
    d.forEach((element, key) => {
      temp.push({ date: key, dataList: element });
    });

    setDays(temp);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <>
      <h1>{`${location.name}, ${location.country}`}</h1>

      <table>
        <thead>
          <tr>
            <th scope="col">date</th>

            {days.at(1).dataList.map((item, i) => (
              <th key={i}>{getformattedTime(item.dt)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((item, i) => (
            <tr key={i}>
              <td>{item.date}</td>
              {item.dataList.map((element, e) => {
                console.log(element);
                return typeof element !== "string" ? (
                  <td key={e * 111}>{element.main.temp.toFixed(2)}</td>
                ) : (
                  <td key={e * 111} />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
