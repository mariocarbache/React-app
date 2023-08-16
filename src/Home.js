import React from "react";
import './style.css'

function Home(){
    return(
        <div>
            <h2>Weather App</h2>
            <div className="container">
                <img className="img" src={require("./Weather_logo.jpeg")} alt="Weather Logo" />
            </div>
            <p className="text">Welcome to the Weather App! Here, you can explore weather conditions, temperatures, humidity, wind speed for various predefined locations, as well as search for the weather in a specific location.</p>
            <div>
            <img className="logo" src={require("./temp.jpeg")} alt="temp" />
            <img className="logo" src={require("./feels_like.png")} alt="feelsliketemp" />
            <img className="logo" src={require("./Max_temp.jpeg")} alt="Maxtemp" />
            <img className="logo" src={require("./Min_temp.jpeg")} alt="Mintemp" />
            <img className="logo" src={require("./humidity.jpeg")} alt="humidity" />
            <img className="logo" src={require("./wind_speed.jpeg")} alt="wind_speed" /> 
            </div>
        </div>
    )
}

export default Home;