import { useEffect, useState } from "react";
import "./App.css";
import { apiCall } from "./utils/api-call-util";
import { getGeolocation } from "./utils/geo-util";

function App() {
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    const appData = await apiCall(await getGeolocation());
    setLocation(appData.city);
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
    </>
  );
}

export default App;
