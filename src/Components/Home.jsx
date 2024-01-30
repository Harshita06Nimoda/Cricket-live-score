import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
export default function Home(){
  return (

    <>
    <div class="flex">
    <nav className='nav-bar'>
      <ul>
        {/* <span className='nav-bar'>Cricket-Live-Score</span> */}
        <Link to="/home"><li>Home</li></Link>
        <Link to="/homePage"></Link>
        <Link to="/liveScore"><li>Live-Score</li></Link>
        <Link to="/currentMatches"><li>Current-Matches</li></Link>
        <Link to="/pointTable"><li>Point-Table</li></Link>
        <Link to="/countryList"><li>Country-List</li></Link>
      </ul>
    </nav>
    <div>
    <Link to="/sideBar" ></Link>
    </div>
    </div>
    <outlet/>
    </>
  )
}
