import React from "react";
import './style.css'

function Home(){
    return(
        <div>
            <h2>Weather App</h2>
            <div className="container">
                <img className="img" src={require("./Weather_logo.jpeg")} alt="Weather Logo" />
            </div>
            <p className="text">Welcome to the Weather App! Here, you can explore weather conditions for various predefined locations, as well as search for the weather in a specific location.</p>
        </div>
    )
}

export default Home;