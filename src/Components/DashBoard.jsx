import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function DashBoard() {
    const[list,setList]= useState([]);
    const[players,setPlayers]= useState([]);
    const[series,setSeries]= useState([]);


    //matches list
    useEffect(()=>{
        axios.get("https://api.cricapi.com/v1/matches?apikey=9022b717-1196-4517-b7b3-7013bf347765&offset=0").then((res)=>{
            setList(res.data.data);
            console.log(res.data.data);
        })
    },[])

    //players list
     useEffect(()=>{
    axios.get("https://api.cricapi.com/v1/players?apikey=9022b717-1196-4517-b7b3-7013bf347765&offset=0").then((res)=>{
        setPlayers(res.data.data);
        console.log(res.data.data);
    })
},[]);

    //series list
    useEffect(()=>{
        axios.get("https://api.cricapi.com/v1/series?apikey=9022b717-1196-4517-b7b3-7013bf347765&offset=0").then((res)=>{
            setSeries(res.data.data);
            console.log(res.data.data);
        })
    },[]);

  return (
    <div id ="side-bar">
        {
        list.map((match,index)=>{
            return(
                <>
                <table>
                    <tr>
                        <td>{match.name}</td>
                        <td>{match.matchType}</td>
                        <td>{match.venue}</td>
                        <td>{match.date}</td>
                        <td>{match.dateTimeGMT}</td>
                        <td>{match.teams[0]}</td>
                        <td>{match.teams[1]}</td>
                    </tr>
                </table>
                </>
               );
        }) 
        }
    </div>
  )

 
}
