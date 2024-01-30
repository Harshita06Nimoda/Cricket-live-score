import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./Match.css"

export default function PointTable() {
    const[point,setPoints]=useState([]);

    useEffect(()=>{
      axios.get("https://api.cricapi.com/v1/series_points?apikey=9022b717-1196-4517-b7b3-7013bf347765&id=e7643096-ea15-4cbe-a0d4-17236af09f31").then((res)=>{
        setPoints(res.data.data);
        console.log(res.data.data);
      })
    },[])

  return (
    <>
    <table className="tables" id="tables-id">
      <thead className='heading'>
        <th>Team-Name</th>
        <th>Representation</th>
        <th>Total-Matches</th>
        <th>Wins</th>
        <th>Loss</th>
        <th>Ties</th>
      </thead>
      {
        point.map((value,index,array)=>{
          return(
            <>
            <tr>
              <td>{value.teamname}</td>
              <td>{value.shortname}</td>
              {/* <td><img src={value.img} alt="'"/></td> */}
              <td>{value.matches}</td>
              <td>{value.wins}</td>
              <td>{value.loss}</td>
              <td>{value.ties}</td>
              
            </tr>
            </>
          );
        })
      }
    </table>
    </>
  );
}
