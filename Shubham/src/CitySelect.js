import React, { useState } from 'react';
    const CitySelect =({onChange})  =>
    {
    const [cityState,setCityState] = useState(""); 
  return (
    <div >

<select className="drop" onChange={(e)=>{
  const selectedCity = e.target.value;
  setCityState(selectedCity);
 onChange(selectedCity);
}
}>
  <option value="delhi" className="drop">delhi</option>

</select>

{cityState}

    </div>
  );
    }
export default CitySelect;
