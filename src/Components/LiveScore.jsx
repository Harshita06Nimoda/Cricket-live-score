import React ,{useState,useEffect} from 'react'
import axios from "axios";
import "./LiveScore.css";


export default function LiveScore() {
    const [score, setScore]= useState([]);

    useEffect(()=>{
        axios.get("https://api.cricapi.com/v1/currentMatches?apikey=9022b717-1196-4517-b7b3-7013bf347765&offset=0").then((res)=>{
            console.log(res.data.data);
            setScore(res.data.data);
        })
    },[])
  return (
   <>
    <div className="outer-div" >
            {score.map((value,index)=>{
                return(
                    <>
                        <div className="cric-score">
                            <table>
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.date}</td>
                                </tr>
                                <tr>
                                    <td>{value.dateTimeGMT}</td>
                                    <td class="match-type">{value.matchType}</td>
                                </tr>
                                    <td><img src={value.teamInfo[1].img} alt=""></img>{value.teams[1]}</td>
                                    <td>{value.score[1]?value.score[1].r:"--"}/{value.score[1]?value.score[1].w:"--"}({value.score[1]?value.score[1].o:"--"})</td>
    
                                <br/>
                                <tr>
                                    <td><img src={value.teamInfo[0].img} alt=""></img>{value.teams[0]}</td>
                                    <td>{value.score[0]?value.score[0].r:"--"}/{value.score[0]?value.score[0].w:"--"}({value.score[0]?value.score[0].o:"--"})</td>
                                </tr>
                                <tr>
                                    {value.status}
                                </tr>
                            </table>
                        </div>
                    </>
                );
            })}
        </div>
    </>
  );
}
