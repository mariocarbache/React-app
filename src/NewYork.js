import React, {useEffect, useState}from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './style.css';



function WeatherNY(){

    const [NYweather, setNYweather] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try{
                const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?lat=40.7143&lon=-74.006&units=imperial&appid=c06ce40078fb8ad660220485fcca1328");
                console.log(response.data);
                setNYweather(response.data);
            }catch(error){
                console.error("Error fetching data", error);
            }
        };

        fetchWeather();
        

    }, []);

    return(

        <div className="div-center">
            <h2>New York City</h2>
            {typeof NYweather.main != "undefined" ? (
                <div className="div">
                <p>{NYweather.weather[0].main}</p>
                <p>'{NYweather.weather[0].description}'</p>
                <p><img className="logo" src={require("./temp.jpeg")} alt="temp" /> Current Temperature: {NYweather.main.temp}°F</p>
                <p><img className="logo" src={require("./feels_like.png")} alt="feelsliketemp" /> Feels like: {NYweather.main.feels_like}°F</p>
                <p><img className="logo" src={require("./Max_temp.jpeg")} alt="Maxtemp" /> Highest Today: {NYweather.main.temp_max}°F</p>
                <p><img className="logo" src={require("./Min_temp.jpeg")} alt="Mintemp" /> Lowest Today: {NYweather.main.temp_min}°F</p>
                <p><img className="logo" src={require("./humidity.jpeg")} alt="humidity" /> Humidity: {NYweather.main.humidity}%</p>
                <p><img className="logo" src={require("./wind_speed.jpeg")} alt="wind_speed" /> Wind Speed: {NYweather.wind.speed}mph</p>
            </div>
            ):(
                ""
            )
            }
            
        </div>
    );
}


export default WeatherNY;


