import React from "react";
import './current-weather.css';

const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                <p className='city'>Belgrade</p>
                <p className='weather-decription'>Sunny</p>
                </div>
                <img alt='weather' className='weather-icon' src='icons/01d.png'/>
            </div>
        </div>
    );
}

export default CurrentWeather;