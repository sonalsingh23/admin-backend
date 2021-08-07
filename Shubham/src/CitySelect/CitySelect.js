import React, { useState } from 'react';
    const CitySelect =({onChange})  =>
    {
    const [cityState,setCityState] = useState(""); 
  return (
    <div >

<select className="drop" value={cityState} onChange={(e)=>{
  setCityState(e.target.value);

}
}>
  <option value="delhi" className="drop">delhi</option>
  <option value="mumbai" className="drop">mumbai</option>
  <option value="jalandHar" className="drop">jalandhar</option>

</select>



    </div>
  );
    }
export default CitySelect;
