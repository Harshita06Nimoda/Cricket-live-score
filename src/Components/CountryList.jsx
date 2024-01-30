import React, {useState,useEffect} from 'react'
import axios from 'axios';
import "./Match.css";
export default function CountryList() {
    
    const[country,setCountry]=useState([]);
    
    useEffect(()=>{
        axios.get("https://api.cricapi.com/v1/countries?apikey=9022b717-1196-4517-b7b3-7013bf347765&offset=0").then((res)=>{
            console.log(res.data.data);
            setCountry(res.data.data);
        })
    },[])
  return (
    <>
        <table className="tables" id="tables-id">
            <thead className="heading">
                <th>Country</th>
                <th>Generic-Flag</th>
            </thead>
            {
                country.map((value,index,array)=>{
                    return(
                        <>
                        <tr>
                            <td>{value.name}</td>
                            <td><img src={value.genericFlag} alt=""></img></td>
                        </tr>
                        </>
                    );
                })
            }
        </table>
    </>
  );
}
