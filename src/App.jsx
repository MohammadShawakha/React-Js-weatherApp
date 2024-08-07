import { useEffect, useState } from "react";
import "./App.css";
import { getGeolocation } from "./utils/geo-util";
const appid = "eec3ba575fb243ecd5b78d133bad8f5d";
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?";

function App() {
  const [data, setData] = useState("loding ...");
  useEffect(() => {
    getGeolocation().then((coords) => {
      fetch(`${baseUrl}lat=${coords.lat}&lon=${coords.lon}&appid=${appid}`)
        .then((res) => {
          return res.json();
        })
        .then((jsonData) => {
          setData(jsonData);
          console.log(jsonData);
        });
    });
  }, []);

  return <h2>loding ...</h2>;
}

export default App;
