import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import { useState } from 'react';

export default function Layout() {
  const [text, settext] = useState(""); // State to hold the search text

  return (
    <div>
      <Navbar settext={settext} text={text} />
    
      <Outlet  context={text}/>
    </div>
  );
}
