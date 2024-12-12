import React,{useState} from 'react'
import { FcLike } from "react-icons/fc";

const AddtocartIcon = () => {
    const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=0) {
    decrementCounter = () => setCounter(1);
  }
  
      
  return (
    <div>
    <button style={{position:"relative",border:"1px solid transparent"}} onClick={incrementCounter}>
    <FcLike size={30} style={{ color: "#252b33" }} />
    </button>
    <div style={{position:"absolute",left: "3%",
    top: "-1%",
    fontweight: "bold",
    fontsize: "20px"}}>
        1
    </div>
    </div>
  )
}

export default AddtocartIcon