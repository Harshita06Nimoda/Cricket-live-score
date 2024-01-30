import logo from './logo.svg';
import LiveScore from './Components/LiveScore';
import Match from "./Components/Match"
import './App.css';
import Home from './Components/Home'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PointTable from './Components/PointTable'
import CountryList from './Components/CountryList';
import DashBoard from './Components/DashBoard';
import HomePage from './Components/HomePage';
import DefaultSidebar from './Components/RoutingOutlet';

function App() {
  return (
  <>
    <Home/>
    <Routes>
      {/* <Route path="/dashBoard" element={<DashBoard/>}/> */}
      <Route path="/">
      <Route path='/homePage' element={<HomePage/>}/>
      <Route path="/liveScore" element={<LiveScore/>}/>
      <Route path="/pointTable" element={<PointTable/>}/>
      <Route path="currentMatches" element={<Match/>}/>
      <Route path="/home" element={<DashBoard/>}/>
      <Route path="/countryList" element={<CountryList/>}/>  
      <Route path="/sideBar" element={<DefaultSidebar/>}></Route> 
      </Route>
     
      
    </Routes>

   {/* <DashBoard/> */}
    </>
  );
}

export default App;
