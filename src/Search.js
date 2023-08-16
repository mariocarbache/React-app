import React, {useEffect, useState}from "react";
import axios from "axios";
import './style.css';

const api = {
    key: "c06ce40078fb8ad660220485fcca1328",
    base: "http://api.openweathermap.org/data/2.5/"
}

function Search(){

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState([]);

    const searchPressed = async () => {
        try{
            const response = await axios.get(`${api.base}weather?q=${search}&units=imperial&appid=${api.key}`);
            console.log(response.data);
            setWeather(response.data);
        }catch(error){
            console.error("Error fetching data", error);
        }
    }

    return(
        <div className="div-center">
            <h2>Search by city:</h2>

            <div>
                <input type="text" placeholder="Enter city" onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={searchPressed}>Search</button>
            </div>
            {typeof weather.main != "undefined" ? (
            <div className="div">
                <h2>{weather.name}</h2>
                <p>{weather.weather[0].main}</p>
                <p>'{weather.weather[0].description}'</p>
                <p>Current Temperature: {weather.main.temp}°F</p>
                <p>Feels like: {weather.main.feels_like}°F</p>
                <p>Highest Today: {weather.main.temp_max}°F</p>
                <p>Lowest Today: {weather.main.temp_min}°F</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind Speed: {weather.wind.speed}mph</p>
            </div>
            ):(
                ""
            )}
        </div>
    )
}

export default Search;