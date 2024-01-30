import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";
import "./Match.css";


export default function Match() {
    const[match, setMatch]=useState([]);

    useEffect(()=>{
        axios.get("https://api.cricapi.com/v1/cricScore?apikey=9022b717-1196-4517-b7b3-7013bf347765").then((res)=>{
            setMatch(res.data.data);
            console.log(res.data.data);
            })
    },[])
  return (
    <>
      <table className="tables">
      {/* <thead> */}
                                <tr class="heading">
                                    <th>TEAM-A</th>
                                    <th>COUNTRY</th>
                                    <th>TEAM-B</th>
                                    <th>COUNTRY</th>
                                    <th>Match-Type</th>
                                    <th>Date-Time</th>
                                    <th>Match-Status</th>
                                    <th>MS</th>
                                </tr>
                  {/* </thead> */}
        {
            match.map((value,index)=>{
              
                return(
                <>
                  <tbody>
                    <tr>
                        <td><img src={value.t1img} alt=""/></td>
                        <td>{value.t1}</td>
                        <td><img src={value.t2img} alt=""></img></td>
                        <td>{value.t2}</td>
                        <td>{value.matchType}</td>
                        <td>{value.dateTimeGMT}</td>
                        <td>{value.status}</td>
                        <td>{value.ms}</td>
                    </tr>
                  </tbody>
                </>
                );
            })
        }
      </table>
    </>
  )
}
