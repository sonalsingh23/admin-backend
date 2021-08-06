import React, { useState } from 'react';
import './App.css';
    const CitySelect =({onChange})  =>
    {
    const [cityState,setCityState] = useState(""); 
  return (
    <div >

<select className="drop" onChange={(e)=>{
  const selectedCity = e.target.value;
  setCityState(selectedCity);
 dispatch(loadcity);
}
}>
  <option value="delhi" className="drop">delhi</option>

</select>

{cityState}

    </div>
  );
    }
export default CitySelect;
