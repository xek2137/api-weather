import React from "react";

const Result = ({error, weather}) => {
  let startValue = null;

  const inception = x => new Date(x * 1000).toLocaleTimeString();

  if(!error && weather.city){
    startValue = (
      <div className="Result">
        <p>Weather results for city: <strong>{weather.city}</strong></p>
        <p>Date: <strong>{weather.date}</strong></p>
        <p>Actual temp: <strong>{Math.ceil(weather.temp -273.72)} °C</strong></p>
        <p>Today's sunrise at: <strong>{inception(weather.sunrise)}</strong></p>
        <p>Today's sunset at: <strong>{inception(weather.sunset)}</strong></p>
      </div>
    )
  }
  return (
    <div>
      {error ? `Wrong name or city: ${weather.city}, doesn't exist` : startValue}
    </div>
  )
}

export default Result;