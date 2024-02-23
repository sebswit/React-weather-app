import React, {useState} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWind, faWater } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [data,setData] = useState({});
  const [location, setLocation] = useState ('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=24d6ec7f2c3b68a738a5632381fb6339`

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  }
  return (
   
    <div className="app">
      <div className='search'>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder='Enter location'
        type='text'/>
      </div>
     <div className="container">
        <div className="top">
            <div className="location">
            <h2>{data.name}</h2>
            </div>
            <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
               {data.weather ? <h2>{data.weather[0].main}</h2> : null}             
            </div>            
        </div>
        {data.name !== undefined &&
        <div className="bottom">             
            <div className="humidity">
            <p className='bold'>{data.main.humidity}%</p>
            <FontAwesomeIcon icon={faWater}/>
            </div> 
            <div className="wind">
            <p className='bold'>{data.wind.speed.toFixed()} MPH</p>
            <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>
            </div>  
        </div>  
}   
       </div>  
     </div>
    
   
  );
}

export default App;
