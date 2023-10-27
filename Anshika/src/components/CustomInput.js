import React from 'react';
import "../assest/css/Custominput.css"

function CustomInput(props) {
  return (
    <>
      <div>
        <div className="col-auto" style={{ paddingBottom: "15px" }}>
          <div className="input-group">
            <div className="input-group-text">{props.reacticns}</div>
            <input type="text" className="form-control frm" id="autoSizingInputGroup" placeholder={props.title} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomInput;
