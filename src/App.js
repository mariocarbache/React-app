import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar";
import WeatherNY from "./NewYork";

function App(){
  return (
    <Router>
      <div>
        <Navbar />
        <WeatherNY />
      </div>
      <Routes>
        
      </Routes>
    </Router>
  );
}

export default App;