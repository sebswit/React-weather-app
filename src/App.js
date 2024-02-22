import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Kettering&appid=24d6ec7f2c3b68a738a5632381fb6339`
  return (
   
    <div className="app">
     <div className="container"></div>
      <div className="top">
          <div className="location">
          <h1>Kettering</h1>
          </div>
          <div className="temp">
          <p>9°C</p>
          </div>
          <div className="description">
          <p>Cloudy</p>
          </div>            
      </div>
    <div className="bottom">
    <div className="feels">
          <p>5°C</p>
          </div> 
          <div className="humidity">
          <p>20%</p>
          </div> 
          <div className="wind">
          <p>5 MPH</p>
          </div> 
      
    </div>  

    </div>
  );
}

export default App;
