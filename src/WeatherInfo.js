import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {

    return (<div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
            <li>{props.data.country}</li>
            <FormattedDate date={props.data.date} />
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="clearfix"> 
                     <div className="float-left">
                    <WeatherIcon code={props.data.icon}  alt = {props.data.description}/>
                    <WeatherTemperature celsius={props.data.temperature}/>
                  </div>                 
                </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {props.data.humidity}</li>
                    <li>Wind: {props.data.wind}</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

