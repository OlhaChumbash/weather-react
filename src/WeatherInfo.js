import React from "react";
import FormattedDate from "./FormattedDate";


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
                    <img src="{props.data.icon}" alt="Mostly Ckoudy"
                        className="float-left" />
                    <div className="float-left"></div>
                    <span className="temperature"> {Math.round(props.data.temperature)} </span>
                    <span className="unit"> C</span>
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

