import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
      }
    
      function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
      }
    
      function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
      }
    

    return (
        <div className="WeatherForecastDay">
            <div className="WeatherForecast-day">{day()}</div>
                   <WeatherIcon code={props.data.condition.icon} alt={props.data.condition.icon} size={50} />
            <div className="WeatherForecast-temp">
                <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
                <span className="WeatherForecast-temp-min">{minTemperature()}</span>
            </div>
        </div>
    )

}

