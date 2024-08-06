import { useEffect, useState } from "react";
import "./App.css";
import { getGeolocation } from "./utils/geo-util";

function App() {
  const [pos, setPos] = useState("loding ...");
  useEffect(() => {
    getGeolocation()
      .then((x) => setPos(`lat:${x.lat}   lon:${x.lon}`))
      .catch((x) => setPos(`lat:${x.lat}   lon:${x.lon}`));
  }, []);

  return (
    <>
      <h2>{pos}</h2>
    </>
  );
}

export default App;
