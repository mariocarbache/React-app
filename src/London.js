import React, {useEffect, useState}from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './style.css';



function WeatherLondon(){

    const [LondonWeather, setLondonWeather] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try{
                const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&units=imperial&appid=c06ce40078fb8ad660220485fcca1328");
                console.log(response.data);
                setLondonWeather(response.data);
            }catch(error){
                console.error("Error fetching data", error);
            }
        };

        fetchWeather();
        

    }, []);

    return(

        <div className="div-center">
            <h2>London</h2>
            {typeof LondonWeather.main != "undefined" ? (
                <div className="div">
                <p>{LondonWeather.weather[0].main}</p>
                <p>'{LondonWeather.weather[0].description}'</p>
                <p>Current Temperature: {LondonWeather.main.temp}°F</p>
                <p>Feels like: {LondonWeather.main.feels_like}°F</p>
                <p>Highest Today: {LondonWeather.main.temp_max}°F</p>
                <p>Lowest Today: {LondonWeather.main.temp_min}°F</p>
                <p>Humidity: {LondonWeather.main.humidity}%</p>
                <p>Wind Speed: {LondonWeather.wind.speed}mph</p>
            </div>
            ):(
                ""
            )
            }
            
        </div>
    );
}


export default WeatherLondon;