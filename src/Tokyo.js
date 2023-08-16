import React, {useEffect, useState}from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './style.css';



function WeatherTokyo(){

    const [TokyoWeather, setTokyoWeather] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try{
                const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?lat=35.6895&lon=139.6917&units=imperial&appid=c06ce40078fb8ad660220485fcca1328");
                console.log(response.data);
                setTokyoWeather(response.data);
            }catch(error){
                console.error("Error fetching data", error);
            }
        };

        fetchWeather();
        

    }, []);

    return(

        <div className="div-center">
            <h2>Tokyo</h2>
            {typeof TokyoWeather.main != "undefined" ? (
            <div className="div">
                <p>{TokyoWeather.weather[0].main}</p>
                <p>'{TokyoWeather.weather[0].description}'</p>
                <p><img className="logo" src={require("./temp.jpeg")} alt="temp" /> Current Temperature: {TokyoWeather.main.temp}°F</p>
                <p><img className="logo" src={require("./feels_like.png")} alt="feelsliketemp" /> Feels like: {TokyoWeather.main.feels_like}°F</p>
                <p> <img className="logo" src={require("./Max_temp.jpeg")} alt="Maxtemp" /> Highest Today: {TokyoWeather.main.temp_max}°F</p>
                <p><img className="logo" src={require("./Min_temp.jpeg")} alt="Mintemp" /> Lowest Today: {TokyoWeather.main.temp_min}°F</p>
                <p><img className="logo" src={require("./humidity.jpeg")} alt="humidity" /> Humidity: {TokyoWeather.main.humidity}%</p>
                <p><img className="logo" src={require("./wind_speed.jpeg")} alt="wind_speed" /> Wind Speed: {TokyoWeather.wind.speed}mph</p>
            </div>
            ):(
                ""
            )
            }
            
        </div>
    );
}


export default WeatherTokyo;