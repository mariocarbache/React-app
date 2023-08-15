import React, {useEffect, useState}from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './style.css';


function WeatherNY(){

    const [NYweather, setNYweather] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try{
                const response = await axios.get("http://api.openweathermap.org/data/2.5/forecast?lat=40.7143&lon=-74.006&appid=c06ce40078fb8ad660220485fcca1328");
                console.log(response.data);
                setNYweather(response.data);
                console.log(NYweather);
            }catch(error){
                console.error("Error fetching data", error);
            }
        };

        fetchWeather();

    }, []);

    return(
        <div>
            <h1>New York City</h1>
            <ul>
                {/* {NYweather.map((city) =>(
                    <li key={city.dt}>
                        <p>Current Weather: {city.weather[0].description}</p>
                    </li>
                ))} */}
            </ul>
        </div>
    );
}

export default WeatherNY;


