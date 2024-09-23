import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./WeatherForecast.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defailtCity);

    function handleResponce(responce) {
        setWeatherData({
            ready: true,
            city: responce.data.city,
            description: responce.data.condition.description,
            icon: responce.data.condition.icon,
            country: responce.data.country,
            temperature: responce.data.temperature.current,
            humidity: responce.data.temperature.humidity,
            date: new Date(responce.data.time * 1000),
            wind: responce.data.wind.speed,
        });
    }

    function search() {
        let apiKey = process.env.REACT_APP_API_KEY;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponce);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search"
                                placeholder="Enter a city..."
                                className="form-control"
                                autoFocus="on" onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search"
                                className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast city={weatherData.city} />
            </div>
        );
    } else {
        search();

        return <div className="row">
            <div className="col d-flex justify-content-center ">
                <ThreeDots color="#0d6efd" />
            </div>
        </div>
    }
}

