import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveWeatherData } from '../../store/weatherSlice';

// const weatherData = {"location":{"name":"Delhi","region":"Delhi","country":"India","lat":28.67,"lon":77.22,"tz_id":"Asia/Kolkata","localtime_epoch":1628353229,"localtime":"2021-08-07 21:50"},"current":{"last_updated_epoch":1628352900,"last_updated":"2021-08-07 21:45","temp_c":28.0,"temp_f":82.4,"is_day":0,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/night/143.png","code":1030},"wind_mph":0.0,"wind_kph":0.0,"wind_degree":0,"wind_dir":"N","pressure_mb":1004.0,"pressure_in":29.65,"precip_mm":0.0,"precip_in":0.0,"humidity":89,"cloud":75,"feelslike_c":28.6,"feelslike_f":83.4,"vis_km":3.5,"vis_miles":2.0,"uv":9.0,"gust_mph":1.8,"gust_kph":2.9}};
const TempDisplay  =(props) =>{
  
  const { weatherData } = useSelector((state) => state.weather);
 
  return (
    <div className="display"> 
    <spam className="dte">City:</spam>
    <spam className="sp">{wheatherData.location.name}</spam><br />
    <spam className="tme">Time:</spam>  
    <spam className="tm">{wheatherData.location.localtime}</spam><br />
    <spam className="tpr">Temperature: </spam>
    <spam className="tp">{wheatherData.location.lat} </spam> <br />
      </div>
  );
    }
    export default TempDisplay;

