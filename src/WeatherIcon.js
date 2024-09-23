import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
    const codeMapping = {
        "clear-sky-day": "sunny",
        "clear-sky-night": "clear-night",
        "few-clouds-day": "partlycloudy",
        "few-clouds-night": "partlycloudy",
        "scattered-clouds-day": "cloudy",
        "scattered-clouds-night": "cloudy",
        "broken-clouds-day": "partlycloudy",
        "broken-clouds-night": "partlycloudy",
        "shower-rain-day": "rainy",
        "shower-rain-night": "rainy",
        "rain-day": "hail",
        "rain-night": "hail",
        "thunderstorm-day" : "lightning-rainy",
        "thunderstorm-night" : "lightning-rainy",
        "snow-day": "snowy",
        "snow-night": "snowy",
        "mist-day": "fog",
        "mist-night": "fog"
        }

     return    <WeatherSvg state={codeMapping[props.code]} width={100} height={100} />
 
  
}