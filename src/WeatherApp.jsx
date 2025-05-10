import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setweatherInfo]=useState({
        city:"Bengalur",
        feels_like: 31.28,
        humidity: 51,
        temp: 30.05,
        tempMax: 30.05,
        tempMin: 30.05,
        weather: "haze"
    })
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>weather App by ME</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            </div>
    )
}