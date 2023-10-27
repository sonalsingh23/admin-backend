import React from 'react';
import "../assest/css/Divs.css";
import Customdiv from '../components/Customdiv';

function Divs(props) {
  return (
    <div className='divs divvvv'style={{cursor:"pointer"}} >
      <div className='divsbg'>
      <div className='customdivs'>
      {props.divtitle}
    </div>
      
      </div>
    </div>
  );
}

export default Divs;
