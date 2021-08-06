import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
const TempDisplay  =(props) =>{
  const [filedata, setFileData] = useState({});
  useEffect(() => {
   
}, []);
  return (
    <div className="display"> 
   {filedata && filedata.name} 
    </div>
  );
    }
    export default TempDisplay;

