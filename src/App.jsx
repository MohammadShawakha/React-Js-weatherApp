import { useEffect, useState } from "react";
import "./App.css";
import { getGeolocation } from "./utils/geo-util";
const appid = "eec3ba575fb243ecd5b78d133bad8f5d";
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?";

function App() {
  const [data, setData] = useState({ city: "Loding" });
  useEffect(() => {
    getGeolocation().then((coords) => {
      fetch(
        `${baseUrl}lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${appid}`
      )
        .then((res) => {
          return res.json();
        })
        .then((jsonData) => {
          setData(jsonData);
          console.log(jsonData);
        });
    });
  }, []);

  return <h2>{"data.city"}</h2>;
}

export default App;
