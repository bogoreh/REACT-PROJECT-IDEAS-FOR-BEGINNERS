import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from "../Assets/Search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Asset/wind.png";
import humidity_icon from "../Assets/humidity.png";

const WeatherApp = () => {

    let api_key = "377e5a027b7a822224ab2202ecce3a46";

    const [wicon,setWicon] = useState(cloud_icon);

    const search = async () => {
          const element = document.getElementsByClassName("cityInput");
          if(element[0].value==="") 
          {
              return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q={elements[0].value}&units=Metrics&appid=${api_key}`;
        
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("temperature");
        const location = document.getElementsByClassName("location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp)+"c";
        location[0].innerHTML = data.name;

        if(data.Weather[0].icon==="01d" || data.weathe[0].icon=="01n")
        {
             setWicon(clear_icon);
        }
        else if(data.Weather[0].icon==="02d" || data.weathe[0].icon=="02n")
        {
            setWicon(cloud_icon); 
        }
        else if(data.Weather[0].icon==="03d" || data.weathe[0].icon=="03n")
        {
            setWicon(drizzle_icon); 
        }
        else if(data.Weather[0].icon==="04d" || data.weathe[0].icon=="04n")
        {
            setWicon(drizzle_icon); 
        }
        else if(data.Weather[0].icon==="09d" || data.weathe[0].icon=="09n")
        {
            setWicon(rain_icon); 
        }
        else if(data.Weather[0].icon==="10d" || data.weathe[0].icon=="10n")
        {
            setWicon(rain_icon); 
        }
        else if(data.Weather[0].icon==="13d" || data.weathe[0].icon=="13n")
        {
            setWicon(snow_icon); 
        }
        else 
        {
            setWicon(clear_icon);
        }
    }   

  return (
    <div className='container'>
          <div className="top-bar">
              <input type="text" className="cityInput" placeholder='Search' />
              <div className="search-icon" onClick={()=>{search()}}>
                   <img src={search_icon} alt="" />
              </div>
          </div>

          <div className="weather-image">
               <img src={cloud-icon} alt="" />
          </div>
          <div className="weather-temp">24</div>
          <div className="weather-location">london</div>
          <div className="data-container">
                 <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                           <div className="humidity-percent">64%</div>
                           <div className="text">Humidity</div>
                    </div>
                 </div>
                 <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                           <div className="wind-rate">18 km/h</div>
                           <div className="text">Wind Speed</div>
                    </div>
                 </div>
          </div>

    </div>
  )
}

export default WeatherApp