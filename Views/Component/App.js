import logo from './logo.svg';
import Header from './Head/Header';

import FaceImage from './Face/FaceImage';
import SubHeader from './Sub/SubHeader';
import EventComponent from './Event/EventComponent';
import SearchComponent from './Search/SearchComponent';
import BrowseComponent from './Browse/BrowseComponent';
import HeaderImage from './Header/HeaderImage';


function App() {
  return (
    <div >
     
      <Header />
      <FaceImage />
      <SubHeader />
      <EventComponent />
      <SearchComponent />
      <BrowseComponent />
      <HeaderImage />
    </div>
  );
}

export default App;
