import React, {useState} from "react";
import './App.css';
import Content from "./components/Content/Content";
import Result from "./components/Result/Result";

const API_KEY = "a98dd2244c22ad952b9ac99e3683d5e8"
const App = () => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [err, setErr] = useState("");

  const actualWeather = {
    date,
    city,
    sunrise,
    sunset,
    temp,
  }

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }
  const handleCitySubmit = (e) => {
    e.preventDefault()
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Error!")
      })
      .then(response => response.json())
      .then(data => {
        setDate(new Date().toLocaleString());
        setSunset(data.sys.sunset);
        setSunrise(data.sys.sunrise);
        setTemp(data.main.temp)
        setErr(false);
        setCity(value);
      })
      .catch(err => {
        setErr(true);
        setCity(value);
      })

  }

  return (
    <div className="App">
      <h1>Weather app</h1>
      <Content value={value}
               change={handleInputChange}
               submit={handleCitySubmit}
      />
      <Result error={err}
              weather={actualWeather}
      />
    </div>
  );
}

export default App;
