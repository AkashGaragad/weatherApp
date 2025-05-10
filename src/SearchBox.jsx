import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import React, { useState } from 'react';
import { red } from '@mui/material/colors';


export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0592fd355c79c99d932609fa6500ee5e";
    let getWeatherInfo = async () => {
        try {
            let respones = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await respones.json();
            console.log(jsonResponse);
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result)
            return result; 
            
        } catch (error) {
          throw error;
          
        }

    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit =async (evt) => {
        try {
            evt.preventDefault()
            console.log(city);
            setCity("");
            setError("")
          let newInfo= await getWeatherInfo();
          updateInfo(newInfo) 
        } catch (error) {
            setError(true)
        }
   
    }
    return (
        <div className='searchBox' >

        
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} id="outlined-basic" value={city} label="City name" required variant="outlined" /><br />
             
                <Button id="my-btn" type="submit" variant="outlined">Submit</Button>
                {error &&  <p style={{color:"red"}}>"No such place is found..!!"</p> } 
            </form>
       
        </div>

    );
}