import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready :false});

    function handleREsponce(responce) {
        console.log(responce.data);
        setWeatherData({
            ready: true,
            city: responce.data.city,
            decscription: responce.data.condition.decscription,
            icon: responce.data.condition.icon_url,
            country: responce.data.country, 
            temperature: responce.data.temperature.current,
            humidity: responce.data.temperature.humidity,
            date: new Date(responce.data.time * 1000),
            wind: responce.data.wind.speed, 
        });
     }


    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search"
                                placeholder="Enter a city..."
                                className="form-control"
                                autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search"
                                className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>

                <h1>{weatherData.city}</h1>
                <ul>               
                    <li>{weatherData.country}</li>
                    <FormattedDate date = {weatherData.date} />                    
                </ul>
                <div className="row">
                    <div className="col-6">
                        <div className="clearfix">
                            <img src="{weatherData.icon}" alt="Mostly Ckoudy"
                                className="float-left" />
                            <div className="float-left"></div>
                            <span className="temperature"> {Math.round(weatherData.temperature)} </span>
                            <span className="unit"> C</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity}</li>
                        <li>Wind: {weatherData.wind}</li>
                    </ul>
                </div>
            </div>
        );
    } else {
        let apiKey = process.env.REACT_APP_API_KEY;
        let city = props.defailtCity;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(handleREsponce);


        return "Loading ...";
    }
}

