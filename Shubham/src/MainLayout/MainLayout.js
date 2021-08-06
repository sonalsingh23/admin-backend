import React, { useState,useEffect } from 'react';
import CitySelect from '../CitySelect/CitySelect';
import TempDisplay from '../TempDisplay/TempDisplay';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import { loadposts } from "../store/posts";
//import { useEffect } from "react";

const MainLayout = () => {
    const dispatch = useDispatch();
    const city = useSelector((state) => state.city);

    useEffect(() => {
        dispatch(loadposts());
    }, [city]);
import axios from 'axios';
const MainLayout = () =>{
  const myState = useSelector((state) => state.res)
    const [wheather, setWheather ]= useState({});
    const [filedatas, setFileDatas] = useState({});
    useEffect(() => {
      onCityChange()
  }, []);
    const onCityChange = async (city) => {
      console.log(city)
      const result = await axios(
        'http://api.weatherapi.com/v1/current.json?key=d35adc0e36cd4b09b1591010211007&q=Delhi',   
   );
   console.log(result.data);
   setFileDatas(result.data)  
}; 
   /* call api to get data*/ 
   /* save data */
  
 
  return (
 <center>   <div className="App">

<div className="App2">

<div className="Header">
<h3>Check Wheather of your city</h3>
</div>

<CitySelect onChange={onCityChange}/> 

<div>

<button type="submit" className="btn" onClick={onCityChange}>Search</button>
</div>
 <TempDisplay wheather={wheather}/>

</div>


    </div>
    </center>
  );
  }
export default MainLayout;

