import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar";

function App(){
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>

      </Routes>
    </Router>
  );
}

export default App;