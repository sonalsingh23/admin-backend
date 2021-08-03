
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TempDisplay  =(props) =>{
  const [filedatas, setFileDatas] = useState({});
  useEffect(() => {
    const GetData = async () => {
        const result = await axios(
             'http://api.weatherapi.com/v1/current.json?key=d35adc0e36cd4b09b1591010211007&q=Delhi',   
        );
        console.log(result.data);
        setFileDatas(result.data)  
    };
    GetData();  
}, []);
  return (
    <div className="display"> 
   {filedatas && filedatas.name} 
    </div>
  );
    }
    export default TempDisplay;

