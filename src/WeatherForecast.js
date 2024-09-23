import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
      }, [props.city]);
    


    function handleResponce(responce) {         
           setForecast(responce.data.daily);         
           setLoaded(true);
     }
    
     function load(){
        let city =props.city;
        let apiKey = process.env.REACT_APP_API_KEY;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponce);       
     }

     if (loaded) {
        return (
          <div className="WeatherForecast">
            <div className="row">
              {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  );
                }else{
                    return null;
                }
              })}
            </div>
          </div>
        );
       
    } else {
     load();
     return null;
   
}
}
