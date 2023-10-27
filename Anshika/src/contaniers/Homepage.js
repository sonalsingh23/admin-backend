import React from 'react'
import setdata from '../Setdata';
import Card from '../components/Card';
import "../assest/css/Homepage.css"

function Homepage() {
  return (
    <div className='homepage-padding'>
        <div className='padding-tops'>
        <div className='container-fluid'>
        <div className='row rows'>
     
         
              {setdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} titless={val.titles} para={val.para} />;
              })}
         
         
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default Homepage
