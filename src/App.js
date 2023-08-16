import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar";
import WeatherNY from "./NewYork";
import WeatherLondon from "./London";
import Home from "./Home";
import WeatherTokyo from "./Tokyo";
import Search from "./Search";

function App(){
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/NYC" element={<WeatherNY />} />
        <Route path="/London" element={<WeatherLondon />} />
        <Route path="/Tokyo" element={<WeatherTokyo />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
      <div>
      </div>
    </Router>
  );
}

export default App;