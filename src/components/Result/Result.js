import React from "react";

const Result = ({error, weather}) => {
  let startValue = null;

  const inception = x => new Date(x * 1000).toLocaleTimeString();

  if(!error && weather.city){
    startValue = (
      <>
        <p>Weather results for city: <strong>{weather.city}</strong></p>
        <ul>
          <li>Date: {weather.date}</li>
          <li>Actual temp: {Math.ceil(weather.temp -273.72)} °C</li>
          <li>Today's sunrise at: {inception(weather.sunrise)}</li>
          <li>Today's sunset at: {inception(weather.sunset)}</li>
        </ul>
      </>
    )
  }
  return (
    <div>
      {error ? `Wrong name or city: ${weather.city}, doesn't exist` : startValue}
    </div>
  )
}

export default Result;