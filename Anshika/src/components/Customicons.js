import React from 'react';

function Customicons(props) {
  return (
    <div className='col-md-3 col-lg-3 mx-auto padding'>
      <div className="card cardbody" style={{padding:"30px",border:"none"}}>
        <img src={props.imgg} className="card-img-top img-fluid" alt="..." />
      </div>
    </div>
  );
}

export default Customicons;
