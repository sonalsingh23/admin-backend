import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Loginform from './contaniers/Loginform';
import Signupfrm from './contaniers/Signupfrm';
import Forgetpaswd from './contaniers/Forgetpaswd';
import Body from "./components/Body";
import Homepage from "./contaniers/Homepage";

import Divs from "./contaniers/Divs";
import Dartodivider from "./contaniers/Dartodivider";
import Playjoin from "./contaniers/Playjoin";
import Homeicons from "./contaniers/Homeicons";
import Profilemenu from "./contaniers/Profilemenu";
import Navbar1 from "./contaniers/Navbar1";
import Navbar2 from "./contaniers/Navbar2";
import Footer from "./contaniers/Footer";
import Fixedcomp from "./contaniers/Fixedcomp";

function App() {
  return (
<>
<BrowserRouter>

      <Routes>
        <Route path="/fixedcomp" element={<Fixedcomp/>}/>
        <Route path="/foot" element={<Footer/>}/>
        <Route path="/nav2" element={<Navbar2/>}/>
        <Route path="/nav1" element={<Navbar1/>}/>
        <Route path="/profile" element={<Profilemenu/>}/>
        <Route path="/homeicons" element={<Homeicons/>}/>
        <Route path="/paly" element={<Playjoin/>}></Route>
        <Route path="/dartodiv" element={<Dartodivider/>}></Route>
        <Route path="/divs" element={<Divs/>}/>
    <Route path="/mainhome" element={<Homepage/>}/>
     <Route path="/" element={<Body/>}/>
          <Route path="/login" element={<Loginform />} />
          <Route path="/userforgotpassword" element={< Forgetpaswd/>} />
          <Route path="/userregister" element={< Signupfrm/>} />
  
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
